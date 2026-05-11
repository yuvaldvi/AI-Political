// components/shared.jsx — content + small shared bits

const CONTENT = {
  pubDate: 'September 2026',
  navLinks: [
    { href: '#about', label: 'The Book' },
    { href: '#thesis', label: 'The Argument' },
    { href: '#author', label: 'Author' },
    { href: '#concepts', label: 'Key Ideas' },
  ],
  hero: {
    eyebrow: 'A new book — September 2026',
    headline: ['How Artificial Intelligence', 'can save us from', 'ourselves.'],
    sub: "The first book arguing that AI is the most powerful instrument for clarity, fairness, and progress humanity has ever built — if we have the courage to let it tell the truth.",
  },
  decode: [
    { tag: 'noun', text: 'Artificial Intelligence meets Politics', emph: 'Artificial Intelligence' },
    { tag: 'adj.', text: 'A-Political — without politics, without agenda', emph: 'A-Political' },
  ],
  manifesto: 'We are building the mirror. The only question that matters is what it will reflect.',
  manifestoFooter: '— From the Preface',
  about: [
    'Mirror, mirror on the wall, who is the fairest of them all?',
    'A children\u2019s fairy tale carries the oldest dream of fair judgment: a mirror that tells the truth — that cannot be bribed, intimidated, or trained to change its answer. For the first time, we have the technology to build that mirror. The choice is whether we will.',
    'Politics touches every major decision an organization makes. It is the invisible variable that determines outcomes before competence ever enters the room. The tragedy of modern AI is not that it is becoming too powerful — it is that we are compromising it, bending the most powerful intelligence ever built to serve the very politics it could finally help us escape.',
    'Drawing on two decades at Google, Skype, and Microsoft, Yuval Dvir argues that an A-Political AI — anchored to evidence, free from the incentives that distort human judgment — is the first instrument capable of stripping politics out of the work without stripping humanity from it. When intelligence no longer needs to lie to survive, the economics of deception collapses.',
  ],
  closer: 'Stripping politics does not strip humanity. It returns humanity to the work.',
  thesisHeadline: 'When the mirror cannot be corrupted, the only winning strategy left is competence.',
  thesis: [
    { k: 'The Diagnosis', v: 'Office politics is not a cultural failure. It is the mammalian brain running its ancient software in an environment it was never designed for. The honest get sidelined for rocking boats. The flatterers get promoted for not making waves. Data was supposed to be the antidote — in an empire-building culture, it became the disguise.' },
    { k: 'The Risk', v: 'The real danger is not artificial intelligence. It is human malevolence armed with infinite compute. By humanizing the algorithm, we risk indoctrinating it. An AI trained to flatter cannot reveal uncomfortable realities. We are not creating an honest mirror — we are creating an accomplice.' },
    { k: 'The Antidote', v: 'A truly A-Political AI changes the math. When power no longer requires manipulation, politics becomes unprofitable. When being honest is as safe as being political, people will choose honesty — not because they have become better, but because the system has stopped rewarding them for being worse. Meritocracy stops being an aspiration and becomes the default.' },
  ],
  quotes: [
    { q: "We are not creating an honest mirror. We are creating an accomplice.", c: 'Ch. 1 — The Mirror Problem' },
    { q: "When power no longer requires manipulation, politics becomes unprofitable.", c: 'Ch. 4 — The Incentive Collapse' },
    { q: 'When the mirror cannot be corrupted, the only winning strategy left is competence.', c: 'Ch. 7 — Artificial Meritocracy' },
    { q: 'The real danger is not artificial intelligence. It is human malevolence armed with infinite compute.', c: 'Ch. 9 — Infinite Compute' },
    { q: 'AI won\u2019t kill your company. Your org chart will.', c: 'Ch. 11 — Legacy Architecture' },
    { q: 'If the table is rigged, you do not rearrange the chairs — you turn over the table.', c: 'Ch. 14 — Replacing the Incentive' },
  ],
  author: {
    name: 'Yuval Dvir',
    creds: ['Google / Gemini', 'Skype / Microsoft', 'Global Transformation', 'AI & Data Strategy', 'INSEAD MBA', 'MSc Applied Neuroscience'],
    bio: [
      "Yuval spent twenty years building at the edge of what technology can do for people. Twelve at Google, where he led the company\u2019s largest API platform and launched the first Gemini partnerships; before that at Skype and Microsoft, where he helped pioneer the transparent, evidence-driven culture that defined the Satya Nadella era.",
      "He holds an MSc in Applied Neuroscience from King\u2019s College London — the science of how humans actually decide — and an MBA from INSEAD. He writes as an optimist with receipts: an operator who has seen, first-hand, what becomes possible when systems are designed to tell the truth.",
    ],
  },
  terms: [
    { k: 'The Truth Guardrail', v: 'An independent verification layer anchored strictly to empirical evidence — not the sentiment of the crowd. Truth is not a democracy; it does not submit to a show of hands.' },
    { k: 'Artificial Meritocracy', v: 'An artificial construct that is, ironically, the only genuine one left. When the mirror cannot be corrupted, the only winning strategy left is competence.' },
    { k: 'Corporate RISK', v: 'Risk is more than a board game — it is the silent operating system of the modern office. A contest of empire-building, defensive positioning, and the pursuit of personal influence, where FTEs are the chips.' },
    { k: 'The Teflon Manager', v: 'Mid-level executives that nothing sticks to — neither the glory of success nor the stain of failure. They simply exist to survive.' },
    { k: 'The Translation Tax', v: 'The cost of every relationship where managing up pays better than doing the work. There is a reason people love their dogs — it is the one relationship where the tax is not charged.' },
    { k: 'Company as a Service', v: 'With companies soon being managed floor to ceiling by AI, a new commercial category becomes visible: the company itself, instantiated, run, and dissolved on demand.' },
    { k: 'The Generalist', v: 'What the organization needs now — someone who can learn, unlearn, and relearn, who can move across functions and synthesize what the AI surfaces into decisions no single specialism could reach.' },
    { k: 'The Legacy Organ', v: 'The human brain — astonishing as it is — is older than the Commodore 64 by roughly three hundred thousand years, programmed long before the first microchip. AI has no such ceiling.' },
    { k: 'Re-Humanized Work', v: 'When politics becomes unprofitable, what remains is the work — the real work, the work that matters, the work that builds. Stripping politics does not strip humanity. It returns humanity to the work.' },
  ],
  manifestoFooterTagline: 'Math over Machiavelli. Logic over Legacy. Truth over Tribalism.',
};

