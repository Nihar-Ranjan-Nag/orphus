import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GlobalAdvisoryCTA } from "./components/layout/GlobalAdvisoryCTA";
import { setupGsap } from "./lib/gsapSetup";

// Lazy-loaded pages
const HomePage = React.lazy(() => import("./pages/HomePage"));

const ServicesPage = React.lazy(
  () => import("./pages/ServicesPage")
);

const ServiceDetailPage = React.lazy(
  () => import("./pages/ServiceDetailPage")
);

const CapabilityDetailPage = React.lazy(
  () => import("./pages/CapabilityDetailPage")
);

const JurisdictionPage = React.lazy(
  () => import("./pages/JurisdictionPage")
);

const AboutPage = React.lazy(
  () => import("./pages/AboutPage")
);

const ContactPage = React.lazy(
  () => import("./pages/ContactPage")
);

const BlogPage = React.lazy(
  () => import("./pages/BlogPage")
);

const BlogPostPage = React.lazy(
  () => import("./pages/BlogPostPage")
);

const NotFound = React.lazy(
  () => import("./pages/NotFound")
);

setupGsap();

const queryClient = new QueryClient();

/**
 * Normal browser scrolling.
 *
 * When navigating to another route:
 * Opens the new page immediately at the top.
 *
 * When navigating to a hash:
 * Opens the correct section without smooth animation.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    let timer = 0;
    let attempts = 0;
    let cancelled = false;

    const performScroll = () => {
      if (cancelled) return;

      if (hash) {
        const id = decodeURIComponent(
          hash.slice(1)
        );

        const element =
          document.getElementById(id);

        /*
         * Lazy-loaded page content may not be
         * available immediately.
         */
        if (!element && attempts < 20) {
          attempts += 1;

          timer = window.setTimeout(
            performScroll,
            50
          );

          return;
        }

        if (element) {
          const targetTop =
            element.getBoundingClientRect().top +
            window.scrollY -
            96;

          window.scrollTo({
            top: targetTop,
            left: 0,
            behavior: "auto",
          });

          return;
        }
      }

      /*
       * Every normal route navigation
       * starts from the top.
       */
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    /*
     * Immediately reset the scroll position
     * when there is no hash.
     */
    if (!hash) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }

    /*
     * Check again after React renders
     * the lazy-loaded route.
     */
    timer = window.setTimeout(
      performScroll,
      30
    );

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

// Loader shown only while a lazy page is downloading
const LoadingFallback = () => (
  <div className="flex min-h-[50vh] w-full items-center justify-center bg-transparent">
    <div className="flex flex-col items-center gap-4">
      <div
        className="h-10 w-10 animate-spin rounded-full border-l-2 border-t-2"
        style={{
          borderColor: "#0B5D4D",
        }}
      />

      <span
        className="font-display text-[9px] uppercase tracking-[3px]"
        style={{
          color: "rgba(11,83,69,0.55)",
        }}
      >
        Loading advisory desk...
      </span>
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollManager />

          <Navbar />

          <Suspense
            fallback={<LoadingFallback />}
          >
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />

              <Route
                path="/services"
                element={<ServicesPage />}
              />

              <Route
                path="/services/capability/:slug"
                element={<CapabilityDetailPage />}
              />

              <Route
                path="/services/:slug"
                element={<ServiceDetailPage />}
              />

              <Route
                path="/jurisdictions/:slug"
                element={<JurisdictionPage />}
              />

              <Route
                path="/about"
                element={<AboutPage />}
              />

              <Route
                path="/contact"
                element={<ContactPage />}
              />

              <Route
                path="/blog"
                element={<BlogPage />}
              />

              <Route
                path="/blog/:slug"
                element={<BlogPostPage />}
              />

              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Suspense>

          <GlobalAdvisoryCTA />
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;