
import React from 'react';
import { Trash2, ShieldAlert, Recycle, Truck } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, PieChart, Pie, Legend
} from 'recharts';

const WasteView: React.FC = () => {
  const classData = [
    { name: 'Класс А (Неопасные)', value: 12500, color: '#10b981' },
    { name: 'Класс Б (Опасные)', value: 4500, color: '#f59e0b' },
    { name: 'Класс В (Чрезв. опасные)', value: 800, color: '#ef4444' },
    { name: 'Класс Г (Токсичные)', value: 200, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Медицинские отходы</h2>
        <p className="text-sm text-gray-500">Источник: ИС АСУМО</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Общий объем (кг/мес)" value="18,000" icon={<Trash2 />} color="#3b82f6" />
        <KPICard title="Чрезв. опасные (В)" value="800" status="risk" icon={<ShieldAlert />} color="#ef4444" />
        <KPICard title="Утилизировано" value="92.4%" icon={<Recycle />} color="#10b981" />
        <KPICard title="Вывозов (YTD)" value="4,120" icon={<Truck />} color="#8b5cf6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Распределение по классам опасности</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={classData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {classData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Динамика образования отходов (кг)</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Янв', val: 15400 },
                { name: 'Фев', val: 14200 },
                { name: 'Мар', val: 16800 },
                { name: 'Апр', val: 18000 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="val" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteView;
