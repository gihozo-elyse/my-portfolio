import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Firebase CRUD To-Do App with Authentication",
    description: "Secure task manager featuring Firebase auth and realtime CRUD.",
    tags: ["Firebase", "React", "Auth"],
    image: "/images/1.png",
    liveUrl: "https://firebase-crud-to-do-app-with-authen-two.vercel.app/login",
  },
  {
    title: "Freelance Management Dashboard",
    description: "A mini-dashboard that displays clients, projects, and payments using TypeScript for type safety.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/2.png",
    liveUrl: "https://freelance-management-dashboard-gwtr.vercel.app/",
  },
  {
    title: "Book Explorer",
    description: "Typed React app showcasing strict models and reusable hooks.",
    tags: ["HTML", "JavaScript", "Tailwind CSS"],
    image: "/images/3.png",
    liveUrl: "https://phase-one-capstone-projects.vercel.app/",
  },
  {
    title: "Inzora Ecommerce",
    description: "InzoraShopHub is a modern, responsive e-commerce website built with React and styled with Tailwind CSS. It features a clean, user-friendly interface with dynamic product displays, category filtering, and a responsive navigation system.",
    tags: ["React", "Tailwind CSS"],
    image: "/images/44.png",
    liveUrl: "https://ecommerce-react-project-xi.vercel.app/",
  },
  {
    title: "Developer Dashboard",
    description: "A modern, responsive Developer Dashboard built with React that displays real-time data from GitHub and weather APIs. Features a beautiful Light/Dark mode toggle for enhanced user experience.",
    tags: ["React", "Tailwind CSS", "API"],
    image: "/images/5.png",
    liveUrl: "https://developer-dashboard-ezbv.vercel.app/",
  },
  {
    title: "Blog App",
    description: "A full-featured publishing platform inspired by Medium, built with Next.js 14, React, TypeScript, MongoDB, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    image: "/images/6.png",
    liveUrl: "https://phase-two-capstone-project-uwr9.vercel.app/",
  },
  {
    title: "React Movie Explorer",
    description: "Searchable catalog with ratings, trailers, and watchlists.",
    tags: ["React", "API", "UI"],
    image: "/images/7.png",
    liveUrl: "https://movie-explorer-nnjr.vercel.app/",
  },
  {
    title: "My Personal Blog",
    description: "A modern blog built with Next.js, featuring different rendering techniques for optimal performance and user experience.",
    tags: ["Next.js", "React", "Performance"],
    image: "/images/8.png",
    liveUrl: "https://my-next-app-kouo.vercel.app/",
  },
  {
    title: "Task Manager App",
    description: "A simple Task Manager built with HTML, CSS (Tailwind), and JavaScript. This app allows users to add, edit, delete, filter, sort, and mark tasks as complete. Tasks are saved in LocalStorage, so they stay even after refreshing.",
    tags: ["HTML", "JavaScript", "Tailwind CSS"],
    image: "/images/9.png",
    liveUrl: "https://task-management-board-lemon.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="section">
          <div className="container mx-auto">
            <SectionTitle
              title="My"
              highlight="Projects"
              subtitle="Here are some of my recent projects that showcase my skills and expertise."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${idx * 0.04}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}