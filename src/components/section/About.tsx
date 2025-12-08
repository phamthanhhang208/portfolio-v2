import { useTheme } from "../theme-provider";

export const About = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      id="about"
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">About</h3>
        <div
          className={`text-lg space-y-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>
            I'm a software engineer with a strong focus on front-end development
            and user experience. I graduated from Hanoi University of Science
            and Technology in September 2022 with a BSc in Software Engineering.
          </p>
          <p>
            Throughout my career, I've worked on diverse projects ranging from
            enterprise inventory management systems to modern web applications.
            I'm passionate about writing clean, maintainable code and staying
            up-to-date with the latest web technologies. I have strong English
            proficiency (IELTS 7.5, TOEIC 960) which enables me to work
            effectively in international teams.
          </p>
          <p>
            Currently, I'm focused on React ecosystem, performance optimization,
            and building scalable frontend architectures. I enjoy solving
            complex problems and continuously learning new technologies to
            deliver better solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
