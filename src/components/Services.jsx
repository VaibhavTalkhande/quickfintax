import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Services = () => {
  const services = [
    {
      title: 'Accounting & Auditing',
      description: 'Comprehensive accounting services including bookkeeping, financial statements, and audit support to ensure your business maintains accurate and compliant financial records.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning and compliance services to minimize your tax burden while ensuring full regulatory compliance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
      )
    },
    {
      title: 'Business Funding',
      description: 'Expert assistance in securing business loans, funding, and financial support to help your business grow and thrive.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Project Finance',
      description: 'Specialized financial solutions for project development, including feasibility studies, funding strategies, and risk management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Global Advisory',
      description: 'International business consulting and advisory services to help you navigate global markets and expand your business internationally.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Business Development',
      description: 'Strategic business development services to help you identify opportunities, optimize operations, and achieve sustainable growth.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#162d7a]/5 transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#52b82f]/5 transform skew-x-12"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <AnimatedTitle>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-[#162d7a] mb-6">
              Our <span className="relative inline-block">
                <span className="relative z-10 text-[#52b82f]">Services</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#162d7a]/10 -rotate-1"></span>
              </span>
            </h2>
            <p className="text-[#162d7a] max-w-2xl mx-auto text-lg sm:text-xl font-medium">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
        </AnimatedTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedTitle key={index}>
              <div 
                className="bg-white p-8 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-[#52b82f] mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black text-[#162d7a] mb-4">{service.title}</h3>
                <p className="text-[#162d7a]/80 flex-grow">{service.description}</p>
              </div>
            </AnimatedTitle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 