import { useEffect, useState } from "react";

const TimelineItem = ({ date, title, description, isRight }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showRight = isMobile || isRight;

  return (
    <div className="relative flex w-full ">
      {showRight ? (
        <>
          {/* Left spacer */}
          <div className="lg:w-1/2 w-1"></div>

          {/* Timeline line */}
          <div className="w-10 flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
            <div className="h-full w-[2px] bg-[#5272b8] z-0"></div>
          </div>

          {/* Right content */}
          <div className="w-1/2 pl-6 text-left pb-8">
            <p className="text-sm font-bold text-white">{date}</p>
            <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
            <p className="text-sm text-slate-300 whitespace-pre-line">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Left content */}
          <div className="w-1/2 pr-6 text-right">
            <p className="text-sm font-bold text-white">{date}</p>
            <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
            <p className="text-sm text-slate-300 whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Timeline line */}
          <div className="w-10 flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
            <div className="h-full w-[2px] bg-[#5272b8] z-0"></div>
          </div>

          {/* Right spacer */}
          <div className="w-1/2"></div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
