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
    title: "Street Comfort",
    description:
      "A modern e-commerce platform for footwear, featuring advanced product management, real-time inventory tracking, and seamless user experience.",
    link: "/projects/street-comfort",
    image: "/assets/images/streetcomfortshop.png"
  },
  {
    title: "PlumbreedPuzzle",
    description:
      "A Christian game puzzle that specializes in sales of custom christian games and puzzles",
    link: "/projects/plumbreedPuzzle",
    image: "/assets/images/plumbreedpuzzle.png"
  },
  {
    title: "Wellcresttherapy",
    description:
      "A full stack web app for healthcare practitioner with advanced Admin dashboard ",
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
