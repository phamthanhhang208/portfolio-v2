import { skills } from "@/data";
import { useTheme } from "../theme-provider";

export const Skill = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                  : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
