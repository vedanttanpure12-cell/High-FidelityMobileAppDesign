import { useState, useEffect, useRef } from "react";
import logoImg from "@/imports/146728.png";

// ─── Icons ──────────────────────────────────────────────────────────────────

const Icon = {
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  AI: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Settings: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  Send: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Plus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.69 3.4 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.2 6.2l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Zap: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  MessageSquare: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Copy: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  Edit: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  Save: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
      <polyline points="17 21 17 13 7 13 7 21"/>
      <polyline points="7 3 7 8 15 8"/>
    </svg>
  ),
  LogOut: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  Eye: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  EyeOff: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Crown: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M4 20V10l8-8 8 8v10"/>
    </svg>
  ),
  Activity: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Scissors: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  Clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/>
      <path d="M5 3L5.8 5.2L8 6L5.8 6.8L5 9L4.2 6.8L2 6L4.2 5.2L5 3Z"/>
      <path d="M19 14L19.8 16.2L22 17L19.8 17.8L19 20L18.2 17.8L16 17L18.2 16.2L19 14Z"/>
    </svg>
  ),
};

// ─── Shared Components ───────────────────────────────────────────────────────

function StatusBar({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "text-white" : "text-[#0A0F1E]";
  return (
    <div className={`status-bar ${textColor} flex-shrink-0`} style={{ height: 44 }}>
      <span className="text-[13px] font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.4"/>
          <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.6"/>
          <rect x="9" y="0" width="3" height="12" rx="1"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.3L15.5 4C13.6 1.9 11 0.5 8 0.5C5 0.5 2.4 1.9 0.5 4L1.8 5.3C3.3 3.6 5.5 2.5 8 2.5Z" opacity="0.4"/>
          <path d="M8 5.5C9.8 5.5 11.4 6.3 12.5 7.6L13.8 6.3C12.3 4.7 10.3 3.7 8 3.7C5.7 3.7 3.7 4.7 2.2 6.3L3.5 7.6C4.6 6.3 6.2 5.5 8 5.5Z" opacity="0.7"/>
          <path d="M8 8.5C9.1 8.5 10.1 9 10.8 9.8L12.1 8.5C11 7.3 9.6 6.5 8 6.5C6.4 6.5 5 7.3 3.9 8.5L5.2 9.8C5.9 9 6.9 8.5 8 8.5Z"/>
          <circle cx="8" cy="11.5" r="1.5"/>
        </svg>
        <div className="flex items-center gap-0.5">
          <div className="w-[22px] h-[11px] rounded-[3px] border-[1.5px] border-current relative flex items-center px-0.5">
            <div className="w-full h-full bg-current rounded-[1px]" style={{ width: "80%" }}/>
          </div>
          <div className="w-[1.5px] h-[5px] bg-current rounded-full opacity-50 ml-[1px]"/>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ active, onNavigate }: { active: string; onNavigate: (s: string) => void }) {
  const items = [
    { id: "dashboard", label: "Home", icon: Icon.Home },
    { id: "ai", label: "AI", icon: Icon.AI },
    { id: "customers", label: "Customers", icon: Icon.Users },
    { id: "bookings", label: "Bookings", icon: Icon.Calendar },
    { id: "settings", label: "Settings", icon: Icon.Settings },
  ];
  return (
    <div
      className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center"
      style={{ height: 82, paddingBottom: 20 }}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 pt-2"
          >
            <div style={{ color: isActive ? "#2563EB" : "#9CA3AF" }}>
              <item.icon />
            </div>
            <span
              className="text-[10px] font-medium"
              style={{ color: isActive ? "#2563EB" : "#9CA3AF" }}
            >
              {label_for(item)}
            </span>
            {isActive && (
              <div className="w-1 h-1 rounded-full bg-blue-600 mt-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function label_for(item: { label: string }) {
  return item.label;
}

function PrimaryButton({ children, onClick, className = "", disabled = false }: { children: React.ReactNode; onClick?: () => void; className?: string; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-2xl font-semibold text-[15px] text-white transition-all active:scale-[0.98] ${className}`}
      style={{
        background: disabled ? "#9CA3AF" : "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
        boxShadow: disabled ? "none" : "0 4px 20px rgba(37,99,235,0.35)",
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-2xl font-semibold text-[15px] text-blue-600 border border-blue-200 bg-blue-50 transition-all active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (v: string) => void;
  icon?: React.ReactNode;
}) {
  const [showPw, setShowPw] = useState(false);
  const inputType = type === "password" ? (showPw ? "text" : "password") : type;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-500">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-[15px] text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
          style={{ paddingLeft: icon ? 44 : 16 }}
        />
        {type === "password" && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowPw(!showPw)}
          >
            {showPw ? <Icon.EyeOff /> : <Icon.Eye />}
          </button>
        )}
      </div>
    </div>
  );
}

function Card({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 ${className}`}
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", ...style }}
    >
      {children}
    </div>
  );
}

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className="relative inline-flex items-center w-[46px] h-[26px] rounded-full transition-colors"
      style={{ background: enabled ? "#2563EB" : "#D1D5DB" }}
    >
      <span
        className="inline-block w-[20px] h-[20px] bg-white rounded-full shadow-sm transition-transform"
        style={{ transform: enabled ? "translateX(22px)" : "translateX(3px)" }}
      />
    </button>
  );
}

function Badge({ status }: { status: "Confirmed" | "Pending" | "Completed" | "Cancelled" }) {
  const styles = {
    Confirmed: { bg: "#DBEAFE", color: "#1D4ED8" },
    Pending: { bg: "#FEF3C7", color: "#92400E" },
    Completed: { bg: "#D1FAE5", color: "#065F46" },
    Cancelled: { bg: "#FEE2E2", color: "#991B1B" },
  };
  const s = styles[status];
  return (
    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: s.bg, color: s.color }}>
      {status}
    </span>
  );
}

// ─── Screen 1: Splash ────────────────────────────────────────────────────────

function SplashScreen({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const t = setTimeout(onNext, 2800);
    return () => clearTimeout(t);
  }, [onNext]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0F1D3A 50%, #0A1628 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{ width: 300, height: 300, background: "#2563EB", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-10"
        style={{ width: 200, height: 200, background: "#60A5FA", top: "55%", left: "30%" }}
      />

      <div className="flex flex-col items-center gap-6 relative z-10 animate-fade-up">
        {/* Logo mark */}
        <div
          className="w-20 h-20 rounded-[24px] overflow-hidden relative"
          style={{
            animation: "logoGlow 2s ease-in-out infinite",
            boxShadow: "0 0 40px rgba(37,99,235,0.4)",
          }}
        >
          <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-[32px] font-bold tracking-[-0.5px]">AUTOMORA</h1>
          <p className="text-blue-300 text-[14px] font-medium tracking-wide text-center px-8">
            AI that actually runs your business.
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-4">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              animation: "loadingBar 2.5s ease-out forwards",
            }}
          />
        </div>
      </div>

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  );
}

