import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors ${
        isDarkMode
          ? "bg-black/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      } backdrop-blur-lg`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Pham Thanh Hang</h1>
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};
