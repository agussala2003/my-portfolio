import Link from "next/link";

export default function Personal() {
  return (
    <div className="text-center">
      <span className="bg-indigo-200 text-indigo-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-indigo-900 dark:text-indigo-300">
        Actually Working!
      </span>
      <h1 className="text-5xl my-5 md:text-6xl w-[90%] mx-auto text-[#112D4E] dark:text-[#fff]">
        Full Stack Developer
      </h1>
      <p className="text-lg font-small w-5/6 m-auto md:text-xl text-gray-500 dark:text-gray-400">
        I&apos;m a passionate Full Stack Developer who loves to code and solve
        problems.
      </p>
      <Link
        href={"mailto:agussala2003@gmail.com"}
        target="_blank"
        className="mt-5 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 md:text-lg"
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
  );
}
