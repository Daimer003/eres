import { useContext } from 'react';
import { ERESContext } from '../contexts/eresContext';

export const useERES = () => useContext(ERESContext);
