import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail, MdSms } from 'react-icons/md';


export default function Hero() {
  return (
    <section className="py-6 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/1.jpg"
          alt="ONE MIND WELLNESS by David Light Profile"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-900">Transform Anxiety Into Lasting Peace</h1>
        <h1 className="text-2xl font-bold text-gray-900">ONE MIND WELLNESS™</h1>
        <p className="text-gray-600 mt-2">
          Beyond Anxious Thoughts<br />
          Consciousness-Based Coaching for Lasting Peace
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-gray-400 hover:text-gray-600 text-3xl">
          <a href="https://wa.me/+44759450544" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://t.me/onemindwellness" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="mailto:onemindwellness.studio@gmail.com">
            <MdEmail />
          </a>
          <a href="sms:+447549450544">
            <MdSms />
          </a>
        </div>
      </div>
    </section>
  );
}