import { Calendar, ExternalLink, Github, Globe, Trophy } from "lucide-react";
import { useTheme } from "../theme-provider";
import { hackathons } from "@/data";
import { Button } from "../ui/button";

export const Hackathon = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      id="hackathons"
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Hackathons</h3>
        <p className={`mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Projects shipped against the clock — building, learning, and
          competing alongside other developers.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((h, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all hover:scale-[1.02] ${
                isDarkMode
                  ? "border-gray-800 hover:border-gray-700"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {"award" in h && h.award && (
                <div className="flex items-center gap-1.5 mb-3 w-fit px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-medium">
                  <Trophy className="w-3 h-3" />
                  {h.award}
                </div>
              )}
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  {h.title}
                  {"github" in h && h.github && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={h.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </Button>
                  )}
                  {"link" in h && h.link && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe />
                      </a>
                    </Button>
                  )}
                  {h.devpost && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={h.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Devpost"
                      >
                        <ExternalLink />
                      </a>
                    </Button>
                  )}
                  {"customLinks" in h &&
                    h.customLinks?.map((cl, i) => (
                      <Button key={i} variant="ghost" size="sm">
                        <a
                          href={cl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={cl.label}
                        >
                          <ExternalLink />
                        </a>
                      </Button>
                    ))}
                </h4>
              </div>
              <p
                className={`text-sm font-medium mb-1 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {h.event}
              </p>
              <div
                className={`flex items-center gap-1.5 text-xs mb-4 ${
                  isDarkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                <Calendar className="w-3 h-3" />
                {h.date}
              </div>
              <p
                className={`mb-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {h.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {h.tags.map((tag, i) => (
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
