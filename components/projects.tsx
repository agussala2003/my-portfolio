import Image from "next/image";
import Link from "next/link";

export default function Project({
  title,
  description,
  link,
  code,
  image,
  techStack,
}: {
  title: string;
  description: string;
  link: string;
  code: string;
  image: string;
  techStack: string[];
}) {
  return (
    <div className="md:flex md:flex-row items-center justify-around bg-[#DBE2EF] dark:bg-[#141617] w-full h-[550px] md:h-96 rounded-xl transition-all duration-300 ease-in-out">
      <div className="h-2/5 md:h-5/6 w-full md:ms-8 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl md:rounded-xl"
        />
      </div>
      <div className="flex flex-col mt-5 md:mt-0 items-center md:items-start justify-center h-1/2 md:h-5/6 md:ms-4 md:justify-start w-full p-4">
        <h2 className="text-xl text-[#112D4E] dark:text-[#fff] md:text-2xl lg:text-4xl font-bold">
          {title}
        </h2>
        <p className="text-center w-5/6 sm:w-4/5 md:text-start mt-3 md:mt-5 md:text-base lg:text-xl text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {techStack.map((tech, index) => (
            <p
              key={index}
              className="text-xs md:text-small lg:text-base bg-[#141617] dark:bg-[#242424] text-gray-200 dark:text-gray-400 px-2 py-1 rounded-md"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-4 mt-5">
          {link && (
            <Link
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 md:text-sm"
            >
              Live Demo
            </Link>
          )}
          <Link
            href={code || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 md:text-sm"
          >
            Open Code
          </Link>
        </div>
      </div>
    </div>
  );
}
