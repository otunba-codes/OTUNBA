// app/design/page.tsx
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Design',
  description: 'Explore my design process and see examples of my UI/UX work',
});

const designProjects = [
  {
    id: 1,
    title: 'Mobile Banking App',
    description: 'A modern banking app designed for simplicity and security.',
    category: 'UI/UX Design',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'A comprehensive dashboard for analytics and business metrics.',
    category: 'Product Design',
  },
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce site focused on conversion optimization.',
    category: 'UI Design',
  },
  {
    id: 4,
    title: 'Travel App',
    description: 'An app for planning and booking travel experiences.',
    category: 'UX Research & Design',
  },
  {
    id: 5,
    title: 'Design System',
    description: 'A complete design system with components and guidelines.',
    category: 'Design Systems',
  },
  {
    id: 6,
    title: 'Food Delivery Service',
    description: 'An app for ordering food from local restaurants.',
    category: 'UI/UX Design',
  },
];

export default function Design() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Work</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A collection of my UI/UX design projects, showcasing my process and approach to creating
          user-centered digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {designProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
            <div className="h-48 bg-gray-200 transition-all duration-300 group-hover:opacity-90"></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">My Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Research & Discovery</h3>
            <p className="text-gray-600">
              I start by understanding the problem, the users, and the business goals through
              user research, competitive analysis, and stakeholder interviews.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideation & Prototyping</h3>
            <p className="text-gray-600">
              I create wireframes and interactive prototypes to explore different solutions
              and validate concepts before moving to detailed design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Design</h3>
            <p className="text-gray-600">
              I craft visually appealing interfaces with attention to typography, color,
              spacing, and consistency to create enjoyable user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing & Iteration</h3>
            <p className="text-gray-600">
              I conduct usability testing to gather feedback and iterate on designs to
              ensure they meet user needs and business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}