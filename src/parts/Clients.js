import React from "react";

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div
          className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0"
        >
          <img src="./images/content/logo-adobe.svg" alt="" className="mx-auto" />
        </div>
        <div
          className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0"
        >
          <img src="./images/content/logo-ikea.svg" alt="" className="mx-auto" />
        </div>
        <div
          className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0"
        >
          <img
            src="./images/content/logo-hermanmiller.svg"
            alt=""
            className="mx-auto"
          />
        </div>
        <div
          className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0"
        >
          <img src="./images/content/logo-miele.svg" alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}