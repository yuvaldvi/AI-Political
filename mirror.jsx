// components/mirror.jsx — Direction 2: Snow White Mirror metaphor
/* global CONTENT, Wordmark, Placeholder */

function MirrorDirection({ density = 'regular', accent = '#c8432b' }) {
  const pad = density === 'compact' ? '4rem' : density === 'comfy' ? '8rem' : '6rem';
  return (
    <div style={{ '--accent': accent, fontFamily: 'var(--sans)', color: 'var(--ink)' }}>
      <MrNav />
      <MrHero />
      <MrDecode />
      <MrAsk />
      <MrAbout pad={pad} />
      <MrThesis pad={pad} />
      <MrQuotes pad={pad} />
      <MrAuthor pad={pad} />
      <MrTerms pad={pad} />
      <MrSignup pad={pad} />
      <MrFooter />
    </div>
  );
}

function MrNav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '1.1rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(250,249,247,.78)',
      borderBottom: '1px solid var(--rule-soft)',
    }}>
      <Wordmark size="0.9rem" />
      <div className="nav-meta" style={{
        fontFamily: 'var(--mono)', fontSize: '.7rem',
        letterSpacing: '.2em', textTransform: 'uppercase',
        color: 'var(--ink-mid)',
      }}>Optimized for Truth · {CONTENT.pubDate}</div>
    </nav>
  );
}

