import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto">
      {recipes?.map((recipe, idx) => {
        return (
          <div
            className="rounded bg-amber-700 bg-opacity-10 overflow-hidden flex flex-col"
            key={idx}
          >
            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full"
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl">{recipe.strMeal}</h2>
              <div>
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-black font-bold text-xl w-full bg-amber-700 bg-opacity-25 rounded py-3 mt-5 hover:bg-amber-700 hover:text-white">
                    Get Recipe Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;