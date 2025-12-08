import {
  Home,
  User,
  FolderOpen,
  Briefcase,
  Award,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "../theme-provider";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Briefcase, label: "Work", id: "work" },
  { icon: FolderOpen, label: "Projects", id: "projects" },
  { icon: Award, label: "Certificates", id: "certificates" },
  { icon: MessageCircle, label: "Contact", id: "contact" },
];

export const DockNavigation = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className={`flex gap-2 px-4 py-3 rounded-2xl border backdrop-blur-xl transition-colors ${
          isDarkMode
            ? "bg-gray-900/90 border-gray-700"
            : "bg-white/90 border-gray-300 shadow-lg"
        }`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode
                  ? "hover:bg-gray-800 focus:ring-gray-600"
                  : "hover:bg-gray-100 focus:ring-gray-400"
              }`}
              title={item.label}
              aria-label={`Navigate to ${item.label} section`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>
    </div>
  );
};
