import { motion } from "framer-motion";

// 3D-style SVG illustrations for each section

export const BuildingIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 300 300"
    className={className}
    initial={{ opacity: 0, rotateY: -20 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ duration: 1.2 }}
    style={{ perspective: "800px" }}
  >
    <defs>
      <linearGradient id="buildGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(40, 85%, 55%)" />
        <stop offset="100%" stopColor="hsl(40, 70%, 35%)" />
      </linearGradient>
      <linearGradient id="buildGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(222, 40%, 20%)" />
        <stop offset="100%" stopColor="hsl(222, 47%, 8%)" />
      </linearGradient>
      <filter id="glow1">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Main building - 3D isometric */}
    <g transform="translate(80, 40)">
      {/* Front face */}
      <polygon points="0,200 0,50 70,20 70,170" fill="url(#buildGrad2)" stroke="hsl(40, 85%, 55%)" strokeWidth="0.5" opacity="0.9" />
      {/* Side face */}
      <polygon points="70,20 140,50 140,200 70,170" fill="hsl(222, 35%, 14%)" stroke="hsl(40, 85%, 55%)" strokeWidth="0.5" opacity="0.8" />
      {/* Top face */}
      <polygon points="0,50 70,20 140,50 70,80" fill="hsl(222, 30%, 18%)" stroke="hsl(40, 85%, 55%)" strokeWidth="0.5" opacity="0.7" />
      {/* Windows - front */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <motion.rect
            key={`fw-${row}-${col}`}
            x={12 + col * 30}
            y={70 + row * 24}
            width={15}
            height={12}
            rx={1}
            fill="hsl(40, 85%, 55%)"
            opacity={0.4}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))
      )}
      {/* Windows - side */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <motion.rect
            key={`sw-${row}-${col}`}
            x={80 + col * 25}
            y={68 + row * 24}
            width={12}
            height={10}
            rx={1}
            fill="hsl(40, 85%, 55%)"
            opacity={0.3}
            animate={{ opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))
      )}
    </g>
    {/* Small building */}
    <g transform="translate(20, 130)">
      <polygon points="0,110 0,30 40,10 40,90" fill="url(#buildGrad2)" stroke="hsl(40, 85%, 55%)" strokeWidth="0.3" opacity="0.6" />
      <polygon points="40,10 70,30 70,110 40,90" fill="hsl(222, 35%, 12%)" stroke="hsl(40, 85%, 55%)" strokeWidth="0.3" opacity="0.5" />
    </g>
    {/* Ground plane */}
    <ellipse cx="150" cy="260" rx="120" ry="20" fill="hsl(40, 85%, 55%)" opacity="0.08" filter="url(#glow1)" />
  </motion.svg>
);

