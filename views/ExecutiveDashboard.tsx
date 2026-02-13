
import React from 'react';
import { ShieldAlert, Users, Activity, Baby, AlertTriangle, ShieldCheck, Stethoscope } from 'lucide-react';

interface StatusIndicatorProps {
  label: string;
  value: string | number;
  status: 'normal' | 'risk' | 'critical';
  trend?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ label, value, status, trend }) => {
  const styles = {
    normal: 'bg-green-50 border-green-200 text-green-700 ring-green-500/30',
    risk: 'bg-yellow-50 border-yellow-200 text-yellow-700 ring-yellow-500/30',
    critical: 'bg-red-50 border-red-200 text-red-700 ring-red-500/30',
  };

  const dots = {
    normal: 'bg-green-500',
    risk: 'bg-yellow-500',
    critical: 'bg-red-500',
  };

  return (
    <div className={`p-6 rounded-2xl border-2 transition-all hover:scale-[1.02] shadow-sm ${styles[status]} ring-4`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold uppercase tracking-wider opacity-80">{label}</span>
        <div className={`w-3 h-3 rounded-full ${dots[status]} animate-pulse`}></div>
      </div>
      <div className="flex items-baseline space-x-2">
        <h4 className="text-3xl font-black">{value}</h4>
        {trend && <span className="text-xs font-bold">{trend}</span>}
      </div>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-tighter opacity-60">
        {status === 'normal' && 'Показатели в норме'}
        {status === 'risk' && 'Внимание: Требуется мониторинг'}
        {status === 'critical' && 'Критическое отклонение!'}
      </p>
    </div>
  );
};

const ExecutiveDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-900 text-white rounded-2xl shadow-xl">
          <ShieldAlert size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-gray-900">Панель руководства</h2>
          <p className="text-gray-500 font-medium">Консолидированный мониторинг критических индикаторов МЗ КР</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusIndicator label="Укомплектованность кадрами" value="84.2%" status="risk" trend="-1.2%" />
        <StatusIndicator label="Охват вакцинацией" value="94.1%" status="normal" trend="+0.5%" />
        <StatusIndicator label="Инфекционная ситуация" value="Критично" status="critical" trend="+42 случая" />
        <StatusIndicator label="Приписанное население" value="6.74M" status="normal" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Области особого внимания</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-500 text-white rounded-xl"><AlertTriangle /></div>
                <div>
                  <h5 className="font-bold text-red-900">Вспышка кори (Ошская обл.)</h5>
                  <p className="text-sm text-red-700">Зафиксировано 14 новых очагов за последние 48 часов.</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg uppercase">Меры</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-500 text-white rounded-xl"><Users /></div>
                <div>
                  <h5 className="font-bold text-yellow-900">Дефицит анестезиологов</h5>
                  <p className="text-sm text-yellow-700">Уровень укомплектованности в Баткенской обл. упал ниже 60%.</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-yellow-600 text-white text-xs font-bold rounded-lg uppercase">Анализ</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-xl font-bold mb-6">Сводка по стране</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Stethoscope className="text-blue-400" />
                <span className="text-sm text-gray-400">Врачи</span>
              </div>
              <span className="font-bold">14,204</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Activity className="text-green-400" />
                <span className="text-sm text-gray-400">Обращения</span>
              </div>
              <span className="font-bold">342.8k</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Baby className="text-purple-400" />
                <span className="text-sm text-gray-400">Рождаемость</span>
              </div>
              <span className="font-bold">+1.2%</span>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-4">Статус систем</p>
              <div className="flex space-x-2">
                <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px] font-bold">SANARIP: OK</div>
                <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px] font-bold">NISUR: OK</div>
                <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-[10px] font-bold">ASUMO: ERR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
