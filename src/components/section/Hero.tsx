import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../theme-provider";

export const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm Hang 👋</h2>
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
          development with React and TypeScript. I graduated from Hanoi
          University of Science and Technology with a degree in Software
          Engineering (GPA: 3.43). Currently working as a Front-end Engineer at
          Kyber Network, where I focus on modernizing legacy codebases and
          building performant, maintainable user interfaces. I have experience
          with full-stack development, authentication systems, and working with
          enterprise-level applications.
        </p>
        <div className="flex gap-4">
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
    </section>
  );
};
