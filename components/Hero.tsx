import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-[130px] pb-10 bg-white">
      <div className="container mx-auto px-4">
        {/* 
            Bento Grid Layout - Modified to 3 Items based on user request "Số lượng 3 items - hình ảnh"
            Desktop: 2 Main Columns. 
            - Left: 50% width, Full Height (Main Highlight).
            - Right: 50% width, Split vertically into 2 equal rows (Secondary Highlights).
            This creates 1 Large item and 2 Medium items, ensuring hierarchy ("lớn nhỏ khác nhau")
            while maintaining consistency for the secondary items ("đồng nhất font size", "5x3").
        */}
        <div className="flex flex-col lg:flex-row gap-1 h-auto lg:h-[640px]">
          
          {/* 1. LEFT COLUMN: MAIN HIGHLIGHT (Tiêu điểm) */}
          <div className="relative group w-full lg:w-1/2 h-[400px] lg:h-full overflow-hidden cursor-pointer">
             <div className="absolute inset-0 bg-[#003399] z-0"></div>
             <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
              alt="Chiến lược Tiêu chuẩn hóa Quốc gia 2026" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001540] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end items-start z-10 pb-12">
               <div className="w-full">
                  <span className="inline-block px-3 py-1 mb-4 text-[12px] font-bold uppercase tracking-widest text-white border border-white/30 backdrop-blur-md">
                    Tiêu điểm
                  </span>
                  <h3 className="text-white text-[32px] lg:text-[40px] font-bold font-sans leading-[1.2] mb-6">
                    Chiến lược Tiêu chuẩn <br className="hidden lg:block" /> hóa Quốc gia 2026
                  </h3>
                  <div className="flex items-center text-[#00C2FF] text-[12px] font-bold uppercase tracking-wider group-hover:text-white transition-colors gap-2">
                    XEM CHI TIẾT <span><Icons.ArrowRight /></span>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2 ITEMS STACKED */}
          <div className="flex flex-col gap-1 w-full lg:w-1/2 h-full">
            
            {/* 2. TOP RIGHT: SUSTAINABILITY */}
            {/* Height set to ensure approx 5x3 aspect ratio for the container (570px x 320px) */}
            <div className="relative group w-full h-[320px] lg:h-1/2 overflow-hidden cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNU6oNeDjAaAXOo_6Mp3MxeNe6rzl7pOxd4hUXqv8qtVvIwtYvZSrs7uUrPiA1YZkbtrAAgYwOoNoV0Lih0OYLt_HIXRH_DyQxG1WG-HbwFrA5N3yc2jAJs508nHmLLBCpKaFR2FR_xOWWlszLYV7oKnQ=s2000?q=80&w=1000&auto=format&fit=crop" 
                  alt="Hành động vì Net Zero" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                   <span className="inline-block mb-3 text-[11px] font-bold uppercase tracking-widest text-[#4ADE80]">
                     Phát triển bền vững
                   </span>
                   {/* Consistent font size for secondary items */}
                   <h3 className="text-white text-[24px] lg:text-[28px] font-bold font-sans leading-[1.3]">
                     Hành động vì Net Zero & Tiêu chuẩn xanh
                   </h3>
                </div>
            </div>

            {/* 3. BOTTOM RIGHT: INTERNATIONAL COOP */}
            <div className="relative group w-full h-[320px] lg:h-1/2 overflow-hidden cursor-pointer">
                   <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
                    alt="Hợp tác Quốc tế" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
                   
                   <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                     <span className="text-[#FACC15] text-[11px] font-bold uppercase tracking-widest mb-3">
                        Quốc tế
                     </span>
                     {/* Consistent font size matching the top right item */}
                     <h3 className="text-white text-[24px] lg:text-[28px] font-bold font-sans leading-[1.3] mb-4">
                       Hợp tác Quốc tế
                     </h3>
                     
                     <div className="flex items-center text-white/70 text-[12px] font-bold uppercase tracking-wider group-hover:text-white transition-colors gap-2">
                        XEM CHI TIẾT <span><Icons.ArrowRight /></span>
                     </div>
                  </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;