'use client'

import React, { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, Zap, Brain } from 'lucide-react'

const StudyTimer = ({ user }: any) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: any
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center space-y-12 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">Deep Focus Protocol</h1>
        <p className="text-slate-400 text-sm mt-1">Guest Mode active. Local sync only.</p>
      </div>

      <div className="relative w-80 h-80 flex flex-col items-center justify-center border-4 border-slate-800 rounded-full bg-[#0F0F1E] shadow-[0_0_50px_rgba(34,211,238,0.1)]">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-purple-400">STUDY PHASE</span>
        <span className="text-7xl font-black tracking-tighter tabular-nums mb-8">{formatTime(timeLeft)}</span>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsActive(!isActive)}
            className="w-16 h-16 rounded-3xl btn-gradient text-white flex items-center justify-center shadow-xl"
          >
            {isActive ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current ml-1" />}
          </button>
          <button 
            onClick={() => setTimeLeft(25 * 60)}
            className="w-16 h-16 rounded-3xl bg-slate-800 text-slate-500 hover:text-white transition-all flex items-center justify-center"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-2xl">
        {[
          { label: 'Sync Count', value: '4', icon: Brain, color: 'text-purple-400' },
          { label: 'Time Stream', value: '100m', icon: Zap, color: 'text-cyan-400' },
        ].map((item, i) => (
          <div key={i} className="bg-[#0F0F1E] border border-slate-800 p-6 rounded-3xl text-center">
            <item.icon className={`w-5 h-5 mx-auto mb-4 ${item.color}`} />
            <p className="text-2xl font-black tracking-tighter">{item.value}</p>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudyTimer
