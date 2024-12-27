import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import LandingPageImg from "../../assets/LandingPage.jpg";

// Import Pic
import Services1 from "../../assets/Services1.jpg";
import Services2 from "../../assets/Services2.jpg";
import Services3 from "../../assets/Services3.jpg";
import Services4 from "../../assets/Services4.jpg";
import Maps from "../../assets/Maps.png";

// Import Icons
import { TbMapSearch } from "react-icons/tb";
import Footer from "../../Components/Footer/Footer";

const LandingPage = ({ testimonials }) => {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${LandingPageImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-4 px-4 text-center text-white">
          <h1 className="text-3xl lg:text-5xl font-montserrat">
            Welcome To TimelessSpaces!
          </h1>
          <p className="text-lg lg:text-xl font-montserrat">
            "We offer our services, woven with care and dedication, to meet your
            every need."
          </p>
          <Link to="/Register">
            <button className="p-2 border border-black rounded-xl bg-[#213555] text-white hover:scale-105 transition-all duration-300 w-full sm:w-96">
              Register Now!
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-10 bg-[#D8C4B6]">
        <h1 className="mb-8 text-3xl font-bold lg:text-5xl font-montserrat">
          Our Services
        </h1>
        <div className="grid w-full grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {/* Service 1 */}
          <div className="flex flex-col items-center justify-center p-3 text-center shadow-lg bg-[#213555] rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src={Services1}
              alt=""
              className="object-cover w-full mb-4 rounded-md h-60"
            />
            <h3 className="text-xl font-bold text-white font-nunito">
              Interior Design
            </h3>
            <p className="font-normal text-gray-400 font-nunito">
              Transform your space with elegant interior design services that
              suit your style and budget.
            </p>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center justify-center p-3 text-center shadow-lg bg-[#213555] rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src={Services2}
              alt=""
              className="object-cover w-full mb-4 rounded-md h-60"
            />
            <h3 className="text-xl font-bold text-white font-nunito">
              Architecture Consulting
            </h3>
            <p className="font-normal text-gray-400 font-nunito">
              Get professional advice and consulting for your construction or
              renovation projects.
            </p>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center justify-center p-3 text-center shadow-lg bg-[#213555] rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src={Services3}
              alt=""
              className="object-cover w-full mb-4 rounded-md h-60"
            />
            <h3 className="text-xl font-bold text-white font-nunito">
              Project Management
            </h3>
            <p className="font-normal text-gray-400 font-nunito">
              Let us help you manage and oversee your projects with expert
              guidance and support.
            </p>
          </div>
          {/* Service 4 */}
          <div className="flex flex-col items-center justify-center p-3 text-center shadow-lg bg-[#213555] rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src={Services4}
              alt="Renovation"
              className="object-cover w-full mb-4 rounded-md h-60"
            />
            <h3 className="text-xl font-bold text-white font-nunito">
              Renovation
            </h3>
            <p className="font-normal text-gray-400 font-nunito">
              Transform your space with a complete renovation, bringing new life
              to your home or office.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-10 bg-[#D8C4B6]">
        <h1 className="mb-8 text-3xl font-bold text-center lg:text-5xl font-montserrat">
          Our Beloved Clients Testimony
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 p-8 sm:grid-cols-2">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-[#213555] text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="mb-4 text-xl font-bold">{testimonial.Name}</h3>
                <p className="text-gray-300 font-nunito">
                  {testimonial.testimony}
                </p>
                <p className="text-gray-300 font-nunito">
                  Ratings : {testimonial.Ratings} / 5
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-600">No testimonials available.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 p-5 bg-[#D8C4B6]">
        <div>
          <img src={Maps} alt="" className="w-full h-auto rounded-lg sm:w-96" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 border bg-[#213555] p-6 h-auto sm:h-96 rounded-lg text-white">
          <div>
            <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl font-montserrat">
              You can freely visit us during business hours!
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3 text-center">
            <TbMapSearch className="text-4xl sm:text-6xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl">
              456 Sunset Boulevard, Los Angeles, CA 90028
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
