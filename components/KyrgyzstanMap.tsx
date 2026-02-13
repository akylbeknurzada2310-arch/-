
import React, { useState } from 'react';

interface KyrgyzstanMapProps {
  activeRegionId?: string;
  onRegionClick?: (id: string) => void;
}

const KyrgyzstanMap: React.FC<KyrgyzstanMapProps> = ({ activeRegionId, onRegionClick }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Simplified paths for visualization purposes
  const regions = [
    { id: 'batken', name: 'Баткенская', d: 'M 50,220 Q 80,240 120,230 L 140,210 L 110,190 Z' },
    { id: 'osh', name: 'Ошская', d: 'M 140,210 L 160,250 L 220,240 L 240,180 L 180,170 Z' },
    { id: 'jalalabad', name: 'Джалал-Абадская', d: 'M 120,160 L 180,170 L 220,130 L 150,110 Z' },
    { id: 'talas', name: 'Таласская', d: 'M 100,100 L 150,110 L 160,80 L 110,70 Z' },
    { id: 'chuy', name: 'Чуйская', d: 'M 160,80 L 280,70 L 300,100 L 220,130 Z' },
    { id: 'naryn', name: 'Нарынская', d: 'M 220,130 L 300,100 L 380,140 L 340,200 L 240,180 Z' },
    { id: 'issyk_kul', name: 'Иссык-Кульская', d: 'M 300,100 L 450,70 L 480,120 L 380,140 Z' },
  ];

  return (
    <div className="relative w-full h-[400px] bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 overflow-hidden">
      <div className="absolute top-4 left-6">
        <h3 className="text-lg font-bold text-blue-900">Географическая активность</h3>
        <p className="text-sm text-blue-600">Нажмите на область для фильтрации</p>
      </div>

      <svg viewBox="0 0 500 300" className="w-full h-full max-w-2xl drop-shadow-xl">
        {regions.map((r) => (
          <path
            key={r.id}
            d={r.d}
            className={`cursor-pointer transition-all duration-300 stroke-2 ${
              activeRegionId === r.id || hovered === r.id
                ? 'fill-blue-600 stroke-blue-700'
                : 'fill-blue-200 stroke-blue-300 hover:fill-blue-400 hover:stroke-blue-500'
            }`}
            onClick={() => onRegionClick?.(r.id)}
            onMouseEnter={() => setHovered(r.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <title>{r.name} область</title>
          </path>
        ))}
        {/* Placeholder for Bishkek/Osh dots */}
        <circle cx="210" cy="85" r="4" className="fill-red-500 stroke-white stroke-1" />
        <circle cx="170" cy="220" r="4" className="fill-red-500 stroke-white stroke-1" />
      </svg>

      <div className="absolute bottom-4 right-6 bg-white/80 backdrop-blur p-3 rounded-lg border border-gray-200 text-xs">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
          <span>Высокая плотность</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
          <span>Низкая плотность</span>
        </div>
      </div>
    </div>
  );
};

export default KyrgyzstanMap;
