import Image from "next/image";
import React from "react";

export const MeetDr = () => {
  return (
    <section className="sc-grid sc-grid-one">
      <div className="container">
        <div className="grid-content d-grid align-items-center px-6">
          <div className="grid-img  hidden md:inline-block   rounded-md shadow-md object-cover">
            <Image
              src="/assets/images/Oladunni.png"
              alt=""
              width={500}
              height={300}
              className="border w-full border-[#e5caf0]"
            />
          </div>

          <div className="grid-text">
            <div className="content-wrapper text-start">
              <div className="title-box">
                <h3 className="title-box-name text-white">
                  Welcome To Our Practice
                </h3>
                <div className="title-separator mx-auto"></div>
              </div>
              <div className="grid-img max-w-[60vw] md:hidden  rounded-md shadow-md object-cover">
                <Image
                  src="/assets/images/Oladunni.png"
                  alt=""
                  width={500}
                  height={300}
                  className="border w-full  border-[#e5caf0] "
                />
              </div>
              <p className="text title-box-text text-white">
                wellcresttherapy is a mental health practice that provides
                telepsychiatry services to patients in and around Atlanta,
                Georgia, North Carolina, Washington, and Florida. Under the
                compassionate care of doctorally prepared and psychiatric mental
                health nurse practitioner Oladunni Faminu DNP, PMHNP. Patients
                receive the best in psychotherapy and medication management.
              </p>
              <button type="button" className="btn btn-white-outline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
