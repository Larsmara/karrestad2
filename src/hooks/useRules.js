import { useState, useEffect } from 'react';
import { getRules } from '../services/firebase';

export default function useRules() {
  const [rules, setRules] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRules() {
      setLoading(true);
      const fbRules = await getRules();
      setRules(fbRules);
      setLoading(false);
    }
    fetchRules();

    return () => setRules(null);
  }, []);

  return { rules, loading };
}
