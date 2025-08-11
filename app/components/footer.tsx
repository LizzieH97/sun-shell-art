import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-around lg:justify-end bg-beige text-grape gap-8 p-1 pr-2 lg:pr-16 w-full border-4 border-grape rounded-2xl">
      <p className="text-sm lg:text-base text-center lg:w-auto w-36">
        Made by Lizzie 💕
      </p>
      <Link
        href="https://www.linkedin.com/in/elizabeth-hughes-347633171/"
        target="_blank"
      >
        <img src="/linkedin.png" className="lg:w-12 lg:h-12 w-8 h-8"></img>
      </Link>
      <Link href="https://github.com/LizzieH97" target="_blank">
        <img src="/github.png" className="lg:w-12 lg:h-12 w-8 h-8"></img>
      </Link>
      <img src="/next.svg" className="lg:w-12 lg:h-12 w-8 h-8"></img>
    </div>
  );
}
