import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 py-4 px-8 top-0 w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MADC</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
