import { useState, useEffect } from 'react';
import { getMembers } from '../services/firebase';

export default function useMembers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRules() {
      setLoading(true);
      const memberData = await getMembers();
      setData(memberData);
      setLoading(false);
    }
    fetchRules();

    return () => setData(null);
  }, []);

  return { members: data, loading };
}
