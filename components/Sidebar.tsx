'use client'

import React from 'react'
import { 
  LayoutDashboard, 
  BookOpen, 
  Timer, 
  LogOut, 
  User as UserIcon
} from 'lucide-react'

const Sidebar = ({ activeTab, setActiveTab, onLogout, user }: any) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tasks', label: 'Study Tracks', icon: BookOpen },
    { id: 'timer', label: 'Deep Focus', icon: Timer },
  ]

  return (
    <nav className="fixed left-0 top-0 h-screen w-[240px] bg-[#0A0A16] border-r border-indigo-900/30 flex flex-col z-50 hidden md:flex">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 via-purple-600 to-orange-500 rounded-xl shadow-[0_0_15px_rgba(123,97,255,0.4)] flex items-center justify-center">
            <span className="text-xl font-black text-white">Σ</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            NEURO<span className="text-cyan-400">CORE</span>
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold px-3 mb-4">Main Engine</div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 transition-all duration-300 group ${
                activeTab === item.id 
                  ? 'bg-indigo-500/10 border-r-2 border-cyan-400 text-cyan-400' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 space-y-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20">
          <div className="text-[10px] text-orange-400 mb-1 font-bold tracking-widest uppercase">PRO MODE</div>
          <div className="text-xs text-slate-300 mb-3 leading-tight font-medium">Unlock advanced analytics & AI tools.</div>
          <button className="w-full py-2 bg-orange-500 rounded-lg text-[10px] font-black text-black uppercase tracking-widest hover:bg-orange-400 transition-colors">
            UPGRADE NOW
          </button>
        </div>

        <div className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/10">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-cyan-400">
            <UserIcon className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate text-white">{user.displayName}</p>
            <p className="text-[9px] text-cyan-400 font-mono tracking-tighter uppercase">GUEST_LINK</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
