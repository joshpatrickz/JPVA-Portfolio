import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-500"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((item, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  ) : (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-60">
      <div className="aspect-video overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-xs text-slate-400 italic">Coming Soon</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
