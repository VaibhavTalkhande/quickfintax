import React, { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "QuickFinTax has transformed our financial management. Their expertise in tax planning and business development has been invaluable to our growth."
    },
    {
      name: "Michael Chen",
      role: "Founder, Global Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "The team's attention to detail and proactive approach to financial planning has helped us navigate complex international markets successfully."
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Creative Studios",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "Their business funding solutions helped us secure the capital we needed to expand our operations. Professional and efficient service!"
    },
    {
      name: "David Kim",
      role: "CFO, Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "The accounting and auditing services are top-notch. They've helped us maintain compliance while optimizing our financial processes."
    },
    {
      name: "Lisa Wang",
      role: "Managing Director, Growth Ventures",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "Their global advisory services have been instrumental in our international expansion. The team's expertise in cross-border transactions is exceptional."
    },
    {
      name: "James Wilson",
      role: "CEO, Innovation Hub",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      review: "The project finance team helped us secure funding for our new venture. Their strategic approach and industry knowledge made all the difference."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= Math.ceil(reviews.length / cardsPerView) ? 0 : nextIndex;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= Math.ceil(reviews.length / cardsPerView) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? Math.ceil(reviews.length / cardsPerView) - 1 : nextIndex;
    });
  };

  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#162d7a]/5 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#52b82f]/5 transform -skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <AnimatedTitle>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-[#162d7a] mb-6">
              Client <span className="relative inline-block">
                <span className="relative z-10 text-[#52b82f]">Reviews</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#162d7a]/10 -rotate-1"></span>
              </span>
            </h2>
            <p className="text-[#162d7a] max-w-2xl mx-auto text-lg sm:text-xl font-medium">
              What our clients say about us
            </p>
          </div>
        </AnimatedTitle>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews
                      .slice(
                        slideIndex * cardsPerView,
                        (slideIndex + 1) * cardsPerView
                      )
                      .map((review, index) => (
                        <div 
                          key={index} 
                          className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-4 border-[#162d7a] h-full flex flex-col min-h-[320px] sm:min-h-[360px] md:min-h-[400px]"
                        >
                          <div className="flex items-center mb-4 sm:mb-6">
                            <div className="relative">
                              <img 
                                src={review.image} 
                                alt={review.name}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-[#52b82f]"
                              />
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#52b82f] rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="ml-3 sm:ml-4">
                              <h3 className="text-lg sm:text-xl font-black text-[#162d7a] leading-tight">{review.name}</h3>
                              <p className="text-sm sm:text-base text-[#162d7a]/80 font-medium">{review.role}</p>
                            </div>
                          </div>
                          <div className="flex mb-3 sm:mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 sm:w-6 sm:h-6 text-[#52b82f]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-base sm:text-lg text-[#162d7a]/80 italic flex-grow line-clamp-4 sm:line-clamp-5">"{review.review}"</p>
                          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-[#162d7a]/10">
                            <div className="flex items-center justify-between">
                              <span className="text-sm sm:text-base text-[#52b82f] font-bold">Verified Client</span>
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#52b82f]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg border-2 border-[#162d7a] hover:bg-[#162d7a] hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg border-2 border-[#162d7a] hover:bg-[#162d7a] hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#52b82f]' : 'bg-[#162d7a]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 