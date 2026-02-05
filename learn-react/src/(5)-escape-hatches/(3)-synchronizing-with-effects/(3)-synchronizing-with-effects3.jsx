// Controlling non-React widgets 

import { useEffect } from "react";

useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
}, [zoomLevel]);