import React from 'react'
import { ISidebar } from "../models/ISidebar";

import { HomeIcon, SampleIcon, UserIcon, PieChartIcon, SettingsIcon } from '../icons';

const sidebarConfig: ISidebar[] = [
  { key: 'Home', text: 'Inicio', location: "home", icon: <HomeIcon /> },
  { key: 'Collections', text: 'Muestras', location: "samples", icon: <SampleIcon /> },
  { key: 'Group', text: 'Grupos', location: "groups", icon: <UserIcon /> },
  { key: 'QR', text: 'QR codes', location: "codes", icon: <SampleIcon /> },
  { key: 'PieChart', text: 'Analytics', location: "analytics", icon: <PieChartIcon /> },
  { key: 'Settings', text: 'Herramientas', location: "tools", icon: <SettingsIcon /> },
]

export default sidebarConfig;