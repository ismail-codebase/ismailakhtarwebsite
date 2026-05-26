export default function Blog() {
  const articles = [
    {
      title: 'Building Scalable Frontend Architecture',
      date: 'May 15, 2024',
      category: 'Architecture',
      excerpt: 'Learn the principles and best practices for designing frontend architectures that scale with your application.',
      content: 'Coming soon...',
    },
    {
      title: 'React vs Angular: Choosing the Right Framework',
      date: 'May 10, 2024',
      category: 'Frameworks',
      excerpt: 'A comprehensive comparison between React and Angular to help you choose the right framework for your project.',
      content: 'Coming soon...',
    },
    {
      title: 'UI/UX Design Principles for Web Applications',
      date: 'May 5, 2024',
      category: 'Design',
      excerpt: 'Explore fundamental design principles that create intuitive and engaging user experiences.',
      content: 'Coming soon...',
    },
    {
      title: 'TypeScript Best Practices for Frontend Development',
      date: 'April 30, 2024',
      category: 'TypeScript',
      excerpt: 'Master TypeScript features and patterns that improve code quality and maintainability.',
      content: 'Coming soon...',
    },
    {
      title: 'Performance Optimization Techniques',
      date: 'April 25, 2024',
      category: 'Performance',
      excerpt: 'Discover practical techniques to optimize your web application performance and user experience.',
      content: 'Coming soon...',
    },
    {
      title: 'Modern CSS Features and Techniques',
      date: 'April 20, 2024',
      category: 'CSS',
      excerpt: 'Stay updated with the latest CSS features that can elevate your web design game.',
      content: 'Coming soon...',
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-[#17252a] text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">Articles on frontend development, design, and best practices</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#2b7a78] bg-[#def2f1] px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#2b7a78] transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="text-[#2b7a78] font-semibold hover:text-[#3aafa9] transition">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-[#2b7a78] to-[#17252a] text-white py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-xl mb-8">Get the latest articles on frontend development and design delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#def2f1] text-[#17252a] px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
