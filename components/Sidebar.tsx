
import React from 'react';
import { NAVIGATION_ITEMS } from '../constants';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  return (
    <div className="w-64 bg-[#1e293b] text-white flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight">Нацплатформа</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Ситуационный центр МЗ КР</p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
              currentView === item.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700 mt-auto">
        <div className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-lg font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Администратор</p>
            <p className="text-xs text-slate-400">Минздрав КР</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
