import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#17252a] text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300">Let's discuss your project and how I can help you succeed</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#17252a]">Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2b7a78] mb-3">Email</h3>
                <a href="mailto:ismailakhtar786@gmail.com" className="text-gray-700 hover:text-[#2b7a78] transition text-lg">
                  ismailakhtar786@gmail.com
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2b7a78] mb-3">Phone</h3>
                <a href="tel:+917020315520" className="text-gray-700 hover:text-[#2b7a78] transition text-lg">
                  +91-7020315520
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2b7a78] mb-3">Location</h3>
                <p className="text-gray-700 text-lg">India</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#2b7a78] mb-3">Connect On</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.behance.net/ismailakht6867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2b7a78] hover:text-[#3aafa9] transition text-lg font-semibold"
                  >
                    Behance
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://www.linkedin.com/in/ismail-akhtar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2b7a78] hover:text-[#3aafa9] transition text-lg font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-[#def2f1] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#2b7a78] mb-3">Response Time</h3>
                <p className="text-gray-700">
                  I typically respond to inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#17252a]">Send me an Inquiry</h2>
              <ContactForm />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#def2f1] p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#17252a]">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#17252a] mb-2">What are your typical project timelines?</h3>
                <p className="text-gray-700">Project timelines vary based on scope and complexity. Consulting projects typically start with a kickoff meeting to define deliverables and timelines.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17252a] mb-2">Do you offer ongoing support?</h3>
                <p className="text-gray-700">Yes, I offer ongoing support and maintenance packages for completed projects. We can discuss the best support structure for your needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17252a] mb-2">What industries do you work with?</h3>
                <p className="text-gray-700">I have experience across various industries including finance, healthcare, e-commerce, and technology. My expertise adapts to your industry's unique challenges.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17252a] mb-2">Can you work with remote teams?</h3>
                <p className="text-gray-700">Absolutely! I'm experienced in working with distributed teams across different time zones using modern collaboration tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
