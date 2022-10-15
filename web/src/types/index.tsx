/* React */
import { InputHTMLAttributes } from 'react';

export interface AdsProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
};

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

export interface DiscordProps {
  discord: string;
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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { };

export interface ShowDuoProps {
  name: string;
  adId: string;
};