import { motion } from "framer-motion";

// Light theme 3D-style SVG illustrations

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
        <stop offset="0%" stopColor="hsl(35, 85%, 50%)" />
        <stop offset="100%" stopColor="hsl(35, 70%, 38%)" />
      </linearGradient>
      <linearGradient id="buildGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(45, 30%, 95%)" />
        <stop offset="100%" stopColor="hsl(45, 20%, 88%)" />
      </linearGradient>
      <filter id="softShadow">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g transform="translate(80, 40)" filter="url(#softShadow)">
      <polygon points="0,200 0,50 70,20 70,170" fill="url(#buildGrad2)" stroke="hsl(35, 85%, 50%)" strokeWidth="0.5" opacity="0.9" />
      <polygon points="70,20 140,50 140,200 70,170" fill="hsl(45, 20%, 90%)" stroke="hsl(35, 85%, 50%)" strokeWidth="0.5" opacity="0.8" />
      <polygon points="0,50 70,20 140,50 70,80" fill="hsl(35, 85%, 50%)" stroke="hsl(35, 70%, 40%)" strokeWidth="0.5" opacity="0.3" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <motion.rect
            key={`fw-${row}-${col}`}
            x={12 + col * 30}
            y={70 + row * 24}
            width={15}
            height={12}
            rx={1}
            fill="hsl(35, 85%, 50%)"
            opacity={0.3}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))
      )}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <motion.rect
            key={`sw-${row}-${col}`}
            x={80 + col * 25}
            y={68 + row * 24}
            width={12}
            height={10}
            rx={1}
            fill="hsl(35, 85%, 50%)"
            opacity={0.2}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))
      )}
    </g>
    <g transform="translate(20, 130)">
      <polygon points="0,110 0,30 40,10 40,90" fill="url(#buildGrad2)" stroke="hsl(35, 85%, 50%)" strokeWidth="0.3" opacity="0.6" />
      <polygon points="40,10 70,30 70,110 40,90" fill="hsl(45, 20%, 92%)" stroke="hsl(35, 85%, 50%)" strokeWidth="0.3" opacity="0.5" />
    </g>
    <ellipse cx="150" cy="260" rx="120" ry="20" fill="hsl(35, 85%, 50%)" opacity="0.06" />
  </motion.svg>
);

