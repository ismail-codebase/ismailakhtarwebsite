import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design Consultation',
      description: 'Expert guidance on designing scalable, user-centric interfaces for web applications.',
      price: '₹15,000 - ₹25,000/month',
      features: [
        'Design audit and strategy',
        'Wireframing and prototyping',
        'User experience optimization',
        'Design system creation',
      ],
    },
    {
      title: 'Frontend Architecture Review',
      description: 'Comprehensive analysis and recommendations for your frontend codebase and architecture.',
      price: '₹20,000 - ₹30,000/project',
      features: [
        'Code quality assessment',
        'Architecture recommendations',
        'Performance optimization',
        'Scalability improvements',
      ],
    },
    {
      title: 'Tech Leadership Coaching',
      description: 'Mentoring and guidance for teams looking to improve their frontend development practices.',
      price: '₹10,000 - ₹20,000/session',
      features: [
        'Team assessment',
        'Best practices training',
        'Code review methodology',
        'Continuous improvement plans',
      ],
    },
    {
      title: 'Full-Stack UI/UX Solutions',
      description: 'End-to-end design and development services for enterprise web applications.',
      price: 'Custom Quote',
      features: [
        'Design & development',
        'Responsive implementation',
        'Performance optimization',
        'Ongoing support',
      ],
    },
    {
      title: 'React/Angular Development',
      description: 'Professional frontend development using modern frameworks and best practices.',
      price: 'Custom Quote',
      features: [
        'Custom component development',
        'State management',
        'API integration',
        'Testing & QA',
      ],
    },
    {
      title: 'Design System Implementation',
      description: 'Create and implement consistent design systems across your organization.',
      price: '₹25,000 - ₹50,000/project',
      features: [
        'Component library',
        'Design tokens',
        'Documentation',
        'Implementation support',
      ],
    },
    {
      title: 'Email Integration & Automation',
      description: 'Setup transactional email services, integrate AWS SES, and automate email workflows for your applications.',
      price: '₹5,000 - ₹15,000/project',
      features: [
        'AWS SES configuration',
        'Email template design',
        'Transactional email setup',
        'Email automation workflows',
      ],
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-[#17252a] text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-gray-300">Expert solutions for your frontend and design needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#3aafa9]">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#2b7a78]">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="bg-[#def2f1] p-3 rounded mb-4">
                    <p className="text-lg font-semibold text-[#2b7a78]">{service.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="text-[#3aafa9] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#2b7a78] text-white py-2 rounded-lg hover:bg-[#3aafa9] transition font-semibold"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Me */}
          <div className="bg-[#def2f1] p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#17252a]">Why Choose My Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2b7a78] mb-2">10+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2b7a78] mb-2">50+</div>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2b7a78] mb-2">100%</div>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2b7a78] mb-2">24/7</div>
                <p className="text-gray-700">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2b7a78] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-8">Let's discuss your project requirements and find the perfect solution</p>
          <Link 
            href="/contact" 
            className="bg-[#def2f1] text-[#17252a] px-8 py-3 rounded-lg font-semibold hover:bg-white transition inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
