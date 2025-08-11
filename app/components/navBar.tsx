import Link from "next/link";
import { useBasket } from "../context/basketContext";

export default function NavBar() {
  const { basket } = useBasket();
  const smNavButtonStyling =
    "border-4 border-lavender rounded-3xl text-bark bg-gradient-to-r from-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20";

  const navButtonStyling =
    "border-4 border-lavender rounded-3xl text-bark bg-gradient-to-r from-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark text-xs lg:text-lg font-bold text-center flex items-center justify-center w-24 h-12 lg:w-32 lg:h-20";
  return (
    <nav className="bg-grape w-full border-4 border-lavender rounded-3xl flex flex-row items-center justify-around p-2 gap-2 lg:mt-8 sm:gap-4">
      <Link href="/">
        <img
          src="/logo.png"
          className="w-16 h-16 rounded-full border-4 border-lavender lg:w-20 lg:h-20"
        ></img>
      </Link>
      <Link className={navButtonStyling} href="/bycategory">
        View by Category
      </Link>
      <Link className={smNavButtonStyling} href="account">
        <img src="/user.png" className="w-4 h-4 lg:w-10 lg:h-10"></img>
      </Link>
      <Link className={`relative ${smNavButtonStyling}`} href="/basket">
        <img src="/basket.png" className="w-4 h-4 lg:w-10 lg:h-10"></img>
        {basket.length ? (
          <div className="absolute -top-1 -right-1 bg-red-700 text-white rounded-full px-1 text-xs h-4 flex items-center justify-center">
            {basket.length}
          </div>
        ) : null}
      </Link>
    </nav>
  );
}