export const ShieldIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
        <stop offset="50%" stopColor="hsl(35, 85%, 48%)" />
        <stop offset="100%" stopColor="hsl(25, 80%, 38%)" />
      </linearGradient>
      <filter id="shieldShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="8" floodColor="hsl(35, 85%, 48%)" floodOpacity="0.2" />
      </filter>
    </defs>
    <motion.path
      d="M100 20 L170 50 L165 130 Q100 185 100 185 Q35 130 35 130 L30 50 Z"
      fill="url(#shieldGrad)"
      stroke="hsl(35, 85%, 55%)"
      strokeWidth="1"
      opacity="0.9"
      filter="url(#shieldShadow)"
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
    <path
      d="M100 40 L150 60 L147 120 Q100 160 100 160 Q53 120 53 120 L50 60 Z"
      fill="hsl(0, 0%, 100%)"
      stroke="hsl(35, 85%, 50%)"
      strokeWidth="0.5"
      opacity="0.8"
    />
    <motion.path
      d="M75 100 L93 118 L130 75"
      fill="none"
      stroke="hsl(35, 85%, 48%)"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.circle
      cx="100"
      cy="105"
      r="70"
      fill="none"
      stroke="hsl(35, 85%, 50%)"
      strokeWidth="0.5"
      opacity="0.15"
      animate={{ r: [68, 75, 68], opacity: [0.15, 0.05, 0.15] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.svg>
);

export const ChartIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 280 200" className={className}>
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="hsl(35, 85%, 50%)" stopOpacity="0.03" />
        <stop offset="100%" stopColor="hsl(35, 85%, 50%)" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="hsl(35, 70%, 38%)" />
        <stop offset="100%" stopColor="hsl(35, 90%, 55%)" />
      </linearGradient>
      <filter id="barShadow">
        <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.08" />
      </filter>
    </defs>
    {[40, 80, 120, 160].map((y) => (
      <line key={y} x1="40" y1={y} x2="260" y2={y} stroke="hsl(45, 15%, 88%)" strokeWidth="0.5" />
    ))}
    {[
      { x: 60, h: 90 },
      { x: 100, h: 110 },
      { x: 140, h: 70 },
      { x: 180, h: 130 },
      { x: 220, h: 100 },
    ].map((bar, i) => (
      <g key={i} filter="url(#barShadow)">
        <motion.rect
          x={bar.x}
          y={170 - bar.h}
          width={24}
          height={bar.h}
          rx={4}
          fill="url(#barGrad)"
          initial={{ height: 0, y: 170 }}
          animate={{ height: bar.h, y: 170 - bar.h }}
          transition={{ duration: 0.8, delay: 0.15 * i }}
        />
        <motion.rect
          x={bar.x}
          y={170 - bar.h}
          width={24}
          height={3}
          rx={1.5}
          fill="hsl(35, 85%, 60%)"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 * i + 0.5 }}
        />
      </g>
    ))}
    <motion.path
      d="M72 110 L112 85 L152 120 L192 55 L232 80"
      fill="none"
      stroke="hsl(35, 85%, 48%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    />
    <motion.path
      d="M72 110 L112 85 L152 120 L192 55 L232 80 L232 170 L72 170 Z"
      fill="url(#chartGrad)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    />
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
        fill="hsl(35, 85%, 50%)"
        stroke="hsl(0, 0%, 100%)"
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
        <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
        <stop offset="100%" stopColor="hsl(25, 80%, 40%)" />
      </linearGradient>
      <filter id="keyShadow">
        <feDropShadow dx="2" dy="3" stdDeviation="5" floodColor="hsl(35, 85%, 48%)" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#keyShadow)">
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
      <circle cx="70" cy="70" r="15" fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="3" opacity="0.4" />
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
      <line x1="145" y1="140" x2="160" y2="130" stroke="hsl(35, 85%, 50%)" strokeWidth="4" strokeLinecap="round" />
      <line x1="155" y1="150" x2="170" y2="140" stroke="hsl(35, 85%, 50%)" strokeWidth="4" strokeLinecap="round" />
    </g>
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
        fill="hsl(35, 85%, 55%)"
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
        <stop offset="0%" stopColor="hsl(35, 90%, 60%)" />
        <stop offset="100%" stopColor="hsl(35, 80%, 42%)" />
      </linearGradient>
      <linearGradient id="coinGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(35, 85%, 48%)" />
        <stop offset="100%" stopColor="hsl(25, 75%, 35%)" />
      </linearGradient>
      <filter id="coinShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g filter="url(#coinShadow)">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 * (4 - i) }}
        >
          <ellipse cx="100" cy={170 - i * 18} rx="55" ry="14" fill="url(#coinGrad2)" />
          <rect x="45" y={158 - i * 18} width="110" height={12} fill="hsl(25, 75%, 38%)" />
          <ellipse cx="100" cy={158 - i * 18} rx="55" ry="14" fill="url(#coinGrad1)" />
          <text
            x="100"
            y={163 - i * 18}
            textAnchor="middle"
            fill="hsl(0, 0%, 100%)"
            fontSize="12"
            fontWeight="bold"
            fontFamily="serif"
          >
            $
          </text>
        </motion.g>
      ))}
    </g>
    <motion.g
      animate={{ y: [-5, -25, -5], rotate: [0, 15, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ transformOrigin: "160px 60px" }}
    >
      <ellipse cx="160" cy="60" rx="25" ry="25" fill="url(#coinGrad1)" stroke="hsl(35, 85%, 60%)" strokeWidth="1" />
      <text x="160" y="66" textAnchor="middle" fill="hsl(0, 0%, 100%)" fontSize="16" fontWeight="bold" fontFamily="serif">
        $
      </text>
    </motion.g>
    {[
      [60, 50],
      [140, 40],
      [40, 120],
      [170, 130],
    ].map(([x, y], i) => (
      <motion.path
        key={i}
        d={`M${x} ${y - 5} L${x + 2} ${y} L${x} ${y + 5} L${x - 2} ${y} Z`}
        fill="hsl(35, 85%, 55%)"
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
        <stop offset="0%" stopColor="hsl(45, 25%, 94%)" />
        <stop offset="100%" stopColor="hsl(45, 20%, 88%)" />
      </linearGradient>
      <filter id="globeShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="8" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.08" />
      </filter>
    </defs>
    <motion.circle
      cx="100"
      cy="100"
      r="70"
      fill="url(#globeGrad)"
      stroke="hsl(35, 85%, 50%)"
      strokeWidth="1"
      filter="url(#globeShadow)"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
    {[-30, 0, 30].map((offset) => (
      <motion.ellipse
        key={offset}
        cx={100 + offset * 0.6}
        cy="100"
        rx={Math.max(5, 35 - Math.abs(offset))}
        ry="65"
        fill="none"
        stroke="hsl(35, 85%, 50%)"
        strokeWidth="0.5"
        opacity="0.25"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      />
    ))}
    {[-30, 0, 30].map((offset) => (
      <ellipse key={`lat-${offset}`} cx="100" cy={100 + offset} rx="65" ry={Math.max(5, 20 - Math.abs(offset) * 0.3)} fill="none" stroke="hsl(35, 85%, 50%)" strokeWidth="0.5" opacity="0.25" />
    ))}
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
          fill="hsl(35, 85%, 50%)"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
        <circle cx={x} cy={y} r={2} fill="hsl(35, 85%, 60%)" />
      </motion.g>
    ))}
    <motion.ellipse
      cx="100"
      cy="100"
      rx="85"
      ry="20"
      fill="none"
      stroke="hsl(35, 85%, 50%)"
      strokeWidth="0.8"
      opacity="0.15"
      strokeDasharray="5 5"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
  </motion.svg>
);

