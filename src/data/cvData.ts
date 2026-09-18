export interface TechItem {
  id: string;
  name: string;
  category: 'software' | 'language' | 'ai' | 'framework';
  description: string;
  iconType: string;
  accentColor: string;
  badge?: string;
}

export const cvData = {
  name: "Trương Tấn Phát",
  title: "Data Scientist & Software Engineer",
  dob: "28/10/2004",
  phone: "0934766051",
  email: "ttan56781@gmail.com",
  location: "Hóc Môn, TP Hồ Chí Minh",
  bio: "Là sinh viên ngành Khoa Học Dữ Liệu tại Đại học Nguyễn Tất Thành, đã hoàn thành chương trình học và đang chờ bằng tốt nghiệp. Tôi tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp trong vai trò Software Engineer & Data Engineer, nơi có thể phát huy tối đa tư duy thuật toán, kỹ năng xử lý dữ liệu và xây dựng giải pháp AI thực tế.",
  education: {
    school: "Đại học Nguyễn Tất Thành (NTTU)",
    degree: "Chuyên ngành Khoa học Dữ liệu",
    period: "09/2022 — 2026",
    status: "Sinh viên năm cuối, đã hoàn thành chương trình học và chờ nhận bằng tốt nghiệp",
  },
  interests: ["Nghe nhạc", "Đọc sách công nghệ", "Xem phim khoa học viễn tưởng"],
  experience: [
    {
      period: "10/2025 — 12/2025",
      role: "Thực tập sinh Công nghệ Thông tin",
      company: "Trung Tâm Công Nghệ Thông Tin Miền Nam — Viện Công Nghệ Thông Tin",
      highlights: [
        "Tham gia hỗ trợ triển khai và vận hành các hệ thống công nghệ thông tin chuyên nghiệp.",
        "Tham gia nhập liệu, xử lý, làm sạch và cập nhật dữ liệu lớn trên các hệ thống phần mềm.",
        "Phối hợp triển khai các mô hình Recommendation System nhằm giữ chân khách hàng và chuyển đổi số ứng dụng AI.",
        "Rèn luyện kỹ năng làm việc nhóm, tư duy giải quyết vấn đề và kiến trúc hệ thống doanh nghiệp.",
      ],
    },
    {
      period: "01/2026 — 03/2026",
      role: "Nhân viên Bán hàng & Vận hành",
      company: "Shop Quần Á Thời Trang Bán Lẻ",
      highlights: [
        "Tư vấn khách hàng lựa chọn sản phẩm phù hợp với nhu cầu và phong cách cá nhân.",
        "Thực hiện thanh toán, tiếp nhận và xử lý đơn hàng trực tiếp tại cửa hàng và trên các kênh online.",
        "Theo dõi số lượng hàng hóa, định kỳ kiểm kê và lập báo cáo tình trạng tồn kho.",
        "Sắp xếp, tổ chức và tối ưu hóa không gian trưng bày thẩm mỹ.",
      ],
    },
  ],
  projects: [
    {
      name: "HelloAIWorldM / -n",
      subtitle: "Dự án Khoa học dữ liệu & Xử lý số liệu",
      description: "Kho lưu trữ mã nguồn cho các bài toán phân tích dữ liệu, thuật toán máy học và thử nghiệm mô hình trí tuệ nhân tạo.",
      github: "https://github.com/HelloAIWorldM/-n",
      tags: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    },
    {
      name: "HelloAIWorldM / Nhom4_LTW",
      subtitle: "Dự án Lập trình Web Fullstack",
      description: "Ứng dụng web hoàn chỉnh phục vụ bài toán nghiệp vụ, tích hợp giao diện người dùng tương tác, xác thực và cơ sở dữ liệu.",
      github: "https://github.com/HelloAIWorldM/Nhom4_LTW",
      tags: ["Web Development", "JavaScript", "HTML/CSS", "Database"],
    },
  ],
  skills: [
    "Kỹ năng làm việc nhóm",
    "Kỹ năng quản lý thời gian",
    "Kỹ năng làm chủ công việc",
    "Kỹ năng giao tiếp",
    "AI Chatbot, Generative Image AI, Prompt Engineering",
    "Excel, PowerBI, SQL, Python, C++, TypeScript, React",
  ],
  socials: [
    { name: "GitHub", href: "https://github.com/HelloAIWorldM", display: "github.com/HelloAIWorldM" },
    { name: "Email", href: "mailto:ttan56781@gmail.com", display: "ttan56781@gmail.com" },
    { name: "Phone", href: "tel:0934766051", display: "+84 934 766 051" },
  ],
  navLinks: [
    { name: "Story", key: "story" },
    { name: "Projects", key: "projects" },
    { name: "Experience", key: "experience" },
    { name: "Stack", key: "stack" },
    { name: "Message", key: "message" },
  ],
};

