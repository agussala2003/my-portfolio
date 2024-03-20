import Avatar from "@/components/avatar";
import Personal from "@/components/personal";
import { siteConfig } from "@/config/site";
import Socials from "@/components/socials";
import Skills from "@/components/skills";
import CarouselComponent from "@/components/carousel";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <section>
      <div
        id="home"
        className="flex flex-col sm:flex-row sm:w-5/6 sm:mx-auto justify-center items-center gap-5 sm:justify-between mx-auto"
      >
        <div className="w-5/6 sm:w-[49%] h-96 sm:h-[652px] rounded-xl bg-[#DBE2EF] dark:bg-[#141617] flex justify-center items-center transition-all duration-300 ease-in-out">
          <Avatar />
        </div>
        <div className="w-5/6 sm:w-[49%] h-96 sm:h-[652px] rounded-xl bg-[#DBE2EF] dark:bg-[#141617] flex justify-center items-center transition-all duration-300 ease-in-out">
          <Personal />
        </div>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row sm:w-5/6 sm:mx-auto justify-center items-center gap-5 sm:justify-between mx-auto mt-5">
        {siteConfig.socials.map((social, index) => (
          <Socials
            key={`${social}-${index}`}
            icon={social.icon}
            href={social.href}
            label={social.label}
            color={social.color}
          />
        ))}
      </div>
      <div id="skills" className="mt-20 w-5/6 mx-auto">
        <span className="bg-purple-200 text-purple-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300">
          Skills
        </span>
        <h2 className="text-3xl my-5 md:text-5xl text-[#112D4E] dark:text-[#fff]">
          My Experience with
        </h2>
        <h2 className="text-3xl my-5 md:text-5xl text-[#112D4E] dark:text-gray-400">
          Different Technologies
        </h2>
        <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-5 sm:justify-between mx-auto mt-10">
          {siteConfig.skills.map((skill, index) => (
            <Skills
              key={`${skill}-${index}`}
              icon={skill.icon}
              label={skill.label}
              color={skill.color}
            />
          ))}
        </div>
      </div>
      <div id="projects" className="mt-20">
        <div className="w-5/6 mx-auto flex flex-col justify-center items-center">
          <span className="bg-green-200 text-green-800 text-md text-center font-medium me-2 px-2.5 py-1 rounded dark:bg-green-900 dark:text-green-300">
            Projects
          </span>
          <h2 className="text-3xl mt-5 md:text-5xl text-[#112D4E] dark:text-[#fff]">
            Selected Projects
          </h2>
        </div>
        <CarouselComponent />
      </div>
      <div id="experience" className="mt-20 w-5/6 mx-auto ">
        <span className="bg-yellow-200 text-yellow-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Experience
        </span>
        <h2 className="text-3xl my-5 md:text-5xl text-[#112D4E] dark:text-[#fff]">
          Jobs and Education
        </h2>
        <Experience siteConfig={siteConfig} />
      </div>
    </section>
  );
}
