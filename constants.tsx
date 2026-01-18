import React from 'react';
import { NavItem, NewsItem, ServiceItem, StatItem, TeamMember, HistoryEvent, IntroCard, NewsPageItem, SidebarNewsItem } from './types';

// Icons as components for reuse
export const Icons = {
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Document: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Document" className="w-full h-full object-contain" />
  ),
  Book: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Book" className="w-full h-full object-contain" />
  ),
  BadgeCheck: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="BadgeCheck" className="w-full h-full object-contain" />
  ),
  User: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="User" className="w-full h-full object-contain" />
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z"/></svg>
  ),
  ChevronRight: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  ),
  ChevronLeft: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  FlagVN: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
      <circle cx="16" cy="16" r="15" fill="#DA251D" />
      <path fill="#FFCD00" d="M16 8.5l2.25 6.91h7.27l-5.88 4.27 2.25 6.91-5.89-4.27-5.88 4.27 2.25-6.91-5.89-4.27h7.27z"/>
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  Academic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  // Service Icons - Updated as requested
  ServiceDocs: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Xây dựng tiêu chuẩn" className="w-full h-full object-contain" />
  ),
  ServiceGuide: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Hướng dẫn áp dụng" className="w-full h-full object-contain" />
  ),
  ServiceCert: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Chứng nhận hợp chuẩn" className="w-full h-full object-contain" />
  ),
  ServiceTraining: () => (
    <img src="https://cdn-icons.flaticon.com/svg/9919/9919398.svg?token=exp=1768721543~hmac=983d4ab4e773b8878d3d45a42b68b83e" alt="Đào tạo chuyên môn" className="w-full h-full object-contain" />
  )
};

export const NAVIGATION: NavItem[] = [
  { label: 'Trang chủ', href: '#', id: 'home' },
  { label: 'Giới thiệu', href: '#about', id: 'about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Tin tức và sự kiện', href: '#news', id: 'news' },
  { label: 'Góp ý TCVN/QCVN', href: '#feedback' },
  { label: 'Tài liệu', href: '#docs' },
  { label: 'Tra cứu', href: '#search' },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    category: 'Hoạt động tiêu chuẩn',
    title: 'Vai trò và Tầm quan trọng của ISO/IEC 27018:2019 trong Bảo vệ Quyền riêng tư Dữ liệu Đám mây',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/tech1/400/250',
    description: 'Hội thảo chuyên đề về an toàn thông tin và bảo vệ dữ liệu cá nhân trên nền tảng đám mây...'
  },
  {
    id: 2,
    category: 'Tiêu chuẩn mới',
    title: 'Ban hành bộ tiêu chuẩn TCVN về Nông nghiệp hữu cơ năm 2026',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/farm/400/250',
    description: 'Bộ Khoa học và Công nghệ vừa công bố bộ tiêu chuẩn quốc gia mới áp dụng cho sản phẩm hữu cơ...'
  },
  {
    id: 3,
    category: 'Đào tạo',
    title: 'Khóa đào tạo Chuyên gia đánh giá trưởng ISO 9001:2015',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/edu/400/250',
    description: 'Chương trình đào tạo được chứng nhận quốc tế IRCA, cung cấp kiến thức và kỹ năng đánh giá...'
  },
  {
    id: 4,
    category: 'Hoạt động tiêu chuẩn',
    title: 'Phát triển hướng học liệu STEM trực quan giành giải Nhất AI thực chiến',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/ai/400/250',
    description: 'Dự án ứng dụng trí tuệ nhân tạo trong giáo dục STEM đã xuất sắc vượt qua 200 đội thi...'
  },
  {
    id: 5,
    category: 'Tiêu chuẩn mới',
    title: 'Dữ liệu cá nhân bị mua bán theo "lô" trên chợ đen',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/sec/400/250',
    description: 'Cảnh báo về tình trạng lộ lọt dữ liệu và các biện pháp áp dụng tiêu chuẩn an toàn thông tin...'
  },
  {
    id: 6,
    category: 'Đào tạo',
    title: 'Ngày mai, Luật Bảo vệ dữ liệu cá nhân chính thức có hiệu lực',
    date: '17 Tháng 12, 2025',
    image: 'https://picsum.photos/seed/law/400/250',
    description: 'Những điểm mới doanh nghiệp cần lưu ý để tuân thủ quy định pháp luật về bảo vệ dữ liệu...'
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    icon: <Icons.ServiceDocs />,
    title: 'Xây dựng tiêu chuẩn (TCVN/TCCS)',
    description: 'Hỗ trợ doanh nghiệp tiếp cận, áp dụng và đóng góp cho hệ thống tiêu chuẩn quốc gia.',
  },
  {
    id: 2,
    icon: <Icons.ServiceGuide />,
    title: 'Hướng dẫn áp dụng tiêu chuẩn',
    description: 'Tư vấn, hướng dẫn áp dụng các hệ thống quản lý và công cụ cải tiến năng suất chất lượng.',
    isHighlight: true,
  },
  {
    id: 3,
    icon: <Icons.ServiceCert />,
    title: 'Chứng nhận hợp chuẩn – hợp quy',
    description: 'Dịch vụ đánh giá sự phù hợp, chứng nhận sản phẩm, hàng hóa phù hợp tiêu chuẩn.',
  },
  {
    id: 4,
    icon: <Icons.ServiceTraining />,
    title: 'Đào tạo chuyên môn',
    description: 'Cung cấp các khóa đào tạo về tiêu chuẩn hóa, năng suất chất lượng và nghiệp vụ liên quan.',
  },
];

