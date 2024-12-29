import React from 'react';
import Layout from '../components/layout/Layout.js';

function AboutPage() {
  return (
    <Layout
      title="About Us - Tech Buy"
      description="Learn more about Tech Buy, your one-stop shop for electronics. We offer top-quality products at unbeatable prices."
      keywords="about us, tech buy, company, ecommerce, electronics, gadgets"
      author="Tech Buy Team"
    >
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            About Us
          </h1>

          {/* Company Overview */}
          <p className="text-lg text-gray-600 mb-8">
            Welcome to <span className="font-bold text-blue-500">TechBuy</span>, your number one source for all things tech. We're dedicated to giving you the very best of electronics, with a focus on quality, customer service, and uniqueness.
          </p>

          {/* Mission Statement */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to provide the latest and most innovative tech products at affordable prices, making technology accessible for everyone. We aim to build long-lasting relationships with our customers through quality service and exceptional value.
            </p>
          </div>

          {/* Company Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="text-lg text-gray-600 space-y-3">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span> Customer First: Our customers are at the heart of everything we do.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span> Innovation: We believe in staying ahead of the curve and offering cutting-edge products.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span> Integrity: We are committed to transparency and honesty in all our dealings.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <p className="text-lg text-gray-600 mb-4">
              Have any questions or need support? Feel free to reach out to us anytime!
            </p>
            <a
              href="/contact"
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
