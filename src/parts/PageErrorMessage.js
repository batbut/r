import React from "react";

import { Link } from "react-router-dom";

export default function PageErrorMessage({
  title = "404 NOT FOUND",
  body = "Looks like this page not found",
}) {
  return (
    <section className="mt-28">
      <div className="container min-h-screen mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center md:w-4/12">
            <h2 className="mb-6 text-3xl font-semibold">{title}</h2>
            <p className="mb-12 text-lg">{body}</p>
            <Link
              to="/"
              className="w-full px-8 py-3 text-lg text-gray-900 transition-all duration-200 bg-red-200 rounded-full cursor-pointer focus:outline-none focus:text-black"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}