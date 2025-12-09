import { ThemeProvider } from "@/components/theme-provider";
import { Header, Footer, DockNavigation } from "@/components/layout";
import {
  Hero,
  About,
  Skill,
  Certificates,
  Contact,
  WorkExperience,
  Project,
} from "@/components/section";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen pb-20 transition-colors">
        <Header />
        <Hero />
        <About />
        <Skill />
        <WorkExperience />
        <Project />
        <Certificates />
        <Contact />
        <DockNavigation />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
