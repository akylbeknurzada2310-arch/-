
import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  Users, 
  Activity, 
  TrendingUp, 
  AlertCircle,
  Syringe,
  Baby
} from 'lucide-react';
import KPICard from '../components/KPICard';
import KyrgyzstanMap from '../components/KyrgyzstanMap';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { MOCK_CHART_DATA } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard 
            title="Организации здравоохранения" 
            value="1,452" 
            change="+12" 
            isPositive={true} 
            icon={<Building2 size={24} />} 
            color="#3b82f6" 
          />
          <KPICard 
            title="Медицинский персонал" 
            value="14,204" 
            change="+2.4%" 
            isPositive={true} 
            icon={<Stethoscope size={24} />} 
            color="#8b5cf6" 
          />
          <KPICard 
            title="Приписанное население" 
            value="6.74M" 
            change="+0.8%" 
            isPositive={true} 
            icon={<Users size={24} />} 
            color="#10b981" 
          />
          <KPICard 
            title="Обращаемость (мес)" 
            value="342,801" 
            change="-5.2%" 
            isPositive={false} 
            icon={<Activity size={24} />} 
            color="#f59e0b" 
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <KyrgyzstanMap />
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6 text-gray-800">Динамика обращений по месяцам</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_CHART_DATA}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Оперативные показатели</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-500 text-white rounded-lg">
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-800 uppercase tracking-wider">Эпид. извещения</p>
                    <p className="text-lg font-bold text-red-900">124 <span className="text-xs font-normal">за сутки</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-500 text-white rounded-lg">
                    <Syringe size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-800 uppercase tracking-wider">Иммунизация</p>
                    <p className="text-lg font-bold text-green-900">92.4% <span className="text-xs font-normal">охват</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500 text-white rounded-lg">
                    <Baby size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Рождаемость</p>
                    <p className="text-lg font-bold text-blue-900">412 <span className="text-xs font-normal">за неделю</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Рейтинг регионов по обращаемости</h3>
            <div className="space-y-4">
              {[
                { name: 'Бишкек', val: 85, color: 'bg-blue-600' },
                { name: 'Чуй', val: 72, color: 'bg-blue-500' },
                { name: 'Ош', val: 68, color: 'bg-blue-400' },
                { name: 'Джалал-Абад', val: 62, color: 'bg-blue-300' },
                { name: 'Иссык-Куль', val: 54, color: 'bg-blue-200' },
              ].map((r, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700">{r.name}</span>
                    <span className="text-gray-500">{r.val}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`${r.color} h-full rounded-full transition-all duration-1000`} style={{width: `${r.val}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-colors">
              Полный отчет →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
