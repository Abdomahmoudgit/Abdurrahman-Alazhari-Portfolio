import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  /** Classes for the outer element */
  className?: string;
  /** Classes for the inner (visible) surface */
  otherClasses?: string;
  /** When set, renders an <a> instead of a <button> */
  href?: string;
  download?: boolean;
  newTab?: boolean;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  className = "",
  otherClasses = "",
  href,
  download,
  newTab,
}: MagicButtonProps) => {
  const outerClass = `relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px]
                 focus:outline-none transition-transform duration-300 hover:scale-105 ${className}`;

  const content = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                      bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
                      transition-opacity duration-300 hover:opacity-80"
      />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2
                    transition-colors duration-300 hover:bg-slate-800 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={outerClass}
        download={download || undefined}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={outerClass} onClick={handleClick}>
      {content}
    </button>
  );
};

export default MagicButton;
