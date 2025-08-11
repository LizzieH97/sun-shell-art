import Link from "next/link";
import { useBasket } from "../context/basketContext";

export default function NavBar() {
  const { basket } = useBasket();
  const smNavButtonStyling =
    "border-4 h-16 w-20 border-lavender rounded-3xl text-bark m-1 text-bark bg-gradient-to-r from-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark dark:focus:ring-bark text-xl font-bold text-center flex items-center justify-center";
  const navButtonStyling =
    "border-4 h-20 w-40 border-lavender rounded-3xl m-1 text-black bg-gradient-to-r from-petal to-peach hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-bark dark:focus:ring-bark text-xl text-center flex items-center justify-center";
  return (
    <nav className="bg-grape w-full h-32 border-4 border-lavender rounded-3xl flex items-center justify-around">
      <Link href="/">
        <img
          src="/logo.png"
          className="w-28 h-28 rounded-full bg-none border-4 border-lavender "
        ></img>
      </Link>
      <Link className={navButtonStyling} href="/bycategory">
        View by Category
      </Link>
      <Link className={smNavButtonStyling} href="account">
        <img src="/user.png" className="w-8 h-8"></img>
      </Link>
      <Link className={smNavButtonStyling} href="/basket">
        <img src="/basket.png" className="w-8 h-8"></img>
        {basket.length ? (
          <div className="bg-red-700 text-white rounded-full px-1 text-xs h-4">
            {basket.length}
          </div>
        ) : null}
      </Link>
    </nav>
  );
}