// New light-theme illustrations

export const HandshakeIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="handGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
        <stop offset="100%" stopColor="hsl(25, 80%, 40%)" />
      </linearGradient>
      <filter id="handShadow">
        <feDropShadow dx="1" dy="3" stdDeviation="5" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g filter="url(#handShadow)">
      {/* Left hand */}
      <motion.path
        d="M30 120 L60 105 L85 95 Q95 90 100 100 L90 110 L80 115"
        fill="none"
        stroke="url(#handGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Right hand */}
      <motion.path
        d="M170 120 L140 105 L115 95 Q105 90 100 100 L110 110 L120 115"
        fill="none"
        stroke="url(#handGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      {/* Clasp */}
      <motion.circle
        cx="100" cy="100" r="12"
        fill="hsl(35, 85%, 50%)"
        opacity="0.2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "100px 100px" }}
      />
    </g>
    {/* Sparkles */}
    {[[80, 60], [120, 60], [100, 45], [70, 75], [130, 75]].map(([x, y], i) => (
      <motion.circle
        key={i}
        cx={x} cy={y} r={2}
        fill="hsl(35, 85%, 55%)"
        animate={{ opacity: [0, 0.8, 0], y: [y, y - 10, y] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </motion.svg>
);

export const HouseIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="houseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
        <stop offset="100%" stopColor="hsl(25, 80%, 42%)" />
      </linearGradient>
      <linearGradient id="houseWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(0, 0%, 100%)" />
        <stop offset="100%" stopColor="hsl(45, 20%, 94%)" />
      </linearGradient>
      <filter id="houseShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g filter="url(#houseShadow)">
      {/* Roof */}
      <motion.polygon
        points="100,30 40,80 160,80"
        fill="url(#houseGrad)"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* House body */}
      <motion.rect
        x="50" y="80" width="100" height="80" rx="3"
        fill="url(#houseWall)"
        stroke="hsl(35, 85%, 50%)"
        strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformOrigin: "100px 160px" }}
      />
      {/* Door */}
      <motion.rect
        x="88" y="115" width="24" height="45" rx="12"
        fill="hsl(35, 85%, 48%)"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ transformOrigin: "100px 160px" }}
      />
      {/* Windows */}
      {[[60, 95], [125, 95]].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x} y={y} width="18" height="18" rx="2"
          fill="hsl(35, 85%, 50%)"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </g>
    {/* Ground */}
    <ellipse cx="100" cy="168" rx="80" ry="8" fill="hsl(35, 85%, 50%)" opacity="0.06" />
  </motion.svg>
);

export const WalletIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="walletGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
        <stop offset="100%" stopColor="hsl(25, 80%, 40%)" />
      </linearGradient>
      <filter id="walletShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g filter="url(#walletShadow)">
      {/* Wallet body */}
      <motion.rect
        x="35" y="55" width="130" height="90" rx="10"
        fill="url(#walletGrad)"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "100px 100px" }}
      />
      {/* Card slot */}
      <rect x="45" y="65" width="110" height="25" rx="5" fill="hsl(0, 0%, 100%)" opacity="0.3" />
      {/* Clasp */}
      <motion.circle
        cx="165" cy="100" r="12"
        fill="hsl(0, 0%, 100%)"
        stroke="hsl(35, 85%, 48%)"
        strokeWidth="2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "165px 100px" }}
      />
      {/* Dollar bills peeking out */}
      <motion.rect
        x="50" y="50" width="60" height="20" rx="3"
        fill="hsl(140, 40%, 55%)"
        opacity="0.4"
        animate={{ y: [50, 45, 50] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </g>
  </motion.svg>
);

export const DocumentIllustration = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 200 200" className={className}>
    <defs>
      <filter id="docShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="hsl(222, 20%, 20%)" floodOpacity="0.1" />
      </filter>
    </defs>
    <g filter="url(#docShadow)">
      {/* Document */}
      <motion.rect
        x="50" y="25" width="100" height="140" rx="6"
        fill="hsl(0, 0%, 100%)"
        stroke="hsl(45, 15%, 85%)"
        strokeWidth="1"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 25, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Lines */}
      {[55, 75, 95, 115, 135].map((y, i) => (
        <motion.line
          key={i}
          x1="65" y1={y} x2={i === 4 ? "110" : "135"} y2={y}
          stroke="hsl(35, 85%, 50%)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          style={{ transformOrigin: "65px center" }}
        />
      ))}
      {/* Stamp/seal */}
      <motion.circle
        cx="125" cy="130" r="18"
        fill="none"
        stroke="hsl(35, 85%, 50%)"
        strokeWidth="2"
        opacity="0.3"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{ transformOrigin: "125px 130px" }}
      />
      <motion.path
        d="M118 130 L123 135 L133 125"
        fill="none"
        stroke="hsl(35, 85%, 50%)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
    </g>
  </motion.svg>
);
