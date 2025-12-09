import { Mail } from "lucide-react";
import { useTheme } from "../theme-provider";
import { EMAIL } from "@/data";

export const Contact = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      id="contact"
      className={`py-20 px-6 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p
          className={`text-lg mb-8 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Want to chat about a project or opportunity? Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            <Mail className="w-5 h-5" />
            {EMAIL}
          </a>
          <a
            href="tel:+84915258989"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors border ${
              isDarkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            (+84) 915 258 989
          </a>
        </div>
      </div>
    </section>
  );
};
