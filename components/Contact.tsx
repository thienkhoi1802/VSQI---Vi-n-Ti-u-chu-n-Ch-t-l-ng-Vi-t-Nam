import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="pt-[130px] w-full relative h-[620px] lg:h-[621px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src="https://placehold.co/1728x491" 
                alt="Liên hệ Background" 
                className="w-full h-full object-cover"
            />
        </div>
        
        {/* Blue Overlay Base */}
        <div className="absolute inset-0 bg-[#0F5EE7] mix-blend-multiply opacity-100"></div>

        {/* Decorative Rotated Shape */}
        <div 
            className="absolute hidden lg:block bg-[#0F5EE7]"
            style={{
                width: '236.22px', 
                height: '871.70px', 
                left: '70%', 
                top: '0', 
                transform: 'rotate(30deg)', 
                transformOrigin: 'top left',
                opacity: 0.8
            }}
        ></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative h-full z-10 flex items-center">
            <div className="w-full max-w-[600px] flex flex-col gap-[15px] pt-12 lg:pt-0">
                <h1 className="text-white text-[40px] lg:text-[56px] font-normal font-sans leading-[1.3] break-words">
                    Liên hệ chúng tôi
                </h1>
                <p className="text-white text-[16px] font-normal font-sans leading-[24px] break-words">
                    VSQI luôn sẵn sàng lắng nghe và đồng hành cùng bạn
                </p>
            </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (Info + Form) */}
      <section className="py-[80px] lg:py-[100px] bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[121px]">
                
                {/* LEFT: Contact Information */}
                <div className="w-full lg:max-w-[462px] flex flex-col gap-[39px]">
                    
                    {/* Address Block */}
                    <div className="flex flex-col gap-[12px] pb-[39px] border-b border-[rgba(20,29,52,0.05)]">
                        <h3 className="text-[#141D34] text-[24px] font-normal font-sans leading-[31.2px]">
                            Địa chỉ
                        </h3>
                        <p className="text-[#141D34] text-[18px] font-normal font-sans leading-[28.8px]">
                            Số 8 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội
                        </p>
                        <div className="mt-2">
                             <button className="inline-flex items-center gap-[8px] bg-[#0F5EE7] text-white px-[14px] py-[4px] rounded-[20px] hover:bg-blue-700 transition-colors">
                                <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
                                    <div className="text-[#0F5EE7] transform scale-75">
                                        <Icons.MapPin />
                                    </div>
                                </div>
                                <span className="text-[16px] font-semibold font-sans leading-[20.8px]">Xem chỉ đường</span>
                             </button>
                        </div>
                    </div>

                    {/* Email & Fax Grid */}
                    <div className="flex flex-col sm:flex-row gap-[30px] pb-[39px] border-b border-[rgba(20,29,52,0.05)]">
                         <div className="flex-1 flex flex-col gap-[12px]">
                            <h3 className="text-[#141D34] text-[24px] font-normal font-sans leading-[31.2px]">
                                Email
                            </h3>
                            <p className="text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px]">
                                tieuchuan@vsqi.gov.vn
                            </p>
                         </div>
                         <div className="flex-1 flex flex-col gap-[12px]">
                            <h3 className="text-[#141D34] text-[24px] font-normal font-sans leading-[31.2px]">
                                Fax
                            </h3>
                            <p className="text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px]">
                                (024)38 361 771
                            </p>
                         </div>
                    </div>

                    {/* Phone Block */}
                    <div className="flex flex-col sm:flex-row gap-[30px]">
                        <div className="flex-1 flex flex-col gap-[12px]">
                            <h3 className="text-[#141D34] text-[24px] font-normal font-sans leading-[31.2px]">
                                Điện thoại
                            </h3>
                            <div className="flex flex-col">
                                <span className="text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px]">
                                    (024) 37 564 269
                                </span>
                                <span className="text-[rgba(20,29,52,0.80)] text-[14px] font-normal font-sans leading-[18.2px]">
                                    (đặt mua tiêu chuẩn)
                                </span>
                            </div>
                         </div>
                         <div className="flex-1 flex flex-col gap-[12px]">
                            {/* Empty title space to align with 'Điện thoại' if needed, or repeated label */}
                             <h3 className="text-[#141D34] text-[24px] font-normal font-sans leading-[31.2px] opacity-0 lg:opacity-100">
                                Hotline
                            </h3>
                            <div className="flex flex-col">
                                <span className="text-[rgba(20,29,52,0.80)] text-[16px] font-normal font-sans leading-[24px]">
                                    (024) 37 562 807
                                </span>
                                <span className="text-[rgba(20,29,52,0.80)] text-[14px] font-normal font-sans leading-[18.2px]">
                                    (liên hệ công việc)
                                </span>
                            </div>
                         </div>
                    </div>

                </div>

                {/* RIGHT: Consultation Form */}
                <div className="w-full lg:w-[557px] bg-white p-[32px] rounded-[8px] border border-[#E6E6E6] flex flex-col gap-[24px] shadow-sm">
                    <div className="flex flex-col gap-[8px]">
                        <h2 className="text-[#2E2D33] text-[40px] font-normal font-sans leading-[52px]">
                            Nhận tư vấn
                        </h2>
                        <p className="text-[rgba(46,45,51,0.85)] text-[16px] font-normal font-sans leading-[24px]">
                            Hãy chia sẻ nhu cầu, ý tưởng mà đang thắc mắc
                        </p>
                    </div>
                    
                    <form className="flex flex-col gap-[24px]">
                        {/* Name & Phone Row */}
                        <div className="flex flex-col sm:flex-row gap-[24px]">
                            <div className="flex-1 pb-[12px] border-b border-[#E6E6E6]">
                                <input 
                                    type="text" 
                                    placeholder="Họ và tên" 
                                    className="w-full outline-none text-[rgba(46,45,51,0.85)] text-[18px] font-medium font-sans leading-[23.4px] placeholder:text-[rgba(46,45,51,0.85)]"
                                />
                            </div>
                            <div className="flex-1 pb-[12px] border-b border-[rgba(46,45,51,0.85)]">
                                <input 
                                    type="text" 
                                    placeholder="Số điện thoại" 
                                    className="w-full outline-none text-[rgba(46,45,51,0.85)] text-[18px] font-medium font-sans leading-[23.4px] placeholder:text-[rgba(46,45,51,0.85)]"
                                />
                            </div>
                        </div>

                        {/* Email Row */}
                         <div className="flex flex-col sm:flex-row gap-[24px]">
                            <div className="flex-1 pb-[12px] border-b border-[#E6E6E6]">
                                <input 
                                    type="email" 
                                    placeholder="Địa chỉ Email" 
                                    className="w-full outline-none text-[rgba(46,45,51,0.65)] text-[18px] font-normal font-sans leading-[28.8px] placeholder:text-[rgba(46,45,51,0.65)]"
                                />
                            </div>
                        </div>

                         {/* Message Row */}
                        <div className="pb-[12px] border-b border-[#E6E6E6] h-[110px]">
                            <textarea 
                                placeholder="Vui lòng cho chúng tôi biết yêu cầu của bạn" 
                                className="w-full h-full resize-none outline-none text-[rgba(46,45,51,0.65)] text-[18px] font-normal font-sans leading-[28.8px] placeholder:text-[rgba(46,45,51,0.65)]"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="button"
                            className="w-full h-[60px] bg-[#0F5EE7] flex items-center justify-center text-white text-[16px] font-semibold font-sans leading-[20.8px] hover:bg-blue-700 transition-colors"
                        >
                            Gửi yêu cầu
                        </button>

                    </form>
                </div>

            </div>
        </div>
      </section>

      {/* 3. MAP SECTION (Active Google Maps Iframe) */}
      <section className="w-full h-[450px]">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6572621020275!2d105.79513331533226!3d21.04639658598888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b49727409%3A0x1c1e5d774268153d!2zOCBIb8OgbmcgUXXhu5FjIFZp4buHdCwgTmdhx9luaSDEkMO0LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ Viện Tiêu chuẩn Chất lượng Việt Nam"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;