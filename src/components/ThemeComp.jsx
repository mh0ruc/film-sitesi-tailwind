"use client"
import React, { useEffect, useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && (
        currentTheme === "dark" ? (
          <CiLight onClick={() => setTheme("light")} className="cursor-pointer" size={30} />
        ) : (
          <CiDark onClick={() => setTheme("dark")} className="cursor-pointer" size={30} />
        )
      )}
    </div>
  );
}

export default ThemeComp;
