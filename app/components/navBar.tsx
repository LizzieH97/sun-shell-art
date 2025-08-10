import Link from "next/link";

export default function NavBar() {
  const smNavButtonStyling =
    "border-4 h-16 w-20 border-forest rounded-3xl text-forest m-1 text-bark bg-gradient-to-r from-cream via-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark dark:focus:ring-bark text-xl font-bold text-center flex items-center justify-center";
  const navButtonStyling =
    "border-4 h-20 w-40 border-forest rounded-3xl text-forest m-1 text-bark bg-gradient-to-r from-cream via-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark dark:focus:ring-bark text-xl font-bold text-center flex items-center justify-center";
  return (
    <nav className="bg-leaf w-full h-32 border-8 border-peach rounded-3xl flex items-center justify-around">
      <Link href="/">
        <img
          src="/logo.png"
          className="w-28 h-28 rounded-full bg-none border-4 border-black "
        ></img>
      </Link>
      <Link className={navButtonStyling} href="/bycategory">
        View by Category
      </Link>
      <Link className={smNavButtonStyling} href="account">
        <img src="/user.png" className="w-8 h-8"></img>
      </Link>
      <Link className={smNavButtonStyling} href="">
        <img src="/basket.png" className="w-8 h-8"></img>
      </Link>
    </nav>
  );
}
