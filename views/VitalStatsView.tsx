
import React from 'react';
import { Baby, Skull, TrendingUp, Calendar } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const VitalStatsView: React.FC = () => {
  const causeData = [
    { name: 'ССЗ', value: 45 },
    { name: 'Онкология', value: 15 },
    { name: 'Травмы', value: 12 },
    { name: 'Болезни орг. дых.', value: 10 },
    { name: 'Прочие', value: 18 },
  ];

  const trendData = [
    { name: '2019', births: 158000, deaths: 33000 },
    { name: '2020', births: 154000, deaths: 39000 },
    { name: '2021', births: 150000, deaths: 38000 },
    { name: '2022', births: 148000, deaths: 34000 },
    { name: '2023', births: 145000, deaths: 33500 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Рождаемость и смертность</h2>
        <p className="text-sm text-gray-500">Источник: ИС «Медсвидетельство»</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Рождений (YTD)" 
          value="145,230" 
          change="-2.1%" 
          isPositive={false}
          icon={<Baby size={24} />} 
          color="#10b981" 
        />
        <KPICard 
          title="Смертей (YTD)" 
          value="33,540" 
          change="-0.5%" 
          isPositive={true}
          icon={<Skull size={24} />} 
          color="#ef4444" 
        />
        <KPICard 
          title="Ср. возраст рожениц" 
          value="28.4" 
          icon={<Calendar size={24} />} 
          color="#8b5cf6" 
        />
        <KPICard 
          title="Ест. прирост" 
          value="+111,690" 
          icon={<TrendingUp size={24} />} 
          color="#3b82f6" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Динамика за 5 лет</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="births" stroke="#10b981" strokeWidth={3} name="Рождаемость" dot={{r: 4}} />
                <Line type="monotone" dataKey="deaths" stroke="#ef4444" strokeWidth={3} name="Смертность" dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Причины смерти (%)</h3>
          <div className="space-y-6">
            {causeData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full" style={{width: `${item.value}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalStatsView;
