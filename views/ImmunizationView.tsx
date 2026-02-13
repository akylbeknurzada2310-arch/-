
import React from 'react';
import { ShieldCheck, Target, Users, Calendar } from 'lucide-react';
import KPICard from '../components/KPICard';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

const ImmunizationView: React.FC = () => {
  const typeData = [
    { name: 'АКДС', value: 45000, color: '#3b82f6' },
    { name: 'ККП', value: 32000, color: '#8b5cf6' },
    { name: 'Гепатит B', value: 28000, color: '#10b981' },
    { name: 'Пневмококк', value: 15000, color: '#f59e0b' },
  ];

  const planData = [
    { name: 'Бишкек', plan: 100, fact: 92 },
    { name: 'Ош', plan: 100, fact: 95 },
    { name: 'Чуй', plan: 100, fact: 88 },
    { name: 'Нарын', plan: 100, fact: 91 },
    { name: 'Баткен', plan: 100, fact: 84 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Иммунизация</h2>
        <p className="text-sm text-gray-500">Источник: ИС «Иммунизация»</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Общий охват" value="94.1%" change="+0.4%" isPositive={true} icon={<ShieldCheck />} color="#10b981" />
        <KPICard title="Вакцинировано" value="1.2M" icon={<Users />} color="#3b82f6" />
        <KPICard title="Выполнение плана" value="88.4%" icon={<Target />} color="#f59e0b" />
        <KPICard title="Отказов" value="0.8%" icon={<Calendar />} color="#ef4444" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-gray-800">Разбивка по вакцинам</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {typeData.map((entry, index) => (
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
          <h3 className="text-lg font-bold mb-6 text-gray-800">Процент выполнения плана по регионам</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={planData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="fact" name="Факт (%)" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmunizationView;
