
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { KPICardProps } from '../types';

const KPICard: React.FC<KPICardProps> = ({ title, value, change, isPositive, icon, color, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-5 transition-transform group-hover:scale-110`} style={{ backgroundColor: color }}></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl`} style={{ backgroundColor: `${color}15`, color: color }}>
          {icon}
        </div>
        {change && (
          <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {change}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-3xl font-bold text-gray-900 tracking-tight">{value}</p>
        <p className="text-sm font-medium text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default KPICard;
