import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 p-3">
      {/* Set a wider fixed width & proper height for the image */}
      <div className="card bg-base-100 w-full shadow-sm h-full flex flex-col hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-[350px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>

        <div className="card-body flex flex-col justify-between flex-grow">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="flex-grow">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-2 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
