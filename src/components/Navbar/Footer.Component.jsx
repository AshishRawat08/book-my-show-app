import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-darkBackground-600 p-1 lg:flex hidden md:hidden">
        <div className="flex flex-row justify-around items-center w-full p-3 gap-5">
          <div className="flex flex-col items-center p-1 m-1 cursor-pointer">
            <RiCustomerService2Fill className="w-20 h-16 text-gray-300" />
            <p className="text-gray-300">24/7 CUSTOMER CARE</p>
          </div>
          <div className="flex flex-col items-center p-1 m-1 cursor-pointer">
            <GiTicket className="w-20 h-16 text-gray-300" />
            <p className="text-gray-300">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="flex flex-col items-center p-1 m-1 cursor-pointer">
            <SlEnvolopeLetter className="w-20 h-16 text-gray-300" />
            <p className="text-gray-300">SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
      </div>
      <div className="bg-darkBackground-700 p-1  lg:flex flex-col hidden md:hidden">
        <div className="flex flex-col ml-16 justify-center items-start">
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">
              Movies Now Showing In Bangalore
            </h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Oppenheimer</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Barbie</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Killers of the Flower Moon</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Extraction II</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Wednesday </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">The Night Agent </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Ginny & Georgia </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">The Glory</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Pathaan</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Upcoming Movies in Bangalore</h5>
            <div className="text-xs pl-1 pt-1 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/"> Tauba Tera Jalwa</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Merry Christmas[</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Dashmi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Main Atal Hoon</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Fighter</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Section 108</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Untitled film</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Operation Valentine</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/"> The Crew</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer  hover:text-gray-300">
                <Link to="/">Yodha</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Movies By Genre</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Horror</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Action</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Adventure</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Comedy</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Crime and mystery </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Historical</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Romance</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Science fiction</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Speculative</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Thriller</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Animation</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Drama</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Simulation</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Sports Event in Bangalore</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Boxing</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Badminton</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Gymnastics</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Archery</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Volleyball </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Table Tennis</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Swimming</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Events In Top Cities </h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Bangalore</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Mumbai</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Delhi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Kolkata</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Chennai</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Ahemdabad</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Hyderabad</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Pune</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Noida</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Event in Gurugram</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Cinemas In Top Cities</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Bangalore</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Mumbai</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Delhi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Kolkata</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Hyderabad</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Pune</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Noida</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Cinemas in Gurugram</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Plays In Top Cities</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Bangalore</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Mumbai</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Delhi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Kolkata</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Gurugram</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Noida</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Plays in Dehradun</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Activities In Top Cities</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Bangalore</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Delhi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Kolkata</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Gurugram</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Kochi</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Noida</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Things to do in Dehradun</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Movies Now Showing</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Aquaman and the Lost Kingdom.</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Godzilla Minus One</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">The Marvels.</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Extraction II</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Wednesday </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">The Night Agent </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Ginny & Georgia </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">The Glory</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/"> Pathaan</Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Countries</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Indonesia</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Singapore</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">UAE</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Shri Lanka</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">West Indies </Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">Help</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">About Us</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Contact Us</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Current Opening</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Press Release</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Press Coverage</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Sitemap </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">FAQs </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Terms And Conditons </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer">
                <Link to="/">Privacy Policy </Link>
              </span>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <h5 className="text-sm pl-2 pt-3">BookMyShow Exclusives</h5>
            <div className="text-xs pl-1 pt-2 text-gray-500">
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Lollapalooza India</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Superstar</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">BookASmile</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Corporate Vouchers II</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Gift Cards </Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">List My Show</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Offers</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Stream</Link>
              </span>
              <span className="pl-2  pr-2 border-r-2 border-gray-500 cursor-pointer hover:text-gray-300">
                <Link to="/">Trailers</Link>
              </span>
            </div>
          </div>
        </div>
        <div>
          <hr class="w-full h-px my-8 border-0 dark:bg-gray-400"></hr>
        </div>
        <div className="flex flex-col justify-center items-start">
          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-4/5 h-px my-8 border-0 dark:bg-gray-400"></hr>
            <span class="absolute inline-block px-3 left-3/2 dark:text-white bg-darkBackground-700">
              book
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-8 h-8 inline-block"
              />
              show
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start mt-8 mb-12">
          <div class="inline-flex items-center justify-center w-full">
            <div className="w-12 h-12 inline-block mr-2 p-2 border-2 border-gray-600 rounded-full">
              <FaFacebookF className="w-8 h-8 text-gray-600" />
            </div>
            <div className="w-12 h-12 inline-block mr-2 p-2 border-2 border-gray-600 rounded-full">
              <FaXTwitter className="w-8 h-8 text-gray-600" />
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
