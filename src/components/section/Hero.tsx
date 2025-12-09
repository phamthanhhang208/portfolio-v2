import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../theme-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RESUME } from "@/data";

export const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <Badge
            variant="secondary"
            className="dark:bg-green-900/30 dark:border-green-800 dark:text-green-300 bg-green-50 border-green-200 text-green-700"
          >
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold my-6">
            Hi, I'm Hang 👋
          </h2>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Front-end Engineer & Software Developer
          </p>
          <p
            className={`text-lg max-w-3xl mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm a passionate software engineer specializing in front-end
            development with React and TypeScript. I have strong experience
            modernizing legacy codebases, building real-time dashboards for
            DeFi, and architecting enterprise-scale inventory systems. Currently
            working at Teko on cutting-edge lending platforms.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button className="rounded-lg font-medium">
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <a
              href="https://github.com/phamthanhhang208"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/phamthanhhang208"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:phamthanhhang.208@gmail.com"
              className={`p-3 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div
            className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-xl ${
              isDarkMode ? "border-gray-800" : "border-white"
            }`}
          >
            <img
              src="https://github.com/phamthanhhang208.png"
              alt="Pham Thanh Hang"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
