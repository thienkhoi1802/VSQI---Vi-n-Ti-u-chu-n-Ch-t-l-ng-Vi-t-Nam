import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-[#141D340D]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-[36px]">
          
          {/* Left Section: Đối tác (Width approx 861px in design, we use flex-1) */}
          <div className="flex flex-col justify-start items-start gap-[36px] flex-1 w-full">
            
            {/* Header Block */}
            <div className="flex flex-col justify-start items-start gap-[18px] w-full max-w-[461px]">
              <h2 className="text-[40px] font-normal text-[#141D34]/80 leading-[52px] font-sans">
                Đối tác
              </h2>
              <p className="text-[16px] font-normal text-[#141D34]/80 leading-[24px] font-sans w-full md:w-[364px]">
                Tự hào đồng hành cùng những doanh nghiệp và tập đoàn uy tín trên thị trường
              </p>
            </div>

            {/* Logos Row */}
            <div className="w-full flex flex-wrap justify-between items-center gap-4">
              <img 
                src="https://placehold.co/170x113" 
                alt="Partner 1" 
                className="w-[170px] h-[113px] object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://placehold.co/170x113" 
                alt="Partner 2" 
                className="w-[170px] h-[113px] object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://placehold.co/170x113" 
                alt="Partner 3" 
                className="w-[170px] h-[113px] object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://placehold.co/140x86" 
                alt="Partner 4" 
                className="w-[140px] h-[86px] object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>

          {/* Right Section: Liên kết (Width 257px) */}
          <div className="flex flex-col justify-start items-start gap-[36px] w-full lg:w-[257px] shrink-0">
            
            {/* Header Block */}
            <div className="flex flex-col justify-start items-start gap-[18px] w-full">
              <h2 className="text-[40px] font-normal text-[#141D34]/80 leading-[52px] font-sans">
                Liên kết
              </h2>
              <p className="text-[16px] font-normal text-[#141D34]/80 leading-[24px] font-sans">
                Tự hào đồng hành cùng những doanh nghiệp và tập đoàn uy tín trên thị trường
              </p>
            </div>
            
            {/* Content for Links could go here (currently empty in design snippet) */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;