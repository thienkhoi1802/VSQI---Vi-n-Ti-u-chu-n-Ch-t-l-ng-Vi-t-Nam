import React, { useState, useRef } from 'react';
import { ABOUT_STATS_DATA, HISTORY_DATA, Icons, INTRO_CARDS_DATA, TEAM_DATA } from '../constants';
import Button from './Button';

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeIndex < HISTORY_DATA.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      // Scroll to the specific element width approx 559px + gap 25px = 584px
      const scrollAmount = index * 584;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. About Hero Section - Padding adjusted to remove gap below fixed header */}
      <section className="pt-[129px] lg:pt-[137px] pb-0 bg-white">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-[608px] overflow-hidden">
             {/* Background Layers */}
            <div className="absolute inset-0 w-full h-full">
                {/* Image - Full width/height */}
                <img 
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co/S7dszrbP/Gioi-thie-u.jpg?q=80&w=2070&auto=format&fit=crop" 
                  alt="About Banner"
                />
            </div>
            
            {/* Content Container - Aligned to Grid 1140px */}
            <div className="container mx-auto px-4 relative h-full z-10">
                <div className="flex flex-col justify-start items-start pt-[163px]">
                    <div className="w-full max-w-[600px] flex flex-col gap-[15px]">
                        <div style={{color: 'white', fontSize: 56, fontFamily: 'Manrope', fontWeight: '400', lineHeight: '72.80px', wordWrap: 'break-word'}}>
                          VSQI - Viện Tiêu Chuẩn Chất Lượng Việt Nam
                        </div>
                        <div style={{color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '400', lineHeight: '23.40px', wordWrap: 'break-word'}}>
                          Đơn vị hàng đầu về tiêu chuẩn và quy chuẩn kỹ thuật quốc gia
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Layout (Responsive) - Updated to match transparent/gradient style */}
        <div className="lg:hidden w-full relative h-[450px]">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="About Banner" 
             className="absolute inset-0 w-full h-full object-cover" 
           />
           {/* Dark gradient overlay for mobile text readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           
           <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10 pb-12">
               <h1 className="text-white text-3xl font-sans font-normal leading-tight mb-4">
                 VSQI - Viện Tiêu Chuẩn Chất Lượng Việt Nam
               </h1>
               <p className="text-white text-base font-sans leading-relaxed opacity-90">
                 Đơn vị hàng đầu về tiêu chuẩn và quy chuẩn kỹ thuật quốc gia
               </p>
           </div>
        </div>
      </section>

      {/* 2. Introduction & Cards - UPDATED TO EXACT DESIGN SPEC */}
      <section className="bg-white">
        {/* Container with specified padding-top/bottom 120px and aligned center */}
        <div className="container mx-auto px-4 py-[120px] flex flex-col gap-[39px]">
          
          {/* Header Block */}
          <div className="flex flex-col justify-start items-start gap-[18px] w-full max-w-[559px]">
             {/* Label: Manrope 14px SemiBold Black */}
             <div className="text-black text-[14px] font-semibold font-sans uppercase leading-[18.2px]">
               Về Chúng Tôi
             </div>
             {/* Title & Desc */}
             <div className="flex flex-col gap-[15px]">
               {/* Main Title: Manrope 40px Regular #141D34 */}
               <h2 className="text-[#141D34] text-[40px] font-normal font-sans leading-[52px]">
                 Đơn vị hàng đầu về tiêu chuẩn và chất lượng
               </h2>
               {/* Subtitle: Arial 18px Regular rgba(20,29,52,0.8) */}
               <p className="text-[#141D34CC] text-[18px] font-normal font-['Arial'] leading-[23.4px]">
                 Nâng tầm chất lượng sản phẩm Việt, vươn tới chuẩn mực quốc tế.
               </p>
             </div>
          </div>

          {/* Cards Row - 4 Cards with exact styling */}
          <div className="flex flex-col lg:flex-row items-start justify-start gap-[24px]">
             {INTRO_CARDS_DATA.map((card) => (
                <div 
                  key={card.id}
                  className="w-full lg:w-[267px] h-auto lg:h-[330px] pt-[48px] pb-[24px] px-[24px] bg-white outline outline-1 outline-[rgba(20,29,52,0.15)] -outline-offset-1 flex flex-col gap-[40px] hover:shadow-lg transition-shadow duration-300"
                >
                    {/* Icon Container 56x56 */}
                    <div className="w-[56px] h-[56px] relative overflow-hidden shrink-0 text-[#141D34]">
                       {/* Render Icon Scaled to fit if necessary, ensuring color #141D34. Updated to target IMG tags too. */}
                       <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full">
                         {card.icon}
                       </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[16px]">
                       {/* Title: Manrope 20px Bold rgba(20,29,52,0.8) */}
                       <h3 className="text-[#141D34CC] text-[20px] font-bold font-sans leading-[28px]">
                         {card.title}
                       </h3>
                       {/* Desc: Manrope 16px Regular rgba(20,29,52,0.8) */}
                       <p className="text-[#141D34CC] text-[16px] font-normal font-sans leading-[24px]">
                         {card.description}
                       </p>
                    </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Strip (UPDATED to design) */}
      <section className="w-full h-full pb-[80px] flex flex-col justify-center items-center gap-4 bg-white">
        {/* Main box: width 1143px, padding 40px, outline, gap 25px */}
        <div className="w-full max-w-[1143px] p-[40px] bg-white outline outline-1 outline-[rgba(20,29,52,0.15)] -outline-offset-1 flex flex-col md:flex-row justify-center items-center gap-[25px]">
            {ABOUT_STATS_DATA.map((stat) => (
               <div key={stat.id} className="flex-[1_1_0] flex flex-col justify-start items-start w-full md:w-auto">
                   <div className="self-stretch text-[#0F5EE7] text-[64px] font-normal font-sans leading-[83.20px] break-words">
                       {stat.value}
                   </div>
                   <div className="self-stretch text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px] break-words">
                       {stat.label}
                   </div>
               </div>
            ))}
        </div>
      </section>

      {/* 4. History Timeline (UPDATED with Carousel & Interactive Timeline) */}
      <section className="py-[120px] bg-[#161F38]">
        <div className="container mx-auto px-4 flex flex-col gap-[43px]">
          
          {/* Top Row: Title & Arrows */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
             {/* Text Block */}
             <div className="w-full max-w-[559px] flex flex-col gap-[18px]">
                <div className="self-stretch text-white text-[14px] font-semibold font-sans leading-[18.2px] break-words">
                  Lịch sử hình thành
                </div>
                <div className="self-stretch flex flex-col gap-[15px]">
                   <div className="self-stretch text-white text-[40px] font-normal font-sans leading-[52px] break-words">
                     Quá trình xây dựng và phát triển của Viện VSQI
                   </div>
                </div>
             </div>
             
             {/* Arrows */}
             <div className="flex justify-start items-center gap-[6px]">
                {/* Left Arrow (Rotated container) */}
                <button 
                  onClick={handlePrev}
                  className="w-[50px] h-[56px] p-[24px] flex justify-center items-center gap-4 overflow-hidden outline outline-1 outline-[rgba(255,255,255,0.45)] -outline-offset-1 cursor-pointer hover:bg-white/10 transition-colors disabled:opacity-50"
                  disabled={activeIndex === 0}
                >
                     {/* Using icon component instead of raw div for better rendering */}
                     <div className="text-white/45 transform rotate-180"><Icons.ArrowRight /></div> 
                </button>
                {/* Right Arrow */}
                <button 
                  onClick={handleNext}
                  className="w-[50px] h-[56px] p-[24px] bg-white flex justify-center items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/90 transition-colors disabled:opacity-70"
                  disabled={activeIndex === HISTORY_DATA.length - 1}
                >
                     <div className="text-[#0F5EE7]"><Icons.ArrowRight /></div>
                </button>
             </div>
          </div>

          {/* Middle Row: Cards (Scrollable Container with hidden scrollbar) */}
          <div 
            ref={scrollContainerRef}
            className="w-full flex flex-row justify-start items-center gap-[25px] overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x"
          >
             {HISTORY_DATA.map((item) => (
                <div key={item.id} className="min-w-[559px] flex justify-start items-start gap-[24px] snap-start">
                   <img src={item.image} alt={item.title} className="w-[204px] h-[192px] object-cover shrink-0" />
                   <div className="w-[315px] pr-[24px] flex flex-col gap-[8px]">
                      <div className="self-stretch text-white/65 text-[20px] font-normal font-sans leading-[28px] break-words group-hover:text-white transition-colors">
                        {item.title}
                      </div>
                      <div className="self-stretch text-white/65 text-[16px] font-normal font-sans leading-[24px] break-words">
                        {item.description}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Bottom Row: Timeline Strip (Interactive & Full Width) */}
          <div className="w-full flex items-center justify-between mt-4">
            {HISTORY_DATA.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* Year Box */}
                <div 
                  className={`cursor-pointer transition-all duration-300 h-[30px] px-[14px] flex items-center justify-center gap-4 text-sm font-semibold border
                    ${index === activeIndex 
                      ? 'bg-[#0F5EE7] text-white border-[#0F5EE7]' 
                      : 'bg-[rgba(255,255,255,0.65)] text-[rgba(20,29,52,0.80)] border-[rgba(255,255,255,0.45)] hover:bg-white'
                    }`}
                  onClick={() => scrollToIndex(index)}
                >
                  {item.year}
                </div>
                
                {/* Connecting Line (Show if not the last item) */}
                {index < HISTORY_DATA.length - 1 && (
                  <div className="flex-grow h-0 outline outline-1 outline-[rgba(255,255,255,0.45)] -outline-offset-[0.5px] mx-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Leadership Team (UPDATED to design) */}
      <section className="py-[120px] bg-[#F4F6F8]">
        <div className="container mx-auto px-4 flex flex-col gap-[37px]">
           {/* Header */}
           <div className="w-full max-w-[559px] flex flex-col gap-[18px]">
              <div className="self-stretch text-black text-[14px] font-semibold font-sans leading-[18.2px] break-words">
                Về Chúng Tôi
              </div>
              <div className="self-stretch flex flex-col gap-[15px]">
                <div className="self-stretch text-[#141D34] text-[40px] font-normal font-sans leading-[52px] break-words">
                  Đơn vị hàng đầu về tiêu chuẩn và chất lượng
                </div>
                <div className="self-stretch text-[rgba(20,29,52,0.80)] text-[18px] font-normal font-['Arial'] leading-[23.4px] break-words">
                  Nâng tầm chất lượng sản phẩm Việt, vươn tới chuẩn mực quốc tế.
                </div>
              </div>
           </div>

           {/* Team Grid: 2 Rows of 4 */}
           <div className="flex flex-col gap-[24px]">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row justify-start items-center gap-[24px]">
                 {TEAM_DATA.slice(0, 4).map((member) => (
                    <div key={member.id} className="w-[267px] flex flex-col gap-[24px]">
                       {/* Image Wrapper (Double image simulation?) */}
                       <div className="w-[267px] h-[357px] relative bg-gray-200">
                          <img src={member.image} alt={member.name} className="absolute left-0 top-0 w-full h-full object-cover" />
                       </div>
                       <div className="self-stretch flex flex-col gap-[8px]">
                          <div className="self-stretch text-black text-[18px] font-medium font-sans leading-[23.4px] break-words">
                            {member.name}
                          </div>
                          <div className="self-stretch text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px] break-words">
                            {member.role}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              {/* Row 2 */}
              <div className="flex flex-col lg:flex-row justify-start items-center gap-[24px]">
                 {TEAM_DATA.slice(4, 8).map((member) => (
                    <div key={member.id} className="w-[267px] flex flex-col gap-[24px]">
                       <div className="w-[267px] h-[357px] relative bg-gray-200">
                          <img src={member.image} alt={member.name} className="absolute left-0 top-0 w-full h-full object-cover" />
                       </div>
                       <div className="self-stretch flex flex-col gap-[8px]">
                          <div className="self-stretch text-black text-[18px] font-medium font-sans leading-[23.4px] break-words">
                            {member.name}
                          </div>
                          <div className="self-stretch text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px] break-words">
                            {member.role}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. Partners (UPDATED to design) */}
      <section className="py-[120px] bg-white">
        <div className="container mx-auto px-4 flex flex-col gap-[36px]">
            {/* Header */}
            <div className="w-full max-w-[461px] flex flex-col gap-[18px]">
               <h2 className="self-stretch text-[rgba(20,29,52,0.80)] text-[40px] font-normal font-sans leading-[52px] break-words">
                 Đối tác & hợp tác quốc tế
               </h2>
               <p className="w-full md:w-[364px] text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px] break-words">
                 Tự hào đồng hành cùng những doanh nghiệp và tập đoàn uy tín trên thị trường
               </p>
            </div>
            {/* Logos */}
            <div className="self-stretch flex flex-wrap justify-between items-center gap-4">
               <img src="https://placehold.co/170x113" alt="Partner" className="w-[170px] h-[113px] object-contain" />
               <img src="https://placehold.co/170x113" alt="Partner" className="w-[170px] h-[113px] object-contain" />
               <img src="https://placehold.co/170x113" alt="Partner" className="w-[170px] h-[113px] object-contain" />
               <img src="https://placehold.co/140x86" alt="Partner" className="w-[140px] h-[86px] object-contain" />
               <img src="https://placehold.co/288x113" alt="Partner" className="w-[288px] h-[113px] object-contain" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;