import { createContext, useContext } from "react";

export type Theme = "light" | "dark";
export const storageKey = "app-theme";

export const ThemeProviderContext = createContext<
  | {
      theme: Theme;
      setTheme: (t: Theme) => void;
    }
  | undefined
>(undefined);

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
