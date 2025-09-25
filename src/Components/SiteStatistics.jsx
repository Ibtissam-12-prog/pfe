import React, { useRef, useState } from "react";

const stats = [
  {
    label: "Visitors",
    value: 1200,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M2 20c0-4 8-6 10-6s10 2 10 6v2H2v-2z" />
      </svg>
    ),
  },
  {
    label: "Purchases",
    value: 350,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="7" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </svg>
    ),
  },
  {
    label: "Artisans Joined",
    value: 85,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4.5 4.5 0 019 0v2" />
      </svg>
    ),
  },
  {
    label: "Customized Pieces",
    value: 200,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

function useAnimatedCounter(target, isActive) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  React.useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }
    let startTime = null;
    const duration = 1200;
    function animateCounter(ts) {
      if (!startTime) startTime = ts;
      const progress = ts - startTime;
      const next = Math.min(target, Math.floor((progress / duration) * target));
      setCount(next < target ? next : target);
      if (next < target) {
        ref.current = requestAnimationFrame(animateCounter);
      }
    }
    ref.current = requestAnimationFrame(animateCounter);
    return () => ref.current && cancelAnimationFrame(ref.current);
  }, [target, isActive]);
  return count;
}

function useInView(threshold = 0.3) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function SiteStatistics() {
  const [sectionRef, inView] = useInView(0.3);
  return (
    <section ref={sectionRef} className="w-full py-12 px-2 artisans-section">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-2 tracking-tight drop-shadow-sm">
          Our Impact in Numbers
        </h2>
        <p className="text-orange-700 text-lg opacity-80">
          Celebrating the vibrant community and creativity of our artisans and
          customers
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((stat) => {
          const count = useAnimatedCounter(stat.value, inView);
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-xl py-8 px-4 border border-orange-100 hover:shadow-2xl transition-transform duration-200 hover:scale-105 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, hsla(15, 75%, 55%, 0.1), hsla(15, 70%, 25%, 0.1))",
                boxShadow: "0 6px 32px 0 rgba(230, 120, 60, 0.08)",
              }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
                }}
              >
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-orange-900 select-none drop-shadow mb-1">
                {count}
              </span>
              <span className="text-base md:text-lg font-semibold text-orange-900 opacity-90 select-none mt-1">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
