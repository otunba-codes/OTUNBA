import Link from "next/link";
import { generateMetadata } from "@/components/SEO";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { SITE } from '@/lib/constants';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = generateMetadata({
  title: "Home",
  description: SITE.description,
});

const featuredProjects = [
  {
    id: 1,
    title: "Quiz App",
    description: "Interactive quiz application with multiple categories, score tracking, and responsive design.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://quizz0.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Ecommerce App",
    description: "Scalable online store with product listings, search functionality, and smooth checkout flow.",
    technologies: ["React", "Context API", "CSS Modules"],
    liveUrl: "https://shop2-32r.pages.dev/",
    githubUrl: "#",
  },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="pt-8">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{SITE.name}</span>
          </h1>
          <p className="text-[30px] md:text-2xl font-semibold text-gray-800 mb-3">
            Software Engineer
          </p>
          <p className="text-lg text-gray-600 font-semibold mb-4">
            Fullstack Developer | API & Systems Engineer
          </p>
          <p className="text-md text-gray-500 mb-10 max-w-2xl mx-auto">
            Building backend services, distributed systems, and payment flows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="group px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
            >
              View All
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 mb-4">
              I'm a Software Engineer focused on building backend services, APIs, and business platforms.
            </p>
            <p className="text-gray-600 mb-8">
              I specialize in <strong>Node.js, Express, React, Next.js, TypeScript, and MongoDB</strong>. 
              My work includes payment integrations, multi-tenant architecture, and transaction-based systems.
            </p>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group transition-colors"
            >
              Learn more about me
              <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">[ Your Photo ]</span>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-600 mb-8">
            Have a project idea or need a robust backend system? Let's connect.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Get In Touch
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}