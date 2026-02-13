
import React from 'react';
import { UserPlus, Users, Venus, Mars } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const PopulationView: React.FC = () => {
  const genderData = [
    { name: 'Женщины', value: 3450000, color: '#f472b6' },
    { name: 'Мужчины', value: 3290000, color: '#3b82f6' },
  ];

  const ageGroups = [
    { name: '0-14', value: 34 },
    { name: '15-64', value: 61 },
    { name: '65+', value: 5 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Приписанное население</h2>
          <p className="text-sm text-gray-500">Источник: ИС Sanarip Clinic</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          title="Всего приписано" 
          value="6,740,200" 
          icon={<Users size={24} />} 
          color="#3b82f6" 
        />
        <KPICard 
          title="Женщины" 
          value="3,450,120" 
          icon={<Venus size={24} />} 
          color="#f472b6" 
        />
        <KPICard 
          title="Мужчины" 
          value="3,290,080" 
          icon={<Mars size={24} />} 
          color="#3b82f6" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Возрастная структура (%)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageGroups} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Гендерный баланс</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationView;
