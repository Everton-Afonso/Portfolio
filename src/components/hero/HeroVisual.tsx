import { useTranslation } from 'react-i18next'

const CODE_LINES: {
  tokens: { text: string; tone: 'plain' | 'keyword' | 'key' | 'string' | 'punct' }[]
}[] = [
  {
    tokens: [
      { text: 'const', tone: 'keyword' },
      { text: ' developer', tone: 'plain' },
      { text: ' = ', tone: 'punct' },
      { text: '{', tone: 'punct' },
    ],
  },
  {
    tokens: [
      { text: '  stack', tone: 'key' },
      { text: ': ', tone: 'punct' },
      { text: "['React', 'TypeScript']", tone: 'string' },
      { text: ',', tone: 'punct' },
    ],
  },
  {
    tokens: [
      { text: '  focus', tone: 'key' },
      { text: ': ', tone: 'punct' },
      { text: "['e-commerce', 'performance']", tone: 'string' },
      { text: ',', tone: 'punct' },
    ],
  },
  {
    tokens: [
      { text: '  shipping', tone: 'key' },
      { text: ': ', tone: 'punct' },
      { text: 'true', tone: 'keyword' },
      { text: ',', tone: 'punct' },
    ],
  },
  { tokens: [{ text: '}', tone: 'punct' }] },
]

const TERMINAL_LINES = [
  { prompt: '$', text: 'npm run build', tone: 'plain' as const },
  { prompt: '✓', text: 'typecheck passed', tone: 'success' as const },
  { prompt: '✓', text: 'bundle optimized', tone: 'success' as const },
]

const CHIPS = [
  { label: 'React', className: 'left-0 top-10 animate-float' },
  { label: 'TypeScript', className: 'right-2 top-0 [animation-delay:1.2s] animate-float' },
  { label: 'VTEX / GraphQL', className: 'bottom-6 left-4 [animation-delay:2.4s] animate-float' },
]

export function HeroVisual() {
  const { t } = useTranslation()

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden
        className="dot-pattern absolute -right-6 -top-8 size-40 rounded-3xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute -left-4 top-6 size-10 rotate-[26deg] border-2 border-primary/70 max-lg:-top-4 max-lg:-left-0"
      />

      <div className="relative rounded-2xl border border-border bg-card shadow-card-hover">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-primary/80" aria-hidden />
          <span className="size-2.5 rounded-full bg-border" aria-hidden />
          <span className="size-2.5 rounded-full bg-border" aria-hidden />
          <span className="ml-3 truncate rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
            portfolio.dev
          </span>
        </div>

        <div className="p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {t('hero.codeCardLabel')}
          </p>

          <pre className="overflow-x-auto rounded-xl bg-foreground p-4 font-mono text-[11px] leading-relaxed text-background/90 sm:text-xs">
            <code>
              {CODE_LINES.map((line, index) => (
                <span key={index} className="block whitespace-pre">
                  {line.tokens.map((token, tokenIndex) => (
                    <span
                      key={tokenIndex}
                      className={
                        token.tone === 'keyword'
                          ? 'text-primary'
                          : token.tone === 'key'
                            ? 'text-background'
                            : token.tone === 'string'
                              ? 'text-[#7EB942]'
                              : 'text-background/55'
                      }
                    >
                      {token.text}
                    </span>
                  ))}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
          {['React', 'TypeScript', 'VTEX'].map((item) => (
            <div key={item} className="bg-card px-3 py-3 text-center">
              <p className="font-display text-sm font-bold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-28 -right-2 w-56 rounded-xl border border-border bg-card p-4 shadow-card sm:right-8 sm:w-48 max-lg:w-40 max-lg:-right-0 max-lg:bottom-40 max-lg:p-2">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t('hero.terminalLabel')}
        </p>
        <ul className="flex flex-col gap-1 font-mono text-[11px] sm:text-xs">
          {TERMINAL_LINES.map((line) => (
            <li
              key={line.text}
              className={line.tone === 'success' ? 'text-[#4E8B24]' : 'text-foreground'}
            >
              <span className="mr-2 text-primary">{line.prompt}</span>
              {line.text}
            </li>
          ))}
        </ul>
      </div>

      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className={`absolute rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft inline-flex ${chip.className}`}
        >
          <span className="mr-1.5 size-1.5 self-center rounded-full bg-primary" aria-hidden />
          {chip.label}
        </span>
      ))}
    </div>
  )
}
