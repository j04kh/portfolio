import ToggleThemeIcon from "./ToggleThemeIcon";
import { useContext } from "react";
import ThemeContext from "../context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="w-full h-12 px-3 bg-zinc-100 dark:bg-zinc-900 z-20 bg-opacity-75 fixed flex items-center justify-between backdrop-blur-sm drop-shadow-md transition-all ease-in duration-50">
      <a href="#">
        <h1 className="font-light">
          {"<"}
          <span className="font-bold">JH</span>
          {" />"}
        </h1>
      </a>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <ToggleThemeIcon theme={theme} />
      </button>
    </header>
  );
};

export default Navbar;