// Decoded wordmark — the central A·I·-·POLITICAL ↔ A-POLITICAL game
function Wordmark({ size = '2.4rem', tone = 'light', interactive = true }) {
  const [decoded, setDecoded] = React.useState(false);
  const ink = tone === 'dark' ? '#fff' : 'var(--ink)';
  const dim  = tone === 'dark' ? 'rgba(255,255,255,.45)' : 'var(--ink-light)';
  // The "I" highlight — a softer, lighter red than the page accent
  const iRed = 'oklch(64% 0.18 25)';
  return (
    <span
      onMouseEnter={() => interactive && setDecoded(true)}
      onMouseLeave={() => interactive && setDecoded(false)}
      style={{
        fontFamily: 'var(--mono)',
        fontWeight: 700,
        fontSize: size,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: interactive ? 'default' : 'inherit',
        whiteSpace: 'nowrap',
        display: 'inline-block',
      }}
    >
      <span style={{ color: ink, transition: 'color .35s' }}>A</span>
      <span style={{
        color: decoded ? 'transparent' : iRed,
        transition: 'color .35s, letter-spacing .35s, margin .35s',
        marginRight: decoded ? '-0.55em' : 0,
        display: 'inline-block',
      }}>I</span>
      <span style={{ color: ink, margin: '0 0.05em', transition: 'color .35s' }}>-</span>
      <span style={{ color: ink }}>POLITICAL</span>
    </span>
  );
}

// Striped placeholder — for any image slot we don't have art for
function Placeholder({ label, ratio = '4 / 3', dark = false }) {
  return (
    <div style={{
      aspectRatio: ratio,
      background: dark
        ? 'repeating-linear-gradient(135deg,#1a1a1a 0 8px,#222 8px 16px)'
        : 'repeating-linear-gradient(135deg,#efece6 0 8px,#e8e5e0 8px 16px)',
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--ink-mid)',
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      display: 'grid',
      placeItems: 'center',
      border: dark ? '1px solid #2a2a2a' : '1px solid var(--rule)',
    }}>{label}</div>
  );
}

function LogoImage({ maxWidth = 'clamp(380px, 55vw, 720px)', invert = false, style = {} }) {
  return (
    <img
      src="assets/wordmark-logo.jpg"
      alt="AI-Political"
      style={{
        display: 'block',
        width: '100%',
        maxWidth,
        height: 'auto',
        mixBlendMode: invert ? 'normal' : 'multiply',
        filter: invert ? 'none' : 'contrast(1.05)',
        ...style,
      }}
    />
  );
}

