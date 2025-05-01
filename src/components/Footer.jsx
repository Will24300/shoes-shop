import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-950 p-10 pb-7 mt-10 text-white">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div>
          <h2 className="text-3xl font-bold">Sneakers!</h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10 w-full md:w-2/3">
          <ul>
            <li className="font-semibold mb-2">Shop</li>
            <li>Men's Sneakers</li>
            <li>Women's Sneakers</li>
            <li>Kids</li>
            <li>New Arrivals</li>
          </ul>
          <ul>
            <li className="font-semibold mb-2">Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
          <ul>
            <li className="font-semibold mb-2">Support</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-sm">
        &copy; 2025 <span className="font-bold">Sneakers</span>. All rights
        reserved.
        <br />
        Designed & developed by{" "}
        <span className="text-teal-400 font-medium">Volonte Rwicha</span>
      </p>
    </footer>
  );
}

export default Footer;
