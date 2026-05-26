import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Enterprise Dashboard System',
      company: 'NEC Corporation India',
      description: 'Built a comprehensive dashboard for enterprise analytics with real-time data visualization.',
      technologies: ['React', 'TypeScript', 'Redux', 'Chart.js'],
      result: 'Improved data insights and reduced reporting time by 60%',
    },
    {
      title: 'UI/UX Design System',
      company: 'Auxano Technologies',
      description: 'Designed and implemented a complete design system with reusable components for multiple projects.',
      technologies: ['Figma', 'React', 'CSS', 'Storybook'],
      result: 'Increased design consistency and reduced development time by 40%',
    },
    {
      title: 'Responsive Web Application',
      company: 'DCT India',
      description: 'Developed a responsive web application using Angular that works seamlessly across all devices.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      result: 'Achieved 98% cross-browser compatibility and improved user engagement by 45%',
    },
    {
      title: 'Customer Portal Redesign',
      company: 'D\'café Digital',
      description: 'Complete redesign and development of customer-facing portal with improved UX.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
      result: 'Increased user retention by 50% and reduced support tickets by 35%',
    },
    {
      title: 'Mobile-First Progressive Web App',
      company: 'Softratech Info',
      description: 'Built a PWA with offline capabilities and excellent mobile performance.',
      technologies: ['React', 'PWA', 'Service Workers', 'Firebase'],
      result: 'Achieved 90+ Lighthouse score and 70% increase in mobile users',
    },
    {
      title: 'Frontend Architecture Refactor',
      company: 'Multiple Clients',
      description: 'Refactored legacy codebases to modern architecture with improved performance and maintainability.',
      technologies: ['React', 'TypeScript', 'Clean Code', 'Testing'],
      result: 'Reduced bundle size by 50% and improved load times significantly',
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-[#17252a] text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-gray-300">Featured projects and case studies</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 text-[#2b7a78]">{project.title}</h3>
                    <p className="text-gray-600 font-semibold mb-4">{project.company}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-600 mb-2">TECHNOLOGIES:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-[#def2f1] text-[#2b7a78] px-3 py-1 rounded-full text-sm font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#def2f1] to-[#3aafa9] p-6 rounded-lg flex flex-col justify-center">
                    <h4 className="font-bold text-[#17252a] mb-2">Results</h4>
                    <p className="text-[#17252a] text-sm leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Link */}
      <section className="bg-[#def2f1] py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#17252a]">More Projects</h2>
          <p className="text-gray-700 mb-8">View my complete portfolio on Behance for more design work</p>
          <a
            href="https://www.behance.net/ismailakht6867"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2b7a78] text-white px-8 py-3 rounded-lg hover:bg-[#3aafa9] transition font-semibold"
          >
            View Full Portfolio on Behance
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2b7a78] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl mb-8">Interested in collaborating on your next project?</p>
          <Link 
            href="/contact" 
            className="bg-[#def2f1] text-[#17252a] px-8 py-3 rounded-lg font-semibold hover:bg-white transition inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
