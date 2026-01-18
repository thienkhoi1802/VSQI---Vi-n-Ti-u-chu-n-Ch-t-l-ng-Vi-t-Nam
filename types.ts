import React from 'react';

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  id?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface HistoryEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface IntroCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NewsPageItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface SidebarNewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}