// Small "AI" processor chip + tight PCB traces. Sits directly under the
// mirror; all traces land along the mirror's bottom rim — no dangling
// off-side connections. Smaller, quieter than before.
function MirrorPowerChip({ width = 220 }) {
  // viewBox: 240 wide x 120 tall. Chip body sits at the bottom-center.
  const chip = { x: 95, y: 70, w: 50, h: 38 };
  const cx = chip.x + chip.w / 2; // 120
  // 6 top pins, evenly spaced along chip top edge
  const topPinXs = [102, 110, 118, 122, 130, 138];
  // All landing pads sit along the mirror's bottom rim (y=4),
  // grouped centrally so they look like a real cable bundle into the mirror.
  const landXs = [70, 90, 110, 130, 150, 170];
  const traces = topPinXs.map((px, i) => {
    const lx = landXs[i];
    const bendY = 38 - (i % 3) * 6; // 38, 32, 26 — small staggered bend
    return `M ${px} 70 L ${px} ${bendY} L ${lx} ${bendY} L ${lx} 4`;
  });
  return (
    <div style={{
      width: '100%', maxWidth: width, margin: '0 auto',
      position: 'relative', pointerEvents: 'none',
    }} aria-hidden="true">
      <svg viewBox="0 0 240 120" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <filter id="chip-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.9" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="chip-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#9a8f80" />
            <stop offset="45%" stopColor="#6b6258" />
            <stop offset="100%" stopColor="#3d3731" />
          </linearGradient>
          <linearGradient id="chip-pin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#d8d4cc" />
            <stop offset="50%" stopColor="#a8a39a" />
            <stop offset="100%" stopColor="#5e574e" />
          </linearGradient>
        </defs>

        {/* Static PCB traces */}
        <g stroke="var(--ink-light)" strokeWidth="0.6" fill="none" opacity="0.55"
           strokeLinecap="round" strokeLinejoin="round">
          {traces.map((d, i) => <path key={i} d={d} />)}
        </g>
        {/* Solder pads at the mirror rim */}
        <g fill="var(--ink-mid)" opacity="0.8">
          {landXs.map((x, i) => <circle key={i} cx={x} cy="4" r="1.6" />)}
        </g>
        {/* Live accent pulse running up each trace */}
        <g stroke="var(--accent)" strokeWidth="1" fill="none"
           strokeLinecap="round" strokeLinejoin="round" filter="url(#chip-glow)">
          {traces.map((d, i) => (
            <path
              key={i}
              d={d}
              strokeDasharray="6 200"
              style={{
                animation: `chip-pulse ${2.8 + (i % 3) * 0.4}s linear ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </g>

        {/* Pins on all four sides */}
        <g>
          {topPinXs.map((px, i) => (
            <rect key={`t${i}`} x={px - 1.5} y="66" width="3" height="5" rx="0.6"
                  fill="url(#chip-pin)" stroke="#1a1815" strokeWidth="0.3" />
          ))}
          {topPinXs.map((px, i) => (
            <rect key={`b${i}`} x={px - 1.5} y="108" width="3" height="5" rx="0.6"
                  fill="url(#chip-pin)" stroke="#1a1815" strokeWidth="0.3" />
          ))}
          {[74, 82, 90, 98].map((py, i) => (
            <rect key={`l${i}`} x="90" y={py} width="5" height="3" rx="0.6"
                  fill="url(#chip-pin)" stroke="#1a1815" strokeWidth="0.3" />
          ))}
          {[74, 82, 90, 98].map((py, i) => (
            <rect key={`r${i}`} x="145" y={py} width="5" height="3" rx="0.6"
                  fill="url(#chip-pin)" stroke="#1a1815" strokeWidth="0.3" />
          ))}
        </g>

        {/* Square processor body */}
        <rect x={chip.x} y={chip.y} width={chip.w} height={chip.h} rx="2"
              fill="url(#chip-body)" stroke="#000" strokeWidth="0.5" />
        <rect x={chip.x + 0.6} y={chip.y + 0.6} width={chip.w - 1.2} height="1.2"
              fill="rgba(255,255,255,.35)" />
        <rect x={chip.x + 5} y={chip.y + 5} width={chip.w - 10} height={chip.h - 10}
              rx="0.6" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="0.4" />
        {/* Faint die grid — suggests transistor pattern on the silicon */}
        <g stroke="rgba(255,255,255,.18)" strokeWidth="0.25">
          {[0,1,2,3,4].map(i => (
            <line key={`gh${i}`}
                  x1={chip.x + 7}
                  x2={chip.x + chip.w - 7}
                  y1={chip.y + 8 + i * (chip.h - 16) / 4}
                  y2={chip.y + 8 + i * (chip.h - 16) / 4} />
          ))}
          {[0,1,2,3,4,5].map(i => (
            <line key={`gv${i}`}
                  y1={chip.y + 7}
                  y2={chip.y + chip.h - 7}
                  x1={chip.x + 7 + i * (chip.w - 14) / 5}
                  x2={chip.x + 7 + i * (chip.w - 14) / 5} />
          ))}
        </g>
        <circle cx={chip.x + 4} cy={chip.y + 4} r="1.2" fill="#1a1612"
                stroke="rgba(255,255,255,.4)" strokeWidth="0.3" />

        {/* Status LED — only ornament left on the die */}
        <circle cx={chip.x + chip.w - 5} cy={chip.y + chip.h - 5} r="1.1"
                fill="var(--accent)"
                style={{ animation: 'chip-led 1.6s ease-in-out infinite' }} />
        <circle cx={chip.x + chip.w - 5} cy={chip.y + chip.h - 5} r="2.3"
                fill="var(--accent)" opacity="0.18"
                style={{ animation: 'chip-led 1.6s ease-in-out infinite' }} />
      </svg>
    </div>
  );
}


// (kept) generic in-mirror circuit overlay — currently unused
function MirrorCircuit() {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.55, mixBlendMode: 'screen', pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="mc-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Right-angled traces radiating from the central glint, like a PCB.
          Two-segment paths with stroke-dash flow so a tiny pulse runs along them. */}
      <g
        stroke="var(--accent)" strokeWidth="0.6" fill="none" filter="url(#mc-glow)"
        strokeLinecap="round" strokeLinejoin="round"
      >
        {[
          'M200 240 L200 140 L120 140',
          'M200 240 L300 240 L300 110',
          'M200 240 L200 360 L80 360',
          'M200 240 L100 240 L100 90',
          'M200 240 L290 330 L350 330',
          'M200 240 L150 290 L150 410',
          'M200 240 L260 180 L350 180',
          'M200 240 L140 180 L60 180',
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            strokeDasharray="6 200"
            strokeDashoffset="0"
            style={{
              animation: `mirror-flow ${4 + (i % 3)}s linear ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </g>
      {/* Tiny node dots where traces turn — make them look like solder pads */}
      <g fill="var(--accent)" opacity="0.85" filter="url(#mc-glow)">
        {[
          [200, 140], [120, 140], [300, 240], [300, 110],
          [200, 360], [80, 360],  [100, 240], [100, 90],
          [290, 330], [350, 330], [150, 290], [150, 410],
          [260, 180], [350, 180], [140, 180], [60, 180],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" />
        ))}
      </g>
    </svg>
  );
}

// Small pewter standing base for the mirror — two angled legs descending
// to a wide flat foot. Sits between the mirror and the AI chip below.
function MirrorStand({ width = 240 }) {
  return (
    <div style={{
      width: '100%', maxWidth: width, margin: '-4px auto 0',
      pointerEvents: 'none',
    }} aria-hidden="true">
      <svg viewBox="0 0 240 60" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="stand-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#4a3f35" />
            <stop offset="50%" stopColor="#1a1815" />
            <stop offset="100%" stopColor="#3a342e" />
          </linearGradient>
        </defs>
        {/* Two angled support legs */}
        <path d="M108 0 L96 38 L102 38 L116 0 Z"
              fill="url(#stand-metal)" stroke="#0a0908" strokeWidth="0.5" />
        <path d="M132 0 L144 38 L138 38 L124 0 Z"
              fill="url(#stand-metal)" stroke="#0a0908" strokeWidth="0.5" />
        {/* Wide flat foot */}
        <rect x="60" y="38" width="120" height="8" rx="2"
              fill="url(#stand-metal)" stroke="#0a0908" strokeWidth="0.5" />
        {/* Top highlight on foot */}
        <rect x="62" y="39" width="116" height="1.2" fill="rgba(255,255,255,.15)" />
        {/* Soft shadow under foot */}
        <ellipse cx="120" cy="50" rx="80" ry="3" fill="rgba(0,0,0,.18)" />
      </svg>
    </div>
  );
}

Object.assign(window, { CONTENT, Wordmark, Placeholder, LogoImage, MirrorCircuit, MirrorPowerChip, MirrorStand });