export const ShieldIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(40, 85%, 60%)" />
        <stop offset="50%" stopColor="hsl(40, 85%, 45%)" />
        <stop offset="100%" stopColor="hsl(35, 90%, 35%)" />
      </linearGradient>
      <filter id="glow2">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Shield shape */}
    <motion.path
      d="M100 20 L170 50 L165 130 Q100 185 100 185 Q35 130 35 130 L30 50 Z"
      fill="url(#shieldGrad)"
      stroke="hsl(40, 85%, 65%)"
      strokeWidth="1"
      opacity="0.9"
      filter="url(#glow2)"
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
    {/* Inner shield */}
    <path
      d="M100 40 L150 60 L147 120 Q100 160 100 160 Q53 120 53 120 L50 60 Z"
      fill="hsl(222, 40%, 10%)"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="0.5"
      opacity="0.8"
    />
    {/* Check mark */}
    <motion.path
      d="M75 100 L93 118 L130 75"
      fill="none"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    {/* Glow ring */}
    <motion.circle
      cx="100"
      cy="105"
      r="70"
      fill="none"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="0.5"
      opacity="0.2"
      animate={{ r: [68, 75, 68], opacity: [0.2, 0.05, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.svg>
);

export const ChartIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 280 200" className={className}>
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="hsl(40, 85%, 55%)" stopOpacity="0.05" />
        <stop offset="100%" stopColor="hsl(40, 85%, 55%)" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="hsl(40, 70%, 35%)" />
        <stop offset="100%" stopColor="hsl(40, 85%, 60%)" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[40, 80, 120, 160].map((y) => (
      <line key={y} x1="40" y1={y} x2="260" y2={y} stroke="hsl(222, 20%, 18%)" strokeWidth="0.5" />
    ))}
    {/* 3D Bars */}
    {[
      { x: 60, h: 90 },
      { x: 100, h: 110 },
      { x: 140, h: 70 },
      { x: 180, h: 130 },
      { x: 220, h: 100 },
    ].map((bar, i) => (
      <g key={i}>
        {/* Bar shadow */}
        <motion.rect
          x={bar.x + 4}
          y={170 - bar.h + 4}
          width={24}
          height={bar.h}
          rx={2}
          fill="hsl(222, 40%, 8%)"
          opacity="0.4"
          initial={{ height: 0, y: 170 }}
          animate={{ height: bar.h, y: 170 - bar.h + 4 }}
          transition={{ duration: 0.8, delay: 0.15 * i }}
        />
        {/* Bar front */}
        <motion.rect
          x={bar.x}
          y={170 - bar.h}
          width={24}
          height={bar.h}
          rx={2}
          fill="url(#barGrad)"
          initial={{ height: 0, y: 170 }}
          animate={{ height: bar.h, y: 170 - bar.h }}
          transition={{ duration: 0.8, delay: 0.15 * i }}
        />
        {/* Bar top highlight */}
        <motion.rect
          x={bar.x}
          y={170 - bar.h}
          width={24}
          height={3}
          rx={1}
          fill="hsl(40, 85%, 70%)"
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15 * i + 0.5 }}
        />
      </g>
    ))}
    {/* Trend line */}
    <motion.path
      d="M72 110 L112 85 L152 120 L192 55 L232 80"
      fill="none"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      filter="url(#glow2)"
    />
    {/* Area fill */}
    <motion.path
      d="M72 110 L112 85 L152 120 L192 55 L232 80 L232 170 L72 170 Z"
      fill="url(#chartGrad)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    />
    {/* Dots on line */}
    {[
      [72, 110],
      [112, 85],
      [152, 120],
      [192, 55],
      [232, 80],
    ].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r={4}
        fill="hsl(40, 85%, 55%)"
        stroke="hsl(222, 47%, 6%)"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 + 0.2 * i }}
      />
    ))}
  </motion.svg>
);