export const techItems: TechItem[] = [
  // User explicitly requested software
  {
    id: "microsoft",
    name: "Microsoft 365 / VS Code",
    category: "software",
    description: "Công cụ văn phòng chuyên sâu (Excel, PowerBI, PowerPoint) & Môi trường phát triển VS Code tối ưu.",
    iconType: "microsoft",
    accentColor: "#00A4EF",
    badge: "Office & Dev Tools",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "software",
    description: "Xử lý đồ họa, chỉnh sửa hình ảnh, thiết kế banner và bố cục giao diện trực quan.",
    iconType: "photoshop",
    accentColor: "#31A8FF",
    badge: "Creative Suite",
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "software",
    description: "Biên tập video ngắn, hiệu ứng chuyển động và sáng tạo nội dung truyền thông đa phương tiện.",
    iconType: "capcut",
    accentColor: "#FFFFFF",
    badge: "Video Editing",
  },
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    category: "ai",
    description: "Ứng dụng AI tổng hợp kiến thức, hỗ trợ lập trình, sinh prompt và xây dựng AI chatbot thông minh.",
    iconType: "chatgpt",
    accentColor: "#10A37F",
    badge: "Generative AI",
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    category: "ai",
    description: "Nền tảng phát triển AI Agent tự hành thế hệ mới, hỗ trợ lập trình kiến trúc phức tạp.",
    iconType: "antigravity",
    accentColor: "#8AB4F8",
    badge: "Autonomous AI Agent",
  },
  // Software Engineering Languages & Frameworks
  {
    id: "python",
    name: "Python",
    category: "language",
    description: "Ngôn ngữ chủ lực cho Khoa học Dữ liệu, Xử lý Machine Learning, Tự động hóa và Backend API.",
    iconType: "python",
    accentColor: "#3776AB",
    badge: "Data Science & Core",
  },
  {
    id: "cpp",
    name: "C++",
    category: "language",
    description: "Lập trình hệ thống hiệu năng cao, cấu trúc dữ liệu và giải thuật chuyên sâu.",
    iconType: "cpp",
    accentColor: "#00599C",
    badge: "Systems & Algorithms",
  },
  {
    id: "typescript",
    name: "TypeScript / JS",
    category: "language",
    description: "Phát triển ứng dụng Web an toàn kiểu dữ liệu (type-safe), xây dựng fullstack hiện đại.",
    iconType: "typescript",
    accentColor: "#3178C6",
    badge: "Fullstack Language",
  },
  {
    id: "sql",
    name: "SQL & Databases",
    category: "language",
    description: "Truy vấn cơ sở dữ liệu quan hệ, tối ưu hóa câu lệnh, thiết kế schema và phân tích số liệu.",
    iconType: "sql",
    accentColor: "#CC292B",
    badge: "Data Modeling & Query",
  },
  {
    id: "react",
    name: "React",
    category: "framework",
    description: "Thư viện xây dựng giao diện người dùng component-based hiện đại, responsive và mượt mà.",
    iconType: "react",
    accentColor: "#61DAFB",
    badge: "Frontend Framework",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "framework",
    description: "Thiết kế giao diện tiện ích cao cấp, tốc độ dựng layout vượt trội và tối ưu dung lượng.",
    iconType: "tailwind",
    accentColor: "#38BDF8",
    badge: "Styling Engine",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "software",
    description: "Quản lý phiên bản mã nguồn phân tán, làm việc nhóm theo quy trình CI/CD và Git Flow.",
    iconType: "git",
    accentColor: "#F05032",
    badge: "Version Control",
  },
];
