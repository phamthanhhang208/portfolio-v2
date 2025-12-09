import { Github, Globe } from "lucide-react";
import { useTheme } from "../theme-provider";
import { sideProjects } from "@/data";
import { Button } from "../ui/button";

export const Project = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      id="projects"
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Side Projects</h3>
        <p className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Personal projects I've built to explore new technologies and solve
          interesting problems.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all hover:scale-[1.02] ${
                isDarkMode
                  ? "border-gray-800 hover:border-gray-700"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  {project.title}
                  {project.github && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe />
                      </a>
                    </Button>
                  )}
                </h4>
                {/* {project.type && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDarkMode
                        ? "bg-blue-900/30 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.type}
                  </span>
                )} */}
              </div>

              <p
                className={`mb-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded text-xs ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
