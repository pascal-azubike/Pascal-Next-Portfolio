import React, { useState } from "react";
import { Apple, Chrome, Film } from "lucide-react";

const companies = [
  {
    name: "ABC Capital Ltd",
    icon: "/assets/images/abc-logo (1).svg",
    experience: {
      title: "Software Engineer",
      period: "May 2024 - till date",
      location: "Ado Ekiti, Ekiti",
      achievements: [
        "Led 3+ client projects using Next.js, React, and Node.js while mentoring junior developers to full productivity",
        "Built AI-powered recommendation and semantic search system using OpenAI ada 002 model and MongoDB Vector Search",
        "Optimized MongoDB queries and implemented indexing to slash API response times from 3s to 200ms",
        "Built scalable Node.js/MongoDB backend serving 50,000+ daily users with consistent sub-second response times",
        "Modernized React codebase with hooks and better state management, reducing bundle size by 40% and bugs by 70%"
      ]
    }
  },

  {
    name: "Freelancer",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAL6UlEQVR4nO2aeVCTZx7H09ntbPea3XbP2d3ZPzYe1U6tbYCEkANyEJArBHJfhEAgHDmEN+8bBAFFQPFIaZ1aa6tWEK8qHlWX1tsqlYpYW6znVqfjUVG0IESQ/Hae0BwIImqlIvxmvjPJ+z7X9/OceSYk0liMxbAFf0rOb7khhJbPym3iM7FrfFZOWzgr9yafiX/LY+C7WYG4AqUhPWvBZhf+ksfILeQzc9vioo0umVQLSUlJYDQawWKxuJVhtIJCknubz8S/4wTjOWKx+BekZyHYrxX+kcfETsZFGV0KhQpUKhUYDAav8XtlMllAmpDbzmUQh1Fe0kgONrvwd3yW7ZI4QQ9KpdJt3r/XB5NeN/0uj0GcRGWQRmrwWVhTYnyq2zzSYD0/kHSanC4eg9hNGonBCbbJogWZPR7zOp3uocx7JIrJvcmh5cWTRlrwmdg1uVzt7f2MjIxHApCVZQUeAz9DGkkRFoS/FhVu6vaY12g0j2Teo7hptqssGv4qaaQEn4VVJghTvL2fkpLyWAB0mhwXNxgvIY2UEITmHpZKtF4AaWlpjwXAmG4FPhPfShopEc7CzsvlKrd5UZwB0gyZjwXAlG0BPpNoJI2UELBzriDzMqkGEkPNoBZkg0bce9p7VAjhLPybYTdCo1l/LaTaU1NoeIOGil/S0ohzKhq+mknJCxosXzTH2ooACKPSoVbBg863ybBnLguyxKkgibSARmqFFF0OmExDBxIdhp0frM5QKkFVR2fUaOOM5zSxxkuporQGYZg1lc0ufOGRzEupNpGWRtxaTcFdZ1+3wU0qBi3xGByRYZDPx1tEIcR+biDxJ/88dDr2+0SGaTs32OZCAGI4FriRPRGcS8ng3NSrG2snwp55TKgwSiBFaARphBkk0yygjDWDVmQCjcgMGpEF1CITKGLMII8ygyLKBOF0rDuRa/4Y1eFfJ5sy/c8JXPPBmUnKlsa3qHDz44nQ0TgOvt0zBWoWRLq0scZbYo7p4c4RcrrdiAXh3S2vY9A+FYP2EAwcETicUtqgPRlz64gU6xGF4OdRAzz5EpmWVbs1zLsyXjagRTBFYACnhQzOZT4AA6lj4zi4XPUK/G/5lD5qqZnkfW8W62HXXEZ3Asey0lMfY6r9Lwlc0/nGt4N6+pS5hQzOBjI4T5DhRsNEsOk13cpoc9qQzDMCiQlGKu5sRcaRAjBo12AwPxKHr5S95j36QmbriafbP/PkFTNM3yDDekE6xIdZYF8SY0gAHiQPAPRZzLV41wIR11TftDiwj/nTy6bCpkI+tNeOA2dTL4S2xvGQIU3tZNOIcQ8EkBRMfH7C0/NI0b1mBwKANEuAXw8NwNgobwLDtLxOzeo2R+qhwzKu1/yPAJZj0VCgUbu1q5zVzyR65nmP0g4E4L9zQrsSeab3UV0cOhZWopfe8E9XbpCCRZoM6sgsSI83wMVNr7oBIH21jQJJwvT6Qc2z2YUvGKj2dq95BEIzOIAmhQ0kdGItyo8uMxKYlk2CYOzubXNfAN/XTPYO7ZvrJvYDgJ553qO09wIID8G6ErjmjZ4LE0m4af3XSyi+/GsnQI5MByeXvgELMxLh8EI6bCzmg/PLXgBIBrGhPWJc9q/uC4BFtU0qo+FdXgBUn1EEYK8YhzMqDM6pMWj78fkPOgwSQ4hm/3KSw9Oar2RO9gF4hwydG8mwIF0MK219e9dfH80MhxK9HNo/Gtfn+ZWqV0DMMx/wr0PMM59EYPzTod53ZCaAWZLsBuF+fswHoNQi7UJT/L4AwqgExRFk6/YCoPkAfJJog3IB4dV3Wt87cYj9tH85KRHpO06kBvgAVJLhhw0TQMCwgWZaZh9jSJ7vJrEeODTCvSD6GzuxJACkPFOVfx0SnunMQKNoXb4ArBIdTJfpoGlxEDiP+gA4iIRuJi3vjftPgcDcvxNUwukFQMGgXdd/2PvrstYGYjp+xL+cCHquqko2zeUFMKu3gd8unwJXqn3De2sxzy3P92s1k+Ds+1P7jYzlWNRtfrBN1mcE8LMbPLsEEho19Y5g7xQ4tCgElqPRdtwHANdrnByq/W+kwUJDs7fc8ABAkg4OoFaEdcfQ7Db/Mmi0wpeMgtQOL4AcMjjX9x/yH5dw3HrQLpAUlXGJwSBe9K8jJsxq3zab0+2/ThiEafBJGRtm6+WwKCMRPl3A9pr/oXECaGMzWgY1j0JCt9tWBOIuL4Cw+5tv1WEgY+D9GodCzcvY/pkuxDcNHANvb/fO43u1v4LRI+Kaa+4tH0FWRGZd8l8vTrwTAIVJKvcugNaTzsO+3l9ZFu2SC7Iw0lBucFVU4mz9GzbfKIjrbx4tfgU82404Wl7KQOUEB+f8NZmfdtt9EvSMgtUPt/9fX/MyyCOyLqEDz0B1xIVa02YmKVr9IaLPaCo5P/WZP7KBBqqYzNNDvmmm0QpfUtOIc1WBuKvVsx1G+9YDtBNkhuHXhIy8GYOVE8+YLrZFabq8W2KBbyrM1KrcOwIS+nyv+dsfob0/uSWSgQkHq0MUZs3PTtRfu7BiSm/eWjI4d/94ADo2HqoqIl2q6MyzyBPpYYJCMTyvoBOFahrRWkTF7ywJsvUspNucqSziqphOfM4NIAKHUo6Wn45ZInVd32dN9kFYR4a29ePdvwn2zmNC24bxfcxfWz0JHWSuCTmW9KHUwaHZghJ52UcMIsNVh03kXDortqc4U3FHE5vRKo/MKkBeSI8TYZQZ5NAAOxv94uJR8D88bP4YtjVCw8to3aAMd7Wj0YCRwfkeGZwb+/Y6ms/r8gUdYp75Aj84h/Ow9aC2oTaitjICiP+QnqagUAp/o+Bllik4WW3FQgXUyCOhLpUNdRgbamyRUKxTQDzHfDmWnZOP0pKe1VBzMxzrpeGwQxUGNfZIt3aWhsH6/HAQsq1zSM9yUCiG5+PZ1to9GmbveuA3/NF6EMHIXfPY8/VpDQaDeJFHJy5IRTmdWl4WtJl8Cx9aELUxWSAV5XagNAOdK0ZscGh5/xSw8s3CiFkNMYIZbeh6K1lphdI4hRdAWZoc9Oreqy/htII7SvG8M0LBLIxOx/5BGsnG48KLa9SSeVeWvVvbdfBAPUiFs713fMooC+ytYMHeCiaohGbvc7loDjR/fRrWrt4F6cmVnarEedtRWaSnLWI4xXxJ7JzLyoSyDqW4zKkUl99WJM5tUSTOvYqkUy7sSNU6wF/JqgWgkpR5lSwvcavPM9UCd1pD0puQpqt0K0Xj6FaK532PylVJKlr0asftVG2lU69ydCgTKi5HhBZwh9U8m2J/GZmuqdkAmzZtgi1btkBDQwM0NjYOi44dOwYXLlyAixcvQnPzGUhRO5xhAfkThw2APL5s9eK3PnSbR9q9e/ewmffo1KlTbgBIdTvrQSOZXz1sAGTC0qaqVeu8APbv3z/sAJqbm70Avjz+DWik85uGDYBUWHr8aQOglsw/PgZguEI6NgJKH3sKHDp0BN59p9atQ4c+H11T4MCBepBIF4KkrA4kpXUgli2CgwfrRw+A8rK1IHPsB/2nl92SLdoH5eVrRg+AoqJqUCxt8AKQv3sEioqrRw+Andv3QbysEtTVX4G6+gSIZJWwc8e+0QOgsbERtm7dA5bpH7i1beue0bUINv4EGgPQPDYCYGwKXBxbA2BsEbw4jLtABKNwsjimpDqKU3TdbHS4MMviHqQCYplrVv7KnieugpWu2TM/BKTS4mqYW7LGNW/O2p5Z+atcsfzZ15UJFdWojU8MACvALsoyLII3F65wa8niGlhTveNn1dba/bBj2yG3ivJWAWrjEwMQQsH/rZHN7fTs/5s3b4ajR48O+xlgoLtBJGPyW53sINu/SE8yRNNm15UUv+fyQNi1a9fPBsD/XnDFsh0umbD8k0f19Rw70F7EDrKXP0isQPuiUKr9jlRY2jk9u/JurvntHiJniXOGbdmtAuKD1uFQUd6KWyWFVU40/+cUVd9Nki3sDKXmOVHbhuIBeUWeSf7BDJhBZwcQvNEg5PWnmA3PVDzHDiTqWIH2L3wiDnv+m8MOIrb0fff0ix1o3+z5rxLy0vcdUddvCowFaXTG/wGAnxczf8OOPQAAAABJRU5ErkJggg==",
    experience: {
      title: "Full Stack Developer",
      period: "Jan 2023 - till date",
      location: "World Wide",
      achievements: [
        "Developed and deployed scalable, full-stack web applications for multiple clients",
        "Optimized backend services with Node.js, reducing server response times by up to 40%",
        "Implemented SEO and SSR strategies with Next.js",
        "Integrated third-party APIs and payment systems seamlessly"
      ]
    }
  },
  {
    name: "CITE UNIPORT",
    icon: "/assets/images/uniport.svg",
    experience: {
      title: "Software Engineer Intern",
      period: "Feb 2020 - Nov 2022",
      location: "Choba, Port-Harcourt",
      achievements: [
        "Led a team of interns to design and launch a campus-wide web app",
        "Collaborated with senior developers to apply best practices in scalable code architecture",
        "Coordinated timelines and milestones, ensuring project completion from start to finish",
        "Developed modular code components, enhancing development efficiency and scalability",
        "Supervised testing and deployment, delivering a fully functional app used by the university community"
      ]
    }
  }
];

