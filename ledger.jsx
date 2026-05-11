// components/ledger.jsx — Direction 3: Truth Ledger / terminal-evidence
/* global CONTENT, Wordmark */

function LedgerDirection({ density = 'regular', accent = '#c8432b' }) {
  const pad = density === 'compact' ? '4rem' : density === 'comfy' ? '8rem' : '6rem';
  return (
    <div style={{ '--accent': accent, fontFamily: 'var(--mono)', color: 'var(--ink)' }}>
      <LdNav />
      <LdHero />
      <LdLedger />
      <LdAbout pad={pad} />
      <LdThesis pad={pad} />
      <LdQuotes pad={pad} />
      <LdAuthor pad={pad} />
      <LdTerms pad={pad} />
      <LdSignup pad={pad} />
      <LdFooter />
    </div>
  );
}

function LdNav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '.9rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(250,249,247,.85)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--rule)',
      fontFamily: 'var(--mono)', fontSize: '.72rem',
      letterSpacing: '.12em', textTransform: 'uppercase',
    }}>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)',
        }} />
        <Wordmark size=".9rem" />
        <span className="nav-meta" style={{ color: 'var(--ink-light)' }}>v.0 · ledger</span>
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '1.2rem', color: 'var(--ink-mid)' }}>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>./book</a>
        <a href="#thesis" style={{ textDecoration: 'none', color: 'inherit' }}>./argument</a>
        <a href="#author" style={{ textDecoration: 'none', color: 'inherit' }}>./author</a>
        <a href="#signup" className="nav-cta" style={{ textDecoration: 'none', color: 'var(--accent)' }}>./subscribe →</a>
      </div>
    </nav>
  );
}

function LdHero() {
  return (
    <section style={{
      padding: '4rem 2rem 5rem',
      borderBottom: '1px dashed var(--rule)',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem',
      alignItems: 'center', minHeight: '85vh',
    }}>
      <div>
        <div style={{
          fontSize: '.7rem', letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '2rem',
        }}>{'>'} initializing truth guardrail · {CONTENT.pubDate}</div>

        <h1 className="hero-h1" style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          fontSize: 'clamp(2.4rem, 5.4vw, 4.6rem)',
          lineHeight: 1.05, letterSpacing: '-.01em',
          margin: '0 0 1.6rem', color: 'var(--ink)', textWrap: 'balance',
        }}>
          A logic engine, used honestly, is the closest thing we&rsquo;ve built to a <span style={{ color: 'var(--accent)' }}>fair witness.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
          color: 'var(--ink-mid)', maxWidth: 560, lineHeight: 1.55,
          margin: '0 0 2.4rem',
        }}>
          The first book arguing that AI is the most powerful instrument for clarity and fairness humanity has ever built — if we have the courage to let it tell the truth.
        </p>

        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#signup" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '.9rem 1.8rem', fontSize: '.78rem',
            fontWeight: 600, letterSpacing: '.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            fontFamily: 'var(--mono)',
          }}>./join_launch_list</a>
          <a href="#thesis" style={{
            color: 'var(--ink-mid)', padding: '.85rem 0',
            fontSize: '.78rem', fontFamily: 'var(--mono)',
            letterSpacing: '.1em', textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1px dashed var(--rule)',
          }}>./read_thesis →</a>
        </div>
      </div>

      <Terminal />
    </section>
  );
}

