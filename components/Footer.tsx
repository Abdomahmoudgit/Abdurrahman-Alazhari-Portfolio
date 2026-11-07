import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundImage: "url(/footer-grid.svg)" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and explore how I can help you build high-quality,
          responsive, and scalable web solutions.
        </p>
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          href="mailto:abdolrahmanalazhary@gmail.com"
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-6 md:mb-0 text-white-200">
          Copyright © {new Date().getFullYear()} Abdurrahman Al-Azhari
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, link, label, Icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              aria-label={label}
              title={label}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-white-100 hover:text-purple transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
