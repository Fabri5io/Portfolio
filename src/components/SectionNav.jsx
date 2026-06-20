import { useState, useEffect } from "react";

const sections = [
  { id: "home",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact"  },
];

export const SectionNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = "home";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 items-center">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          className="group relative flex items-center"
        >
          <div
            className={`w-[3px] h-9 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-gradient-to-b from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                : "bg-white/15 group-hover:bg-white/35"
            }`}
          />
          <span
            className={`absolute left-4 whitespace-nowrap text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              active === id ? "text-blue-400" : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};