export const STATS_DATA: StatItem[] = [
  { id: 1, value: '1800+', label: 'Chuyên gia' },
  { id: 2, value: '14.400+', label: 'Số lượng TCVN' },
  { id: 3, value: '870+', label: 'Số lượng QCVN' },
];

export const PARTNERS_LOGOS = [
  'https://picsum.photos/seed/logo1/150/60',
  'https://picsum.photos/seed/logo2/150/60',
  'https://picsum.photos/seed/logo3/150/60',
  'https://picsum.photos/seed/logo4/150/60',
  'https://picsum.photos/seed/logo5/288/113', // Added 5th logo based on design
];

// About Page Data - UPDATED to match specific design request
export const INTRO_CARDS_DATA: IntroCard[] = [
  {
    id: 1,
    icon: <Icons.Document />, 
    title: 'Nghiên cứu khoa học về tiêu chuẩn',
    description: 'Biên soạn tiêu chuẩn quốc gia TCVN',
  },
  {
    id: 2,
    icon: <Icons.Book />,
    title: 'Quản lý cơ sở dữ liệu TCVN & QCVN',
    description: 'Xuất bản & phát hành tiêu chuẩn',
  },
  {
    id: 3,
    icon: <Icons.BadgeCheck />, 
    title: 'Đào tạo, hội thảo chuyên môn',
    description: 'Thẩm định, góp ý dự thảo tiêu chuẩn',
  },
  {
    id: 4,
    icon: <Icons.User />, 
    title: 'Hợp tác quốc tế về tiêu chuẩn hóa',
    description: 'Hợp tác quốc tế về tiêu chuẩn hóa',
  },
];

export const ABOUT_STATS_DATA: StatItem[] = [
  { id: 1, value: '128', label: 'Chuyên gia' },
  { id: 2, value: '1000+', label: 'Số lượng TCVN' },
  { id: 3, value: '960+', label: 'Số lượng QCVN' },
  { id: 4, value: '45', label: 'Số lượng QCVN' }, // Updated to 'Số lượng QCVN' as per design text, though likely TCCS
];

export const HISTORY_DATA: HistoryEvent[] = [
  {
    id: 1,
    year: '2022',
    title: 'Vai trò và Tầm quan trọng của ISO/IEC 27018:2019 trong Bảo vệ Quyền riêng tư Dữ liệu Đám mây',
    description: 'Đưa nền đầu tư thế giới đến với mỗi người dân, mở ra cơ hội phát triển bền vững và thịnh vượng cho tương lai',
    image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=204&h=192&auto=format&fit=crop',
  },
  {
    id: 2,
    year: '2022',
    title: 'TCVN 13911-1:2023 về Quản lý năng lượng – Hệ thống quản lý năng lượng',
    description: 'VSQI đồng hành cùng doanh nghiệp nâng cao năng lực cạnh tranh và phát triển bền vững',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=204&h=192&auto=format&fit=crop',
  },
  {
    id: 3,
    year: '2022',
    title: 'Vai trò và Tầm quan trọng của ISO/IEC 27018:2019 trong Bảo vệ Quyền riêng tư Dữ liệu Đám mây',
    description: 'Đưa nền đầu tư thế giới đến với mỗi người dân, mở ra cơ hội phát triển bền vững và thịnh vượng cho tương lai',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=204&h=192&auto=format&fit=crop',
  },
  {
    id: 4,
    year: '2023',
    title: 'Hội nghị Tiêu chuẩn hóa Quốc tế lần thứ 50 tại Hà Nội',
    description: 'Gặp gỡ các chuyên gia đầu ngành để thảo luận về tương lai của các tiêu chuẩn kỹ thuật số.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=204&h=192&auto=format&fit=crop',
  },
  {
    id: 5,
    year: '2023',
    title: 'Ban hành TCVN mới về An toàn thông tin mạng',
    description: 'Cập nhật các quy định mới nhất đảm bảo an toàn cho hạ tầng số quốc gia.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=204&h=192&auto=format&fit=crop',
  },
];

