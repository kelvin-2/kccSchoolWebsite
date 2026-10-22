import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

const client = createClient({
  projectId: 'e45g7oig',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'events', label: 'Events' },
  { value: 'sports', label: 'Sports' },
  { value: 'academics', label: 'Academics' },
  
]

const QUERY = `*[_type == "galleryImage" && defined(image.asset)] | order(date desc, _createdAt desc) {
  _id,
  title,
  category,
  caption,
  date,
  image,
  "alt": coalesce(image.alt, title)
}`

export default function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    let cancelled = false
    client
      .fetch(QUERY)
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .catch((err) => {
        console.error(err)
        if (!cancelled) setError('Could not load the gallery. Please try again later.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const filtered =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  )

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex !== null ? filtered[activeIndex] : null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Gallery</h1>
        <p className="mt-3 text-gray-600">Moments from life at our school.</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setFilter(cat.value)
              setActiveIndex(null)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      )}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          No images in this category yet.
        </p>
      )}

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {filtered.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 break-inside-avoid focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              src={urlFor(item.image).width(800).auto('format').quality(80).url()}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-sm">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Previous"
                className="absolute left-2 sm:left-6 p-2 text-white hover:bg-white/10 rounded-full"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Next"
                className="absolute right-2 sm:right-6 p-2 text-white hover:bg-white/10 rounded-full"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <figure
            className="max-w-5xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={urlFor(active.image).width(1600).auto('format').quality(85).url()}
              alt={active.alt}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="font-semibold">{active.title}</p>
              {active.caption && (
                <p className="text-sm text-gray-300 mt-1">{active.caption}</p>
              )}
              {active.date && (
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(active.date).toLocaleDateString('en-ZA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}