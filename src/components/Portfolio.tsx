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
      "Faith-based e-commerce platform with seamless Jumia integration, dynamic product management, content management system",
    link: "/projects/plumbreedPuzzle",
    image: "/assets/images/plumbreedpuzzle.png"
  },
  {
    title: "Analytical Dashboard",
    description:
      "Interactive data visualization platform with real-time charting, dynamic filtering, and axis toggling using Flask and React.js.",
    link: "/projects/analyticalDashboard",
    image: "/assets/images/analyticaldashboard.png"
  },
  {
    title: "Denmarkmultibuzltd",
    description:
      "Modern e-commerce platform with advanced product management, real-time search, and optimized media delivery using Next.js and MongoDB.",
    link: "/projects/denmarkMultibuz",
    image: "/assets/images/denmark.png"
  },
  {
    title: "BlogVana",
    description:
      "Feature-rich blog platform with semantic search using ML algorithms, MongoDB vector search, and comprehensive user authentication.",
    link: "/projects/blogvana",
    image: "/assets/images/blogvana.png"
  }
];
