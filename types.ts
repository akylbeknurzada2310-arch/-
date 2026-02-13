
// Added React import to resolve the React namespace error
import React from 'react';

export enum ViewType {
  DASHBOARD = 'dashboard',
  EXECUTIVE = 'executive',
  PERSONNEL = 'personnel',
  GIS = 'gis',
  POPULATION = 'population',
  ACTIVITY = 'activity',
  VITAL_STATS = 'vital_stats',
  EPIDEMIOLOGY = 'epidemiology',
  IMMUNIZATION = 'immunization',
  WASTE = 'waste',
  LABS = 'labs'
}

export interface RegionData {
  id: string;
  name: string;
  count: number;
}

export interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  status?: 'normal' | 'risk' | 'critical';
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export interface FilterState {
  level: 'republic' | 'region' | 'district' | 'org';
  regionId: string;
  districtId: string;
  orgId: string;
  period: string;
}
