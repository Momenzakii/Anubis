import React from "react";

const blogPosts = [
  {
    title: "How to Choose the Right Property",
    date: "July 2025",
    description:
      "Explore key factors to consider before buying your next home or investment unit. Location, developer, and legal tips you can’t ignore.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?fit=crop&w=600&q=80",
  },
  {
    title: "Top Investment Spots in Egypt for 2025",
    date: "June 2025",
    description:
      "Discover the best real estate hotspots like El Gouna, North Coast, and New Zayed with strong ROI potential.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80",
  },
  {
    title: "Why Off-Plan Units Are a Smart Buy",
    date: "May 2025",
    description:
      "Learn the benefits of buying off-plan real estate, how to evaluate developers, and what to expect in payment plans.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?fit=crop&w=600&q=80",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="px-8 py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-12">
        Real Estate Tips & Articles
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-orange-400/40 transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-gray-400">{post.date}</p>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-300 text-sm">{post.description}</p>
              <a
                href="#"
                className="inline-block text-orange-400 font-semibold mt-2 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
