
import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Stethoscope,
  TrendingDown,
  PieChart as PieChartIcon
} from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';

const PersonnelView: React.FC = () => {
  const specData = [
    { name: 'Терапевты', value: 450 },
    { name: 'Хирурги', value: 320 },
    { name: 'Педиатры', value: 510 },
    { name: 'Гинекологи', value: 280 },
    { name: 'Стоматологи', value: 190 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Кадровый потенциал (НИСУР)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Врачи" 
          value="8,542" 
          icon={<Stethoscope size={24} />} 
          color="#3b82f6" 
        />
        <KPICard 
          title="Средний медперсонал" 
          value="15,663" 
          icon={<Users size={24} />} 
          color="#8b5cf6" 
        />
        <KPICard 
          title="Студенты медвузов" 
          value="12,400" 
          icon={<GraduationCap size={24} />} 
          color="#10b981" 
        />
        <KPICard 
          title="Дефицит кадров" 
          value="1,245" 
          change="5.4%" 
          isPositive={false}
          icon={<TrendingDown size={24} />} 
          color="#ef4444" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Распределение по специальностям</h3>
            <PieChartIcon size={20} className="text-gray-400" />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={specData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {specData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {specData.map((s, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}}></div>
                <span className="text-xs font-medium text-gray-600">{s.name} ({s.value})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Укомплектованность по регионам (%)</h3>
            <div className="flex space-x-2">
              <span className="flex items-center text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded">2024</span>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                {name: 'Бишкек', val: 92},
                {name: 'Ош', val: 85},
                {name: 'Чуй', val: 88},
                {name: 'Баткен', val: 74},
                {name: 'Нарын', val: 78},
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} domain={[0, 100]} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="val" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <h3 className="text-lg font-bold mb-6 text-gray-800">Выпускники (отработка бюджетных мест)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <th className="pb-4">Год</th>
                <th className="pb-4">Специальность</th>
                <th className="pb-4">Всего бюджетников</th>
                <th className="pb-4">Трудоустроены</th>
                <th className="pb-4">В процессе отработки</th>
                <th className="pb-4">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {[
                { year: 2023, spec: 'Лечебное дело', total: 450, hired: 412, inProcess: 380, status: 'Активно' },
                { year: 2023, spec: 'Педиатрия', total: 120, hired: 115, inProcess: 108, status: 'Активно' },
                { year: 2022, spec: 'Стоматология', total: 85, hired: 82, inProcess: 45, status: 'Завершение' },
                { year: 2022, spec: 'Фармация', total: 60, hired: 58, inProcess: 30, status: 'Завершение' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-semibold text-gray-700">{row.year}</td>
                  <td className="py-4 text-gray-600">{row.spec}</td>
                  <td className="py-4 font-bold text-blue-600">{row.total}</td>
                  <td className="py-4 text-gray-600">{row.hired}</td>
                  <td className="py-4 text-gray-600">{row.inProcess}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      row.status === 'Активно' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonnelView;
