// pages/privacy-policy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | YourShopName</title>
        <meta name="description" content="Privacy Policy for YourShopName – Learn how we collect and use your data when you shop with us." />
      </Head>

      <main style={styles.wrapper}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.date}>Last updated: August 26, 2025</p>

        <section style={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            At <strong>YourShopName</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from our website.
          </p>
        </section>

        <section style={styles.section}>
          <h2>2. What Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>Personal details (name, email, phone number, address)</li>
            <li>Payment details (securely processed via third-party providers)</li>
            <li>Order history and preferences</li>
            <li>Technical data (IP address, browser type, device info)</li>
            <li>Cookies and usage data for analytics</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process and deliver your orders</li>
            <li>To communicate updates, offers, and customer support</li>
            <li>To personalize your shopping experience</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>4. Payment Processing</h2>
          <p>
            We do not store your card details. All payments are processed securely via trusted payment gateways like Razorpay, Stripe, or PayPal.
          </p>
        </section>

        <section style={styles.section}>
          <h2>5. Sharing Your Information</h2>
          <p>
            We only share your data with trusted third parties necessary to complete your order, such as:
          </p>
          <ul>
            <li>Delivery partners (e.g., Shiprocket, Delhivery)</li>
            <li>Payment gateways</li>
            <li>Email marketing tools (optional)</li>
          </ul>
          <p>We never sell your personal data.</p>
        </section>

        <section style={styles.section}>
          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and analytics tools (like Google Analytics) to improve user experience and understand customer behavior. You can manage cookies through your browser settings.
          </p>
        </section>

        <section style={styles.section}>
          <h2>7. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide our services and fulfill legal requirements. You may request deletion at any time.
          </p>
        </section>

        <section style={styles.section}>
          <h2>8. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. You may also opt-out of marketing communications at any time.
          </p>
        </section>

        <section style={styles.section}>
          <h2>9. Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section style={styles.section}>
          <h2>10. Children’s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information from minors.
          </p>
        </section>

        <section style={styles.section}>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated date.
          </p>
        </section>

        <section style={styles.section}>
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this policy, you can reach us at:<br />
            📧 Email: support@yourshopname.com<br />
            📞 Phone: +91-00000-00000
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  wrapper: {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.7',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  date: {
    textAlign: 'center',
    color: '#777',
    marginBottom: '2rem',
  },
  section: {
    marginBottom: '2rem',
  }
};
