import { ThemeProvider } from "@/components/theme-provider";
import { Demo } from "./components/Demo";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Demo />
    </ThemeProvider>
  );
}

export default App;
