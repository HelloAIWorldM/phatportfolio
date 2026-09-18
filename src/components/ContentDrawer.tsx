import React, { useState } from 'react';
import { X, ExternalLink, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { cvData, techItems } from '../data/cvData';
import { renderTechIcon } from './TechIcons';

interface ContentDrawerProps {
  activeSection: string | null;
  onClose: () => void;
  onSelectSection: (section: string) => void;
}

export const ContentDrawer: React.FC<ContentDrawerProps> = ({
  activeSection,
  onClose,
  onSelectSection,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [techCategory, setTechCategory] = useState<'all' | 'software' | 'language' | 'ai' | 'framework'>('all');

  if (!activeSection) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredTech = techCategory === 'all'
    ? techItems
    : techItems.filter((item) => item.category === techCategory);

  return (
    <div className="fixed inset-0 z-40 flex justify-end pointer-events-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="relative z-50 w-full sm:w-[500px] lg:w-[580px] h-full bg-[#141414] border-l border-cream/15 text-cream flex flex-col justify-between shadow-2xl transform transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden">
        {/* Top bar with close icon */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-cream/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50">
              {cvData.name} — Portfolio
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-cream/10 text-cream/80 font-mono">
              {activeSection.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-cream/70 hover:text-cream transition-colors duration-200 p-1.5 rounded-full hover:bg-cream/10"
            aria-label="Close panel"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>

        {/* Section Tabs inside Drawer for quick navigation */}
        <div className="flex items-center gap-2 px-8 py-3 border-b border-cream/10 overflow-x-auto no-scrollbar bg-[#111111]">
          {cvData.navLinks.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onSelectSection(tab.key)}
              className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 ${
                activeSection === tab.key
                  ? 'bg-cream text-[#141414] font-medium'
                  : 'text-cream/60 hover:text-cream hover:bg-cream/5'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {/* SECTION: STORY */}
          {activeSection === 'story' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-hn font-medium tracking-tight text-cream mb-2">
                  Mục tiêu Nghề nghiệp
                </h3>
                <p className="text-sm leading-relaxed text-cream/80 whitespace-pre-line text-justify">
                  {cvData.bio}
                </p>
              </div>

              {/* Education */}
              <div className="pt-4 border-t border-cream/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">
                  Học vấn & Đào tạo
                </h4>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-cream/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-medium text-cream text-base">
                      {cvData.education.school}
                    </span>
                    <span className="text-xs text-cream/60 font-mono">
                      {cvData.education.period}
                    </span>
                  </div>
                  <div className="text-sm text-cream/90 font-medium">
                    {cvData.education.degree}
                  </div>
                  <p className="text-xs text-cream/60 mt-2 leading-relaxed">
                    {cvData.education.status}
                  </p>
                </div>
              </div>

              {/* Skills & Strengths */}
              <div className="pt-4 border-t border-cream/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">
                  Kỹ năng cá nhân & Thế mạnh
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cvData.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded bg-[#181818] border border-cream/10 text-xs text-cream/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cream/70" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="pt-4 border-t border-cream/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">
                  Sở thích
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cvData.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cream/10 text-cream/80"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION: PROJECTS */}
          {activeSection === 'projects' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-hn font-medium tracking-tight text-cream mb-2">
                  Dự án Cá nhân & Học tập
                </h3>
                <p className="text-xs text-cream/60">
                  Các sản phẩm và mã nguồn tiêu biểu được công khai trên GitHub của Trương Tấn Phát.
                </p>
              </div>

              <div className="space-y-4">
                {cvData.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#1a1a1a] border border-cream/15 hover:border-cream/40 transition-colors duration-300 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-cream">
                          {proj.name}
                        </h4>
                        <span className="text-xs text-cream/60">
                          {proj.subtitle}
                        </span>
                      </div>

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-cream/70 hover:text-cream bg-cream/10 hover:bg-cream/20 px-2.5 py-1 rounded transition-colors"
                      >
                        <span>GitHub</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <p className="text-xs text-cream/80 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cream/10">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-cream/5 border border-cream/10 text-cream/70 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: EXPERIENCE */}
          {activeSection === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-hn font-medium tracking-tight text-cream mb-2">
                  Kinh nghiệm Làm việc
                </h3>
                <p className="text-xs text-cream/60">
                  Quá trình thực tập và cọ xát môi trường làm việc thực tế.
                </p>
              </div>

              <div className="space-y-6">
                {cvData.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l border-cream/20 space-y-2"
                  >
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cream border-2 border-[#141414]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-base font-medium text-cream">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-cream/60">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs text-cream/70 font-medium">
                      {exp.company}
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {exp.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs leading-relaxed text-cream/80 flex items-start gap-2"
                        >
                          <span className="text-cream/40 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: STACK (SOFTWARE & SE LANGUAGES) */}
          {activeSection === 'stack' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-hn font-medium tracking-tight text-cream mb-1">
                  Trưng bày Phần mềm & Ngôn ngữ SE
                </h3>
                <p className="text-xs text-cream/60">
                  Hệ sinh thái công cụ hỗ trợ công việc, phần mềm sáng tạo và ngôn ngữ phát triển phần mềm / xử lý dữ liệu.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'Tất cả' },
                  { key: 'software', label: 'Phần mềm' },
                  { key: 'ai', label: 'AI & Chatbot' },
                  { key: 'language', label: 'Ngôn ngữ SE' },
                  { key: 'framework', label: 'Framework' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setTechCategory(tab.key as any)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                      techCategory === tab.key
                        ? 'bg-cream text-[#141414] font-medium'
                        : 'bg-[#1e1e1e] text-cream/60 hover:text-cream'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Grid of Animated Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredTech.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#1b1b1b] border border-cream/10 hover:border-cream/30 transition-all duration-300 hover:scale-[1.02] flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-[#242424] border border-cream/10 flex-shrink-0">
                      {renderTechIcon(item.iconType, "w-6 h-6", true)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-semibold text-cream truncate">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-cream/10 text-cream/70 font-mono whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-cream/70 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: MESSAGE / CONTACT */}
          {activeSection === 'message' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl font-hn font-medium tracking-tight text-cream mb-2">
                  Thông tin Liên hệ
                </h3>
                <p className="text-xs text-cream/60">
                  Sẵn sàng trao đổi cơ hội nghề nghiệp, dự án phần mềm và giải pháp AI.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email card */}
                <div className="p-4 rounded-xl bg-[#1a1a1a] border border-cream/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cream/10 flex items-center justify-center text-cream">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-cream/50 uppercase tracking-wider">Email</div>
                      <a href={`mailto:${cvData.email}`} className="text-sm font-medium text-cream hover:underline">
                        {cvData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded hover:bg-cream/10 text-cream/70 hover:text-cream transition-colors"
                    title="Sao chép email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-xl bg-[#1a1a1a] border border-cream/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cream/10 flex items-center justify-center text-cream">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-cream/50 uppercase tracking-wider">Điện thoại</div>
                    <a href={`tel:${cvData.phone}`} className="text-sm font-medium text-cream hover:underline">
                      {cvData.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-xl bg-[#1a1a1a] border border-cream/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cream/10 flex items-center justify-center text-cream">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-cream/50 uppercase tracking-wider">Khu vực sinh sống</div>
                    <div className="text-sm font-medium text-cream">
                      {cvData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Mail Action Button */}
              <div className="pt-2">
                <a
                  href={`mailto:${cvData.email}?subject=Trao%20đổi%20cơ%20hội%20Software%20Engineer%20-%20Trương%20Tấn%20Phát`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cream text-[#141414] font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Mail size={16} />
                  <span>Gửi thư qua Email ngay</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Drawer Footer */}
        <div className="px-8 py-4 border-t border-cream/10 bg-[#111111] flex items-center justify-between text-xs text-cream/50">
          <span>{cvData.name} © 2026</span>
          <span>{cvData.title}</span>
        </div>
      </div>
    </div>
  );
};
