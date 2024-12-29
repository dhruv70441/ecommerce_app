import React from 'react';
import Layout from '../components/layout/Layout.js';

function PolicyPage() {
  return (
    <Layout
      title="Privacy Policy - Tech Buy"
      description="Read the privacy policy of Tech Buy. Learn about how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, privacy, personal information, tech buy"
      author="Tech Buy Team"
    >
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Tech Buy. Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information Collection</h2>
            <p className="text-gray-700">
              We collect personal information that you provide us when you use our services, such as your name, email address, and payment details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information Usage</h2>
            <p className="text-gray-700">
              We use your information to process orders, communicate with you about your account, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data Security</h2>
            <p className="text-gray-700">
              We take the security of your personal data seriously and implement various measures to protect it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, modify, or delete your personal data. Please contact us for any requests related to your data.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default PolicyPage;
