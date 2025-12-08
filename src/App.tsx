import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { DockNavigation } from "./components/layout/DockNavigation";
import { Hero, About, Skill } from "./components/section";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Skill />
        <DockNavigation />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
