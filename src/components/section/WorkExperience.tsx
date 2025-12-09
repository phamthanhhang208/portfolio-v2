import { workExperience } from "@/data";
import { useTheme } from "../theme-provider";
import { ChevronRight, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { twMerge } from "tailwind-merge";

export const WorkExperience = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      id="work"
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Work Experience</h3>
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className={`rounded-xl border overflow-hidden ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              {/* Job Header */}
              <div
                className={`p-6 ${
                  isDarkMode ? "bg-gray-900" : "bg-gray-50"
                } border-b ${
                  isDarkMode ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h4 className="text-2xl font-bold">{job.role}</h4>
                    <p
                      className={`text-lg font-medium ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {job.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <span
                      className={`text-sm block font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {job.period}
                    </span>
                    <div
                      className={`flex items-center md:justify-end gap-1 text-sm ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {job.description}
                </p>
              </div>

              {/* Job Projects */}
              <div
                className={`p-6 space-y-8 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                {job.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800"
                  >
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                        isDarkMode
                          ? "bg-black border-zinc-500"
                          : "bg-white border-zinc-600"
                      }`}
                    />
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h5 className="text-lg font-bold">{project.title}</h5>
                      {project.links &&
                        project.links.map((link, lIndex) => (
                          <Badge
                            key={lIndex}
                            variant="secondary"
                            className={twMerge(link.color)}
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="flex flex-row gap-1">
                                {link.label}
                                <ExternalLink className="w-3 h-3" />
                              </div>
                            </a>
                          </Badge>
                        ))}
                    </div>
                    <p
                      className={`text-sm mb-3 italic ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {project.summary}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className={`px-2 py-0.5 text-xs rounded border ${
                            isDarkMode
                              ? "border-gray-700 bg-gray-800 text-gray-300"
                              : "border-gray-200 bg-gray-50 text-gray-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <ChevronRight
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isDarkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                          />
                          <span
                            className={
                              isDarkMode ? "text-zinc-300" : "text-zinc-700"
                            }
                          >
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
