import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-[850px]">
            <h2 className="text-[40px] font-normal text-[#141D34]/80 leading-[52px] mb-2 font-sans">
              Dịch vụ
            </h2>
            <p className="text-[16px] font-normal text-[#141D34]/80 leading-[24px] font-sans mt-2">
              Hỗ trợ doanh nghiệp tiếp cận, áp dụng và đóng góp cho hệ thống tiêu chuẩn quốc gia.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center justify-center h-[40px] px-6 py-3 border border-[#0F5EE7] bg-[#1067fe0d] text-[#0F5EE7] text-[14px] font-medium leading-[20px] hover:bg-[#0F5EE7] hover:text-white transition-colors duration-200">
            Xem thêm
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className={`
                flex flex-col h-[330px] px-6 pb-6 pt-12 border transition-all duration-300
                ${service.isHighlight 
                  ? 'bg-[#0F5EE7] border-[#0F5EE7] text-white shadow-lg' 
                  : 'bg-[#F4F6F8] border-[#141D3426] text-[#141D34]/80 hover:border-[#0F5EE7]/50'
                }
              `}
            >
              {/* Icon - Force size to 56px via CSS class since Icon component has hardcoded size */}
              <div className={`mb-10 [&>svg]:w-[56px] [&>svg]:h-[56px] [&>img]:w-[56px] [&>img]:h-[56px] ${service.isHighlight ? 'text-white' : 'text-[#141D34]/80'}`}>
                {service.icon}
              </div>

              {/* Content Container */}
              <div className="flex flex-col gap-4 flex-grow">
                {/* Title - Manrope Regular 20px */}
                <h3 className={`text-[20px] font-normal leading-[140%] font-sans ${service.isHighlight ? 'text-white' : 'text-[#141D34]/80'}`}>
                  {service.title}
                </h3>

                {/* Conditional Content: Buttons for Highlight, Description for Normal */}
                {service.isHighlight ? (
                  <div className="mt-auto flex flex-col gap-3">
                     <button className="w-full h-[40px] bg-white text-[#0F5EE7] text-[14px] font-bold leading-[20px] hover:bg-gray-100 transition-colors">
                        Đăng ký dịch vụ
                     </button>
                     <button className="w-full h-[40px] bg-transparent border border-white text-white text-[14px] font-normal leading-[20px] hover:bg-white/10 transition-colors">
                        Xem chi tiết
                     </button>
                  </div>
                ) : (
                  <p className="text-[16px] font-normal leading-[150%] font-sans opacity-90">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden w-full">
            <button className="w-full h-[40px] px-6 py-3 border border-[#0F5EE7] bg-[#1067fe0d] text-[#0F5EE7] text-[14px] font-medium leading-[20px] hover:bg-[#0F5EE7] hover:text-white transition-colors">
                Xem thêm
            </button>
        </div>
      </div>
    </section>
  );
};

export default Services;