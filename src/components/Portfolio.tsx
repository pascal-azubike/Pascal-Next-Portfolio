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
      "E-commerce platform for footwear with advanced product management.",
    link: "/projects/street-comfort",
    image: "/assets/images/streetcomfortshop.png"
  },
  {
    title: "Fouani Store Clone",
    description: "E-commerce clone with automated scraping, seamless admin interface.",
    link: "/projects/fouani-store-clone",
    image: "/assets/images/fuaniClone.png"
  },
  {
    title: "NeuTribes Collective",
    description:
      "Digital platform celebrating African voices through publishing, fashion.",
    link: "/projects/neutribes-collective",
    image: "/assets/images/neutribesHome.png"
  },
  {
    title: "Elior Industries Nigeria",
    description:
      "Website showcasing premium Turkish steel doors, architectural systems.",
    link: "/projects/elior-industries-ng",
    image: "/assets/images/eliorIndustry.png"
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
