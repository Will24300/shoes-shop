import React from "react";
import { Shoes } from "./shoes/Shoes";
import Aboutus from "./Aboutus";
import ShoesDisplayer from "./ShoesDisplayer";
import Comments from "./Comments";
import Contactus from "./Contactus";
import Footer from "./Footer";

function Main({ activeIndex }) {
  return (
    <>
      <section className="clip-triangle w-[100%] h-[45vh] lg:w-full lg:h-[100vh] overflow-hidden mb-10  ">
        <div
          className="w-[500vw] flex items-center transition-all duration-1000 ease-in-out text-white "
          style={{ transform: `translateX(-${100 * activeIndex}vw)` }}
        >
          <div className="img-layout ">
            <img
              src={Shoes.jordan1[2].img}
              alt=""
              className=" img-layout2 imgResp-layout rotate-[-15deg] "
            />
            <div className="bgResp-layout   bg-layout bg-red-950  "></div>
            <p className="priceResp-layout lg:border-red-950  price-layout z-30 ">
              $29
            </p>
            <button className="button-layout buttonResp-layout">
              <a href="#buyNow">BUY NOW!</a>
            </button>
            <h2 className="name-layout hidden lg:block">
              {Shoes.jordan1[0].name} <br /> new <br />
              season
            </h2>
          </div>
          <div className="img-layout">
            <img
              src={Shoes.vapormax[1].img}
              alt=""
              className=" img-layout2 imgResp-layout rotate-[-10deg] "
              width={670}
            />
            <div className="w-[350px] h-[350px] lg:w-[640px] lg:h-[640px] bg-teal-700 absolute mt-95 left-7 lg:left-1/4  lg:mt-162 rounded-full z-10 "></div>
            <p className=" priceResp-layout lg:border-teal-700 price-layout ">
              $34
            </p>
            <button className="button-layout buttonResp-layout">
              <a href="#buyNow  ">BUY NOW!</a>
            </button>
            <h2 className="name-layout hidden lg:block">
              {Shoes.vapormax[0].name} <br /> new <br />
              season
            </h2>
          </div>

          <div className="img-layout">
            <img
              src={Shoes.airforce[2].img}
              alt=""
              className="img-layout2 imgResp-layout rotate-[-10deg] "
              width="700px"
            />
            <div className=" bgResp-layout   bg-layout bg-[rgb(226,115,41)] "></div>
            <p className="priceResp-layout lg:border-[rgb(226,115,41)] price-layout">
              $27
            </p>
            <button className="button-layout buttonResp-layout">
              <a href="#buyNow">BUY NOW!</a>
            </button>
            <h2 className="name-layout hidden lg:block">
              {Shoes.airforce[0].name} <br /> new <br />
              season
            </h2>
          </div>
          <div className="img-layout">
            <img
              src={Shoes.jordan4[2].img}
              alt=""
              className=" img-layout2 imgResp-layout rotate-[-12deg] "
              width={600}
            />
            <div className="bgResp-layout   bg-layout bg-gray-400"></div>
            <p className="priceResp-layout lg:border-gray-400 price-layout">
              $35
            </p>
            <button className="button-layout buttonResp-layout">
              <a href="#buyNow">BUY NOW!</a>
            </button>
            <h2 className="name-layout hidden lg:block ">
              {Shoes.jordan4[0].name} <br /> new <br />
              season
            </h2>
          </div>
          <div className="img-layout">
            <img
              src={Shoes.jordan11[1].img}
              alt=""
              className="  imgResp-layout rotate-[-13deg] z-20 w-[85%]  absolute mt-90 mr-15 "
              width={700}
            />
            <div className="bgResp-layout bg-layout bg-red-900 "></div>
            <p className="priceResp-layout lg:border-red-900 price-layout">
              $40
            </p>
            <button className="button-layout buttonResp-layout">
              <a href="#buyNow">BUY NOW!</a>
            </button>
            <h2 className="name-layout hidden lg:block">
              {Shoes.jordan11[0].name} <br /> new <br />
              season
            </h2>
          </div>
        </div>
      </section>

      <div>
        <Aboutus />
      </div>

      <div>
        <ShoesDisplayer activeIndex={activeIndex} />
      </div>

      <div>
        <Comments />
      </div>

      <div>
        <Contactus />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
