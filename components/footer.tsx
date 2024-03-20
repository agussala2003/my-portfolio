import { siteConfig } from "@/config/site";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F9F7F7] dark:bg-[#0d0e0e] pt-10 pb-5">
      <h2 className="text-3xl mb-10 md:text-5xl text-center text-[#112D4E] dark:text-[#fff]">
        Contact Me
      </h2>
      <div className="w-5/6 mx-auto flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 flex flex-col">
          <Link
            href="/curriculum.pdf"
            download
            target="_blank"
            className="bg-[#DBE2EF] dark:bg-[#141617] p-10 flex items-center justify-center gap-5 text-xl lg:text-4xl rounded-xl hover:bg-[#c8d5ee] active:bg-[#c8d5ee] dark:hover:bg-[#242424] dark:active:bg-[#242424]"
          >
            <FaFileDownload size={30} />
            <p>Download CV</p>
          </Link>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-between items-center">
            {siteConfig.socials.map((social, index) => (
              <div key={index}>
                <Link
                  className="bg-[#DBE2EF] dark:bg-[#141617] mt-5 p-10 w-full flex items-center justify-center gap-5 text-4xl rounded-xl hover:bg-[#c8d5ee] active:bg-[#c8d5ee] dark:hover:bg-[#242424] dark:active:bg-[#242424]"
                  href={social.href}
                  target="_blank"
                  style={{ color: social.color }}
                >
                  {social.icon({}) || ""}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-[#DBE2EF] dark:bg-[#141617] hover:bg-[#c8d5ee] active:bg-[#c8d5ee] dark:hover:bg-[#242424] dark:active:bg-[#242424] rounded-xl py-5 flex flex-col justify-center items-center gap-5 text-2xl md:text-4xl">
          <p className="text-center w-5/6">
            Do you want to know more about me?
          </p>
          <Link
            href={"mailto:agussala2003@gmail.com"}
            target="_blank"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 md:text-lg"
          >
            Contact Me
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <p className="w-5/6 mx-auto text-center mt-5">
        © {new Date().getFullYear()} All rights reserved | {siteConfig.name}
      </p>
    </footer>
  );
}
