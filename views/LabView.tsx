
import React from 'react';
import { TestTube, Activity, UserCheck, TrendingUp } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const LabView: React.FC = () => {
  const labData = [
    { name: 'ОАК/ОАМ', value: 120000 },
    { name: 'Биохимия', value: 85000 },
    { name: 'ИФА', value: 15000 },
    { name: 'ПЦР', value: 8000 },
    { name: 'Бактериология', value: 4500 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Лабораторная деятельность</h2>
        <p className="text-sm text-gray-500">Анализ нагрузки и структуры исследований</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Всего анализов" value="232.5k" change="+5.2%" isPositive={true} icon={<TestTube />} color="#3b82f6" />
        <KPICard title="Пациентов" value="48,200" icon={<UserCheck />} color="#10b981" />
        <KPICard title="Нагрузка (%)" value="78%" icon={<Activity />} color="#f59e0b" />
        <KPICard title="Ср. время (час)" value="4.2" change="-12%" isPositive={true} icon={<TrendingUp />} color="#8b5cf6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Структура по видам исследований</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={labData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Нагрузка на лаборатории по регионам</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { name: 'БШ', val: 85 },
                { name: 'ОШ', val: 78 },
                { name: 'ЧУ', val: 92 },
                { name: 'ИК', val: 65 },
                { name: 'БТ', val: 58 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="val" name="Загрузка (%)" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabView;
