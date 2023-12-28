import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieInfo = () => {
  const { isopen, setIsopen } = useState(false);
  const { price, setPrice } = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(",");

  const rentMovie = () => {
    setIsopen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsopen(true);
    setPrice(999);
  };
  return (
    <>
      {/* <PaymentModel setIsopen={setIsopen} isopen={isopen} price={price} />; */}
      <div className="flex flex-col-reverse gap-8">
        <h1 className="text-white text-5xl fonr-bold">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>4.4k rating</h4>
          <h4>kannada, English, Telugu, Hindi, Tamil</h4>
          <h4>
            {movie.runtime}min | {genres}
          </h4>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 px-3  py-3 text-white font-semibold rounded-lg">
              Rent $149
            </button>
            <button className="bg-red-500 px-3  py-3 text-white font-semibold rounded-lg">
              Buy $999
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;