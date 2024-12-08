import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-mint-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      {/* About Me Section */}
      <section id="about" className="p-8 bg-ferns relative">
        <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/90"></div>
        <div className="relative z-10">
          <h2 className="text-6xl text-center font-bold mb-6 text-emerald-600 dark:text-emerald-400 fancy-font">KM Doula</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="w-full aspect-square mb-4 rounded-lg">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <Image 
                    alt="A photo of Kristin's face" 
                    src="/Kristin.png" 
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-slate-700 dark:text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="p-8 bg-green-50 dark:bg-green-900/50">
        <h2 className="text-3xl font-bold mb-6 text-emerald-600 dark:text-emerald-400 fancy-font">Services & Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3 text-emerald-500 dark:text-emerald-300">Postpartum Care</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>$35 per hour</li>
              <li>8 hour overnight minimum</li>
              <li>3 hour daytime minimum</li>
              <li>Lactation services included with postpartum hours</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3 text-emerald-500 dark:text-emerald-300">Birth Packages</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Pricing: $850-$1800</li>
              <li>Includes two prenatal visits</li>
              <li>Postpartum follow-up</li>
              <li>Optional add-ons available:
                <ul className="list-disc list-inside ml-6">
                  <li>Lactation support</li>
                  <li>Additional postpartum support</li>
                </ul>
              </li>
            </ul>
          </div>
{/*
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-3 text-emerald-500 dark:text-emerald-300">Lactation Support</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>$120 for an initial two hour consultation</li>
              <li>$80 per hour for additional visits</li>
              <li>Lactation services included with postpartum hours</li>
            </ul>
          </div>
*/}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-600 dark:text-emerald-400 fancy-font">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information Column */}
          <div className="md:w-1/2">
            <div className="prose dark:prose-invert prose-slate prose-emerald">
              <p className="pb-2 text-slate-700 dark:text-slate-300">
                I'm here to support you on your journey into parenthood. Whether you're looking for birth doula services, 
                postpartum care, or have questions about what support might be right for you, I would love to hear from you.
              </p>
              <p className="pb-2 text-slate-700 dark:text-slate-300">
                Feel free to reach out with any questions or concerns you might have; I am ready to support you every step of the way. 
                Whether you're seeking guidance, looking for reassurance, or just need someone to listen, I am ready to provide personalized 
                care tailored to your unique journey into parenthood. Your comfort and peace of mind are my priority, so please don't hesitate to get in touch.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
      {/* I think you know what this is */}
      <footer className="p-6 bg-gray-100 dark:bg-slate-800 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} KM Doula. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
