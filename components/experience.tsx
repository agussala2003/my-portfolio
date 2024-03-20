import { IoBusiness } from "react-icons/io5";
import { MdBusinessCenter, MdAccessTimeFilled } from "react-icons/md";
export default function Experience({ siteConfig }: { siteConfig: any }) {
  return (
    <div className="flex flex-row flex-wrap justify-between mt-10 gap-5">
      <div className="w-[100%] bg-[#DBE2EF] dark:bg-[#141617] h-min p-10 rounded-xl">
        <ul className="flex flex-col justify-center gap-10">
          <li className="text-3xl md:text-5xl">Jobs</li>
          <div>
            <ul className="flex flex-col justify-center gap-10">
              {siteConfig.experiences.map((business: any, index: any) => (
                <li
                  className="text-xl flex flex-col md:flex-row justify-between gap-3 md:gap-5"
                  key={index}
                >
                  <p className="flex items-center md:w-4/12 gap-3">
                    <IoBusiness />{" "}
                    <span className="text-nowrap truncate">
                      {business.business}
                    </span>
                  </p>
                  <p className="flex items-center md:w-4/12 gap-3">
                    <MdBusinessCenter />{" "}
                    <span className="truncate">{business.charge}</span>
                  </p>
                  <p className="flex items-center md:w-4/12 gap-3 ">
                    <MdAccessTimeFilled />{" "}
                    <span className="truncate">{business.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
      <div className="w-[100%] bg-[#DBE2EF] dark:bg-[#141617] h-min p-10 rounded-xl">
        <ul className="flex flex-col gap-10">
          <li className="text-3xl md:text-5xl">Education</li>
          <div>
            <ul className="flex flex-col gap-10">
              {siteConfig.education.map((education: any, index: any) => (
                <li
                  className="text-xl flex flex-col md:flex-row justify-between gap-3 md:gap-5"
                  key={index}
                >
                  <p className="flex items-center md:w-4/12 gap-3 ">
                    <IoBusiness />{" "}
                    <span className="truncate">{education.business}</span>
                  </p>
                  <p className="flex items-center md:w-4/12 gap-3 ">
                    <MdBusinessCenter />{" "}
                    <span className="truncate">{education.charge}</span>
                  </p>
                  <p className="flex items-center md:w-4/12 gap-3 ">
                    <MdAccessTimeFilled />{" "}
                    <span className="truncate">{education.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
