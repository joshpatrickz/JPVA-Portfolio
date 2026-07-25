import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-0 shadow-md hover:shadow-2xl duration-1000 border-[#404040] rounded-xl overflow-hidden block"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full rounded-xl hover:shadow-sm p-1 h-52 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-xl md:text-xl mb-2 md:mb-3">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border rounded-md shadow-inner border-[#e4e4e4]"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  ) : (
    <div className="border-0 shadow-md hover:shadow-2xl duration-1000 border-[#404040] rounded-xl overflow-hidden opacity-70">
      <img
        src={imgUrl}
        alt={title}
        className="w-full rounded-xl hover:shadow-sm p-1 h-52 md:h-48 object-cover"
      />
      <div className="w-full p-4">
        <h3 className="text-xl md:text-xl mb-2 md:mb-3">{title}</h3>
        <p className="text-xs text-gray-400 italic">Coming Soon</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
