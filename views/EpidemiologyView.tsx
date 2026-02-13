
import React from 'react';
import { AlertTriangle, TrendingUp, Map as MapIcon, Calendar } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';
import { MOCK_CHART_DATA } from '../constants';

const EpidemiologyView: React.FC = () => {
  const diseaseData = [
    { name: 'ОРВИ', count: 1250, prev: 1100 },
    { name: 'Кишечные инф.', count: 450, prev: 420 },
    { name: 'Корь', count: 85, prev: 5 },
    { name: 'Гепатит', count: 120, prev: 130 },
    { name: 'Бруцеллез', count: 42, prev: 38 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Инфекционная безопасность</h2>
          <p className="text-sm text-gray-500">Источник: ИС «Эпидплатформа»</p>
        </div>
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-4 py-2 rounded-xl border border-red-100 animate-pulse">
          <AlertTriangle size={18} />
          <span className="text-sm font-bold">Внимание: Рост заболеваемости корью</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Экстренные извещения" value="2,451" change="+14%" isPositive={false} icon={<AlertTriangle />} color="#ef4444" />
        <KPICard title="Выявлено очагов" value="12" change="+2" isPositive={false} icon={<MapIcon />} color="#f59e0b" />
        <KPICard title="Госпитализировано" value="842" icon={<TrendingUp />} color="#3b82f6" />
        <KPICard title="Контактные лица" value="5,600" icon={<Calendar />} color="#10b981" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Структура инфекций (YoY)</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diseaseData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Legend />
                <Bar dataKey="count" name="Текущий период" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="prev" name="Прошлый год" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Динамика выявления (мес)</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpidemiologyView;
