export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Circle badge */}
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#2B7A78" strokeWidth="2" />
        <text
          x="20"
          y="26"
          fontSize="16"
          fontWeight="900"
          textAnchor="middle"
          fill="#2B7A78"
          fontFamily="Arial, sans-serif"
        >
          IA
        </text>
      </svg>
      
      {/* Text Logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-white tracking-widest">ISMAIL</span>
        <span className="text-xs font-semibold text-[#3aafa9] tracking-wider">AKHTAR</span>
      </div>
    </div>
  );
}
