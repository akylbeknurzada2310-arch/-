
import React, { useState } from 'react';
import KyrgyzstanMap from '../components/KyrgyzstanMap';
import { Building2, Home, Crosshair, MapPin } from 'lucide-react';

const GISView: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>('bishkek');

  const orgStats = [
    { label: 'ЦСМ / ЦОВП', count: 145, icon: <Building2 className="text-blue-500" /> },
    { label: 'Стационары', count: 82, icon: <Home className="text-purple-500" /> },
    { label: 'ФАП', count: 912, icon: <Crosshair className="text-green-500" /> },
    { label: 'ГВС', count: 64, icon: <MapPin className="text-orange-500" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Геоинформационная карта</h2>
          <p className="text-sm text-gray-500">Мониторинг расположения медицинских организаций</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
          <button className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg">Карта</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Список</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <KyrgyzstanMap activeRegionId={selectedRegion} onRegionClick={setSelectedRegion} />
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {orgStats.map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.count}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Детали региона</h3>
            {selectedRegion ? (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Выбрано</p>
                  <p className="text-lg font-bold text-blue-900 capitalize">{selectedRegion.replace('_', ' ')}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Население</span>
                    <span className="font-bold">1,240,000</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Медорганизаций</span>
                    <span className="font-bold">42</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Врачей</span>
                    <span className="font-bold">1,120</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
                  Открыть паспорт региона
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">Выберите регион на карте для просмотра деталей</p>
            )}
          </div>
          
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
            <h4 className="font-bold mb-2">Оперативный фильтр</h4>
            <p className="text-xs text-blue-100 mb-4 opacity-80">Поиск ближайших пунктов вакцинации и ФАП в реальном времени.</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Найти организацию..." 
                className="w-full pl-4 pr-10 py-2 bg-blue-500/50 border border-blue-400 rounded-lg placeholder-blue-200 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISView;
