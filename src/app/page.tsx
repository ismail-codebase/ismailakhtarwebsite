import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#17252a] to-[#2b7a78] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frontend Tech Lead & UI/UX Expert
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Building scalable enterprise applications with modern design and architecture
          </p>
          <p className="text-lg mb-12 text-gray-400">
            10+ years of experience in Angular, React, and UI/UX design
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/services" 
              className="bg-[#3aafa9] hover:bg-[#2b7a78] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              View Services
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-[#2b7a78] hover:bg-[#17252a] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              See Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#3aafa9] hover:bg-[#2b7a78] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 bg-[#def2f1]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#17252a]">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#3aafa9]">
              <h3 className="text-2xl font-bold mb-4 text-[#2b7a78]">10+ Years Experience</h3>
              <p className="text-gray-600">
                Proven track record building enterprise applications at NEC, Auxano, and DCT India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#3aafa9]">
              <h3 className="text-2xl font-bold mb-4 text-[#2b7a78]">Expert in Modern Tech</h3>
              <p className="text-gray-600">
                Master of Angular, React, TypeScript, and responsive web design with scalable architecture.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#3aafa9]">
              <h3 className="text-2xl font-bold mb-4 text-[#2b7a78]">Leadership & Design</h3>
              <p className="text-gray-600">
                Tech Lead experience managing teams, combined with strong UI/UX design expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2b7a78] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Let's discuss how I can help your business grow</p>
          <Link 
            href="/contact" 
            className="bg-[#def2f1] text-[#17252a] px-8 py-3 rounded-lg font-semibold hover:bg-white transition inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
