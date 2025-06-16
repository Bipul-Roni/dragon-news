import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      <div className="grid grid-cols-1 gap-3 my-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn flex justify-start w-full bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent "}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
