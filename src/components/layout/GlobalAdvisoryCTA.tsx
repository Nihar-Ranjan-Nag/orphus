import { useLocation } from "react-router-dom";

import { AdvisoryCTA } from "@/components/AdvisoryCTA";

export function GlobalAdvisoryCTA() {
  const { pathname } = useLocation();

  const hiddenRoutes = [
    "/",
    "/contact",
    "/404",
    "/services",
  ];

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return <AdvisoryCTA />;
}