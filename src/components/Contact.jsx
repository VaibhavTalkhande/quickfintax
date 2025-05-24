import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#162d7a]/5 transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#52b82f]/5 transform skew-x-12"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
      <AnimatedTitle>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#162d7a] mb-4 sm:mb-6">
            Get in <span className="relative inline-block">
              <span className="relative z-10 text-[#52b82f]">Touch</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 sm:h-4 bg-[#162d7a]/10 -rotate-1"></span>
            </span>
          </h2>
          <p className="text-[#162d7a] max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium">
            Let's discuss how we can help your business grow
          </p>
        </div>
      </AnimatedTitle>
      <AnimatedTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-[#162d7a] mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#52b82f] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#162d7a]">Phone</h4>
                    <a href="tel:+919404499825" className="text-[#162d7a]/80 hover:text-[#52b82f] transition-colors duration-300 text-sm sm:text-base">+91 94044 99825</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#52b82f] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#162d7a]">Email</h4>
                    <a href="mailto:quickfintaxca@gmail.com" className="text-[#162d7a]/80 hover:text-[#52b82f] transition-colors duration-300 text-sm sm:text-base break-all">quickfintaxca@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#52b82f] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#162d7a]">Address</h4>
                    <p className="text-[#162d7a]/80 text-sm sm:text-base">Second Floor, Inox Rd, above Bramha Hotel, near shashtri Nagar, Chapru Nagar, Bagadganj, Nagpur, Maharashtra 440008</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#52b82f] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#162d7a]">Instagram</h4>
                    <a href="https://www.instagram.com/quickfintax" target="_blank" rel="noopener noreferrer" className="text-[#162d7a]/80 hover:text-[#52b82f] transition-colors duration-300 text-sm sm:text-base">@quickfintax</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#52b82f] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#162d7a]">LinkedIn</h4>
                    <a href="https://www.linkedin.com/company/quick-fintax/" target="_blank" rel="noopener noreferrer" className="text-[#162d7a]/80 hover:text-[#52b82f] transition-colors duration-300 text-sm sm:text-base">Quick Fintax</a>
                  </div>
                </div>
              </div>
            </div>
            <AnimatedTitle>
            <div className="bg-white p-6 sm:p-8 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-[#162d7a] mb-4 sm:mb-6">Business Hours</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#162d7a]/80 text-sm sm:text-base">Weekdays</span>
                  <span className="font-black text-[#162d7a] text-sm sm:text-base">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#162d7a]/80 text-sm sm:text-base">Sunday</span>
                  <span className="font-black text-[#162d7a] text-sm sm:text-base">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            </AnimatedTitle>
          </div>

          {/* Right Column - Map */}
          <div className="bg-white p-6 sm:p-8 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-black text-[#162d7a] mb-4 sm:mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.195860516139!2d79.12476605969056!3d21.144602388746463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7e586715545%3A0x637dc8820e744490!2sQUICK%20FINTAX!5e0!3m2!1sen!2sin!4v1747994164226!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg"
              ></iframe>
            </div>
          </div>
 
        </div>
        </AnimatedTitle>
      </div>
    </section>
  );
};

export default Contact; 