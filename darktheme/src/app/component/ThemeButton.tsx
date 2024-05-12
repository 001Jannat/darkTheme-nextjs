"use client"
import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { TbMoon } from "react-icons/tb";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-10 h-10 cursor-pointer p-3 float-right mr-5">
        {theme === "dark" ? <IoSunny /> : <TbMoon />}

    </div>
  );
}
