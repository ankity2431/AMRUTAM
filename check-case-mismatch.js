// check-case-mismatch.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File extensions to check
const exts = [".js", ".jsx", ".ts", ".tsx"];

function getAllFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (exts.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function checkCaseMismatch(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /(?:import|require)\s*(?:\(?['"](.+?\.(?:png|jpg|jpeg|svg))['"]\)?)/g;

  let match;
  while ((match = regex.exec(content))) {
    const importPath = match[1];
    if (importPath.startsWith(".")) {
      const absolutePath = path.resolve(path.dirname(filePath), importPath);
      const parts = importPath.split("/");
      let currentPath = path.resolve(path.dirname(filePath));

      for (const part of parts) {
        const actualEntries = fs.readdirSync(currentPath);
        const matchEntry = actualEntries.find(e => e.toLowerCase() === part.toLowerCase());

        if (!matchEntry) {
          console.error(`❌ Path not found: ${importPath}`);
          process.exit(1);
        }

        if (matchEntry !== part) {
          console.error(`❌ Case mismatch in ${filePath}`);
          console.error(`   → Import: ${part}`);
          console.error(`   → Actual: ${matchEntry}`);
          process.exit(1);
        }

        currentPath = path.join(currentPath, matchEntry);
      }
    }
  }
}

const srcDir = path.resolve(__dirname, "src");
const allFiles = getAllFiles(srcDir);

for (const file of allFiles) {
  checkCaseMismatch(file);
}

console.log("✅ No case mismatches found in import paths.");
