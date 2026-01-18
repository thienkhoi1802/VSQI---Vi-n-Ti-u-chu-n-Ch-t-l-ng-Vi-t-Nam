import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full">
      {/* Main Footer Section - Background #F4F6F8 */}
      <div className="bg-[#F4F6F8] pt-[40px] pb-[40px] border-t border-[#141D340D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-[20px] lg:gap-[30px]">
            
            {/* Column 1: Logo & Info (Reduced width to 320px) */}
            <div className="flex flex-col items-start gap-3 lg:w-[320px]">
              <div className="flex items-center gap-[19px] h-[36px] mb-2">
                 {/* Reusing the text logo style but matched to design */}
                 <div className="bg-[#003399] text-white font-extrabold text-xl px-3 py-1 tracking-widest leading-none">
                   TCVN
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#141D34CC] text-[16px] font-bold font-sans leading-[20.8px]">
                  Viện Tiêu chuẩn Chất lượng Việt Nam
                </span>
                <span className="text-[#141D34CC] text-[14px] font-normal font-sans leading-[18.2px] mt-1">
                  Vietnam National Standards & Quality Institute
                </span>
              </div>
            </div>

            {/* Column 2: Follow (Significantly reduced to 160px to shift Policy left) */}
            <div className="flex flex-col items-start gap-5 lg:w-[160px]">
              <h3 className="text-black text-[20px] font-normal font-sans leading-[28px]">
                Theo dõi
              </h3>
              <div className="flex items-center gap-[7px]">
                <a href="#" className="w-[40px] h-[40px] bg-[#141D34] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Icons.Facebook />
                </a>
                <a href="#" className="w-[40px] h-[40px] bg-[#141D34] rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <Icons.Youtube />
                </a>
              </div>
            </div>

            {/* Column 3: Policy (Adjusted to 230px) */}
            <div className="flex flex-col items-start gap-5 lg:w-[230px]">
              <h3 className="text-black text-[20px] font-normal font-sans leading-[28px]">
                Chính sách
              </h3>
              <div className="flex flex-col items-start gap-1">
                <a href="#" className="py-1 text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px] hover:text-primary transition-colors">
                  Hướng dẫn đặt hàng
                </a>
                <a href="#" className="py-1 text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px] hover:text-primary transition-colors">
                  Bảo mật thông tin
                </a>
                <a href="#" className="py-1 text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px] hover:text-primary transition-colors">
                  Chính sách đổi trả hoàn tiền
                </a>
              </div>
            </div>

            {/* Column 4: Contact (Flex-1 takes remaining space) */}
            <div className="flex flex-col items-start gap-5 flex-1 min-w-[300px]">
              <h3 className="text-black text-[20px] font-normal font-sans leading-[28px]">
                Liên hệ
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px]">
                  Địa chỉ: Số 8 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội
                </p>
                <p className="text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px]">
                  Điện thoại: <br/>
                  (024) 37 564 269 (đặt mua tiêu chuẩn)<br/>
                  (024) 37 562 807 (liên hệ công việc)
                </p>
                <p className="text-[#141D34CC] text-[14px] font-normal font-['Arial'] leading-[18.2px]">
                  Fax: (024)38 361 771<br/>
                  Email: tieuchuan@vsqi.gov.vn
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar - Background #141D34 */}
      <div className="bg-[#141D34] py-[12px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-start items-center gap-[25px]">
             <div className="text-white text-[14px] font-normal font-['Arial'] leading-[18.2px] flex-1 text-center md:text-left">
               © 2025 Viện Tiêu chuẩn Chất lượng Việt Nam (VSQI).
             </div>
             <a href="#" className="text-white text-[14px] font-normal font-['Arial'] leading-[18.2px] hover:underline">
               Điều khoản sử dụng
             </a>
             <a href="#" className="text-white text-[14px] font-normal font-['Arial'] leading-[18.2px] hover:underline">
               Chính sách bảo mật
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;