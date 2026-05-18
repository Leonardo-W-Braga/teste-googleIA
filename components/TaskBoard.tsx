'use client'

import React, { useState } from 'react'
import { Plus, Trash2, Circle } from 'lucide-react'

const TaskBoard = ({ user, theme }: any) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Review Quantum Mechanics', subject: 'Physics', completed: false },
    { id: '2', title: 'Fix Neural Link Sync', subject: 'Engineering', completed: false }
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTask) return
    setTasks([...tasks, { id: Date.now().toString(), title: newTask, subject: 'Geral', completed: false }])
    setNewTask('')
  }

  const deleteTask = (id: string) => setTasks(tasks.filter(t => t.id !== id))

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className={`text-3xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Study Matrix</h1>
        <p className="text-slate-500 text-sm">Gerencie seus protocolos localmente (Modo Convidado).</p>
      </header>

      <form onSubmit={addTask} className={`p-6 rounded-3xl border grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl transition-all ${
        theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="md:col-span-3">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nova diretriz de estudo..."
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors ${
              theme === 'dark' ? 'bg-[#050508] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          />
        </div>
        <button type="submit" className="btn-gradient text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all uppercase tracking-widest text-[10px]">
          <Plus className="w-4 h-4" /> Initialize
        </button>
      </form>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className={`p-5 rounded-2xl group border flex items-center justify-between transition-all shadow-lg ${
            theme === 'dark' ? 'bg-[#0F0F1E] border-slate-800 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-blue-200'
          }`}>
            <div className="flex items-center gap-4">
              <Circle className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-700' : 'text-slate-300'}`} />
              <div>
                <h4 className={`text-sm font-bold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'}`}>{task.title}</h4>
                <p className="text-[10px] text-purple-400 uppercase tracking-widest">{task.subject}</p>
              </div>
            </div>
            <button onClick={() => deleteTask(task.id)} className="opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-red-400 transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskBoard
