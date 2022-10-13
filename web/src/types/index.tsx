/* React */
import { InputHTMLAttributes } from 'react';

export interface ArrowSliderProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
};

export interface DaysOfWeekProps {
  label: string;
  value: string;
  title: string;
};

export interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

export interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};