import Image from "next/image";
export default function Avatar() {
  return (
    <div className="h-48 w-48 md:w-72 md:h-72 relative">
      <div className="p-3 animate-spin drop-shadow-sm bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 h-48 w-48 md:w-72 md:h-72 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
      </div>
      <Image
        src="/avatar.jpg"
        alt=""
        className="p-image absolute top-0 rounded-full object-cover z-10 scale-95"
        width={300}
        height={300}
      ></Image>
    </div>
  );
}
