import Link from "next/link";

export default function Projects() {
  return (
    <main className="transition-colors duration-[2000ms] w-full h-full bg-[#CCC6B0] dark:bg-[#05080E] flex flex-col gap-4 items-center justify-center text-black dark:text-white">
      <h1>This page is currently under construction, please </h1>
      <Link href={"https://github.com/CaseSens"}>
        <button>visit my github</button>
      </Link>
    </main>
  );
}
