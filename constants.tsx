
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Map as MapIcon, 
  UserPlus, 
  Activity, 
  Baby, 
  AlertTriangle, 
  ShieldCheck, 
  Trash2, 
  TestTube,
  ShieldAlert
} from 'lucide-react';
import { ViewType } from './types';

export const NAVIGATION_ITEMS = [
  { id: ViewType.DASHBOARD, label: 'Главный экран', icon: <LayoutDashboard size={20} /> },
  { id: ViewType.EXECUTIVE, label: 'Панель руководства', icon: <ShieldAlert size={20} /> },
  { id: ViewType.PERSONNEL, label: 'Кадровый потенциал', icon: <Users size={20} /> },
  { id: ViewType.GIS, label: 'Карта медорганизаций', icon: <MapIcon size={20} /> },
  { id: ViewType.POPULATION, label: 'Приписанное население', icon: <UserPlus size={20} /> },
  { id: ViewType.ACTIVITY, label: 'Обращаемость', icon: <Activity size={20} /> },
  { id: ViewType.VITAL_STATS, label: 'Рождаемость и смертность', icon: <Baby size={20} /> },
  { id: ViewType.EPIDEMIOLOGY, label: 'Инфекц. безопасность', icon: <AlertTriangle size={20} /> },
  { id: ViewType.IMMUNIZATION, label: 'Иммунизация', icon: <ShieldCheck size={20} /> },
  { id: ViewType.WASTE, label: 'Медотходы', icon: <Trash2 size={20} /> },
  { id: ViewType.LABS, label: 'Лаборатории', icon: <TestTube size={20} /> },
];

export const REGIONS = [
  { id: 'bishkek', name: 'г. Бишкек' },
  { id: 'osh_city', name: 'г. Ош' },
  { id: 'chuy', name: 'Чуйская область' },
  { id: 'osh', name: 'Ошская область' },
  { id: 'jalalabad', name: 'Джалал-Абадская область' },
  { id: 'issyk_kul', name: 'Иссык-Кульская область' },
  { id: 'naryn', name: 'Нарынская область' },
  { id: 'talas', name: 'Таласская область' },
  { id: 'batken', name: 'Баткенская область' },
];

export const MOCK_CHART_DATA = [
  { name: 'Янв', value: 4000, lastYear: 3800 },
  { name: 'Фев', value: 3000, lastYear: 3200 },
  { name: 'Мар', value: 2000, lastYear: 2100 },
  { name: 'Апр', value: 2780, lastYear: 2500 },
  { name: 'Май', value: 1890, lastYear: 1950 },
  { name: 'Июн', value: 2390, lastYear: 2200 },
  { name: 'Июл', value: 3490, lastYear: 3100 },
];
