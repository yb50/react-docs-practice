// Triggering animations 

import { useEffect } from "react";

useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1;
  return () => {
    node.style.opacity = 0;
  }
}, []);