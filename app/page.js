import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-screen w-full homepage">
      <div className="text-center font-extrabold w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="md:text-7xl text-2xl text-wrap my-5">Welcom to <span className=" md:text-7xl text-2xl text-amber-700">RecipeFinder</span></h1>
        <p className="my-5 text-2xl">Discover the rich and delicious cuisines from all around the world at your fingertips</p>
        <Link
          className="shadow-gray-50 bg-amber-700 bg-opacity-30 rounded text-2xl py-3 px-4 cursor-pointer hover:bg-amber-700 hover:text-white"
          href="/types"
        >
          List of Cuisines
        </Link>
      </div>
    </div>
    </>
    
  );
}
