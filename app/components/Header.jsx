"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];

  return (
    <div className="py-5 px-2 sm:px-10 bg-amber-700 bg-opacity-10 flex items-center justify-around">
      <div>
        <Link href="/">
          <h1 className="text-purple text-black-700 font-bold text-4xl text-center">
            RecipeFinder
          </h1>
        </Link>
      </div>
      {pathname && currentArea && (
        <div>
          <Link
            className="bg-amber-700 text-white p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;