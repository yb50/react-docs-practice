// Sending analytics

import { useEffect } from "react";

useEffect(() => {
  logVisit(url);
}, [url]);