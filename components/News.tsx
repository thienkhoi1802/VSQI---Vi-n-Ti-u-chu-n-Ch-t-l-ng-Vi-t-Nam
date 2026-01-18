import React from 'react';
import { NEWS_DATA } from '../constants';

interface NewsProps {
  onNavigate?: (page: string) => void;
}

const News: React.FC<NewsProps> = ({ onNavigate }) => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6">
           <h2 className="text-[40px] font-normal text-[#141D34]/80 leading-[52px] font-sans mb-4 md:mb-0">
             Tin tức & Sự kiện
           </h2>
           
           {/* CTA Button */}
           <button 
             onClick={() => onNavigate && onNavigate('news')}
             className="hidden md:inline-flex items-center justify-center h-[40px] px-6 py-3 border border-[#0F5EE7] bg-[#1067fe0d] text-[#0F5EE7] text-[14px] font-semibold leading-[20px] hover:bg-[#0F5EE7] hover:text-white transition-colors duration-200"
           >
             Xem nhiều tin tức
           </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {NEWS_DATA.map((news) => (
            <article key={news.id} className="group cursor-pointer flex flex-col h-full">
              {/* 1. Image - Aspect Ratio 5:3 */}
              <div className="w-full aspect-[5/3] overflow-hidden mb-5 bg-gray-100">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col flex-grow">
                {/* 2. Label - 14px, Medium, bg #141D34 5% opacity */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1.5 bg-[#141D340D] text-[#141D34] text-[14px] font-medium leading-none rounded-[2px]">
                    {news.category}
                  </span>
                </div>

                {/* 3. Title - 20px, Manrope Bold, Line Height 28px */}
                <h3 className="text-[20px] font-bold text-[#141D34] leading-[28px] mb-2 line-clamp-3 group-hover:text-primary transition-colors">
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('news'); }}>{news.title}</a>
                </h3>

                {/* 4. Date - 14px, Regular */}
                <div className="text-[14px] font-normal text-[#637381] mt-auto">
                   {news.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden w-full">
          <button 
            onClick={() => onNavigate && onNavigate('news')}
            className="w-full h-[40px] px-6 py-3 border border-[#0F5EE7] bg-[#1067fe0d] text-[#0F5EE7] text-[14px] font-semibold leading-[20px] hover:bg-[#0F5EE7] hover:text-white transition-colors"
          >
             Xem nhiều tin tức
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;