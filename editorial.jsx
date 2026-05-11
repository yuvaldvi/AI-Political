// components/editorial.jsx — Direction 1: refined editorial (close to current site)
/* global CONTENT, Wordmark, Placeholder */

function EditorialDirection({ density = 'regular', accent = '#c8432b' }) {
  const pad = density === 'compact' ? '4rem' : density === 'comfy' ? '8rem' : '6rem';
  return (
    <div style={{ '--accent': accent, fontFamily: 'var(--sans)', color: 'var(--ink)' }}>
      <EdNav />
      <EdHero pad={pad} />
      <EdDecode />
      <EdManifesto pad={pad} />
      <EdAbout pad={pad} />
      <EdThesis pad={pad} />
      <EdQuotes pad={pad} />
      <EdAuthor pad={pad} />
      <EdTerms pad={pad} />
      <EdSignup pad={pad} />
      <EdFooter />
    </div>
  );
}

function EdNav() {
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
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {CONTENT.navLinks.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: 'var(--sans)', fontSize: '.82rem', fontWeight: 500,
            color: 'var(--ink-mid)', textDecoration: 'none', letterSpacing: '.02em',
          }}>{l.label}</a>
        ))}
        <a href="#signup" className="nav-cta" style={{
          background: 'var(--accent)', color: '#fff', padding: '.55rem 1.2rem',
          borderRadius: 2, fontWeight: 600, fontSize: '.82rem',
          textDecoration: 'none', letterSpacing: '.02em',
        }}>Get Notified</a>
      </div>
    </nav>
  );
}

function EdHero({ pad }) {
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
        padding: `4rem 2.5rem ${pad}`,
        minHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem',
        }}>{CONTENT.hero.eyebrow}</div>

        <div className="wordmark-hero" style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)' }}>
          <Wordmark size="1em" />
        </div>

        <h1 className="hero-h1" style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(1.9rem, 3.6vw, 3.4rem)',
          lineHeight: 1.1, color: 'var(--ink-soft)',
          margin: '0 0 1.2rem', maxWidth: '20ch', textWrap: 'balance',
        }}>
          How Artificial Intelligence can save us from{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ourselves.</em>
        </h1>

        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
          color: 'var(--ink-mid)', maxWidth: 520, lineHeight: 1.5,
          margin: '0 0 2.5rem',
        }}>{CONTENT.hero.sub}</p>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#signup" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '.95rem 2.2rem', fontSize: '.92rem', fontWeight: 600,
            letterSpacing: '.02em', textDecoration: 'none',
          }}>Join the Launch List</a>
          <a href="#about" style={{
            color: 'var(--ink-mid)', padding: '.9rem 0',
            fontSize: '.88rem', textDecoration: 'none',
            borderBottom: '1px solid var(--rule)', fontWeight: 500,
          }}>Read the thesis ↓</a>
        </div>
      </div>

      <EdMirror pos={pos} />
    </section>
  );
}

