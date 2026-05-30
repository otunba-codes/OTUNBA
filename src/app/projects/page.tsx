import { generateMetadata } from '@/components/SEO';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const metadata = generateMetadata({
  title: 'Projects',
  description: 'Browse my portfolio of software engineering projects including payment platforms, e-commerce systems, inventory management, and booking systems.',
});

const projects = [
  {
    id: 1,
    title: 'Sales & Inventory Accounting System',
    description: 'Business management platform for tracking sales, inventory levels, and accounting operations with real-time analytics.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
  },
  {
    id: 2,
    title: 'VTU & Bill Payment Platform',
    description: 'Payment platform supporting airtime, data, electricity, and utility bills with multiple gateway integrations.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Payment Gateway'],
    liveUrl: 'https://payo-one.vercel.app',
    githubUrl: '#',
    image: '/payo.jpeg',
  },
  {
    id: 3,
    title: 'Billboard Booking System',
    description: 'Platform for managing advertisement space bookings with availability calendar and admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Calendar Integration'],
    liveUrl: 'https://bboards.vercel.app/',
    githubUrl: '#',
    image: '/Bboards-Page.png',
  },
  {
    id: 4,
    title: 'Signival - SMM Panel & OTP Service',
    description: 'Social media marketing panel (SMM) for automated social media engagements, combined with an OTP delivery system for temporary phone number verification services.',
    tags: ['Node.js', 'Express', 'React', 'JWT', 'SMS Gateway', 'API Integration'],
    liveUrl: 'https://signival.com/',
    githubUrl: '#',
    image: '/signival.png',
  },
  {
    id: 5,
    title: 'Power Solution Mall',
    description: 'E-commerce and business website for Power Solution Mall, specializing in power-related products including inverters, solar panels, batteries, and electrical equipment with secure checkout, plus blog and company information sections.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Integration'],
    liveUrl: 'https://powersolutionmall.com/',
    githubUrl: '#',
    image: null,
  },
  {
    id: 6,
    title: 'Construction Calculator',
    description: 'Engineering tool for steel building measurements, load estimation, and material cost calculations.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'React'],
    liveUrl: 'https://steel-building-calculator.vercel.app/',
    githubUrl: '#',
    image: '/construction.png',
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the <strong>web applications, APIs, and business systems</strong> I've built.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Screenshot coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors shadow-md"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors shadow-md"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 border-t">
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors inline-block"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                )}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center mt-16 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">More Projects Coming</h2>
          <p className="text-gray-600">
            I'm constantly building new systems and APIs. Check back for updates.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}