export const KeyIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="keyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(40, 85%, 65%)" />
        <stop offset="100%" stopColor="hsl(35, 80%, 40%)" />
      </linearGradient>
    </defs>
    {/* Key circle */}
    <motion.circle
      cx="70"
      cy="70"
      r="35"
      fill="none"
      stroke="url(#keyGrad)"
      strokeWidth="6"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{ transformOrigin: "70px 70px" }}
    />
    <circle cx="70" cy="70" r="15" fill="none" stroke="hsl(40, 85%, 55%)" strokeWidth="3" opacity="0.5" />
    {/* Key shaft */}
    <motion.line
      x1="100"
      y1="95"
      x2="170"
      y2="165"
      stroke="url(#keyGrad)"
      strokeWidth="6"
      strokeLinecap="round"
      animate={{ x2: [170, 175, 170], y2: [165, 170, 165] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    {/* Key teeth */}
    <line x1="145" y1="140" x2="160" y2="130" stroke="hsl(40, 85%, 55%)" strokeWidth="4" strokeLinecap="round" />
    <line x1="155" y1="150" x2="170" y2="140" stroke="hsl(40, 85%, 55%)" strokeWidth="4" strokeLinecap="round" />
    {/* Sparkles */}
    {[
      [40, 40],
      [110, 50],
      [50, 110],
      [160, 100],
    ].map(([x, y], i) => (
      <motion.circle
        key={i}
        cx={x}
        cy={y}
        r={2}
        fill="hsl(40, 85%, 65%)"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
  </motion.svg>
);

export const CoinStackIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 220" className={className}>
    <defs>
      <linearGradient id="coinGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(40, 90%, 65%)" />
        <stop offset="100%" stopColor="hsl(35, 80%, 40%)" />
      </linearGradient>
      <linearGradient id="coinGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(40, 85%, 50%)" />
        <stop offset="100%" stopColor="hsl(35, 75%, 30%)" />
      </linearGradient>
    </defs>
    {/* Coin stack - isometric style */}
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.g
        key={i}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.12 * (4 - i) }}
      >
        {/* Coin side */}
        <ellipse cx="100" cy={170 - i * 18} rx="55" ry="14" fill="url(#coinGrad2)" />
        {/* Coin thickness */}
        <rect x="45" y={158 - i * 18} width="110" height={12} fill="hsl(35, 75%, 35%)" />
        {/* Coin top */}
        <ellipse cx="100" cy={158 - i * 18} rx="55" ry="14" fill="url(#coinGrad1)" />
        {/* Dollar sign */}
        <text
          x="100"
          y={163 - i * 18}
          textAnchor="middle"
          fill="hsl(222, 47%, 8%)"
          fontSize="12"
          fontWeight="bold"
          fontFamily="serif"
        >
          $
        </text>
      </motion.g>
    ))}
    {/* Floating coin */}
    <motion.g
      animate={{ y: [-5, -25, -5], rotate: [0, 15, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ transformOrigin: "160px 60px" }}
    >
      <ellipse cx="160" cy="60" rx="25" ry="25" fill="url(#coinGrad1)" stroke="hsl(40, 85%, 70%)" strokeWidth="1" />
      <text x="160" y="66" textAnchor="middle" fill="hsl(222, 47%, 8%)" fontSize="16" fontWeight="bold" fontFamily="serif">
        $
      </text>
    </motion.g>
    {/* Sparkle particles */}
    {[
      [60, 50],
      [140, 40],
      [40, 120],
      [170, 130],
    ].map(([x, y], i) => (
      <motion.path
        key={i}
        d={`M${x} ${y - 5} L${x + 2} ${y} L${x} ${y + 5} L${x - 2} ${y} Z`}
        fill="hsl(40, 85%, 65%)"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
    ))}
  </motion.svg>
);

export const GlobeIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(222, 40%, 18%)" />
        <stop offset="100%" stopColor="hsl(222, 35%, 10%)" />
      </linearGradient>
    </defs>
    {/* Globe */}
    <motion.circle
      cx="100"
      cy="100"
      r="70"
      fill="url(#globeGrad)"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
    {/* Longitude lines */}
    {[-30, 0, 30].map((offset) => (
      <motion.ellipse
        key={offset}
        cx={100 + offset * 0.6}
        cy="100"
        rx={Math.max(5, 35 - Math.abs(offset))}
        ry="65"
        fill="none"
        stroke="hsl(40, 85%, 55%)"
        strokeWidth="0.5"
        opacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      />
    ))}
    {/* Latitude lines */}
    {[-30, 0, 30].map((offset) => (
      <ellipse key={`lat-${offset}`} cx="100" cy={100 + offset} rx="65" ry={Math.max(5, 20 - Math.abs(offset) * 0.3)} fill="none" stroke="hsl(40, 85%, 55%)" strokeWidth="0.5" opacity="0.3" />
    ))}
    {/* Pin markers */}
    {[
      [80, 75],
      [120, 90],
      [90, 115],
    ].map(([x, y], i) => (
      <motion.g key={i}>
        <motion.circle
          cx={x}
          cy={y}
          r={4}
          fill="hsl(40, 85%, 55%)"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
        <circle cx={x} cy={y} r={2} fill="hsl(40, 85%, 70%)" />
      </motion.g>
    ))}
    {/* Orbiting ring */}
    <motion.ellipse
      cx="100"
      cy="100"
      rx="85"
      ry="20"
      fill="none"
      stroke="hsl(40, 85%, 55%)"
      strokeWidth="0.8"
      opacity="0.25"
      strokeDasharray="5 5"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
  </motion.svg>
);
