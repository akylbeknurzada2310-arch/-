
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import PersonnelView from './views/PersonnelView';
import PopulationView from './views/PopulationView';
import VitalStatsView from './views/VitalStatsView';
import GISView from './views/GISView';
import ExecutiveDashboard from './views/ExecutiveDashboard';
import EpidemiologyView from './views/EpidemiologyView';
import ImmunizationView from './views/ImmunizationView';
import WasteView from './views/WasteView';
import LabView from './views/LabView';
import { ViewType, FilterState } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewType>(ViewType.DASHBOARD);
  const [filters, setFilters] = useState<FilterState>({
    level: 'republic',
    regionId: 'all',
    districtId: 'all',
    orgId: 'all',
    period: '2024'
  });

  const renderView = () => {
    switch (currentView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.EXECUTIVE:
        return <ExecutiveDashboard />;
      case ViewType.PERSONNEL:
        return <PersonnelView />;
      case ViewType.GIS:
        return <GISView />;
      case ViewType.POPULATION:
        return <PopulationView />;
      case ViewType.VITAL_STATS:
        return <VitalStatsView />;
      case ViewType.EPIDEMIOLOGY:
        return <EpidemiologyView />;
      case ViewType.IMMUNIZATION:
        return <ImmunizationView />;
      case ViewType.WASTE:
        return <WasteView />;
      case ViewType.LABS:
        return <LabView />;
      case ViewType.ACTIVITY:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
              <svg className="w-12 h-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-800 capitalize">Раздел "{currentView}"</h2>
              <p className="text-gray-500 max-w-md">Модуль находится на стадии финальной интеграции с ИС Sanarip Clinic.</p>
            </div>
            <button 
              onClick={() => setView(ViewType.DASHBOARD)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 font-bold"
            >
              Вернуться на дашборд
            </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} setView={setView} />
      
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <Header filters={filters} setFilters={setFilters} />
        
        <div className="p-8 flex-1">
          {renderView()}
        </div>

        <footer className="p-6 bg-white border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
          <div className="flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Coat_of_arms_of_Kyrgyzstan.svg" alt="Coat of arms" className="w-6 h-6" />
            <span>© {new Date().getFullYear()} Министерство здравоохранения Кыргызской Республики. Официальная аналитическая платформа.</span>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-green-600 font-bold uppercase tracking-tighter">Синхронизация активна</span>
            </span>
            <span>v1.5.0-PROD</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
