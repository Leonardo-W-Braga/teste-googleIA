'use client'

import React, { useState } from 'react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { TrendingUp, Brain, Trophy, Bell } from 'lucide-react'

const Dashboard = ({ user, theme }: any) => {
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
          <h1 className={`text-3xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Evening, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{user.displayName}</span>.
          </h1>
          <p className="text-slate-500 text-sm">Protocolo de convivência ativo em modo convidado.</p>
        </div>
        <div className="flex gap-4">
          <div className={`h-12 w-12 rounded-2xl border flex items-center justify-center transition-colors ${
            theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800 text-orange-400' : 'bg-white border-slate-200 text-orange-500 shadow-sm'
          }`}>
            <Bell className="w-5 h-5" />
          </div>
          <div className={`h-12 px-4 rounded-2xl border flex items-center gap-3 transition-colors ${
            theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="text-right">
              <div className={`text-xs font-bold leading-none mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Guest ADEPT</div>
              <div className="text-[10px] text-cyan-400 font-mono uppercase">LVL 01</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Focus Hours', value: '142.5h', color: 'text-cyan-400' },
          { label: 'Streak', value: '14 Days', color: 'text-orange-400' },
          { label: 'Efficiency', value: '94%', color: 'text-purple-400' },
          { label: 'Readiness', value: 'Optimal', color: 'text-cyan-400' },
        ].map((item, i) => (
          <div key={i} className={`p-5 rounded-3xl border shadow-xl transition-all ${
            theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}>
            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">{item.label}</div>
            <div className={`text-3xl font-black mb-2 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
          </div>
        ))}
      </section>

      <div className={`border rounded-3xl p-8 flex flex-col min-h-[400px] transition-all shadow-xl ${
        theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <h2 className={`text-lg font-bold flex items-center gap-2 mb-10 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          <TrendingUp className="w-5 h-5 text-cyan-400" /> Performance Analytics
        </h2>
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#1e293b' : '#e2e8f0'} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#0A0A16' : '#ffffff',
                  borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                  borderRadius: '12px',
                  color: theme === 'dark' ? '#ffffff' : '#0f172a'
                }}
              />
              <Area type="monotone" dataKey="hours" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill={theme === 'dark' ? "rgba(34,211,238,0.1)" : "rgba(34,211,238,0.2)"} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
