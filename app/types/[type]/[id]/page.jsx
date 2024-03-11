"use client"
import Image from "next/image";

async function getRecipeDetails(id) {
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return res.json();
}

export default async function Page({ params }) {
    const recipeDetails = await getRecipeDetails(params.id);
    const details = recipeDetails.meals[0];
    const ingredients = Object.keys(details)
        .filter((key) => key.indexOf("Ingredient") > 0)
        .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
        .filter(Boolean);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-amber-700 bg-opacity-60">
            <div>
                <Image
                    alt="Recipe"
                    width={500}
                    height={500}
                    src={details.strMealThumb}
                    className="w-full"
                />
            </div>
            <div className="p-5 flex flex-col justify-start items-center">
                <h1 className="text-4xl font-bold p-5">
                    Recipe Name:{" "}
                    <span className="font-bold text-4xl">{details.strMeal}</span>
                </h1>

                <div className="tags mt-3 text-center">
                    <p className="mb-3 text-xl font-medium">Ingredients List:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {ingredients.map((tag, i) => (
                            <span
                                key={i}
                                className="bg-amber-700 text-white px-2 py-2 inline-block rounded mb-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="tags mt-3 p-3">
                    <div className="flex justify-between">
                        <p className="font-bold text-xl p-1">Category: {details.strCategory}</p>
                        <p className="font-bold text-xl p-1">Area: {details.strArea}</p>
                    </div>
                    <p className="font-bold text-xl pt-2">Instructions:</p>
                    <p className=" text-pretty text-medium">{details.strInstructions}</p>
                </div>

                <div className="mt-3">
                    <button
                        className="text-black font-bold bg-transparent border border-solid border-black rounded py-2 px-4 hover:bg-amber-700 hover:text-white transition duration-300"
                        onClick={() => window.open(details.strYoutube, "_blank")}
                    >
                        How to make {details.strMeal}
                    </button>
                </div>

            </div>
        </div>
    );
}
