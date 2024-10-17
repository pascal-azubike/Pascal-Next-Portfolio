import { HoverEffect } from "./ui/card-hover-effect";

export default function PortfolioGrid() {
  return (
    <div className="max-w-7xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "PlumbreedPuzzle",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/projects/plumbreedPuzzle",
    image: "/assets/images/plumbreedpuzzle.png"
  },
  {
    title: "Wellcresttherapy",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "/projects/wellcrestherapy",
    image: "/assets/images/wellcrstherapy.png"
  },
  {
    title: "Denmarkmultibuzltd",
    description:
      "An e-commerce platform with advanced product management and optimized user experience.",
    link: "/projects/denmarkMultibuz",
    image: "/assets/images/denmark.png"
  },
  {
    title: "BlogVana",
    description:
      "A feature-rich blog platform with semantic search and personalized content recommendations.",
    link: "/projects/blogvana",
    image: "/assets/images/blogvana.png"
  },
  {
    title: "Analytical Dashboard",
    description:
      "An interactive data visualization tool for real-time business analytics and insights.",
    link: "/projects/analyticalDashboard",
    image: "/assets/images/analyticaldashboard.png"
  }
];
