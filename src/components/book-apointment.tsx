import React from "react";
import { CalendarForm } from "./bookNow";
import { CardSpotlightDemo } from "./booknowSteps";

export const BookApointment = () => {
  return (
    <section id="book-apointment" className="sc-grid sc-grid-two ">
      <div className="container ">
        <div className="services-content">
          <div className="title-box text-center">
            <div className="content-wrapper flex flex-col justify-center items-center mx-auto ">
              <div className="mt-12 flex pt-6   lg:pt-0 flex-wrap justify-center bg-white  md:border  rounded-3xl">
                <CardSpotlightDemo />

                <CalendarForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
