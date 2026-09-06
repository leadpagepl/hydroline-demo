import { IMG, srcset, src } from './media.js'

/**
 * Responsive image. Always renders inside an aspect-ratio box so nothing shifts
 * while the file loads.
 */
export default function Img({
  name,
  alt,
  sizes = '100vw',
  priority = false,
  className = '',
  position,
  ratio,
  style,
  ...rest
}) {
  const meta = IMG[name]
  const box = ratio ?? meta.ratio

  return (
    <img
      src={src(name)}
      srcSet={srcset(name)}
      sizes={sizes}
      alt={alt}
      width={meta.w.at(-1)}
      height={Math.round(meta.w.at(-1) / meta.ratio)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      draggable="false"
      className={className}
      style={{ aspectRatio: box, objectFit: 'cover', objectPosition: position, ...style }}
      {...rest}
    />
  )
}