// Polished, reflective mirror used in the editorial hero
function EdMirror({ pos }) {
  // Specular highlight tracks the cursor (clamped so it stays on the surface)
  const hx = 30 + (pos.x / 100) * 40;  // 30–70%
  const hy = 25 + (pos.y / 100) * 40;  // 25–65%
  return (
   <div className="mirror-wrap" style={{
     justifySelf: 'center',
     width: '100%', maxWidth: 460,
     display: 'flex', flexDirection: 'column', alignItems: 'center',
   }}>
    <div style={{
      position: 'relative', zIndex: 1,
      width: '100%',
      aspectRatio: '3 / 4',
      borderRadius: '50% / 40%',
      // Outer frame — dark pewter bevel
      padding: 14,
      background: 'linear-gradient(155deg, #3a342e 0%, #1a1815 35%, #2a2520 65%, #4a3f35 100%)',
      boxShadow: `
        0 40px 90px rgba(0,0,0,.35),
        0 2px 0 rgba(255,255,255,.08) inset,
        0 -2px 0 rgba(0,0,0,.5) inset
      `,
    }}>
      {/* Inner mirror surface */}
      <div style={{
        position: 'relative',
        width: '100%', height: '100%',
        borderRadius: '50% / 40%',
        overflow: 'hidden',
        // Polished silver gradient — cool greys with a warm tilt at the bottom
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
          inset 0 0 40px rgba(0,0,0,.45),
          inset 0 -8px 24px rgba(0,0,0,.35),
          inset 0 8px 24px rgba(255,255,255,.18)
        `,
      }}>
        {/* Drifting sheen — a long diagonal highlight that slides with the cursor */}
        <div style={{
          position: 'absolute', inset: '-20%',
          background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,.16) 48%, rgba(255,255,255,.32) 50%, rgba(255,255,255,.16) 52%, transparent 65%)',
          transform: `translate(${(pos.x - 50) * 0.6}%, ${(pos.y - 50) * 0.4}%)`,
          transition: 'transform .25s',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }} />

        {/* Faint room reflection — vertical light bands like a window opposite */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(105deg, transparent 0 24px, rgba(255,255,255,.04) 24px 26px, transparent 26px 60px)',
          opacity: .7,
          pointerEvents: 'none',
        }} />

        {/* Soft warm horizon at the bottom — like a lamp reflected */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '38%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(200,67,43,.12) 60%, rgba(200,67,43,.22) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Cracked-glass overlay (kept from original) */}
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

        {/* Wordmark — appears as if etched into the glass */}
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
              color: 'rgba(255,255,255,.78)', fontSize: '.92rem',
              marginTop: '.6rem', letterSpacing: '.02em',
              textShadow: '0 1px 2px rgba(0,0,0,.5)',
            }}>The mirror that <span style={{ color: 'var(--accent)' }}>cannot deceive</span>.</div>
          </div>
        </div>

        {/* Bright crack-point glint */}
        <div style={{
          position: 'absolute', left: '50%', top: '48%',
          width: 4, height: 4, borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 0 18px 3px rgba(255,255,255,.85), 0 0 60px 10px rgba(255,220,200,.35)',
        }} />

        {/* Top edge — extra rim highlight */}
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
function EdDecode() {
  return (
    <section style={{
      padding: '3rem 2.5rem',
      borderTop: '1px solid var(--rule-soft)',
      borderBottom: '1px solid var(--rule-soft)',
      background: 'var(--bg-2)',
    }}>
      <div style={{
        maxWidth: 960, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'auto auto 1fr', gap: '2.5rem',
        alignItems: 'center',
      }}>
        <Wordmark size="clamp(1.4rem, 2.4vw, 2.2rem)" interactive={false} />
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '1.4rem',
          color: 'var(--ink-light)', fontWeight: 300,
        }}>=</div>
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
                <span>{d.text.replace(d.emph, '')}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdManifesto({ pad }) {
  return (
    <section style={{ padding: `${pad} 2.5rem`, borderBottom: '1px solid var(--rule-soft)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <blockquote style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)',
          lineHeight: 1.4, color: 'var(--ink-soft)',
          paddingLeft: '2rem', borderLeft: '3px solid var(--accent)',
          margin: 0,
        }}>
          {CONTENT.manifesto}
          <footer style={{
            fontFamily: 'var(--sans)', fontSize: '.82rem', color: 'var(--ink-mid)',
            marginTop: '1.5rem', fontStyle: 'normal',
          }}>{CONTENT.manifestoFooter}</footer>
        </blockquote>
      </div>
    </section>
  );
}

function EdAbout({ pad }) {
  return (
    <section id="about" style={{ padding: `${pad} 2.5rem`, borderBottom: '1px solid var(--rule-soft)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Label>About the Book</Label>
        {CONTENT.about.map((p, i) => (
          <p key={i} style={{
            fontFamily: 'var(--serif)', fontSize: '1.18rem',
            color: 'var(--ink-soft)', lineHeight: 1.75, margin: '0 0 1.4rem',
            ...(i === 0 ? { fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--ink)' } : {}),
          }}>{p}</p>
        ))}
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          color: 'var(--accent)', fontSize: '1.18rem', lineHeight: 1.6,
          marginTop: '2.4rem', paddingTop: '2rem',
          borderTop: '1px solid var(--rule-soft)',
        }}>{CONTENT.closer}</p>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.22em',
          textTransform: 'uppercase', color: 'var(--ink-light)', marginTop: '2.4rem',
        }}>Publishing {CONTENT.pubDate}</div>
      </div>
    </section>
  );
}

function EdThesis({ pad }) {
  return (
    <section id="thesis" style={{ padding: `${pad} 2.5rem`, maxWidth: 1200, margin: '0 auto' }}>
      <Label>The Argument</Label>
      <h2 style={{
        fontFamily: 'var(--serif)', fontWeight: 400,
        fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2,
        color: 'var(--ink)', maxWidth: '20ch', margin: '0 0 3rem', textWrap: 'balance',
      }}>{CONTENT.thesisHeadline}</h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {CONTENT.thesis.map((t, i) => (
          <div key={i} style={{
            padding: '2.2rem',
            border: '1px solid var(--rule)',
            background: '#fff',
            transition: 'border-color .4s, box-shadow .4s',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '1.4rem', right: '1.4rem',
              fontFamily: 'var(--mono)', fontSize: '.65rem',
              letterSpacing: '.15em', color: 'var(--ink-light)',
            }}>0{i + 1}</div>
            <h3 style={{
              fontFamily: 'var(--mono)', fontSize: '.72rem', fontWeight: 700,
              letterSpacing: '.2em', textTransform: 'uppercase',
              color: 'var(--accent)', margin: '0 0 1rem',
            }}>{t.k}</h3>
            <p style={{
              fontSize: '.95rem', color: 'var(--ink-mid)',
              lineHeight: 1.7, margin: 0,
            }}>{t.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EdQuotes({ pad }) {
  return (
    <section style={{
      padding: `${pad} 2.5rem`,
      borderTop: '1px solid var(--rule-soft)',
      background: 'var(--bg-2)',
    }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <Label>From the Book</Label>
        <div style={{ borderTop: '1px solid var(--rule-soft)' }}>
          {CONTENT.quotes.map((q, i) => (
            <div key={i} style={{
              padding: '1.8rem 0', borderBottom: '1px solid var(--rule-soft)',
            }}>
              <blockquote style={{
                margin: 0,
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                lineHeight: 1.5, color: 'var(--ink-soft)',
              }}>{q.q}</blockquote>
              <cite style={{
                display: 'block', marginTop: '.7rem',
                fontFamily: 'var(--mono)', fontSize: '.7rem',
                letterSpacing: '.15em', textTransform: 'uppercase',
                color: 'var(--ink-light)', fontStyle: 'normal',
              }}>{q.c}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdAuthor({ pad }) {
  return (
    <section id="author" style={{ padding: `${pad} 2.5rem`, borderTop: '1px solid var(--rule-soft)' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem',
        alignItems: 'start',
      }}>
        <div>
          <Label>The Author</Label>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            color: 'var(--ink)', margin: '0 0 1.5rem', lineHeight: 1.2,
          }}>{CONTENT.author.name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.55rem' }}>
            {CONTENT.author.creds.map(c => (
              <span key={c} style={{
                fontFamily: 'var(--mono)', fontSize: '.68rem',
                letterSpacing: '.1em', textTransform: 'uppercase',
                padding: '.5rem .85rem',
                border: '1px solid var(--rule)',
                color: 'var(--ink-mid)', background: 'var(--bg-2)',
              }}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          {CONTENT.author.bio.map((p, i) => (
            <p key={i} style={{
              fontSize: '.98rem', color: 'var(--ink-mid)',
              lineHeight: 1.8, margin: '0 0 1.4rem',
            }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdTerms({ pad }) {
  return (
    <section id="concepts" style={{ padding: `${pad} 2.5rem`, borderTop: '1px solid var(--rule-soft)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label>Key Concepts from the Book</Label>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          color: 'var(--ink)', margin: '0 0 2.4rem',
        }}>The language for a broken system</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.2rem',
        }}>
          {CONTENT.terms.map(t => (
            <div key={t.k} style={{
              padding: '1.8rem 1.8rem 1.8rem 2rem',
              borderLeft: '2px solid var(--accent)',
              background: 'var(--bg-2)',
            }}>
              <h4 style={{
                fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '.88rem',
                color: 'var(--ink)', margin: '0 0 .5rem',
              }}>{t.k}</h4>
              <p style={{
                fontSize: '.85rem', color: 'var(--ink-mid)',
                lineHeight: 1.6, margin: 0,
              }}>{t.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdSignup({ pad }) {
  return (
    <section id="signup" style={{
      padding: `${pad} 2.5rem`, textAlign: 'center',
      borderTop: '1px solid var(--rule-soft)',
      background: 'var(--bg-2)', position: 'relative', overflow: 'hidden',
    }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontWeight: 400,
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
        color: 'var(--ink)', margin: '0 0 1rem',
      }}>Let the truth be the cure.</h2>
      <p style={{
        fontSize: '1rem', color: 'var(--ink-mid)',
        maxWidth: 520, margin: '0 auto 2.4rem', lineHeight: 1.6,
      }}>Join the launch list. Be the first to read the book that exposes the system — and proposes the antidote.</p>
      <SignupForm />
    </section>
  );
}

function SignupForm() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <form
      onSubmit={e => { e.preventDefault(); if (email.includes('@')) setSent(true); }}
      style={{
        display: 'flex', maxWidth: 480, margin: '0 auto',
        background: '#fff', border: '1px solid var(--rule)',
      }}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@truth.com"
        style={{
          flex: 1, padding: '1rem 1.2rem', border: 'none', outline: 'none',
          fontSize: '.95rem', fontFamily: 'var(--sans)', background: 'transparent',
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

function EdFooter() {
  return (
    <footer style={{
      padding: '2.4rem 2.5rem',
      borderTop: '1px solid var(--rule-soft)',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem',
      alignItems: 'center', background: 'var(--bg)',
    }}>
      <p style={{ fontSize: '.74rem', color: 'var(--ink-light)', margin: 0 }}>
        © 2026 Yuval Dvir. All rights reserved.
      </p>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '.7rem',
        letterSpacing: '.15em', textTransform: 'uppercase',
        color: 'var(--accent)', textAlign: 'center',
      }}>{CONTENT.manifestoFooterTagline}</div>
      <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'flex-end' }}>
        <a href="#" style={{
          fontSize: '.78rem', color: 'var(--ink-light)',
          textDecoration: 'none', fontFamily: 'var(--mono)',
        }}>LinkedIn</a>
        <a href="#" style={{
          fontSize: '.78rem', color: 'var(--ink-light)',
          textDecoration: 'none', fontFamily: 'var(--mono)',
        }}>X / Twitter</a>
        <a href="#" style={{
          fontSize: '.78rem', color: 'var(--ink-light)',
          textDecoration: 'none', fontFamily: 'var(--mono)',
        }}>Contact</a>
      </div>
    </footer>
  );
}

function Label({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '.7rem', fontWeight: 700,
      letterSpacing: '.28em', textTransform: 'uppercase',
      color: 'var(--accent)', marginBottom: '1.6rem',
    }}>{children}</div>
  );
}

Object.assign(window, { EditorialDirection });
