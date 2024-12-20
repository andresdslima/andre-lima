import { MdMarkEmailRead } from "react-icons/md";
import { footerButtons } from "../data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  const getSize = (link: string): number => {
    return link.toLowerCase().includes("andre") ? 20 : 30;
  };

  return (
    <footer className="w-full pb-10 mb-[50px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:andresdslima@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<MdMarkEmailRead />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {footerButtons.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
                href={info.link}
                target={info.link.includes("/") ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                <img
                  src={info.img}
                  alt="icons"
                  width={getSize(info.link)}
                  height={getSize(info.link)}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
