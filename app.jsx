// app.jsx — top-level: tweaks panel, direction switcher, mobile preview

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "editorial",
  "accent": "#c8432b",
  "density": "regular",
  "mobile": false
}/*EDITMODE-END*/;

const ACCENTS = {
  red:    '#c8432b',
  amber:  '#c97a2b',
  cyan:   '#2b8cc8',
  ink:    '#1a1a1a',
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const directionEl = (
    t.direction === 'mirror'  ? <MirrorDirection density={t.density} accent={t.accent} /> :
    t.direction === 'ledger'  ? <LedgerDirection density={t.density} accent={t.accent} /> :
                                <EditorialDirection density={t.density} accent={t.accent} />
  );

  return (
    <>
      {t.mobile ? (
        <div className="mobile-stage">
          <div className="frame-host">
            <IOSDevice width={390} height={780}>
              <div className="ios-scroll" style={{ height: '100%', overflow: 'auto', background: '#faf9f7' }}>
                {directionEl}
              </div>
            </IOSDevice>
          </div>
        </div>
      ) : (
        <div className="stage">{directionEl}</div>
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction" />
        <TweakRadio
          label="Variant"
          value={t.direction}
          options={['editorial', 'mirror', 'ledger']}
          onChange={v => setTweak('direction', v)}
        />

        <TweakSection label="Style" />
        <TweakSelect
          label="Accent"
          value={t.accent}
          options={[
            { label: 'Book red', value: ACCENTS.red },
            { label: 'Amber',    value: ACCENTS.amber },
            { label: 'Cyan',     value: ACCENTS.cyan },
            { label: 'Ink',      value: ACCENTS.ink },
          ]}
          onChange={v => setTweak('accent', v)}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={v => setTweak('density', v)}
        />

        <TweakSection label="Preview" />
        <TweakToggle
          label="Mobile (iPhone)"
          value={t.mobile}
          onChange={v => setTweak('mobile', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
