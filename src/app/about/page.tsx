import { generateMetadata } from '@/components/SEO';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud, FaShieldAlt } from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'About',
  description: 'Fullstack Developer focused on API development, scalable web systems, and transaction-based platforms.'
});

export default function About() {
  const skills = [
    { 
      category: 'Frontend', 
      icon: <FaCode />, 
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js (App Router)', 'Tailwind CSS'] 
    },
    { 
      category: 'Backend / APIs', 
      icon: <FaServer />, 
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Webhooks', 'Third-party API integrations'] 
    },
    { 
      category: 'Systems & Architecture', 
      icon: <FaCloud />, 
      items: ['System Design (practical)', 'Scalable Web Applications', 'Multi-tenant SaaS architecture', 'Payment & billing systems', 'Transaction-based systems'] 
    },
    { 
      category: 'Tools', 
      icon: <FaTools />, 
      items: ['Git & GitHub', 'Postman / API testing', 'VS Code', 'MongoDB Compass'] 
    },
  ];

  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intro */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I'm a <strong>Fullstack Developer | Software Engineer | API & Web Systems Developer</strong> focused on building APIs, scalable systems, and business platforms that solve real problems.
        </p>
        <p className="text-md text-gray-500 max-w-2xl mx-auto mt-4">
          My expertise includes payment integrations, multi-tenant architecture, and transaction-based systems for fintech and business platforms.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16 bg-gray-50 rounded-2xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                {skillGroup.icon} {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full hover:bg-blue-50 hover:border-blue-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section - From CV */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900">Fullstack Developer (Freelance / Personal Projects)</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2023 - Present</span>
            </div>
            <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-2">
              <li>Built scalable web applications and backend APIs</li>
              <li>Designed and implemented multi-provider billing systems</li>
              <li>Developed inventory, ecommerce, and booking platforms</li>
              <li>Built automation systems for payments and service delivery</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2021 – 2023</span>
            </div>
            <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-2">
              <li>Built RESTful APIs for transaction processing & user authentication (JWT)</li>
              <li>Integrated third-party services (SMS, email, payment webhooks) with retry logic</li>
              <li>Maintained Node.js microservices with unit/integration tests</li>
              <li>Collaborated with teams to define API contracts and improve documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Want to work together?</h2>
        <p className="text-lg text-gray-600 mb-6">Check out my <a href="/projects" className="text-blue-600 font-semibold hover:underline">projects</a> or connect with me directly.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
    <Footer />
    </>
  );
}