export const TEAM_DATA: TeamMember[] = [
  { id: 1, name: 'Trần Minh Tuấn', role: 'Giám đốc', image: 'https://placehold.co/267x357' },
  { id: 2, name: 'Đặng Văn Hải', role: 'Nhà phân tích chất lượng', image: 'https://placehold.co/267x357' },
  { id: 3, name: 'Nguyễn Thị Lan', role: 'Chuyên gia kiểm định chất lượng', image: 'https://placehold.co/267x357' },
  { id: 4, name: 'Ngô Thị Mai', role: 'Quản lý dự án tiêu chuẩn', image: 'https://placehold.co/267x357' },
  { id: 5, name: 'Phạm Văn Bình', role: 'Chuyên viên tư vấn tiêu chuẩn', image: 'https://placehold.co/267x357' },
  { id: 6, name: 'Trần Thiên Long', role: 'Cán bộ đào tạo tiêu chuẩn', image: 'https://placehold.co/267x357' },
  { id: 7, name: 'Bùi Văn An', role: 'Giám sát viên tiêu chuẩn', image: 'https://placehold.co/267x357' },
  { id: 8, name: 'Lê Thị Hương', role: 'Trưởng phòng Nghiên cứu', image: 'https://placehold.co/267x357' },
];

export const NEWS_PAGE_LIST: NewsPageItem[] = [
  {
    id: 1,
    title: "Ông Trương Gia Bình: 'Mong có triệu thanh niên Việt Nam dấn thân làm AI'",
    description: "Công bố giải thưởng một triệu USD cho một sản phẩm AI \"không cần quá siêu\", Chủ tịch Liên minh Âu Lạc Trương Gia Bình cho biết mong muốn thu hút hàng triệu người trẻ cùng xây dựng AI có chủ quyền.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 2,
    title: "9 startup AI Việt trình diễn giải pháp trước doanh nghiệp Nhật",
    description: "Các startup về AI tại Việt Nam kết nối với khách hàng Nhật Bản trong chương trình VietLeap AI Accelerator.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 3,
    title: "Jensen Huang: 'AI quyền năng chưa tồn tại'",
    description: "Jensen Huang, ceo Nvidia, trấn an rằng thế giới còn cách rất xa trí tuệ nhân tạo quyền năng, vượt tầm kiểm soát của con người, hay còn gọi là God AI.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 4,
    title: "Công ty Trung Quốc thách thức loạt 'ông lớn' chip nhớ",
    description: "CXMT vượt qua hạn chế của Mỹ để cạnh tranh với Micron, Samsung, SK Hynix, nhưng cũng đang trở thành tâm điểm trong vụ cựu nhân viên Samsung tuồn công nghệ DRAM sang Trung Quốc.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 5,
    title: "Ứng dụng 'Are you dead' thành hiện tượng mạng tại Trung Quốc",
    description: "Ứng dụng Sileme (Are you dead), có nghĩa \"Bạn đã chết chưa\", dành cho những người sống một mình đang thu hút sự chú ý lớn ở Trung Quốc và trên toàn cầu.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 6,
    title: "Nỗi lo của Trung Quốc qua thương vụ Meta - Manus",
    description: "Trung Quốc điều tra việc Meta mua lại startup AI Manus, được cho là do lo ngại nhân tài và công nghệ bị thất thoát sang Mỹ.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 7,
    title: "Trung Quốc 'dạy học' cho robot hình người thế nào",
    description: "Tại hơn 40 trung tâm đào tạo robot hình người khắp Trung Quốc, các kỹ sư thực hiện các động tác đơn giản để robot hình người học theo.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 8,
    title: "Thứ trưởng Bùi Thế Duy giữ chức Phó chủ tịch Viện Hàn lâm Khoa học và Công nghệ Việt Nam",
    description: "Thủ tướng Phạm Minh Chính điều động, bổ nhiệm Thứ trưởng Bộ Khoa học và Công nghệ Bùi Thế Duy giữ chức Phó chủ tịch Viện Hàn lâm Khoa học và Công nghệ Việt Nam, thời hạn 5 năm, từ 11/1/2026.",
    image: "https://placehold.co/243x146"
  },
  {
    id: 9,
    title: "Ông Trương Gia Bình: 'Mong có triệu thanh niên Việt Nam dấn thân làm AI'",
    description: "Công bố giải thưởng một triệu USD cho một sản phẩm AI \"không cần quá siêu\", Chủ tịch Liên minh Âu Lạc Trương Gia Bình cho biết mong muốn thu hút hàng triệu người trẻ cùng xây dựng AI có chủ quyền.",
    image: "https://placehold.co/243x146"
  }
];

export const NEWS_SIDEBAR_LIST: SidebarNewsItem[] = [
  {
    id: 1,
    title: "Vai trò và Tầm quan trọng của ISO/IEC 27018:2019 trong Bảo vệ Quyền riêng tư Dữ liệu Đám mây",
    date: "17 Tháng 12, 2025",
    image: "https://placehold.co/300x181"
  },
  {
    id: 2,
    title: "Chiêu đánh cắp tài khoản Facebook 'trình duyệt trong trình duyệt'",
    date: "17 Tháng 12, 2025",
    image: "https://placehold.co/300x181"
  },
  {
    id: 3,
    title: "Bộ trưởng Nguyễn Mạnh Hùng: Lĩnh vực viễn thông cần tham gia dẫn dắt toàn cầu",
    date: "17 Tháng 12, 2025",
    image: "https://placehold.co/300x181"
  }
];