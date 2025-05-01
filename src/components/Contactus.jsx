import React from "react";

function Contactus() {
  return (
    <section className="mb-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="max-w-2xl mx-auto text-center mb-10">
        Our team is ready to assist you — drop us a message and we'll get back
        to you shortly.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 border border-gray-200 p-4 rounded">
        {/* Map */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5772549392946!2d30.053859274085042!3d-1.9204750366462555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3f75b7b8b91%3A0xc9ab953c704fa9d3!2sULK!5e0!3m2!1sfr!2scd!4v1745499128582!5m2!1sfr!2scd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded"
          ></iframe>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-5">
            Message Us
          </h2>

          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="border border-gray-300 p-3 rounded"
              ></textarea>
              <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
