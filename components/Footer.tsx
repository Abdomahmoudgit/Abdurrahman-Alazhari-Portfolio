import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import type { Content, SocialKey } from "@/data";
import { contactEmail, web3formsKey } from "@/data/shared";
import ContactForm from "./ContactForm";
import MagicButton from "./MagicButton";
import SectionHeading from "./SectionHeading";

const socialIcons: Record<SocialKey, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  facebook: FaFacebook,
};

const Footer = ({ content }: { content: Content }) => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundImage: "url(/footer-grid.svg)" }}
    >
      <div className="flex flex-col items-center">
        <SectionHeading heading={content.headings.contact} className="lg:max-w-[45vw]" />
        <p className="text-fg-soft md:mt-10 my-5 text-center max-w-2xl">{content.contactIntro}</p>
        {/* Falls back to a mailto button until a Web3Forms key is set */}
        {web3formsKey ? (
          <ContactForm t={content.form} />
        ) : (
          <MagicButton
            title={content.getInTouch}
            icon={<FaLocationArrow className="rtl:-scale-x-100" />}
            position="right"
            href={`mailto:${contactEmail}`}
          />
        )}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light text-fg-soft">
          © {new Date().getFullYear()} {content.ui.copyright}
        </p>

        <div className="flex items-center gap-4 md:gap-3">
          {content.socialMedia.map(({ id, link, label, key }) => {
            const Icon = socialIcons[key];
            return (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
                aria-label={label}
                title={label}
                className="w-10 h-10 flex justify-center items-center backdrop-blur-lg rounded-lg border border-line/15 bg-chip/70 text-fg-muted hover:text-purple transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
