import React from "react";
import list from "../../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const Freebook = () => {
  const filterdata = list.filter((data) => data.category === "free");
  console.log(filterdata);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container max-w-screen-2xl mx-auto mt-12  md:px-20 px-4">
      <div className="slider-container">
        <Slider {...settings}>
          {filterdata.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
