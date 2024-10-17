import React from "react";
import { ContactUs } from "./contactUs";
import PrimaryHeading from "./primaryHeading";

export function ContactUsComp() {
  return (
    <section
      id="contact"
      className=" px-4  rounded-xl lg:px-20  py-[40px] contact md:py-[100px] contact"
    >
      <div className=" mx-auto lg:max-w-4xl ">
        <div className=" text-center text-white">
          <PrimaryHeading>
            <div className="mb-6 lg:mb-[40px]">
              <h3 className="font-bold text-[30px] md:text-[50px]  ">
                Contact Us
              </h3>
              <div className=" border-t bg-slate-950 max-w-[203px] mx-auto mt-2"></div>
            </div>
          </PrimaryHeading>
          <span className=" block mt-2 text-lg">
            Do you bring Partnership or Have a question ?<br /> Feel free to
            contact Us by submitting the form below, and Our help desk will get
            back to you as soon as possible.
          </span>
        </div>
        <div className=" mt-8 bg-white   p-8  shadow-lg">
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
