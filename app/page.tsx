import Link from "next/link";
export default function Root() {
  return (
    <main className="container mx-auto h-screen">
      <div className="text-2xl uppercase font-bold py-4">All Apps</div>
      <ul className="flex flex-col">
        <li className="p-1 w-fit">
          <text className="font-bold">MADC Clock: </text>
          <a href="https://madc-clock.vercel.app" target="_blank">
            https://madc-clock.vercel.app
          </a>
        </li>
        <li className="p-1 w-fit">
        <text className="font-bold">Black Screen: </text>
          <a href="https://blackscreenapp.vercel.app" target="_blank">
            https://blackscreenapp.vercel.app
          </a>
        </li>
      </ul>
    </main>
  );
}
