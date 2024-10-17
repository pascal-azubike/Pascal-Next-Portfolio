import Image from "next/image";

import Banner from "./banner";

import { Service } from "./service";
import { BookApointment } from "./book-apointment";
import { MeetDr } from "./meetDr";
import { ContactUsComp } from "./contact-us";
import { ArticlesComp } from "./articlesComp";

const Services = () => {
  return (
    <main>
      <Service />
      <div className=" mt-20">
        <MeetDr />
      </div>

      <div className=" !my-20">
        <BookApointment />
      </div>

   
   

      <section className=" !my-20  !mt-40 max-w-6xl mx-auto md:px-10  text-white ">
        <Banner />
      </section>
      <div>
        
        <ArticlesComp />
      </div>
    </main>
  );
};

export default Services;
