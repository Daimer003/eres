import { useContext } from 'react';
import { LocaleContext } from '../contexts/internatiolizationContext';

export const useLocale = () => useContext(LocaleContext);
