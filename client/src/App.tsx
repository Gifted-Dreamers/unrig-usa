/*
 * UNRIG USA — App Router
 * Design: "Civic Intelligence" — Dark navy, Playfair Display + Source Serif 4
 * All routes defined here. Layout (Header + Footer) wraps all pages.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TheProblem from "./pages/TheProblem";
import Framework from "./pages/Framework";
import Safeguards from "./pages/Safeguards";
import Recognize from "./pages/Recognize";
import Action from "./pages/Action";
import Research from "./pages/Research";
import News from "./pages/News";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/the-problem" component={TheProblem} />
        <Route path="/framework" component={Framework} />
        <Route path="/safeguards" component={Safeguards} />
        <Route path="/recognize" component={Recognize} />
        <Route path="/action" component={Action} />
        <Route path="/research" component={Research} />
        <Route path="/news" component={News} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
