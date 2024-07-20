export default function Root() {
  return (
    <main className="container mx-auto h-screen dark:text-gray-100">
      <h1 className="text-3xl uppercase font-bold p-4">All Apps</h1>
      <ul className="flex flex-col">
        <li className="p-4 w-fit">
          <div>Minimalist Digital Clock:</div>
          <a href="https://madc-clock.vercel.app" className="underline hover:text-blue-500" target="_blank">
            https://madc-clock.vercel.app
          </a>
        </li>
        <li className="p-4 w-fit">
          <div>Black Screen:</div>
          <a href="https://blackscreenapp.vercel.app" className="underline hover:text-blue-500" target="_blank">
            https://blackscreenapp.vercel.app
          </a>
        </li>
        <li className="p-4 w-fit">
          <div>Birthdays:</div>
          <a href="https://madc-birthdays.vercel.app" className="underline hover:text-blue-500" target="_blank">
            https://madc-birthdays.vercel.app
          </a>
        </li>
        <li className="p-4 w-fit">
          <div>Medicine List:</div>
          <a href="https://madc-medicine.vercel.app/" className="underline hover:text-blue-500" target="_blank">
            https://madc-medicine.vercel.app/
          </a>
        </li>
      </ul>
    </main>
  );
}
