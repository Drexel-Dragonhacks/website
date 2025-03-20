import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full" id="faq">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD0XKFp2OMz5wSymu4VNTEQU9UNOKTEMgCz2MbSDO7Zn0zQg/viewform?usp=sf_link"><p className="relative z-20">REGISTER NOW</p></a>
          </div>
        )}
      </div>
    </div>
  );
};

const Faq = () => (
  <section className="bg-black pb-10">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          WHO WE ARE
        </p>
        <p className="max-w-2xl font-circular-web text-lg text-blue-50 opacity-50">
        Welcome to DragonHacks 2025! DragonHacks is Drexel University's 24-hour hackathon which will be hosted by Drexel University IEEE in Spring of 2025. The 2025 edition is bringing the brightest minds of the world's best schools to spend 24 hours creating groundbreaking new products from scratch! This year, we are planning a fully in-person hackathon experience. There will be meet-ups with representatives from various companies, team-building events, tech talks, and workshops, as well as a number of other fun events, all in 24 hours. We hope to see you here!
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              What is a Hackatho<b>n</b>?
            </>
          }
          description="A hackathon is an event where students 'hack' together and develop an app, website, game, etc. in 24-48 hours. There will be no malicious 'hacking.' It's about having fun, being creative, and challenging yourself to build something amazing!"
          isComingSoon
        />
      </BentoTilt>

      <div className="grid min-h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 pb-24">
          <BentoCard
            src=""
            title={
              <>
                Who can attend?
              </>
            }
            description="DragonHacks is open to all university students aged 18 or older. No prior hackathon or experience is necessary since the event will have workshops and plenty of learning opportunities."
      
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src=""
            title={
              <>
                When and where is it?
              </>
            }
            description="The hackathon is the weekend of April 26th, 2025. It will be held in-person at Drexel University's LeBow College of Business (3220 Market St, Philadelphia, PA 19104). More details about the event will be emailed to you closer to the event date!"
            
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src=""
            title={
              <>
                No team or idea?
              </>
            }
            description="Many of our hackers don't have a team coming in, and find them at the event! We have a ton of team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks.                  "

          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src=""
            title={
              <>
                Prizes?
              </>
            }
            description="There are plenty of prizes to be won! A unique element of DragonHacks is the jaw-dropping prize pool where the winner gets the first choice of prizes, down to the 2nd runner-up, with every member choosing one prize each."

          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src=""
            title={
              <>
                Travel reimbursement?
              </>
            }
            description="Unfortunately, DragonHacks does not provide travel reimbursement at this time."

          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
          <BentoCard
            src=""
            title={
              <>
                Cost?
              </>
            }
            description="Thanks to our wonderful sponsors, DragonHacks is free for all who attend!"

          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
          <BentoCard
            src=""
            title={
              <>
                Team size?
              </>
            }
            description="Each team may have a maximum of three members."

          />
        </BentoTilt>
        <h1 className="bento-title special-font">SPONSORS</h1>
      </div>
    </div>
  </section>
);

export default Faq;
