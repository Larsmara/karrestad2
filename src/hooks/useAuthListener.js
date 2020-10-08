import { useState, useEffect } from "react";

const useAuthListener = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  return { user };
};
