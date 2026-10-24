
import { useLocation } from "react-router-dom";

import { AdvisoryCTA } from "@/components/AdvisoryCTA";

export function GlobalAdvisoryCTA() {
  const { pathname } = useLocation();

  const hiddenRoutes = [
    "/",
    "/contact",
    "/404",
    "/services",
    "/blog",
    "/insights",
  ];

  const normalizedPath =
    pathname.replace(/\/+$/, "") || "/";

  if (hiddenRoutes.includes(normalizedPath)) {
    return null;
  }

  return <AdvisoryCTA />;
}