function MrHero() {
  const [pos, setPos] = React.useState({ x: 50, y: 50 });
  const ref = React.useRef(null);
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };
  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      style={{
        minHeight: '92vh', position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: '3rem', padding: '4rem 2.5rem 6rem',
        alignItems: 'center',
      }}>
      {/* Reactive radial light */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(600px 600px at ${pos.x}% ${pos.y}%, rgba(200,67,43,.08), transparent 60%)`,
        pointerEvents: 'none', transition: 'background .15s',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem',
        }}>An independent Truth Guardrail · {CONTENT.pubDate}</div>

        <h1 className="hero-h1" style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(2.6rem, 6vw, 5.4rem)',
          lineHeight: 1.05, margin: '0 0 1.4rem',
          color: 'var(--ink)', textWrap: 'balance',
        }}>
          The mirror you<br/>
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>cannot deceive</em>.
        </h1>

        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
          lineHeight: 1.55, color: 'var(--ink-mid)',
          maxWidth: 480, margin: '0 0 2.4rem',
        }}>
          {'"Mirror, mirror on the wall, who is the fairest of them all?" A children\u2019s fairy tale that quietly described the most hopeful idea of our time: a witness that always tells the truth.'}
        </p>

        <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#signup" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '.95rem 2rem', fontSize: '.92rem', fontWeight: 600,
            letterSpacing: '.02em', textDecoration: 'none',
          }}>Join the Launch List</a>
          <a href="#ask" style={{
            color: 'var(--ink-mid)', padding: '.9rem 0',
            fontSize: '.88rem', textDecoration: 'none',
            borderBottom: '1px solid var(--rule)', fontWeight: 500,
          }}>Ask the mirror ↓</a>
        </div>
      </div>

      <MirrorPanel pos={pos} />
    </section>
  );
}

// The mirror — polished, reflective glass with a cracked overlay
function MirrorPanel({ pos }) {
  const hx = 30 + (pos.x / 100) * 40;
  const hy = 25 + (pos.y / 100) * 40;
  return (
   <div style={{
     display: 'flex', flexDirection: 'column', alignItems: 'center',
     width: '100%',
   }}>
    <div className="mirror-wrap" style={{
      position: 'relative', zIndex: 1,
      width: '100%', maxWidth: 460,
      aspectRatio: '3 / 4', maxHeight: '72vh',
      borderRadius: '50% / 40%',
      padding: 16,
      // Pewter frame
      background: 'linear-gradient(155deg, #3a342e 0%, #1a1815 35%, #2a2520 65%, #4a3f35 100%)',
      boxShadow: `
        0 50px 110px rgba(0,0,0,.4),
        0 2px 0 rgba(255,255,255,.08) inset,
        0 -2px 0 rgba(0,0,0,.5) inset
      `,
    }}>
      {/* Inner reflective surface */}
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        borderRadius: '50% / 40%', overflow: 'hidden',
        background: `
          radial-gradient(120% 90% at ${hx}% ${hy}%,
            rgba(255,255,255,.45) 0%,
            rgba(220,228,238,.18) 18%,
            rgba(120,135,155,.08) 38%,
            rgba(40,48,62,.0) 60%),
          linear-gradient(165deg,
            #c8d1de 0%,
            #8a93a3 22%,
            #4a5160 48%,
            #2c3140 72%,
            #1a1d26 100%)
        `,
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,.18),
          inset 0 0 60px rgba(0,0,0,.5),
          inset 0 -10px 30px rgba(0,0,0,.35),
          inset 0 10px 30px rgba(255,255,255,.18)
        `,
      }}>
        {/* Drifting sheen */}
        <div style={{
          position: 'absolute', inset: '-20%',
          background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,.16) 48%, rgba(255,255,255,.32) 50%, rgba(255,255,255,.16) 52%, transparent 65%)',
          transform: `translate(${(pos.x - 50) * 0.6}%, ${(pos.y - 50) * 0.4}%)`,
          transition: 'transform .25s',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }} />

        {/* Faint room reflection — vertical light bands */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(105deg, transparent 0 28px, rgba(255,255,255,.04) 28px 30px, transparent 30px 70px)',
          opacity: .7,
          pointerEvents: 'none',
        }} />

        {/* Warm horizon glow at the bottom */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '38%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(200,67,43,.12) 60%, rgba(200,67,43,.22) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Cracked glass lines */}
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity: .32, mixBlendMode: 'screen',
          transform: `translate(${(pos.x - 50) * -0.04}px, ${(pos.y - 50) * -0.04}px)`,
          pointerEvents: 'none',
        }} aria-hidden="true">
          <g stroke="rgba(255,255,255,.85)" strokeWidth=".5" fill="none">
            <line x1="200" y1="240" x2="60" y2="80" />
            <line x1="200" y1="240" x2="120" y2="20" />
            <line x1="200" y1="240" x2="240" y2="20" />
            <line x1="200" y1="240" x2="360" y2="60" />
            <line x1="200" y1="240" x2="380" y2="200" />
            <line x1="200" y1="240" x2="350" y2="380" />
            <line x1="200" y1="240" x2="220" y2="490" />
            <line x1="200" y1="240" x2="80" y2="460" />
            <line x1="200" y1="240" x2="40" y2="320" />
          </g>
          <g stroke="rgba(255,255,255,.5)" strokeWidth=".35" fill="none">
            <path d="M200 240 L150 130 L80 110" />
            <path d="M200 240 L260 140 L320 100" />
            <path d="M200 240 L240 360 L300 410" />
            <path d="M200 240 L160 350 L100 400" />
          </g>
        </svg>

        {/* Wordmark — etched into the glass */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'grid', placeItems: 'center',
          padding: '0 12%',
          transform: `translate(${(pos.x - 50) * 0.08}px, ${(pos.y - 50) * 0.08}px)`,
          transition: 'transform .2s',
        }}>
          <div style={{ width: '90%', textAlign: 'center' }}>
            <img
              src="assets/wordmark-logo.png"
              alt="AI-Political"
              style={{
                display: 'block', width: '100%', height: 'auto',
                opacity: .92,
                filter: 'drop-shadow(0 1px 0 rgba(0,0,0,.55)) drop-shadow(0 0 14px rgba(255,255,255,.35))',
              }}
            />
            <div style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              color: 'rgba(255,255,255,.78)', fontSize: '1rem',
              marginTop: '.6rem', letterSpacing: '.02em',
              textShadow: '0 1px 2px rgba(0,0,0,.5)',
            }}>How AI can save us from <span style={{ color: 'var(--accent)' }}>ourselves.</span></div>
          </div>
        </div>

        {/* Bright crack-point glint */}
        <div style={{
          position: 'absolute', left: '50%', top: '48%',
          width: 4, height: 4, borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 0 18px 3px rgba(255,255,255,.85), 0 0 60px 10px rgba(255,220,200,.35)',
        }} />

        {/* Top rim highlight */}
        <div style={{
          position: 'absolute', left: '8%', right: '8%', top: 2, height: '14%',
          background: 'radial-gradient(50% 100% at 50% 0%, rgba(255,255,255,.35), transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
    {/* AI chip powering the mirror */}
    <MirrorPowerChip width={300} />
   </div>
  );
}

