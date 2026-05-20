import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Approach from "@/pages/approach";
import Workshops from "@/pages/workshops";
import Community from "@/pages/community";
import Join from "@/pages/join";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-secondary/20 overflow-x-hidden">
      <Nav />
      <main className="flex-grow pt-[88px] md:pt-[104px]">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/approach" component={Approach} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/community" component={Community} />
            <Route path="/join" component={Join} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
