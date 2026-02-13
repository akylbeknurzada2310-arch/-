
import React from 'react';
import { Search, Bell, Filter, Calendar } from 'lucide-react';
import { REGIONS } from '../constants';
import { FilterState } from '../types';

interface HeaderProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const Header: React.FC<HeaderProps> = ({ filters, setFilters }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-6 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Поиск организации или врача..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button className="px-3 py-1 text-xs font-medium rounded-md bg-white shadow-sm border border-gray-200">2024</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700">2023</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700">2022</button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
            <Calendar size={16} />
            <span>{new Date().toLocaleDateString('ru-RU')}</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Filter size={16} />
          <span className="text-xs font-semibold uppercase tracking-wider">Фильтры:</span>
        </div>
        <select 
          value={filters.regionId}
          onChange={(e) => setFilters(prev => ({ ...prev, regionId: e.target.value }))}
          className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="all">Кыргызская Республика (Все)</option>
          {REGIONS.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>

        <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none">
          <option>Все районы</option>
        </select>

        <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none">
          <option>Тип организации</option>
          <option>ЦСМ/ЦОВП</option>
          <option>Стационар</option>
          <option>ФАП</option>
          <option>ГВС</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