const WorkExperience = () => {
  const [activeCompany, setActiveCompany] = useState(companies[0]);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-10 lg:mt-20 max-w-2xl mx-auto relative">
        <div className="">
          <div className="absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-purple-500 animate-shooting-star"></div>
          </div>

          <style jsx>{`
            @keyframes shooting-star {
              0% {
                transform: translateY(-100%);
                opacity: 0.2;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: translateY(100%);
                opacity: 0;
              }
            }

            .animate-shooting-star {
              background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 112, 255, 0.4) 10%,
                rgba(138, 43, 226, 0.8) 50%,
                rgba(138, 43, 226, 0.8) 70%,
                rgba(255, 255, 255, 0) 100%
              );
              animation: shooting-star 5s cubic-bezier(0.7, 0, 0.3, 1) infinite;
            }
          `}</style>

          <div className="flex flex-row md:flex-col h-full relative overflow-x-auto md:overflow-x-visible">
            {companies.map((company, index) => (
              <button
                key={index}
                className={`px-4 py-2 my-4 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group 
                  ${
                    activeCompany.name === company.name
                      ? "bg-gradient-to-br from-zinc-700 to-zinc-800"
                      : "hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800"
                  } transition-all duration-300 ease-in-out`}
                onClick={() => setActiveCompany(company)}
              >
                <div className="bg-red-500 p-1 h-7 w-7 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <img
                    src={company.icon}
                    alt={`${company.name} icon`}
                    className="h-5 w-5"
                  />
                </div>
                <span className="ml-2 group-hover:text-white transition-colors duration-300 ease-in-out">
                  {company.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:pl-10 flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">
                {activeCompany.experience.title} @{" "}
                <span className="text-blue-400">{activeCompany.name}</span>
              </h3>
              <p className="text-zinc-400 text-sm tracking-widest">
                {activeCompany.experience.period}
              </p>
              <p className="text-zinc-400 text-sm">
                {activeCompany.experience.location}
              </p>

              <ul className="list-disc list-inside text-gray-300">
                {activeCompany.experience.achievements.map(
                  (achievement, index) => (
                    <li
                      key={index}
                      className="flex flex-row space-x-2 items-start my-2"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                      </svg>
                      <span className="text-zinc-400 text-sm">
                        {achievement}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
