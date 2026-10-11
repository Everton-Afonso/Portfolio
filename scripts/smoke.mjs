/**
 * Smoke test: renders the app with react-dom/server to catch runtime errors early.
 * Usage: node scripts/smoke.mjs
 */
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'

const server = await createServer({
  server: { middlewareMode: true },
  logLevel: 'error',
  appType: 'custom',
})

const checks = [
  ['root render', (html) => html.length > 5000],
  ['header', (html) => html.includes('Everton Afonso')],
  ['hero anchor', (html) => html.includes('id="home"')],
  ['projects anchor', (html) => html.includes('id="projects"')],
  ['experience anchor', (html) => html.includes('id="experience"')],
  ['skills anchor', (html) => html.includes('id="skills"')],
  ['resume anchor', (html) => html.includes('id="resume"')],
  ['contact anchor', (html) => html.includes('id="contact"')],
  ['i18n pt title', (html) => html.includes('Construindo experiências digitais')],
  ['placeholder marker', (html) => html.includes('TODO: ADD REAL INFORMATION')],
  ['tech stack', (html) => html.includes('VTEX IO')],
]

try {
  await server.ssrLoadModule('/src/i18n/index.ts')
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')

  const html = renderToString(React.createElement(App))

  let failed = 0
  for (const [name, check] of checks) {
    const ok = check(html)
    console.log(`${ok ? 'PASS' : 'FAIL'} — ${name}`)
    if (!ok) failed += 1
  }

  if (failed > 0) {
    console.error(`\n${failed} check(s) failed`)
    process.exitCode = 1
  } else {
    console.log(`\nAll checks passed (html length: ${html.length})`)
  }
} catch (error) {
  console.error('RENDER ERROR:', error)
  process.exitCode = 1
} finally {
  await server.close()
}
