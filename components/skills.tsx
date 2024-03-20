export default function Skills({
  icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <div className="text-gray-400 bg-[#DBE2EF] dark:bg-[#141617] w-5/6 sm:w-[48%] lg:w-[30%] h-16 sm:h-20 rounded-xl flex justify-center gap-4 items-center hover:bg-[#c8d5ee] active:bg-[#c8d5ee] dark:hover:bg-[#242424] dark:active:bg-[#242424] transition-all duration-300 ease-in-out">
      <div className={`text-3xl`} style={{ color: color }}>
        {icon()}
      </div>
      <p className="text-xl text-[#112D4E] dark:text-gray-400">{label}</p>
    </div>
  );
}
