<h2>I have large files in this Repo So you would be needing Git LFS to clone and fork</h2>
*On Mac OS: - brew install git-lfs 
            - git lfs install

# Clonning and Forking my repo:
 *<h3>If you want to clone</h3>
  - git clone https://github.com/username/repo-name.git
  - cd repo-name
  - git lfs pull
This will:
Clone the repo and download all regular files
Use git lfs pull to download all large files tracked by Git LFS

# If You Want to Fork and Then Clone
- Go to the repo on GitHub
- Click “Fork”
- After it’s forked to your account, copy the URL of your fork (e.g., https://github.com/yourusername/repo-name.git)
- Run in your terminal: - git clone https://github.com/yourusername/repo-name.git
                        - cd repo-name
                        - git lfs pull


## About the Project:

# 🌐 Project Overview
The application is fully responsive across Mobile, Tablet, and Desktop.
The app is modular and scalable — not a single piece of code is repeated.
Extra features were implemented beyond the original requirements (apologies if any were unnecessary).
Used Context API instead of Redux, as the app is small and doesn't require a complex state management library.

# 🔧 Components & Functionality
1. Navigation Bar – NavBar.tsx
- Displays the company logo and navigation links.
- Routing is set up for all links; currently, only the FAQ page has working content, while others are placeholders.

2. Hero Section – HeroSection.tsx
- Displays the company's objective prominently.
- Includes a "Join Now" button that is currently non-functional but can be linked to a form or page later.

3. Featured Section – FeaturedSection.tsx
- Highlights the recognition and credibility of AMRUTAM.
- Designed to match the provided Figma design.

4. Why Doctors Choose Us – DoctorPromotion.tsx
- Explains why AMRUTAM is preferred by doctors.
- Pixel-perfect as per the Figma design.
- Used images in place of unavailable icons.

5. Join Our Circle – JoinCircle.tsx
- Displays a visual step-by-step process to join the platform.
- Contains three buttons: Consultant, Payment Withdrawn, and Schedule.
- Clicking each button dynamically changes the steps shown above using Context API.
- Context was used intentionally because buttons and steps are split across components. If in the same component, useState() would have sufficed.
- Purely a visual implementation — no backend logic.

6. Consultant Section – ConsultantSection.tsx
- Displays 3 phone mockups showcasing the consultant view.
- Includes a "Join Now" button, which currently has no assigned functionality.

7. Testimonials – Testimonial.tsx
- Displays user feedback as per the provided design.

8. FAQ Section – FAQ.tsx
- Expandable/collapsible FAQs with a smooth toggle:
- Clicking the plus icon opens the FAQ.
- The icon turns into a minus.
- Only one FAQ opens at a time for better UX.
- Includes a "See More" button that navigates to the full FAQ page.

9. Download App Section – AppPromo.tsx
- Showcases the mobile app download promotion.
- Designed accurately as per the Figma file.

10. Contact Form – ContactForm.tsx
- Contains a contact form with working input fields.
- Email sending functionality is disabled for privacy reasons.
- UI is identical to the design.

11. Footer – Footer.tsx
- Contains informational links and social media icons.
- Icons are clickable and can be linked to real URLs later.

📄 FAQ Page – Src/components/FAQPage
1. Header – Header.tsx
- Displays the logo, navigation links, and icons like Calendar, Cart, and Notifications.
- In mobile view:
  - Icons are hidden behind a toggle.
  - Clicking the toggle opens a fixed icon panel at the bottom.
  - An "Up Arrow" icon is added to scroll back to the top.

Note: The fixed icon panel allows users to scroll while keeping the icons accessible — an intentional UX idea.

2. Search Bar – SearchBar.tsx
- UI matches the Figma design exactly.
- Search functionality is not implemented but can be added.

Optional: Debouncing for performance optimization.

3. Dynamic FAQ Buttons
- Five category buttons load different FAQ sets.
- Used useState() to manage the selected category (since the buttons and FAQ content are in the same component).
- FAQ data is stored in a scalable format — adding new items is simple.
