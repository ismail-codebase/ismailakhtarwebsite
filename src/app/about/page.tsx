export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#17252a] text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-300">Tech Lead | UI/UX Manager | Frontend Architect</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17252a]">Professional Journey</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              With over 10 years of experience in frontend development and UI/UX design, I've had the privilege of working with leading companies and building solutions that impact millions of users.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              My expertise spans from designing intuitive user interfaces to architecting scalable frontend systems using modern technologies like Angular and React. I specialize in creating seamless experiences that bridge the gap between design and technology.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17252a]">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#2b7a78] pl-6">
                <h3 className="text-2xl font-bold text-[#2b7a78]">Tech Lead / UI UX Manager</h3>
                <p className="text-gray-600 font-semibold">NEC Corporation India Pvt. Ltd. | July 2023 – Present</p>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                  <li>Leading UI/UX design and frontend development for enterprise applications</li>
                  <li>Managing frontend architecture using Angular, React, HTML5, CSS3, and JavaScript</li>
                  <li>Collaborating with cross-functional Agile teams</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#2b7a78] pl-6">
                <h3 className="text-2xl font-bold text-[#2b7a78]">UI UX Designer / UI Developer</h3>
                <p className="text-gray-600 font-semibold">Softratech Info Pvt. Ltd. | February 2023 – June 2023</p>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                  <li>Designed modern web applications and interactive interfaces in Figma</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#2b7a78] pl-6">
                <h3 className="text-2xl font-bold text-[#2b7a78]">UI UX Manager / UI Developer</h3>
                <p className="text-gray-600 font-semibold">Auxano Technologies / DCT India / D'café Digital | July 2011 – October 2021</p>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                  <li>Developed responsive enterprise web applications</li>
                  <li>Worked extensively with Angular, React, Bootstrap, and SCSS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17252a]">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#def2f1] p-6 rounded-lg border-l-4 border-[#3aafa9]">
                <h3 className="font-bold text-lg mb-4 text-[#2b7a78]">Frontend Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Angular & React Development</li>
                  <li>✓ TypeScript & JavaScript</li>
                  <li>✓ HTML5, CSS3, SCSS</li>
                  <li>✓ Next.js & Modern Frameworks</li>
                </ul>
              </div>
              <div className="bg-[#def2f1] p-6 rounded-lg border-l-4 border-[#3aafa9]">
                <h3 className="font-bold text-lg mb-4 text-[#2b7a78]">Design & UX</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ UI/UX Design & Wireframing</li>
                  <li>✓ Figma & Design Tools</li>
                  <li>✓ Responsive Web Design</li>
                  <li>✓ User Experience Strategy</li>
                </ul>
              </div>
              <div className="bg-[#def2f1] p-6 rounded-lg border-l-4 border-[#3aafa9]">
                <h3 className="font-bold text-lg mb-4 text-[#2b7a78]">DevOps & Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Git & Version Control</li>
                  <li>✓ Azure DevOps</li>
                  <li>✓ CI/CD Pipeline</li>
                  <li>✓ Jira & Agile</li>
                </ul>
              </div>
              <div className="bg-[#def2f1] p-6 rounded-lg border-l-4 border-[#3aafa9]">
                <h3 className="font-bold text-lg mb-4 text-[#2b7a78]">Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Team Leadership</li>
                  <li>✓ Architecture Design</li>
                  <li>✓ Agile Methodology</li>
                  <li>✓ Mentoring & Coaching</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#17252a]">Education</h2>
            <div className="bg-[#def2f1] p-6 rounded-lg border-l-4 border-[#2b7a78]">
              <h3 className="text-xl font-bold text-[#17252a]">Bachelor of Commerce</h3>
              <p className="text-gray-600">Shia P.G. College, Lucknow | 2010</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
