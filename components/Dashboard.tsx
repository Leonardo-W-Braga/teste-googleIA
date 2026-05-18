'use client'

import React, { useState } from 'react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { TrendingUp, Brain, Trophy, Bell } from 'lucide-react'

const Dashboard = ({ user }: any) => {
  const [sessionData] = useState([
    { name: 'MON', hours: 4.2 },
    { name: 'TUE', hours: 3.5 },
    { name: 'WED', hours: 5.8 },
    { name: 'THU', hours: 7.2 },
    { name: 'FRI', hours: 4.1 },
    { name: 'SAT', hours: 5.3 },
    { name: 'SUN', hours: 2.1 },
  ])

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Evening, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{user.displayName}</span>.
          </h1>
          <p className="text-slate-400 text-sm">Protocolo de convivência ativo em modo convidado.</p>
        </div>
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-2xl border border-slate-800 flex items-center justify-center bg-[#0F0F1E] text-orange-400 cursor-pointer">
            <Bell className="w-5 h-5" />
          </div>
          <div className="h-12 px-4 rounded-2xl border border-slate-800 flex items-center gap-3 bg-[#0F0F1E]">
            <div className="text-right">
              <div className="text-xs font-bold text-white">Guest ADEPT</div>
              <div className="text-[10px] text-cyan-400 font-mono uppercase">LVL 01</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Focus Hours', value: '142.5h', icon: TrendingUp, color: 'text-cyan-400' },
          { label: 'Streak', value: '14 Days', icon: Trophy, color: 'text-orange-400' },
          { label: 'Efficiency', value: '94%', icon: Brain, color: 'text-purple-400' },
          { label: 'Readiness', value: 'Optimal', icon: Bell, color: 'text-cyan-400' },
        ].map((item, i) => (
          <div key={i} className="bg-[#0F0F1E] border border-slate-800 p-5 rounded-3xl shadow-xl hover:border-slate-700 transition-all">
            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">{item.label}</div>
            <div className="text-3xl font-black text-white mb-2 tracking-tighter">{item.value}</div>
          </div>
        ))}
      </section>

      <div className="bg-[#0F0F1E] border border-slate-800 rounded-3xl p-8 flex flex-col min-h-[400px]">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-10">
          <TrendingUp className="w-5 h-5 text-cyan-400" /> Performance Analytics
        </h2>
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="hours" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="rgba(34,211,238,0.1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
