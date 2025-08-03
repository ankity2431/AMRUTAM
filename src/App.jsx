import React from 'react'
import Layout from './Layout'
import './App.css'
import { SelectedIndexProvider } from './assets/utils/SelectedIndexContext';

function App() {
  return (
    <SelectedIndexProvider>
    <div className="font-bold"><Layout /></div></SelectedIndexProvider>
  )
}

export default App
