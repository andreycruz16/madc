import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
  toggleTheme: () => void;
}

export default function Header({ toggleTheme }: Props) {
  return (
    <header className="bg-gray-200 py-4 px-8 top-0 w-full dark:bg-gray-900 transition duration-200">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-sans dark:text-gray-100">
          <Link href="/">MADC</Link>
        </h1>
        <ul className="flex space-x-4 dark:text-gray-100">
          <li className="hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:font-bold">
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl dark:text-yellow-400 hover:scale-125 ease-in-out duration-200"
              onClick={toggleTheme}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
