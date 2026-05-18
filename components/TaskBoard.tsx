'use client'

import React, { useState } from 'react'
import { Plus, Trash2, Circle } from 'lucide-react'

const TaskBoard = ({ user }: any) => {
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
        <h1 className="text-3xl font-bold text-white tracking-tight">Study Matrix</h1>
        <p className="text-slate-400 text-sm">Gerencie seus protocolos localmente (Modo Convidado).</p>
      </header>

      <form onSubmit={addTask} className="bg-[#0F0F1E] border border-slate-800 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl">
        <div className="md:col-span-3">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nova diretriz de estudo..."
            className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
        <button type="submit" className="btn-gradient text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all uppercase tracking-widest text-[10px]">
          <Plus className="w-4 h-4" /> Initialize
        </button>
      </form>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-[#0F0F1E] border border-slate-800 p-5 rounded-2xl group flex items-center justify-between hover:border-slate-600 transition-all shadow-lg">
            <div className="flex items-center gap-4">
              <Circle className="w-5 h-5 text-slate-700" />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{task.title}</h4>
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