// Animated terminal showing the AI-Political verification flow
function Terminal() {
  const lines = [
    { t: '$ verify --claim "AI will give us back our time"', c: 'cmd' },
    { t: '> resolving claim...', c: 'dim' },
    { t: '> matching evidence found', c: 'dim' },
    { t: '! supporting findings:', c: 'accent' },
    { t: '  - clearer decisions at scale', c: 'ink' },
    { t: '  - less work spent on politics', c: 'ink' },
    { t: '> evidence: ch.3, ch.7, ch.12', c: 'dim' },
    { t: '> status: SUPPORTED', c: 'green' },
    { t: '', c: 'dim' },
    { t: '$ ask --topic "the_real_opportunity"', c: 'cmd' },
    { t: '> for the first time, we can build', c: 'ink' },
    { t: '  systems whose default is honesty —', c: 'ink' },
    { t: '  and whose scale is the planet.', c: 'ink' },
    { t: '> status: ON THE RECORD', c: 'green' },
  ];

  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    if (shown >= lines.length) {
      const r = setTimeout(() => setShown(0), 4500);
      return () => clearTimeout(r);
    }
    const t = setTimeout(() => setShown(shown + 1), shown === 0 ? 200 : 280);
    return () => clearTimeout(t);
  }, [shown]);

  const colorOf = c => ({
    cmd: '#fff',
    dim: 'rgba(255,255,255,.45)',
    ink: 'rgba(255,255,255,.92)',
    accent: 'var(--accent)',
    green: '#7fd49b',
  }[c] || '#fff');

  return (
    <div style={{
      background: '#0f0f0f',
      border: '1px solid #2a2a2a',
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,.25)',
    }}>
      <div style={{
        padding: '.6rem 1rem',
        display: 'flex', alignItems: 'center', gap: '.4rem',
        borderBottom: '1px solid #1c1c1c',
        background: '#161616',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        <span style={{
          marginLeft: '.8rem',
          fontSize: '.68rem', letterSpacing: '.15em',
          color: 'rgba(255,255,255,.4)',
        }}>truth-guardrail · session 01</span>
      </div>
      <div style={{
        padding: '1.4rem 1.6rem',
        fontFamily: 'var(--mono)', fontSize: '.82rem',
        lineHeight: 1.7, minHeight: 360,
      }}>
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} style={{ color: colorOf(l.c) }}>
            {l.t || '\u00a0'}
          </div>
        ))}
        {shown < lines.length && (
          <span style={{
            display: 'inline-block', width: 8, height: 14,
            background: 'var(--accent)', verticalAlign: 'middle',
            animation: 'tblink 1s steps(2) infinite',
          }} />
        )}
      </div>
      <style>{`@keyframes tblink{50%{opacity:0}}`}</style>
    </div>
  );
}

