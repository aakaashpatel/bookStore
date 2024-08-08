import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import list from "../../../public/list.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Course = () => {
  const notFree = list.filter((data) => data.category !== "free");

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-2xl mx-auto mt-12  md:px-20 px-4 text-center">
        <h1 className=" text-4xl font-bold pt-10">
          We have all type of Like <span className="text-pink-600">Poet</span>,
          <span className="text-pink-600">Novel</span> ! etc..
        </h1>
        <p className="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          harum numquam tempore unde illo odio, iusto sapiente, illum fugiat
          alias nulla voluptatibus! Minima quasi nesciunt neque nulla est nisi
          voluptatem maiores, nihil quos quisquam officiis nobis quidem.
          Sapiente, praesentium sunt.
        </p>
        <Link to="/" className="bg-primary text-white btn mt-4">
          Back
        </Link>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-4">
          {notFree.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