// ─── Screen 2: Welcome ───────────────────────────────────────────────────────

function WelcomeScreen({ onNext, onLogin }: { onNext: () => void; onLogin: () => void }) {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-white">
      <StatusBar />

      {/* Hero visual */}
      <div className="flex-shrink-0 relative" style={{ height: 380 }}>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #1e3a5f 100%)" }}
        />
        {/* Floating cards mockup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-72">
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-[22px] overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(37,99,235,0.4)" }}
              >
                <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Orbit rings */}
            <div className="absolute inset-4 border border-white/10 rounded-full" />
            <div className="absolute inset-[-8px] border border-white/5 rounded-full" />

            {/* Floating action bubbles */}
            {[
              { label: "Booking created ✓", top: "8%", left: "-10%", delay: "0s" },
              { label: "Reminder sent ✓", top: "12%", right: "-5%", delay: "0.3s" },
              { label: "Lead followed up ✓", bottom: "20%", left: "-15%", delay: "0.6s" },
              { label: "Confirmation ready ✓", bottom: "15%", right: "-8%", delay: "0.9s" },
            ].map((b, i) => (
              <div
                key={i}
                className="absolute bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-white text-[11px] font-medium whitespace-nowrap animate-fade-up"
                style={{
                  ...b as any,
                  animationDelay: b.delay,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, white)" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pt-4 pb-6">
        <div className="flex flex-col gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <h1 className="text-[30px] font-bold text-[#0A0F1E] leading-tight tracking-tight">
            Your business.<br />On autopilot.
          </h1>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Automora handles customers, bookings and follow-ups for you.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-auto animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
          <PrimaryButton onClick={onNext}>Get Started</PrimaryButton>
          <button onClick={onLogin} className="text-[14px] text-gray-500 font-medium py-2">
            Already have an account?{" "}
            <span className="text-blue-600 font-semibold">Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3: Sign Up ───────────────────────────────────────────────────────

function SignUpScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <StatusBar />
      <div className="flex items-center px-4 pb-2">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
          <Icon.ChevronLeft />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-8 screen-scroll">
        <div className="animate-fade-up">
          <div className="mb-8">
            <div className="w-10 h-10 rounded-xl overflow-hidden mb-4">
              <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[28px] font-bold text-[#0A0F1E] tracking-tight">Create your account</h1>
            <p className="text-[15px] text-gray-500 mt-1">Start automating your business today.</p>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <InputField label="Full Name" placeholder="Sarthak Mehta" value={name} onChange={setName} />
            <InputField label="Email" placeholder="you@business.com" type="email" value={email} onChange={setEmail} />
            <InputField label="Password" placeholder="Create a strong password" type="password" value={password} onChange={setPassword} />
          </div>

          <p className="text-[12px] text-gray-400 mb-6 text-center leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="text-blue-600">Terms of Service</span> and{" "}
            <span className="text-blue-600">Privacy Policy</span>.
          </p>

          <PrimaryButton onClick={onNext}>Create Account</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 4: Login ─────────────────────────────────────────────────────────

function LoginScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [email, setEmail] = useState("sarthak@glowstudio.in");
  const [password, setPassword] = useState("••••••••");
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <StatusBar />
      <div className="flex items-center px-4 pb-2">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
          <Icon.ChevronLeft />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-8 screen-scroll">
        <div className="animate-fade-up">
          <div className="mb-8">
            <div className="w-10 h-10 rounded-xl overflow-hidden mb-4">
              <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[28px] font-bold text-[#0A0F1E] tracking-tight">Welcome back.</h1>
            <p className="text-[15px] text-gray-500 mt-1">Sign in to your Automora account.</p>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <InputField label="Email" placeholder="you@business.com" type="email" value={email} onChange={setEmail} />
            <InputField label="Password" placeholder="Your password" type="password" value={password} onChange={setPassword} />
          </div>

          <button className="text-[14px] text-blue-600 font-medium mb-6 text-right w-full">
            Forgot password?
          </button>

          <PrimaryButton onClick={onNext}>Sign In</PrimaryButton>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-[13px] text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <button className="mt-4 w-full py-3.5 rounded-xl border border-gray-200 flex items-center justify-center gap-3 text-[15px] font-medium text-gray-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 5: Business Setup ────────────────────────────────────────────────

function BusinessSetupScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [bizName, setBizName] = useState("Glow Studio");
  const [bizType, setBizType] = useState("Salon");
  const types = ["Salon", "Clinic", "Studio", "Consultancy", "Tutor", "Repair Shop", "Spa", "Gym"];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      <StatusBar />
      <div className="flex items-center px-4 pb-2">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
          <Icon.ChevronLeft />
        </button>
        <div className="flex-1 flex justify-center">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((s, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{ width: i === 1 ? 24 : 8, background: i <= 1 ? "#2563EB" : "#E5E7EB" }} />
            ))}
          </div>
        </div>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-8 screen-scroll">
        <div className="animate-fade-up">
          <div className="mb-8">
            <h1 className="text-[26px] font-bold text-[#0A0F1E] tracking-tight">Tell us about your business.</h1>
            <p className="text-[15px] text-gray-500 mt-1">Automora will be configured just for you.</p>
          </div>

          <div className="flex flex-col gap-5 mb-6">
            <InputField label="Business Name" placeholder="e.g. Glow Studio" value={bizName} onChange={setBizName} />

            <div>
              <label className="text-[13px] font-medium text-gray-500 block mb-1.5">Business Type</label>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setBizType(t)}
                    className="px-4 py-2 rounded-xl text-[13px] font-medium border transition-all"
                    style={{
                      background: bizType === t ? "#EFF6FF" : "#F9FAFB",
                      borderColor: bizType === t ? "#93C5FD" : "#E5E7EB",
                      color: bizType === t ? "#1D4ED8" : "#4B5563",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[13px] font-medium text-gray-500 block mb-1.5">Working Hours</label>
              <div className="flex gap-2">
                <div className="flex-1 py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-700">
                  10:00 AM
                </div>
                <div className="flex items-center text-gray-400 text-[13px]">to</div>
                <div className="flex-1 py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-700">
                  8:00 PM
                </div>
              </div>
            </div>

            <div>
              <label className="text-[13px] font-medium text-gray-500 block mb-1.5">Working Days</label>
              <div className="flex gap-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-xl text-[13px] font-semibold border transition-all"
                    style={{
                      background: i < 6 ? "#EFF6FF" : "#F9FAFB",
                      borderColor: i < 6 ? "#93C5FD" : "#E5E7EB",
                      color: i < 6 ? "#1D4ED8" : "#9CA3AF",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <PrimaryButton onClick={onNext}>Continue</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 6: Dashboard ─────────────────────────────────────────────────────

function DashboardScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  const stats = [
    { label: "Bookings", value: "12", icon: "📅", color: "#EFF6FF", border: "#DBEAFE" },
    { label: "Active Leads", value: "17", icon: "🎯", color: "#F0FDF4", border: "#BBF7D0" },
    { label: "Customers", value: "8", icon: "👥", color: "#FEF3C7", border: "#FDE68A" },
    { label: "Follow-ups", value: "6", icon: "🔔", color: "#FDF4FF", border: "#E9D5FF" },
  ];

  const appointments = [
    { time: "2:00 PM", name: "Priya Patil", service: "Consultation", status: "Confirmed" as const },
    { time: "4:30 PM", name: "Rahul Sharma", service: "Haircut", status: "Confirmed" as const },
    { time: "5:00 PM", name: "Amit Shah", service: "Beard Trim", status: "Pending" as const },
    { time: "6:30 PM", name: "Neha Joshi", service: "Hair Color", status: "Confirmed" as const },
  ];

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div style={{ background: "white" }}>
        <StatusBar />
        <div className="px-6 pb-4 flex items-center justify-between">
          <div>
            <p className="text-[13px] text-gray-500 font-medium">Good morning</p>
            <h1 className="text-[22px] font-bold text-[#0A0F1E] tracking-tight">Sarthak 👋</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 relative">
              <Icon.Bell />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-[15px]">
              S
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll pb-24 pt-4 px-5">
        <p className="text-[13px] font-medium text-gray-500 mb-3 px-1">Here's what's happening today.</p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-4" style={{ borderColor: s.border }}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-[26px] font-bold text-[#0A0F1E] tracking-tight">{s.value}</div>
              <div className="text-[12px] text-gray-500 font-medium mt-0.5">{s.label}</div>
            </Card>
          ))}
        </div>

        {/* AI insight card */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background: "linear-gradient(135deg, #0A0F1E 0%, #1a2744 100%)",
            boxShadow: "0 4px 20px rgba(10,15,30,0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Icon.Sparkles />
            </div>
            <span className="text-blue-300 text-[12px] font-semibold uppercase tracking-widest">Automora says</span>
          </div>
          <p className="text-white text-[15px] leading-relaxed mb-4">
            You have <span className="text-blue-300 font-semibold">4 leads</span> that haven't been contacted in 48 hours.
          </p>
          <button
            className="w-full py-3 rounded-xl text-[14px] font-semibold text-white"
            style={{ background: "rgba(37,99,235,0.8)", border: "1px solid rgba(59,130,246,0.4)" }}
            onClick={() => onNavigate("ai")}
          >
            Follow up with them
          </button>
        </div>

        {/* Today's schedule */}
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-[16px] font-semibold text-[#0A0F1E]">Today's Schedule</h2>
          <button className="text-[13px] text-blue-600 font-medium" onClick={() => onNavigate("bookings")}>View all</button>
        </div>

        <div className="flex flex-col gap-2.5 mb-4">
          {appointments.map((appt) => (
            <Card key={appt.name} className="p-4 flex items-center gap-3">
              <div
                className="w-1 rounded-full self-stretch"
                style={{ background: appt.status === "Confirmed" ? "#2563EB" : "#F59E0B", minHeight: 36 }}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#0A0F1E]">{appt.name}</span>
                  <Badge status={appt.status} />
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <Icon.Clock />
                  <span className="text-[12px] text-gray-500">{appt.time} · {appt.service}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav active="dashboard" onNavigate={onNavigate} />
    </div>
  );
}

// ─── Screen 7: AI Assistant ───────────────────────────────────────────────────

type AIStep = "idle" | "typing" | "processing" | "done";

function AIScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [input, setInput] = useState("");
  const [step, setStep] = useState<AIStep>("idle");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedActions = [
    { icon: "📅", label: "Book an appointment", action: "Book Rahul tomorrow at 5 PM." },
    { icon: "🔍", label: "Find a customer", action: "Find customer Priya Patil" },
    { icon: "📤", label: "Follow up with leads", action: "Follow up with all uncontacted leads" },
    { icon: "📊", label: "Show today's business", action: "Show me today's business summary" },
  ];

  const processingSteps = [
    "Finding Rahul in your customers...",
    "Checking availability for tomorrow...",
    "5:00 PM is available ✓",
    "Creating booking...",
    "Generating confirmation...",
  ];

  function handleSend() {
    if (!input.trim() && step === "idle") return;
    const msg = input || "Book Rahul tomorrow at 5 PM.";
    setInput(msg);
    setStep("processing");
    setCompletedSteps([]);

    processingSteps.forEach((_, i) => {
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, i]);
        if (i === processingSteps.length - 1) {
          setTimeout(() => setStep("done"), 600);
        }
      }, (i + 1) * 900);
    });
  }

  function handleSuggestion(action: string) {
    setInput(action);
  }

  function reset() {
    setStep("idle");
    setInput("");
    setCompletedSteps([]);
  }

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div
        className="flex-shrink-0"
        style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #1a2744 100%)" }}
      >
        <StatusBar dark />
        <div className="px-6 pt-2 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-bold text-[18px]">Automora</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-blue-300 text-[12px] font-medium">AI Business Operator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-5 pb-4">
        {step === "idle" && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="text-[22px] font-bold text-[#0A0F1E] mb-2 tracking-tight">
                What would you like<br />me to handle?
              </h2>
              <p className="text-[14px] text-gray-500">
                Tell me what needs to happen. I'll do it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {suggestedActions.map((a) => (
                <button
                  key={a.label}
                  onClick={() => handleSuggestion(a.action)}
                  className="bg-white rounded-2xl p-4 text-left border border-gray-100 transition-all active:scale-[0.97]"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <div className="text-2xl mb-2">{a.icon}</div>
                  <div className="text-[13px] font-semibold text-[#0A0F1E] leading-tight">{a.label}</div>
                </button>
              ))}
            </div>

            {/* Recent activity */}
            <div className="mb-2">
              <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">Recent Activity</h3>
              {[
                { action: "Booked Priya for consultation", time: "2h ago", status: "✓" },
                { action: "Sent reminder to 3 customers", time: "4h ago", status: "✓" },
                { action: "Updated Amit's booking", time: "Yesterday", status: "✓" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-[13px] font-bold">
                    {r.status}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-medium text-gray-700">{r.action}</div>
                    <div className="text-[11px] text-gray-400">{r.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="animate-fade-in">
            {/* User message */}
            <div className="flex justify-end mb-4">
              <div
                className="px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-white text-[14px] font-medium"
                style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
              >
                {input}
              </div>
            </div>

            {/* AI response */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
                <img src={logoImg} alt="Automora" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <Card className="p-4">
                  <div className="text-[13px] font-semibold text-blue-600 mb-3">Processing your request...</div>
                  <div className="flex flex-col gap-3">
                    {processingSteps.map((s, i) => {
                      const isDone = completedSteps.includes(i);
                      const isActive = !isDone && completedSteps.length === i;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3"
                          style={{
                            opacity: isDone || isActive ? 1 : 0.3,
                            transition: "opacity 0.3s ease",
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: isDone ? "#10B981" : isActive ? "#EFF6FF" : "#F3F4F6",
                              border: isActive ? "2px solid #2563EB" : "none",
                            }}
                          >
                            {isDone ? (
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : isActive ? (
                              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            ) : null}
                          </div>
                          <span className="text-[13px] font-medium" style={{ color: isDone ? "#065F46" : isActive ? "#1D4ED8" : "#9CA3AF" }}>
                            {s}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="animate-fade-in">
            {/* User message */}
            <div className="flex justify-end mb-4">
              <div
                className="px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-white text-[14px] font-medium"
                style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
              >
                {input}
              </div>
            </div>

            {/* Success card */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
                <img src={logoImg} alt="Automora" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <Card className="overflow-hidden animate-scale-in">
                  <div
                    className="p-5 text-center"
                    style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3"
                      style={{ boxShadow: "0 8px 24px rgba(16,185,129,0.35)" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div className="text-[18px] font-bold text-gray-900 mb-1">Done.</div>
                  </div>
                  <div className="p-5">
                    <p className="text-[15px] text-gray-700 font-medium text-center mb-1">
                      Rahul's appointment is booked for tomorrow at <span className="text-blue-600 font-bold">5:00 PM</span>.
                    </p>
                    <p className="text-[13px] text-gray-500 text-center mb-5">Confirmation is ready and reminder is scheduled.</p>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50">
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[12px]">✓</div>
                        <span className="text-[13px] text-gray-600">Booking confirmed</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50">
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[12px]">✓</div>
                        <span className="text-[13px] text-gray-600">Confirmation generated</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50">
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[12px]">✓</div>
                        <span className="text-[13px] text-gray-600">Reminder scheduled for 4:00 PM</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <PrimaryButton onClick={() => onNavigate("bookings")} className="flex-1">
                        View Booking
                      </PrimaryButton>
                    </div>
                    <button onClick={reset} className="w-full text-center text-[13px] text-gray-400 mt-3">
                      Ask something else
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      {step !== "processing" && step !== "done" && (
        <div className="flex-shrink-0 px-5 py-3 bg-white border-t border-gray-100" style={{ paddingBottom: 90 }}>
          <div className="flex items-center gap-2 bg-gray-50 rounded-2xl border border-gray-200 px-4 py-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tell Automora what to do..."
              className="flex-1 bg-transparent text-[14px] text-gray-700 outline-none placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all active:scale-95"
              style={{ background: input ? "linear-gradient(135deg, #1D4ED8, #2563EB)" : "#E5E7EB" }}
            >
              <Icon.Send />
            </button>
          </div>
        </div>
      )}

      {step === "idle" && (
        <div style={{ height: 82 }}>
          <BottomNav active="ai" onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}

// ─── Screen 8: Customers ─────────────────────────────────────────────────────

function CustomersScreen({ onNavigate, onCustomer }: { onNavigate: (s: string) => void; onCustomer: () => void }) {
  const [search, setSearch] = useState("");
  const customers = [
    { name: "Rahul Sharma", bookings: 5, phone: "+91 98765 43210", initials: "RS", color: "#DBEAFE" },
    { name: "Priya Patil", bookings: 3, phone: "+91 87654 32109", initials: "PP", color: "#FCE7F3" },
    { name: "Amit Shah", bookings: 1, phone: "+91 76543 21098", initials: "AS", color: "#D1FAE5" },
    { name: "Neha Joshi", bookings: 7, phone: "+91 65432 10987", initials: "NJ", color: "#FEF3C7" },
    { name: "Karan Mehta", bookings: 2, phone: "+91 54321 09876", initials: "KM", color: "#E0E7FF" },
    { name: "Sunita Reddy", bookings: 4, phone: "+91 43210 98765", initials: "SR", color: "#FCE7F3" },
  ];
  const filtered = customers.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-4 flex items-center justify-between">
          <h1 className="text-[22px] font-bold text-[#0A0F1E] tracking-tight">Customers</h1>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
          >
            <Icon.Plus />
          </button>
        </div>
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-200 px-4 py-3">
            <div className="text-gray-400"><Icon.Search /></div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers"
              className="flex-1 bg-transparent text-[14px] text-gray-700 outline-none placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-3 pb-24">
        <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-3 font-medium px-1">{filtered.length} customers</p>
        <div className="flex flex-col gap-2.5">
          {filtered.map((c) => (
            <button key={c.name} onClick={onCustomer} className="w-full text-left">
              <Card className="p-4 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-[15px]"
                  style={{ background: c.color, color: "#1D4ED8" }}
                >
                  {c.initials}
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-[#0A0F1E]">{c.name}</div>
                  <div className="text-[12px] text-gray-500 mt-0.5">{c.bookings} bookings · {c.phone}</div>
                </div>
                <div className="text-gray-400">
                  <Icon.ChevronRight />
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="customers" onNavigate={onNavigate} />
    </div>
  );
}

// ─── Screen 9: Customer Profile ───────────────────────────────────────────────

function CustomerProfileScreen({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: string) => void }) {
  const bookings = [
    { date: "Sep 6, 2026", service: "Haircut", status: "Confirmed" as const, time: "5:00 PM" },
    { date: "Aug 22, 2026", service: "Beard Trim", status: "Completed" as const, time: "3:00 PM" },
    { date: "Aug 8, 2026", service: "Haircut", status: "Completed" as const, time: "2:30 PM" },
    { date: "Jul 25, 2026", service: "Haircut", status: "Completed" as const, time: "4:00 PM" },
  ];

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="flex items-center px-4 pb-4 gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
            <Icon.ChevronLeft />
          </button>
          <h1 className="text-[17px] font-semibold text-[#0A0F1E]">Customer Profile</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll pb-8">
        {/* Profile header */}
        <div className="bg-white px-6 pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-[22px]"
              style={{ background: "#DBEAFE", color: "#1D4ED8" }}
            >
              RS
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#0A0F1E]">Rahul Sharma</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[13px] text-gray-500 font-medium">Active customer · 5 bookings</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 flex items-center gap-2 p-3 rounded-xl bg-gray-50">
              <div className="text-gray-500"><Icon.Phone /></div>
              <span className="text-[13px] text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex-1 flex items-center gap-2 p-3 rounded-xl bg-gray-50">
              <div className="text-gray-500"><Icon.Mail /></div>
              <span className="text-[13px] text-gray-700">rahul@email.com</span>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex gap-2">
            {[
              { label: "Message", icon: Icon.MessageSquare, color: "#EFF6FF", text: "#1D4ED8" },
              { label: "Book", icon: Icon.Calendar, color: "#F0FDF4", text: "#065F46" },
              { label: "Follow-up", icon: Icon.Zap, color: "#FEF3C7", text: "#92400E" },
            ].map((a) => (
              <button
                key={a.label}
                className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl text-[12px] font-semibold"
                style={{ background: a.color, color: a.text }}
              >
                <a.icon />
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 mt-4">
          {/* Upcoming */}
          <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">Upcoming</h3>
          <Card className="p-4 mb-4 border-l-4" style={{ borderLeftColor: "#2563EB" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[15px] font-semibold text-[#0A0F1E]">Haircut</div>
                <div className="text-[13px] text-gray-500 mt-0.5">Sep 6, 2026 · 5:00 PM</div>
              </div>
              <Badge status="Confirmed" />
            </div>
          </Card>

          {/* History */}
          <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">Booking History</h3>
          <div className="flex flex-col gap-2.5">
            {bookings.slice(1).map((b, i) => (
              <Card key={i} className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-medium text-[#0A0F1E]">{b.service}</div>
                  <div className="text-[12px] text-gray-500 mt-0.5">{b.date} · {b.time}</div>
                </div>
                <Badge status={b.status} />
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2.5 mt-4">
            {[
              { label: "Total visits", value: "5" },
              { label: "Avg spend", value: "₹450" },
              { label: "Since", value: "Jul '26" },
            ].map((s) => (
              <Card key={s.label} className="p-3 text-center">
                <div className="text-[18px] font-bold text-[#0A0F1E]">{s.value}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 10: Bookings ─────────────────────────────────────────────────────

function BookingsScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [selectedDay, setSelectedDay] = useState(6);
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const appointments = [
    { time: "10:00 AM", name: "Priya Patil", service: "Consultation", status: "Confirmed" as const, duration: "45 min" },
    { time: "12:00 PM", name: "Karan Mehta", service: "Haircut", status: "Confirmed" as const, duration: "30 min" },
    { time: "2:30 PM", name: "Neha Joshi", service: "Hair Color", status: "Pending" as const, duration: "90 min" },
    { time: "5:00 PM", name: "Rahul Sharma", service: "Haircut", status: "Confirmed" as const, duration: "30 min" },
    { time: "6:30 PM", name: "Amit Shah", service: "Beard Trim", status: "Pending" as const, duration: "20 min" },
    { time: "8:00 PM", name: "(Available)", service: "", status: "Pending" as const, duration: "" },
  ];

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-3 flex items-center justify-between">
          <h1 className="text-[22px] font-bold text-[#0A0F1E] tracking-tight">Bookings</h1>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
          >
            <Icon.Plus />
          </button>
        </div>

        {/* Month header */}
        <div className="px-5 flex items-center justify-between mb-3">
          <button className="p-1 text-gray-400"><Icon.ChevronLeft /></button>
          <span className="text-[15px] font-semibold text-[#0A0F1E]">September 2026</span>
          <button className="p-1 text-gray-400" style={{ transform: "rotate(180deg)" }}><Icon.ChevronLeft /></button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 px-4 mb-1">
          {days.map((d) => (
            <div key={d} className="text-center text-[11px] font-medium text-gray-400">{d}</div>
          ))}
        </div>

        {/* Date row */}
        <div className="flex overflow-x-auto gap-1.5 px-4 pb-4 scrollbar-hide">
          {dates.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDay(d)}
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[14px] font-semibold transition-all"
              style={{
                background: selectedDay === d ? "#2563EB" : "transparent",
                color: selectedDay === d ? "white" : d === 6 ? "#2563EB" : "#374151",
                boxShadow: selectedDay === d ? "0 4px 12px rgba(37,99,235,0.3)" : "none",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-3 pb-24">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-[13px] font-medium text-gray-500">Sep {selectedDay} · 5 bookings</p>
          <div className="flex gap-1.5">
            {["Confirmed", "Pending"].map((s) => (
              <span key={s} className="text-[11px] font-medium px-2.5 py-1 rounded-full" style={{
                background: s === "Confirmed" ? "#DBEAFE" : "#FEF3C7",
                color: s === "Confirmed" ? "#1D4ED8" : "#92400E",
              }}>
                {s === "Confirmed" ? "4" : "2"} {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {appointments.map((appt, i) => (
            <Card key={i} className="p-4 flex items-center gap-3">
              <div className="text-right" style={{ width: 52 }}>
                <span className="text-[12px] font-semibold text-gray-700">{appt.time.split(" ")[0]}</span>
                <div className="text-[10px] text-gray-400">{appt.time.split(" ")[1]}</div>
              </div>
              <div className="w-px self-stretch bg-gray-100" />
              {appt.name === "(Available)" ? (
                <div className="flex-1 flex items-center justify-center py-2">
                  <span className="text-[13px] text-gray-400 font-medium">— Available —</span>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-[#0A0F1E]">{appt.name}</div>
                    <div className="text-[12px] text-gray-500 mt-0.5">{appt.service} · {appt.duration}</div>
                  </div>
                  <Badge status={appt.status} />
                </>
              )}
            </Card>
          ))}
        </div>
      </div>

      <BottomNav active="bookings" onNavigate={onNavigate} />
    </div>
  );
}

// ─── Screen 11: Automations ───────────────────────────────────────────────────

function AutomationsScreen({ onBack }: { onBack: () => void }) {
  const [automations, setAutomations] = useState([
    { id: 1, title: "Appointment reminders", desc: "Send reminder 24h before booking", enabled: true, icon: "🔔" },
    { id: 2, title: "Lead follow-ups", desc: "Follow up if lead doesn't respond in 48h", enabled: true, icon: "📤" },
    { id: 3, title: "Booking confirmations", desc: "Automatically confirm new bookings", enabled: true, icon: "✅" },
    { id: 4, title: "Review requests", desc: "Ask for review after appointment", enabled: false, icon: "⭐" },
    { id: 5, title: "No-show alerts", desc: "Alert when customer doesn't show up", enabled: false, icon: "⚠️" },
  ]);

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
              <Icon.ChevronLeft />
            </button>
            <h1 className="text-[20px] font-bold text-[#0A0F1E] tracking-tight">Automations</h1>
          </div>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
          >
            <Icon.Plus />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-4 pb-8">
        {/* Active count */}
        <div
          className="rounded-2xl p-4 mb-4 flex items-center gap-4"
          style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
            <Icon.Zap />
          </div>
          <div>
            <div className="text-[22px] font-bold text-blue-900">3 active</div>
            <div className="text-[13px] text-blue-700">automations running 24/7</div>
          </div>
        </div>

        <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">Your Automations</h3>

        <div className="flex flex-col gap-2.5">
          {automations.map((a) => (
            <Card key={a.id} className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-0.5">{a.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[15px] font-semibold text-[#0A0F1E]">{a.title}</span>
                    <Toggle
                      enabled={a.enabled}
                      onChange={(v) => setAutomations((prev) => prev.map((x) => x.id === a.id ? { ...x, enabled: v } : x))}
                    />
                  </div>
                  <p className="text-[13px] text-gray-500">{a.desc}</p>
                  {a.enabled && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[11px] text-green-600 font-medium">Running</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <button
          className="w-full mt-4 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-[14px] font-medium text-gray-400 flex items-center justify-center gap-2"
        >
          <Icon.Plus />
          Create new automation
        </button>
      </div>
    </div>
  );
}

// ─── Screen 12: AI Message Studio ────────────────────────────────────────────

function MessageStudioScreen({ onBack }: { onBack: () => void }) {
  const [customer, setCustomer] = useState("Rahul Sharma");
  const [purpose, setPurpose] = useState("Appointment reminder");
  const [tone, setTone] = useState("Friendly");
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const tones = ["Friendly", "Professional", "Casual", "Formal"];
  const templates = ["Appointment confirmation", "Reminder", "Follow-up", "Thank you", "Review request", "Promotional"];
  const message = `Hi Rahul! 👋 Just a quick reminder that your appointment is tomorrow at 5:00 PM at Glow Studio. We're looking forward to seeing you! Reply to confirm or call us to reschedule.`;

  function generate() {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  }

  function copy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-4 flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
            <Icon.ChevronLeft />
          </button>
          <div>
            <h1 className="text-[18px] font-bold text-[#0A0F1E] tracking-tight">AI Message Studio</h1>
            <p className="text-[12px] text-gray-500">Generate personalized messages</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-4 pb-8">
        {/* Templates */}
        <div className="mb-4">
          <p className="text-[12px] text-gray-400 uppercase tracking-widest font-medium mb-2 px-1">Templates</p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {templates.map((t) => (
              <button
                key={t}
                onClick={() => setPurpose(t)}
                className="flex-shrink-0 px-3 py-2 rounded-xl text-[12px] font-medium border transition-all"
                style={{
                  background: purpose === t ? "#EFF6FF" : "white",
                  borderColor: purpose === t ? "#93C5FD" : "#E5E7EB",
                  color: purpose === t ? "#1D4ED8" : "#6B7280",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Config */}
        <Card className="p-4 mb-4">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[12px] font-medium text-gray-500 block mb-1.5">Customer</label>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[11px]">RS</div>
                <span className="text-[14px] text-gray-700 font-medium">{customer}</span>
              </div>
            </div>

            <div>
              <label className="text-[12px] font-medium text-gray-500 block mb-1.5">Purpose</label>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] text-gray-700">{purpose}</div>
            </div>

            <div>
              <label className="text-[12px] font-medium text-gray-500 block mb-1.5">Tone</label>
              <div className="flex gap-2">
                {tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className="flex-1 py-2 rounded-xl text-[12px] font-medium border transition-all"
                    style={{
                      background: tone === t ? "#EFF6FF" : "#F9FAFB",
                      borderColor: tone === t ? "#93C5FD" : "#E5E7EB",
                      color: tone === t ? "#1D4ED8" : "#6B7280",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <PrimaryButton onClick={generate} disabled={generating} className="mb-4">
          {generating ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" style={{ animation: "spin 0.8s linear infinite" }} />
              Generating...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Icon.Sparkles />
              Generate Message
            </span>
          )}
        </PrimaryButton>

        {generated && (
          <Card className="p-4 animate-scale-in">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon.Sparkles />
                </div>
                <span className="text-[12px] font-semibold text-blue-600">Generated Message</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] text-green-600 font-medium">Ready</span>
              </div>
            </div>
            <p className="text-[14px] text-gray-700 leading-relaxed mb-4 p-3 bg-gray-50 rounded-xl">
              {message}
            </p>
            <div className="flex gap-2">
              <button
                onClick={copy}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-medium border border-gray-200 text-gray-600"
              >
                <Icon.Copy />
                {copied ? "Copied!" : "Copy"}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-medium border border-gray-200 text-gray-600">
                <Icon.Edit />
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-medium bg-blue-600 text-white">
                <Icon.Send />
                Send
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

// ─── Screen 13: Settings ──────────────────────────────────────────────────────

function SettingsScreen({ onNavigate, onPricing }: { onNavigate: (s: string) => void; onPricing: () => void }) {
  const sections = [
    {
      title: "Business",
      items: [
        { label: "Business profile", icon: "🏢" },
        { label: "Working hours", icon: "🕐" },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Personal information", icon: "👤" },
        { label: "Notifications", icon: "🔔" },
      ],
    },
    {
      title: "AI",
      items: [
        { label: "Automora preferences", icon: "🤖" },
        { label: "AI usage", icon: "📊" },
      ],
    },
    {
      title: "Subscription",
      items: [
        { label: "Manage plan", icon: "👑", action: onPricing },
      ],
    },
    {
      title: "Security",
      items: [
        { label: "Privacy", icon: "🔒" },
        { label: "Security", icon: "🛡️" },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-4">
          <h1 className="text-[22px] font-bold text-[#0A0F1E] tracking-tight">Settings</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-4 pb-24">
        {/* Profile card */}
        <Card className="p-4 mb-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-[20px]">
            S
          </div>
          <div className="flex-1">
            <div className="text-[16px] font-semibold text-[#0A0F1E]">Sarthak Mehta</div>
            <div className="text-[13px] text-gray-500">sarthak@glowstudio.in</div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>
                ✦ Pro Plan
              </div>
            </div>
          </div>
          <div className="text-gray-400"><Icon.ChevronRight /></div>
        </Card>

        {sections.map((section) => (
          <div key={section.title} className="mb-4">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-2 px-1">{section.title}</p>
            <Card className="overflow-hidden">
              {section.items.map((item, i) => (
                <button
                  key={item.label}
                  onClick={(item as any).action}
                  className="w-full flex items-center gap-3 p-4 text-left"
                  style={{ borderBottom: i < section.items.length - 1 ? "1px solid #F3F4F6" : "none" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="flex-1 text-[15px] font-medium text-gray-700">{item.label}</span>
                  <div className="text-gray-400"><Icon.ChevronRight /></div>
                </button>
              ))}
            </Card>
          </div>
        ))}

        {/* Usage bar */}
        <Card className="p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-semibold text-gray-700">AI Actions</span>
            <span className="text-[12px] text-gray-500">328 / 500</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "65.6%", background: "linear-gradient(90deg, #2563EB, #60A5FA)" }} />
          </div>
          <p className="text-[11px] text-gray-400 mt-2">172 actions remaining this month</p>
        </Card>

        <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-medium text-red-500 border border-red-100 bg-red-50">
          <Icon.LogOut />
          Log out
        </button>
      </div>

      <BottomNav active="settings" onNavigate={onNavigate} />
    </div>
  );
}

// ─── Screen 14: Pricing ───────────────────────────────────────────────────────

function PricingScreen({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "",
      features: ["20 AI actions/month", "50 customers", "Basic AI assistant", "Email support"],
      cta: "Current plan",
      highlighted: false,
      ctaAction: undefined as (() => void) | undefined,
    },
    {
      name: "Pro",
      price: "₹299",
      period: "/month",
      features: ["500 AI actions", "Unlimited customers", "All automations", "AI message studio", "Advanced analytics", "Priority support"],
      cta: "Start Pro",
      highlighted: true,
      badge: "Most Popular",
      ctaAction: onSuccess,
    },
    {
      name: "Business",
      price: "₹799",
      period: "/month",
      features: ["Unlimited AI actions", "Advanced automation", "Priority AI", "Business analytics", "White-label reports", "Dedicated support"],
      cta: "Start Business",
      highlighted: false,
      ctaAction: onSuccess,
    },
  ];

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="bg-white">
        <StatusBar />
        <div className="px-5 pb-4 flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
            <Icon.ChevronLeft />
          </button>
          <div>
            <h1 className="text-[20px] font-bold text-[#0A0F1E] tracking-tight">Choose a plan</h1>
            <p className="text-[13px] text-gray-500">Upgrade to unlock more AI power</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto screen-scroll px-5 pt-4 pb-8">
        <div className="flex flex-col gap-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, #0A0F1E 0%, #1a2744 100%)"
                  : "white",
                border: plan.highlighted ? "none" : "1px solid #E5E7EB",
                boxShadow: plan.highlighted ? "0 12px 40px rgba(10,15,30,0.3)" : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #2563EB, #60A5FA)" }} />
              )}
              {(plan as any).badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: "#2563EB", color: "white" }}>
                  {(plan as any).badge}
                </div>
              )}
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-[14px] font-semibold mb-1" style={{ color: plan.highlighted ? "#93C5FD" : "#6B7280" }}>
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[34px] font-bold tracking-tight" style={{ color: plan.highlighted ? "white" : "#0A0F1E" }}>
                      {plan.price}
                    </span>
                    <span className="text-[14px]" style={{ color: plan.highlighted ? "#93C5FD" : "#9CA3AF" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mb-5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: plan.highlighted ? "rgba(37,99,235,0.3)" : "#EFF6FF" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <polyline points="2 6 5 9 10 3" stroke={plan.highlighted ? "#60A5FA" : "#2563EB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium" style={{ color: plan.highlighted ? "#E0E7FF" : "#374151" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={plan.ctaAction}
                  className="w-full py-3.5 rounded-xl text-[14px] font-bold transition-all"
                  style={{
                    background: plan.highlighted
                      ? "linear-gradient(135deg, #1D4ED8, #2563EB)"
                      : plan.name === "Free"
                      ? "#F3F4F6"
                      : "#F9FAFB",
                    color: plan.highlighted ? "white" : plan.name === "Free" ? "#9CA3AF" : "#374151",
                    boxShadow: plan.highlighted ? "0 4px 16px rgba(37,99,235,0.4)" : "none",
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full text-center text-[13px] text-gray-400 mt-4 py-2">
          Restore Purchases
        </button>
      </div>
    </div>
  );
}

// ─── Screen 15: Subscription Success ─────────────────────────────────────────

function SubscriptionSuccessScreen({ onDashboard }: { onDashboard: () => void }) {
  const perks = [
    { icon: "⚡", label: "500 AI actions / month" },
    { icon: "👥", label: "Unlimited customers" },
    { icon: "🤖", label: "Smart automations" },
    { icon: "📊", label: "Advanced analytics" },
    { icon: "📱", label: "AI message studio" },
  ];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0F1D3A 50%, #0A1628 100%)" }}
    >
      <StatusBar dark />

      {/* Glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{ width: 300, height: 300, background: "#2563EB", top: "35%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        {/* Success icon */}
        <div className="animate-scale-in mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
              boxShadow: "0 0 60px rgba(37,99,235,0.5), 0 20px 40px rgba(37,99,235,0.3)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <div className="animate-fade-up text-center mb-8" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-blue-300 text-[14px] font-semibold tracking-widest uppercase">Congratulations</span>
          </div>
          <h1 className="text-white text-[36px] font-bold tracking-tight mb-2">You're Pro.</h1>
          <p className="text-blue-300 text-[16px] leading-relaxed">
            Automora is ready to work for your business.
          </p>
        </div>

        {/* Perks */}
        <div
          className="w-full rounded-2xl p-5 animate-fade-up"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col gap-3">
            {perks.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[16px]"
                  style={{ background: "rgba(37,99,235,0.25)" }}
                >
                  {p.icon}
                </div>
                <span className="text-[14px] font-medium" style={{ color: "#E0E7FF" }}>{p.label}</span>
                <div className="ml-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-10 w-full relative z-10 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
        <PrimaryButton onClick={onDashboard} className="w-full">
          Go to Dashboard
        </PrimaryButton>
      </div>
    </div>
  );
}

// ─── App Shell ───────────────────────────────────────────────────────────────

type Screen =
  | "splash"
  | "welcome"
  | "signup"
  | "login"
  | "setup"
  | "dashboard"
  | "ai"
  | "customers"
  | "customer-profile"
  | "bookings"
  | "automations"
  | "message-studio"
  | "settings"
  | "pricing"
  | "success";

// Screen thumbnails for prototype grid
const SCREEN_LABELS: Record<Screen, string> = {
  splash: "1. Splash",
  welcome: "2. Welcome",
  signup: "3. Sign Up",
  login: "4. Log In",
  setup: "5. Business Setup",
  dashboard: "6. Dashboard",
  ai: "7. AI Assistant",
  customers: "8. Customers",
  "customer-profile": "9. Customer Profile",
  bookings: "10. Bookings",
  automations: "11. Automations",
  "message-studio": "12. Message Studio",
  settings: "13. Settings",
  pricing: "14. Pricing",
  success: "15. Pro Success",
};

const ALL_SCREENS: Screen[] = [
  "splash", "welcome", "signup", "login", "setup",
  "dashboard", "ai", "customers", "customer-profile", "bookings",
  "automations", "message-studio", "settings", "pricing", "success",
];

export default function App() {
  const [current, setCurrent] = useState<Screen>("splash");
  const [showSelector, setShowSelector] = useState(false);

  function nav(s: Screen) {
    setCurrent(s);
    setShowSelector(false);
  }

  function navFrom(s: string) {
    if (s === "dashboard") nav("dashboard");
    else if (s === "ai") nav("ai");
    else if (s === "customers") nav("customers");
    else if (s === "bookings") nav("bookings");
    else if (s === "settings") nav("settings");
  }

  function renderScreen() {
    switch (current) {
      case "splash": return <SplashScreen onNext={() => nav("welcome")} />;
      case "welcome": return <WelcomeScreen onNext={() => nav("signup")} onLogin={() => nav("login")} />;
      case "signup": return <SignUpScreen onNext={() => nav("setup")} onBack={() => nav("welcome")} />;
      case "login": return <LoginScreen onNext={() => nav("dashboard")} onBack={() => nav("welcome")} />;
      case "setup": return <BusinessSetupScreen onNext={() => nav("dashboard")} onBack={() => nav("signup")} />;
      case "dashboard": return <DashboardScreen onNavigate={navFrom} />;
      case "ai": return <AIScreen onNavigate={navFrom} />;
      case "customers": return <CustomersScreen onNavigate={navFrom} onCustomer={() => nav("customer-profile")} />;
      case "customer-profile": return <CustomerProfileScreen onBack={() => nav("customers")} onNavigate={navFrom} />;
      case "bookings": return <BookingsScreen onNavigate={navFrom} />;
      case "automations": return <AutomationsScreen onBack={() => nav("settings")} />;
      case "message-studio": return <MessageStudioScreen onBack={() => nav("settings")} />;
      case "settings": return <SettingsScreen onNavigate={navFrom} onPricing={() => nav("pricing")} />;
      case "pricing": return <PricingScreen onBack={() => nav("settings")} onSuccess={() => nav("success")} />;
      case "success": return <SubscriptionSuccessScreen onDashboard={() => nav("dashboard")} />;
      default: return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#F1F3F7] flex flex-col items-center justify-start py-8 px-4" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="w-full max-w-7xl flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden">
            <img src={logoImg} alt="Automora logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[16px] font-bold text-[#0A0F1E]">Automora AI</div>
            <div className="text-[12px] text-gray-500">Mobile App Prototype · 15 Screens</div>
          </div>
        </div>
        <button
          onClick={() => setShowSelector(!showSelector)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-[13px] font-semibold text-gray-700 shadow-sm"
        >
          <span>All Screens</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points={showSelector ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
          </svg>
        </button>
      </div>

      {/* Screen selector dropdown */}
      {showSelector && (
        <div className="w-full max-w-7xl mb-6 bg-white rounded-2xl border border-gray-200 p-4 shadow-lg animate-fade-up">
          <div className="grid grid-cols-5 gap-2">
            {ALL_SCREENS.map((s) => (
              <button
                key={s}
                onClick={() => nav(s)}
                className="px-3 py-2.5 rounded-xl text-[12px] font-medium text-left transition-all border"
                style={{
                  background: current === s ? "#EFF6FF" : "#F9FAFB",
                  borderColor: current === s ? "#93C5FD" : "#E5E7EB",
                  color: current === s ? "#1D4ED8" : "#4B5563",
                }}
              >
                {SCREEN_LABELS[s]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="w-full max-w-7xl flex gap-8 items-start">
        {/* Left sidebar — screen nav */}
        <div className="flex-shrink-0 w-44 hidden lg:flex flex-col gap-1.5 sticky top-8">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-2 px-2">Screens</p>
          {ALL_SCREENS.map((s) => (
            <button
              key={s}
              onClick={() => nav(s)}
              className="text-left px-3 py-2 rounded-xl text-[12px] font-medium transition-all"
              style={{
                background: current === s ? "#EFF6FF" : "transparent",
                color: current === s ? "#1D4ED8" : "#6B7280",
                fontWeight: current === s ? 600 : 400,
              }}
            >
              {SCREEN_LABELS[s]}
            </button>
          ))}
        </div>

        {/* Phone frame */}
        <div className="flex-1 flex flex-col items-center">
          {/* Current screen label */}
          <div className="mb-4 flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[13px] font-semibold text-gray-700 shadow-sm">
              {SCREEN_LABELS[current]}
            </div>
          </div>

          <div className="mobile-frame">
            {renderScreen()}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => {
                const idx = ALL_SCREENS.indexOf(current);
                if (idx > 0) nav(ALL_SCREENS[idx - 1]);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-[13px] font-medium text-gray-600 shadow-sm disabled:opacity-40"
              disabled={ALL_SCREENS.indexOf(current) === 0}
            >
              <Icon.ChevronLeft /> Previous
            </button>
            <span className="text-[13px] text-gray-400 font-medium">
              {ALL_SCREENS.indexOf(current) + 1} / {ALL_SCREENS.length}
            </span>
            <button
              onClick={() => {
                const idx = ALL_SCREENS.indexOf(current);
                if (idx < ALL_SCREENS.length - 1) nav(ALL_SCREENS[idx + 1]);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-[13px] font-medium text-gray-600 shadow-sm disabled:opacity-40"
              disabled={ALL_SCREENS.indexOf(current) === ALL_SCREENS.length - 1}
            >
              Next <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        {/* Right panel — quick actions / flow guide */}
        <div className="flex-shrink-0 w-48 hidden xl:flex flex-col gap-3 sticky top-8">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-1 px-2">Key Flows</p>
          {[
            { label: "Onboarding", screens: ["splash", "welcome", "signup", "setup"] as Screen[] },
            { label: "AI Booking Flow", screens: ["ai"] as Screen[] },
            { label: "Dashboard", screens: ["dashboard"] as Screen[] },
            { label: "Settings & Plan", screens: ["settings", "pricing", "success"] as Screen[] },
          ].map((flow) => (
            <button
              key={flow.label}
              onClick={() => nav(flow.screens[0])}
              className="text-left px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-[12px] font-medium text-gray-700 shadow-sm hover:border-blue-200 transition-all"
            >
              <div className="font-semibold text-gray-800 mb-0.5">{flow.label}</div>
              <div className="text-[11px] text-gray-400">{flow.screens.map(s => SCREEN_LABELS[s].split(". ")[1]).join(" → ")}</div>
            </button>
          ))}

          <div className="mt-2 p-3 rounded-xl bg-blue-50 border border-blue-100">
            <div className="text-[11px] font-semibold text-blue-800 mb-1">Try the AI Flow</div>
            <div className="text-[11px] text-blue-600 leading-relaxed">
              Go to AI screen → tap "Book an appointment" → watch Automora work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
