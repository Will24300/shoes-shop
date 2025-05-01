import React, { useEffect } from "react";
import sneakerCloseup from "../img/sneakerCloseup.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-4 py-10" data-aos="fade-up">
      <h1 className="uppercase text-center text-3xl md:text-4xl font-bold mb-12">
        <span className="text-black">A</span>bout us
      </h1>

      <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={sneakerCloseup}
          alt="Sneaker Closeup"
          className="h-[300px] md:h-[350px] w-full md:w-[40%] object-cover rounded-lg shadow-lg"
        />

        <div className="w-full md:w-[60%] text-center md:text-left text-gray-700 leading-loose">
          <p>
            <span className="text-3xl font-bold">At</span>
            <span className="font-bold"> Sneakers Store</span>, we're more than
            just a sneaker store — we're a movement, a culture, and a
            passion-driven community. Born out of a love for sneakers and
            streetwear, our mission is to bring you the freshest kicks, from
            exclusive drops to timeless classics.
          </p>
          <p className="mt-6">
            We believe that sneakers are more than just footwear — they’re a
            statement. That's why we carefully curate our collection to ensure
            every pair reflects style, authenticity, and top-tier quality.
            Whether you're a collector hunting for limited-edition releases or
            just looking for the perfect everyday sneaker, we've got something
            for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
