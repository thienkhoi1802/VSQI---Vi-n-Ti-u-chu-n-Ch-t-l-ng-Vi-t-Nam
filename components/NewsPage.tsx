import React, { useState } from 'react';
import { NEWS_PAGE_LIST, NEWS_SIDEBAR_LIST, Icons } from '../constants';

const NewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const tabs = [
    "Tin tức chung",
    "Hoạt động tiêu chuẩn hóa",
    "Hoạt động Ban kỹ thuật",
    "Tiêu chuẩn mới",
    "Đào tạo",
    "Ngày tiêu chuẩn thế giới 14/10"
  ];

  return (
    <div className="bg-white font-sans">
      {/* 1. HERO SECTION */}
      <section className="pt-[130px] w-full relative h-[300px] lg:h-[380px] overflow-hidden group">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
                src="https://placehold.co/1728x144" 
                alt="Tin tức & sự kiện Background" 
                className="w-full h-full object-cover transform rotate-180 origin-top-left transition-transform duration-[2s] ease-out group-hover:scale-105"
                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)' }}
            />
        </div>
        
        {/* Gradient Overlay - Optimized visibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0A3E98]/90 via-[#0A3E98]/60 to-transparent"
        ></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative h-full z-10 flex items-center">
            <div className="w-full max-w-[1140px] pt-8 lg:pt-0 animate-fade-in-up">
                <span className="inline-block py-1 px-3 mb-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                  Cập nhật liên tục
                </span>
                <h1 className="text-white text-[42px] lg:text-[56px] font-light leading-tight">
                  Tin tức & <span className="font-bold">Sự kiện</span>
                </h1>
                <p className="mt-4 text-white/80 text-lg max-w-2xl font-light">
                  Cập nhật những thông tin mới nhất về tiêu chuẩn, đo lường chất lượng và các hoạt động nổi bật của VSQI.
                </p>
            </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col gap-12">
          
          {/* MODERN TABS - Clean Style */}
          <div className="w-full border-b border-gray-100 sticky top-[80px] bg-white/95 backdrop-blur-md z-30 py-4 -mx-4 px-4 lg:mx-0 lg:px-0">
             <div className="flex justify-start items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
                {tabs.map((tab, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      whitespace-nowrap px-6 py-2.5 text-sm font-semibold transition-all duration-300 rounded-sm
                      ${activeTab === index 
                        ? 'bg-[#0F5EE7] text-white shadow-lg shadow-blue-500/30 translate-y-[-1px]' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0F5EE7]'
                      }
                    `}
                  >
                     {tab}
                  </button>
                ))}
             </div>
          </div>

          {/* FEATURED ARTICLE - Elevated Design */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 group cursor-pointer hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 rounded-sm overflow-hidden border border-gray-100">
             {/* Image - 7 Columns */}
             <div className="lg:col-span-7 h-[300px] lg:h-[450px] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://placehold.co/800x500" 
                  alt="Featured" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
             </div>
             {/* Content - 5 Columns */}
             <div className="lg:col-span-5 bg-[#F8FAFC] p-8 lg:p-10 flex flex-col justify-center gap-6 relative overflow-hidden">
                 {/* Decorative background element */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
                 
                 <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-100 text-[#0F5EE7] text-xs font-bold uppercase tracking-wider">Tiêu điểm</span>
                        <span className="text-gray-500 text-sm font-medium">31/03/2025</span>
                    </div>
                    <h2 className="text-[#141D34] text-[28px] lg:text-[32px] font-bold leading-tight transition-colors duration-300 group-hover:text-[#0F5EE7]">
                      'Tiêu chuẩn, đo lường và chất lượng phải là đòn bẩy tăng năng lực cạnh tranh'
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                      Phát biểu tại buổi làm việc với Ủy ban Tiêu chuẩn Đo lường Chất lượng Quốc gia (TĐC) ngày 28/3/2025, Bộ trưởng Bộ Khoa học và Công nghệ Nguyễn Mạnh Hùng chỉ rõ những định hướng chiến lược quan trọng.
                    </p>
                    <div className="pt-4 mt-auto">
                        <span className="inline-flex items-center gap-2 text-[#0F5EE7] font-bold uppercase text-sm tracking-wider group-hover:gap-4 transition-all duration-300">
                            Đọc tiếp <Icons.ArrowRight />
                        </span>
                    </div>
                 </div>
             </div>
          </div>

          {/* SPLIT LAYOUT: LIST + STICKY SIDEBAR */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
             
             {/* LEFT COLUMN: NEWS LIST (Comfortable Spacing) */}
             <div className="flex-1 flex flex-col gap-10">
                
                {NEWS_PAGE_LIST.map((item) => (
                  <div key={item.id} className="group flex flex-col sm:flex-row gap-6 lg:gap-8 items-start pb-10 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors p-2 rounded-sm -mx-2">
                      {/* Image Thumbnail */}
                      <div className="w-full sm:w-[260px] h-[160px] shrink-0 overflow-hidden rounded-sm relative">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col gap-3">
                         <h3 className="text-[#141D34] text-[22px] font-bold leading-[1.4] transition-colors duration-300 group-hover:text-[#0F5EE7] line-clamp-2 cursor-pointer">
                           {item.title}
                         </h3>
                         <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">
                           {item.description}
                         </p>
                         <div className="mt-auto flex items-center gap-4 pt-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-1">Tin tức</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-sm text-gray-400 flex items-center gap-1">
                                <Icons.Calendar /> 17/12/2025
                            </span>
                         </div>
                      </div>
                  </div>
                ))}

                {/* MODERN PAGINATION */}
                <div className="flex justify-center lg:justify-start items-center gap-3 pt-8">
                   {[1, 2, 3, 4, 5].map((page) => (
                     <button 
                        key={page}
                        onClick={() => setActivePage(page)}
                        className={`
                            w-10 h-10 flex items-center justify-center text-sm font-semibold transition-all duration-200 rounded-sm
                            ${activePage === page 
                                ? 'bg-[#141D34] text-white shadow-md transform scale-110' 
                                : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-[#0F5EE7]'
                            }
                        `}
                     >
                       {page}
                     </button>
                   ))}
                   <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#0F5EE7] hover:bg-gray-100 rounded-sm transition-colors">
                      <Icons.ChevronRight />
                   </button>
                </div>

             </div>

             {/* RIGHT COLUMN: STICKY SIDEBAR */}
             <div className="w-full lg:w-[320px] shrink-0">
                <div className="sticky top-[100px] flex flex-col gap-8">
                    
                    {/* Sidebar Widget: Most Viewed */}
                    <div className="bg-white border border-gray-100 p-6 shadow-sm rounded-sm">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <span className="w-1 h-6 bg-[#0F5EE7]"></span>
                            <h3 className="text-[#141D34] text-xl font-bold uppercase tracking-tight">Xem nhiều nhất</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                        {NEWS_SIDEBAR_LIST.map((item, idx) => (
                            <div key={item.id} className="group cursor-pointer flex gap-4 items-start">
                                <div className="text-3xl font-black text-gray-100 leading-none -mt-1 group-hover:text-[#0F5EE7]/20 transition-colors">
                                    0{idx + 1}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[#141D34] text-[15px] font-semibold leading-snug transition-colors duration-300 group-hover:text-[#0F5EE7] line-clamp-3">
                                    {item.title}
                                    </h4>
                                    <span className="text-xs text-gray-400 font-medium">
                                    {item.date}
                                    </span>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Sidebar Widget: Banner/Ad Placeholder */}
                    <div className="bg-[#141D34] p-8 text-white text-center rounded-sm overflow-hidden relative group cursor-pointer">
                        <div className="absolute inset-0 bg-[#0F5EE7] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <h4 className="text-2xl font-bold mb-2 relative z-10">Đăng ký bản tin</h4>
                        <p className="text-white/70 text-sm mb-6 relative z-10">Nhận thông tin tiêu chuẩn mới nhất qua email.</p>
                        <button className="w-full py-3 bg-white text-[#141D34] font-bold text-sm uppercase tracking-wider hover:bg-[#0F5EE7] hover:text-white transition-colors relative z-10">
                            Đăng ký ngay
                        </button>
                    </div>

                </div>
             </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default NewsPage;