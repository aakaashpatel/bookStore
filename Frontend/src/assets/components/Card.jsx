import React from "react";

const Card = ({ item }) => {
  return (
    <div className="">
      <div className="card w-50 bg-base-100 shadow-2xl border-black ">
        <figure>
          <img src={item.image} alt="book" className="hover:scale-125	" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline bg-white p-3 text-black hover:bg-primary hover:text-white">
              {item.category}
            </div>
            <div className="badge badge-outline bg-white p-3 text-black hover:bg-primary hover:text-white">
              {item.pirce}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