// The "ledger" itself — append-only entries decoding the wordmark
function LdLedger() {
  const entries = [
    { id: '#001', tag: 'noun', term: 'AI-Political', def: 'Artificial Intelligence meets Politics. The collision course currently underway.', status: 'SUPPORTED' },
    { id: '#002', tag: 'adj.', term: 'A-Political', def: 'Without politics, without agenda. The thing AI must become if it is to serve us.', status: 'SUPPORTED' },
    { id: '#003', tag: 'verb', term: 'Optimize for Truth', def: 'To anchor every claim to evidence and refuse to soften reality for the powerful.', status: 'PROPOSED' },
  ];
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--bg-2)', borderBottom: '1px dashed var(--rule)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontSize: '.7rem', letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--ink-light)', marginBottom: '1.2rem',
        }}>./truth_ledger — append-only</div>

        <div style={{
          display: 'grid', gridTemplateColumns: '60px 80px 1fr 1fr 110px',
          gap: '1rem', padding: '.7rem 0',
          borderBottom: '1px solid var(--rule)',
          fontSize: '.65rem', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--ink-light)',
        }}>
          <div>id</div><div>type</div><div>term</div><div>definition</div><div>status</div>
        </div>

        {entries.map(e => (
          <div key={e.id} style={{
            display: 'grid', gridTemplateColumns: '60px 80px 1fr 1fr 110px',
            gap: '1rem', padding: '1.2rem 0',
            borderBottom: '1px solid var(--rule)',
            alignItems: 'center', fontSize: '.85rem',
          }}>
            <div style={{ color: 'var(--ink-light)' }}>{e.id}</div>
            <div style={{
              color: 'var(--ink-mid)', fontStyle: 'italic',
            }}>{e.tag}</div>
            <div style={{
              fontWeight: 700, color: 'var(--ink)',
              letterSpacing: '.02em',
            }}>{e.term}</div>
            <div style={{
              color: 'var(--ink-mid)', fontFamily: 'var(--serif)',
              fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.5,
            }}>{e.def}</div>
            <div style={{
              fontSize: '.65rem', letterSpacing: '.15em',
              color: 'var(--accent)', fontWeight: 700,
            }}>● {e.status}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LdAbout({ pad }) {
  return (
    <section id="about" style={{ padding: `${pad} 2rem`, borderBottom: '1px dashed var(--rule)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Lbl3>./about_book</Lbl3>
        {CONTENT.about.map((p, i) => (
          <p key={i} style={{
            fontFamily: 'var(--serif)', fontSize: '1.18rem',
            color: 'var(--ink-soft)', lineHeight: 1.75, margin: '0 0 1.4rem',
            ...(i === 0 ? { fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--ink)' } : {}),
          }}>{p}</p>
        ))}
        <div style={{
          marginTop: '2.4rem', padding: '1.8rem',
          background: '#0f0f0f', color: '#fff',
          fontFamily: 'var(--mono)', fontSize: '.9rem',
          lineHeight: 1.7,
        }}>
          <div style={{ color: 'var(--accent)', fontSize: '.65rem', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '.6rem' }}>// closer</div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem' }}>
            {CONTENT.closer}
          </div>
        </div>
      </div>
    </section>
  );
}

function LdThesis({ pad }) {
  return (
    <section id="thesis" style={{ padding: `${pad} 2rem` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Lbl3>./argument</Lbl3>
        <h2 style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          lineHeight: 1.25, letterSpacing: '-.005em',
          margin: '0 0 3rem', color: 'var(--ink)', maxWidth: '24ch',
        }}>
          tribalism = pathogen.<br/>
          politics = disease.<br/>
          AI = antidote.<br/>
          truth = guardrail.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0,
          border: '1px solid var(--rule)', background: '#fff',
        }}>
          {CONTENT.thesis.map((t, i) => (
            <div key={i} style={{
              padding: '2.2rem 2rem',
              borderRight: i < 2 ? '1px solid var(--rule)' : 'none',
              fontFamily: 'var(--sans)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '.65rem',
                letterSpacing: '.2em', color: 'var(--accent)', marginBottom: '1.2rem',
              }}>// {String(i + 1).padStart(2, '0')}</div>
              <h3 style={{
                fontFamily: 'var(--mono)', fontSize: '.95rem', fontWeight: 700,
                color: 'var(--ink)', margin: '0 0 1rem', letterSpacing: '.02em',
              }}>{t.k}</h3>
              <p style={{
                fontSize: '.92rem', color: 'var(--ink-mid)',
                lineHeight: 1.7, margin: 0, fontFamily: 'var(--sans)',
              }}>{t.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LdQuotes({ pad }) {
  return (
    <section style={{ padding: `${pad} 2rem`, background: 'var(--bg-2)', borderTop: '1px dashed var(--rule)', borderBottom: '1px dashed var(--rule)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Lbl3>./quotes</Lbl3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {CONTENT.quotes.map((q, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr',
              gap: '1.4rem', padding: '1.8rem 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '.7rem',
                color: 'var(--accent)', letterSpacing: '.15em',
              }}>Q.0{i + 1}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                  lineHeight: 1.5, color: 'var(--ink-soft)',
                }}>"{q.q}"</div>
                <div style={{
                  marginTop: '.8rem', fontFamily: 'var(--mono)',
                  fontSize: '.68rem', letterSpacing: '.15em',
                  color: 'var(--ink-light)', textTransform: 'uppercase',
                }}>{q.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LdAuthor({ pad }) {
  return (
    <section id="author" style={{ padding: `${pad} 2rem` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Lbl3>./author</Lbl3>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--mono)', fontWeight: 700,
              fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
              color: 'var(--ink)', margin: '0 0 1.4rem',
              letterSpacing: '-.005em',
            }}>{CONTENT.author.name}</h2>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '.78rem',
              color: 'var(--ink-mid)', lineHeight: 2,
            }}>
              {CONTENT.author.creds.map(c => (
                <div key={c}>· {c}</div>
              ))}
            </div>
          </div>
          <div>
            {CONTENT.author.bio.map((p, i) => (
              <p key={i} style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem', color: 'var(--ink-mid)',
                lineHeight: 1.8, margin: '0 0 1.4rem',
              }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LdTerms({ pad }) {
  return (
    <section id="concepts" style={{ padding: `${pad} 2rem`, borderTop: '1px dashed var(--rule)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Lbl3>./key_concepts</Lbl3>
        <h2 style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
          color: 'var(--ink)', margin: '0 0 2.4rem',
        }}>The language for a broken system.</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          background: 'var(--rule)',
          border: '1px solid var(--rule)',
        }}>
          {CONTENT.terms.map((t, i) => (
            <div key={t.k} style={{
              padding: '1.6rem',
              background: '#fff',
              fontFamily: 'var(--sans)',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline', marginBottom: '.6rem',
              }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '.62rem',
                  letterSpacing: '.18em', color: 'var(--ink-light)',
                }}>concept_{String(i + 1).padStart(2, '0')}</span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '.62rem',
                  color: 'var(--accent)', letterSpacing: '.1em',
                }}>● ON RECORD</span>
              </div>
              <h4 style={{
                fontFamily: 'var(--mono)', fontWeight: 700,
                fontSize: '1rem', color: 'var(--ink)',
                margin: '0 0 .6rem', letterSpacing: '-.005em',
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

function LdSignup({ pad }) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section id="signup" style={{
      padding: `${pad} 2rem`, background: '#0f0f0f', color: '#fff',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.7rem',
          letterSpacing: '.22em', color: 'var(--accent)', marginBottom: '1.4rem',
        }}>./subscribe</div>
        <h2 style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          margin: '0 0 1.2rem', lineHeight: 1.1,
          letterSpacing: '-.01em',
        }}>let_the_truth_be_the_cure()</h2>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: '1.1rem', color: 'rgba(255,255,255,.65)',
          maxWidth: 460, margin: '0 auto 2.4rem', lineHeight: 1.6,
        }}>Join the launch list. Be the first to read the book.</p>

        <form
          onSubmit={e => { e.preventDefault(); if (email.includes('@')) setSent(true); }}
          style={{
            display: 'flex', maxWidth: 480, margin: '0 auto',
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            fontFamily: 'var(--mono)',
          }}>
          <span style={{
            padding: '1rem 0 1rem 1.2rem', color: 'var(--accent)',
            fontSize: '.9rem',
          }}>$</span>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="echo you@truth.com"
            style={{
              flex: 1, padding: '1rem .8rem', border: 'none', outline: 'none',
              fontSize: '.9rem', fontFamily: 'var(--mono)',
              background: 'transparent', color: '#fff',
            }}
          />
          <button type="submit" style={{
            background: 'var(--accent)', color: '#fff', border: 'none',
            padding: '0 1.4rem', fontSize: '.7rem', fontWeight: 700,
            letterSpacing: '.15em', textTransform: 'uppercase',
            cursor: 'default', fontFamily: 'var(--mono)',
          }}>{sent ? '✓ ok' : 'enter ↵'}</button>
        </form>
      </div>
    </section>
  );
}

function LdFooter() {
  return (
    <footer style={{
      padding: '2rem', background: '#0f0f0f',
      color: 'rgba(255,255,255,.4)',
      borderTop: '1px solid #1a1a1a',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem',
      alignItems: 'center', fontFamily: 'var(--mono)', fontSize: '.7rem',
      letterSpacing: '.12em', textTransform: 'uppercase',
    }}>
      <p style={{ margin: 0 }}>© 2026 yuval_dvir</p>
      <div style={{ color: 'var(--accent)', textAlign: 'center' }}>
        math &gt; machiavelli · logic &gt; legacy · truth &gt; tribalism
      </div>
      <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'flex-end' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>./linkedin</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>./x</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>./contact</a>
      </div>
    </footer>
  );
}

function Lbl3({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '.7rem', fontWeight: 700,
      letterSpacing: '.22em', color: 'var(--accent)', marginBottom: '1.4rem',
    }}>{children}</div>
  );
}

Object.assign(window, { LedgerDirection });
