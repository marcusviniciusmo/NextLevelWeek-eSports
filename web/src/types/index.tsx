/* React */
import { InputHTMLAttributes } from 'react';

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