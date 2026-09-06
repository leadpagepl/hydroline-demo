/* Central manifest of the optimised WebP derivatives in /public/img.
   ratio = intrinsic width / height, used to reserve space and avoid layout shift. */
export const IMG = {
  'hero-plumbing-finished':     { w: [900, 1400, 1672], ratio: 1672 / 941 },
  'hero-plumbing-installation': { w: [900, 1400, 1672], ratio: 1672 / 941 },
  'project-boiler-room-before': { w: [800, 1200, 1536], ratio: 1536 / 1024 },
  'project-boiler-room-after':  { w: [800, 1200, 1536], ratio: 1536 / 1024 },
  'project-plumbing-before':    { w: [800, 1200, 1448], ratio: 1448 / 1086 },
  'project-plumbing-after':     { w: [800, 1200, 1448], ratio: 1448 / 1086 },
  'about-master-plumber':       { w: [700, 1122], ratio: 1122 / 1402 },
  'plumber-at-work':            { w: [900, 1400, 1536], ratio: 1536 / 1024 },
  'detail-press-fitting':       { w: [900, 1400, 1536], ratio: 1536 / 1024 },
  'detail-manifold-system':     { w: [700, 1100], ratio: 1536 / 1024 },
  'emergency-leak-service':     { w: [800, 1200, 1536], ratio: 1536 / 1024 },
  'planning-installation':      { w: [700, 1100, 1448], ratio: 1448 / 1086 },
  'cta-premium-bathroom':       { w: [900, 1400, 1774], ratio: 1774 / 887 },
  'plumbing-line-texture':      { w: [1200], ratio: 1672 / 941 },
}

export const srcset = (name) =>
  IMG[name].w.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ')

export const src = (name, i = -1) => {
  const list = IMG[name].w
  const w = list.at(i)
  return `/img/${name}-${w}.webp`
}
