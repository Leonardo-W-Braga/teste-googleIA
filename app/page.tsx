'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import TaskBoard from '@/components/TaskBoard'
import StudyTimer from '@/components/StudyTimer'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tasks' | 'timer'>('dashboard')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  
  // Mock user for Guest Mode
  const user = {
    uid: 'guest-user-123',
    displayName: 'Marcus V.',
    photoURL: null,
    email: 'guest@neurocore.io'
  } as any

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    if (newTheme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }

  const handleLogout = () => {
    console.log("Guest Mode: Logout disabled")
  }

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050508] text-white' : 'bg-[#f8fafc] text-[#0f172a]'} font-sans selection:bg-cyan-500 selection:text-white`}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
        user={user} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-1 overflow-y-auto p-8 md:ml-[240px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {activeTab === 'dashboard' && <Dashboard user={user} theme={theme} />}
            {activeTab === 'tasks' && <TaskBoard user={user} theme={theme} />}
            {activeTab === 'timer' && <StudyTimer user={user} theme={theme} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