function MrDecode() {
  return (
    <section style={{
      padding: '2.6rem 2.5rem',
      borderTop: '1px solid var(--rule-soft)',
      borderBottom: '1px solid var(--rule-soft)',
      background: 'var(--bg-2)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '.65rem', letterSpacing: '.2em',
            textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: '.8rem',
          }}>The wordplay</div>
          <Wordmark size="clamp(1.6rem, 3vw, 2.4rem)" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
          {CONTENT.decode.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '.65rem', letterSpacing: '.18em',
                textTransform: 'uppercase', color: 'var(--ink-light)',
                width: '3rem', flexShrink: 0,
              }}>{d.tag}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--ink-soft)' }}>
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{d.emph}</span>
                {d.text.replace(d.emph, '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Interactive "Ask the mirror" — typewriter answers
function MrAsk() {
  const queries = [
    { q: 'Where can this team move fastest with confidence?', a: 'Right here — three adjacent decisions where the evidence is already aligned and only consensus is missing.' },
    { q: 'Which patient should we trial this treatment on first?', a: 'The cohort whose biomarkers have been quietly meeting eligibility for two years. They were filtered out by an outdated rubric.' },
    { q: 'What\u2019s the highest-leverage thing this org could do this quarter?', a: 'Free your best people from the meeting load. The work they postpone is the work that compounds.' },
  ];
  const [i, setI] = React.useState(0);
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => {
    setTyped('');
    const a = queries[i].a;
    let n = 0;
    const t = setInterval(() => {
      n++; setTyped(a.slice(0, n));
      if (n >= a.length) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section id="ask" style={{
      padding: '5rem 2.5rem',
      borderBottom: '1px solid var(--rule-soft)',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.4rem',
        }}>Ask the mirror — a sample</div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          lineHeight: 1.2, margin: '0 0 2.4rem', color: 'var(--ink)',
        }}>What an AI immune to office politics actually says.</h2>

        <div style={{
          background: '#1a1a1a', color: '#fff',
          padding: '2rem 2.4rem', borderRadius: 4,
          fontFamily: 'var(--mono)', fontSize: '.95rem', lineHeight: 1.7,
          minHeight: 220,
        }}>
          <div style={{ color: 'rgba(255,255,255,.45)', marginBottom: '.4rem', fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>You</div>
          <div style={{ marginBottom: '1.4rem' }}>{queries[i].q}</div>
          <div style={{ color: 'var(--accent)', marginBottom: '.4rem', fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>Mirror</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.55 }}>
            {typed}<span style={{ animation: 'blink 1s steps(2) infinite' }}>▍</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '.6rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          {queries.map((q, k) => (
            <button key={k} onClick={() => setI(k)} style={{
              background: i === k ? 'var(--accent)' : 'transparent',
              color: i === k ? '#fff' : 'var(--ink-mid)',
              border: '1px solid ' + (i === k ? 'var(--accent)' : 'var(--rule)'),
              padding: '.6rem 1rem', fontSize: '.78rem',
              fontFamily: 'var(--sans)', cursor: 'default',
              transition: 'all .25s',
            }}>{q.q}</button>
          ))}
        </div>
      </div>
      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </section>
  );
}

function MrAbout({ pad }) {
  return (
    <section id="about" style={{ padding: `${pad} 2.5rem`, borderBottom: '1px solid var(--rule-soft)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Lbl>About the Book</Lbl>
        {CONTENT.about.map((p, i) => (
          <p key={i} style={{
            fontFamily: 'var(--serif)', fontSize: '1.18rem',
            color: 'var(--ink-soft)', lineHeight: 1.75, margin: '0 0 1.4rem',
            ...(i === 0 ? { fontStyle: 'italic', fontSize: '1.6rem', color: 'var(--ink)', borderLeft: '3px solid var(--accent)', paddingLeft: '1.4rem' } : {}),
          }}>{p}</p>
        ))}
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          color: 'var(--accent)', fontSize: '1.18rem', lineHeight: 1.6,
          marginTop: '2.4rem', paddingTop: '2rem',
          borderTop: '1px solid var(--rule-soft)',
        }}>{CONTENT.closer}</p>
      </div>
    </section>
  );
}

// Big number-led thesis
function MrThesis({ pad }) {
  return (
    <section id="thesis" style={{ padding: `${pad} 2.5rem`, background: '#1a1a1a', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.6rem',
        }}>The Argument</div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: 1.15,
          margin: '0 0 4rem', maxWidth: '20ch', textWrap: 'balance',
        }}>{CONTENT.thesisHeadline}</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0, borderTop: '1px solid rgba(255,255,255,.1)',
        }}>
          {CONTENT.thesis.map((t, i) => (
            <div key={i} style={{
              padding: '2.4rem 2rem 2.4rem 0',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,.1)' : 'none',
              paddingLeft: i > 0 ? '2rem' : 0,
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: '3rem',
                color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem',
              }}>0{i + 1}</div>
              <h3 style={{
                fontFamily: 'var(--mono)', fontSize: '.78rem', fontWeight: 700,
                letterSpacing: '.2em', textTransform: 'uppercase',
                color: '#fff', margin: '0 0 1rem',
              }}>{t.k}</h3>
              <p style={{
                fontSize: '.95rem', color: 'rgba(255,255,255,.7)',
                lineHeight: 1.7, margin: 0,
              }}>{t.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MrQuotes({ pad }) {
  return (
    <section style={{ padding: `${pad} 2.5rem`, borderTop: '1px solid var(--rule-soft)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Lbl>From the Book</Lbl>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {CONTENT.quotes.map((q, i) => (
            <figure key={i} style={{
              margin: 0, padding: '2.4rem 2rem',
              border: '1px solid var(--rule)', background: '#fff',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: '-.4rem', left: '1.5rem',
                fontFamily: 'var(--serif)', fontSize: '4rem',
                color: 'var(--accent)', lineHeight: 1, opacity: .6,
              }}>{'"'}</div>
              <blockquote style={{
                margin: 0, marginTop: '1.4rem',
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--ink-soft)',
              }}>{q.q}</blockquote>
              <figcaption style={{
                marginTop: '1.4rem',
                fontFamily: 'var(--mono)', fontSize: '.68rem',
                letterSpacing: '.15em', textTransform: 'uppercase',
                color: 'var(--ink-light)',
              }}>{q.c}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function MrAuthor({ pad }) {
  return (
    <section id="author" style={{ padding: `${pad} 2.5rem`, background: 'var(--bg-2)' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem',
        alignItems: 'start',
      }}>
        <div>
          <Placeholder label="Author portrait" ratio="3 / 4" />
          <div style={{
            marginTop: '1rem',
            fontFamily: 'var(--mono)', fontSize: '.7rem',
            letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'var(--ink-light)',
          }}>Yuval Dvir</div>
        </div>
        <div>
          <Lbl>The Author</Lbl>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            color: 'var(--ink)', margin: '0 0 1.6rem',
          }}>An operator, not a theorist.</h2>
          {CONTENT.author.bio.map((p, i) => (
            <p key={i} style={{
              fontSize: '1rem', color: 'var(--ink-mid)',
              lineHeight: 1.8, margin: '0 0 1.4rem',
            }}>{p}</p>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.55rem', marginTop: '1.5rem' }}>
            {CONTENT.author.creds.map(c => (
              <span key={c} style={{
                fontFamily: 'var(--mono)', fontSize: '.68rem',
                letterSpacing: '.1em', textTransform: 'uppercase',
                padding: '.5rem .85rem',
                border: '1px solid var(--rule)',
                color: 'var(--ink-mid)', background: '#fff',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MrTerms({ pad }) {
  return (
    <section id="concepts" style={{ padding: `${pad} 2.5rem` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Lbl>Key Concepts</Lbl>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          color: 'var(--ink)', margin: '0 0 2.4rem',
        }}>The language for a broken system.</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0,
          borderTop: '1px solid var(--rule)',
        }}>
          {CONTENT.terms.map((t, i) => (
            <div key={t.k} style={{
              padding: '1.8rem 1.6rem',
              borderBottom: '1px solid var(--rule)',
              borderRight: '1px solid var(--rule)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '.65rem',
                letterSpacing: '.18em', color: 'var(--accent)', marginBottom: '.6rem',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <h4 style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.3rem',
                color: 'var(--ink)', margin: '0 0 .6rem',
              }}>{t.k}</h4>
              <p style={{
                fontSize: '.85rem', color: 'var(--ink-mid)',
                lineHeight: 1.65, margin: 0,
              }}>{t.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MrSignup({ pad }) {
  return (
    <section id="signup" style={{
      padding: `${pad} 2.5rem`, textAlign: 'center',
      background: '#1a1a1a', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(600px 400px at 50% 50%, rgba(200,67,43,.15), transparent 70%)',
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.4rem',
        }}>Launch List</div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          margin: '0 0 1.2rem', lineHeight: 1.1,
        }}>The most hopeful book about AI you\u2019ll read this year.</h2>
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,.65)',
          maxWidth: 520, margin: '0 auto 2.4rem', lineHeight: 1.6,
        }}>Be the first to read the book that argues AI is the best chance we\u2019ve had at clearer thinking, fairer institutions, and the work that actually matters.</p>
        <DarkSignup />
      </div>
    </section>
  );
}

function DarkSignup() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <form
      onSubmit={e => { e.preventDefault(); if (email.includes('@')) setSent(true); }}
      style={{
        display: 'flex', maxWidth: 480, margin: '0 auto',
        background: 'rgba(255,255,255,.05)',
        border: '1px solid rgba(255,255,255,.15)',
      }}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@truth.com"
        style={{
          flex: 1, padding: '1rem 1.2rem', border: 'none', outline: 'none',
          fontSize: '.95rem', fontFamily: 'var(--sans)',
          background: 'transparent', color: '#fff',
        }}
      />
      <button type="submit" style={{
        background: 'var(--accent)', color: '#fff', border: 'none',
        padding: '0 1.6rem', fontSize: '.85rem', fontWeight: 600,
        letterSpacing: '.05em', textTransform: 'uppercase',
        cursor: 'default', fontFamily: 'var(--sans)',
      }}>{sent ? '✓ Subscribed' : 'Subscribe'}</button>
    </form>
  );
}

function MrFooter() {
  return (
    <footer style={{
      padding: '2.4rem 2.5rem', background: '#1a1a1a', color: 'rgba(255,255,255,.5)',
      borderTop: '1px solid rgba(255,255,255,.08)',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem',
      alignItems: 'center',
    }}>
      <p style={{ fontSize: '.74rem', margin: 0 }}>© 2026 Yuval Dvir.</p>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '.7rem',
        letterSpacing: '.15em', textTransform: 'uppercase',
        color: 'var(--accent)', textAlign: 'center',
      }}>{CONTENT.manifestoFooterTagline}</div>
      <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'flex-end' }}>
        <a href="#" style={{ fontSize: '.78rem', color: 'inherit', textDecoration: 'none', fontFamily: 'var(--mono)' }}>LinkedIn</a>
        <a href="#" style={{ fontSize: '.78rem', color: 'inherit', textDecoration: 'none', fontFamily: 'var(--mono)' }}>X</a>
        <a href="#" style={{ fontSize: '.78rem', color: 'inherit', textDecoration: 'none', fontFamily: 'var(--mono)' }}>Contact</a>
      </div>
    </footer>
  );
}

function Lbl({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '.7rem', fontWeight: 700,
      letterSpacing: '.28em', textTransform: 'uppercase',
      color: 'var(--accent)', marginBottom: '1.4rem',
    }}>{children}</div>
  );
}

Object.assign(window, { MirrorDirection });
