import React, { useState, useEffect, useRef } from 'react'

export const Introvideo = () => {
  const [scale, setScale] = useState(1)
  const [scrollLocked, setScrollLocked] = useState(true)
  const scrollAccumulator = useRef(0)
  const expandAccumulator = useRef(0)
  const minScale = 0.7
  const maxScale = 1
  const shrinkScrollAmount = 200 // Total scroll needed to fully shrink

  const [videoSrc, setVideoSrc] = useState(
    'https://t9014733918.p.clickup-attachments.com/t9014733918/504f1746-635c-45ba-ada7-6a56702f0831/SSYouTube.online_Jana%20Nayagan%20%E2%80%93%20Thalapathy%20Kacheri%20Lyric%20Video%20Thalapathy%20Vijay%20H%20Vinoth%20Anirudh%20Pooja%20Hegde%20KVN_1080p.mp4'
  )
  const videoRef = useRef(null)

  useEffect(() => {
    const handleWheel = (e) => {
      const delta = e.deltaY

      // Scrolling down: shrink video first
      if (delta > 0) {
        if (scale > minScale) {
          e.preventDefault()
          expandAccumulator.current = 0

          scrollAccumulator.current += delta
          const newScale = Math.max(
            minScale,
            maxScale -
              (scrollAccumulator.current / shrinkScrollAmount) * (maxScale - minScale)
          )
          setScale(newScale)

          if (newScale <= minScale) {
            setScrollLocked(false)
            scrollAccumulator.current = shrinkScrollAmount
          }
        }
      }

      // Scrolling up: expand video back to full size before allowing page scroll
      if (delta < 0) {
        // If the page is not scrolled to top, allow the page to scroll up first.
        // Do not start expanding the video until the page reaches the top.
        if (window.scrollY > 0) {
          // Let the browser handle scrolling to top; reset expansion accumulator so
          // expansion starts fresh once at the top.
          expandAccumulator.current = 0
          return
        }

        if (scale < maxScale) {
          e.preventDefault()
          scrollAccumulator.current = 0

          expandAccumulator.current += Math.abs(delta)
          const newScale = Math.min(
            maxScale,
            minScale +
              (expandAccumulator.current / shrinkScrollAmount) * (maxScale - minScale)
          )
          setScale(newScale)

          if (newScale >= maxScale) {
            setScrollLocked(true)
            expandAccumulator.current = shrinkScrollAmount
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [scale, scrollLocked])

  // When videoSrc changes, load and play the new source
  useEffect(() => {
    // If the current source is an actual video file, load/play it via the <video> element.
    if (videoRef.current && isVideoFile(videoSrc)) {
      try {
        videoRef.current.load()
        const p = videoRef.current.play()
        if (p && typeof p.then === 'function') p.catch(() => {})
      } catch (err) {
        // ignore play errors
      }
    }
  }, [videoSrc])

  // Helpers to detect type of video/source
  const isVideoFile = (url) => {
    if (!url) return false
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
  }

  const isYouTube = (url) => {
    if (!url) return false
    return /youtube|youtu\.be/i.test(url)
  }

  const youTubeEmbed = (url) => {
    // Try to extract a usable video id from many YouTube URL formats
    try {
      const u = new URL(url)
      const hostname = u.hostname.toLowerCase()
      let id = null

      // youtu.be short links: /<id>
      if (hostname.includes('youtu.be')) {
        id = u.pathname.split('/').filter(Boolean)[0]
      }

      // standard watch?v=ID
      if (!id && u.searchParams.has('v')) {
        id = u.searchParams.get('v')
      }

      // /embed/ID or /shorts/ID or /live/ID or other path-based IDs
      if (!id) {
        const parts = u.pathname.split('/').filter(Boolean)
        // pick the last segment if it looks like an ID (typical YouTube id length >= 8)
        if (parts.length) {
          const last = parts[parts.length - 1]
          if (/^[A-Za-z0-9_-]{8,}$/.test(last)) id = last
        }
      }

      if (id) {
        // embed with autoplay muted and no controls
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`
      }
    } catch (err) {
      // fallback: return original url
    }
    return url
  }

  const thumbnails = [
    {
      img: 'https://yt3.googleusercontent.com/X2uO0_Bis8CH3IVH2Wa3HZTbR2ilArRjhzDTZQNn11oG9WdIqxFJ275CtF2hRZCmikWdHyv-qA=s900-c-k-c0x00ffffff-no-rj',
      video:
        'https://www.youtube.com/live/gynWNinqmjw?si=mtdjho3W6-DFrcTb'
    },  
    {
      img:
        'https://yt3.ggpht.com/5MSHyRwoGwFhPgELh8VZ3FMQZ80EqxN2lcNJzK0YU10vETY1xskDhFy217YsZiO5ecgYfngakg=s176-c-k-c0x00ffffff-no-rj-mo',
      video:
        'https://www.youtube.com/live/vkXkV1y_oCI?si=3pOk6mTDJ7i1SyN2'
    },  
      {
      img:
        'https://image.winudf.com/v2/image1/Y29tLnRmQXBwLmFuZHJvaWQubmV3c3R2X2ljb25fMTU1NTI0NjM2Ml8wNDA/icon.png?w=312&fakeurl=1',
      video:
        'https://www.youtube.com/live/1wECsnGZcfc?si=b516CLTUfYQajkNw'
    },  
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/6/68/Colors_Tamil.png',
      video:
        'https://youtu.be/xVXUVaUMXuw?si=ODfngEjbtk-8GcSI'
    },  
    {
      img:
        'https://yt3.googleusercontent.com/ytc/AIdro_kk-NcbgXCq8mmf24xhP-cqikuurxBug95MXiq-Y4nCRvs=s900-c-k-c0x00ffffff-no-rj',
      video:
        'https://youtu.be/s5LOQTaIfpU?si=NdayJalPZvjQ-bC9'
    },  
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Reporter_TV_2023.jpg',
      video:
        'https://www.youtube.com/live/nObUcHKZEGY?si=4G90YjPN1XZ-Udov'
    },  
    {
      img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/35d117224897cd2336250506aab01b38',
      video:
        'https://youtu.be/ofrmNK_iZ4Q?si=5mu9V7JTwhIv8ylc'
    },  
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLN4v5So8JPR6ubG3CCkuHZggf6k-mXzp_Jida-HyyTZ6H5Z_',
      video:
        'https://www.youtube.com/live/sSalaw2Rt4I?si=U9B27qgQNhkhGBeg'
    },  
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigfFZpZNOncGxbAW1GQg7bnWBqUeBUnCIOZmoPd1nF44ZEYASjGIXqJunP7KQlqnjzQM&usqp=CAU',
      video:
        'https://youtu.be/LCatM2mrL6s?si=ZoDLFqq9NP6iLUbf'
    },  
    {
      img: 'https://classicdth.com/wp-content/uploads/2024/01/zee-tamil.png',
      video:
        'https://youtu.be/xW19yEfLl2A?si=_YcNEv4dGTMaRbA8'
    }, 
  ]

  // For an infinite seamless scroll we render the thumbnails twice
  const displayThumbs = [...thumbnails, ...thumbnails]

  // popup state for clicked thumbnail (appears at bottom for 1s)
  const [popupSrc, setPopupSrc] = useState(null)
  const [popupVisible, setPopupVisible] = useState(false)
  const popupTimerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const thumbsRef = useRef(null)
  const scrollIntervalRef = useRef(null)

  // Mobile detection: show a single image on small screens
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    // ensure initial value
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const mobileImage = 'https://res.cloudinary.com/dtwcgfmar/image/upload/v1764741385/Modem_clzqrz.png'

  const startThumbAutoScroll = () => {
    const el = thumbsRef.current
    if (!el) return
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current)
    // small, smooth scroll
    scrollIntervalRef.current = setInterval(() => {
      if (!el) return
      // Use half the scrollWidth because we duplicated the items.
      const singleWidth = el.scrollWidth / 2
      if (singleWidth <= 0) return
      el.scrollLeft = el.scrollLeft + 1
      // When we've scrolled past the first copy, jump back by one copy width.
      if (el.scrollLeft >= singleWidth) {
        el.scrollLeft = el.scrollLeft - singleWidth
      }
    }, 16) // ~60fps / small step
  }

  const stopThumbAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current)
      scrollIntervalRef.current = null
    }
  }

  const handleSelect = (item) => {
    // change main video
    setVideoSrc(item.video)

    // show popup image at bottom for 1s
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current)
    }
    setPopupSrc(item.img)
    setPopupVisible(true)
    popupTimerRef.current = setTimeout(() => {
      setPopupVisible(false)
      popupTimerRef.current = null
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current)
      stopThumbAutoScroll()
    }
  }, [])

  // Start auto-scroll when thumbnails are visible; stop when hidden
  useEffect(() => {
    if (!scrollLocked) {
      startThumbAutoScroll()
    } else {
      stopThumbAutoScroll()
    }
    return () => stopThumbAutoScroll()
  }, [scrollLocked])

  if (isMobile) {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 900, padding: 10 }}>
          {/* <img
            src={mobileImage}
            alt="preview"
            style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
          /> */}
        </div>
      </div>
    )
  }

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', maxHeight: '108vh' }}>
        <div
          style={{
            width: '100%',
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            transition: 'transform 120ms linear'
          }}
        >
          {isVideoFile(videoSrc) ? (
            <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
              <video
                ref={videoRef}
                src={videoSrc}
                muted
                playsInline
                autoPlay
                style={{
                  width: '100%',
                  borderRadius: '12px 12px 0 0',
                  border: '15px solid #000000ff',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          ) : isYouTube(videoSrc) ? (
            <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
              <iframe
                title="youtube-player"
                src={youTubeEmbed(videoSrc)}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '12px 12px 0 0',
                  border: '15px solid #000000ff',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '240px',
                background: '#000',
                color: '#fff',
                borderRadius: '12px',
                border: '15px solid #000000ff'
              }}
            >
              <div>
                <p>Cannot play this source in the built-in player.</p>
                <a href={videoSrc} target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
                  Open in new tab
                </a>
              </div>
            </div>
          )}

          {/* thumbnails row (appears after shrink completes) */}
          {!scrollLocked && (
            <div
              ref={thumbsRef}
              onMouseEnter={stopThumbAutoScroll}
              onMouseLeave={startThumbAutoScroll}
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-start',
                gap: 8,
                margin: '30px 0 0 0',
                padding: '12px 8px',
                overflowX: 'hidden',
                flexWrap: 'nowrap',
                alignItems: 'center'
              }}
            >
              {displayThumbs.map((it, i) => {
                const orig = i % thumbnails.length
                return (
                  <img
                    key={i}
                    src={it.img}
                    alt={`row-img-${orig}`}
                    onClick={() => handleSelect(it)}
                    onMouseEnter={() => setHoveredIndex(orig)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      width: 220,
                      height: 120,
                      objectFit: 'cover',
                      display: 'inline-block',
                      cursor: 'pointer',
                      marginRight: 12,
                      transform: hoveredIndex === orig ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 180ms ease',
                      transformOrigin: 'center center'
                    }}
                  />
                )
              })}

              {/* setupbox image directly after thumbnails in the same row */}
              
            </div>
            
          )}
          
        </div>
        
      </div>
{!isMobile && (
  <div style={{ textAlign: 'center' }}>
    <img
      src="https://res.cloudinary.com/dtwcgfmar/image/upload/v1764741385/Modem_clzqrz.png"
      alt="setupbox"
      style={{ width: '80%', height: 'auto', display: 'inline-block' }}
    />
  </div>
)}
      {/* popup image shown at bottom center for 1s when a thumbnail is clicked */}
      <div
        aria-hidden={!popupVisible}
        style={{
          position: 'fixed',
          left: '75%',
          bottom: 0,
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          transition: 'opacity 260ms ease-in-out, transform 160ms ease-in-out',
          opacity: popupVisible ? 1 : 0,
          zIndex: 9999
        }}
      >
        {popupSrc && (
          <img
            src={'https://res.cloudinary.com/dtwcgfmar/image/upload/v1764590407/Hand_vpreua.png'}
            alt="preview"
            style={{
              width: 'auto',
              maxWidth: '90vw',
              height: 400,
              objectFit: 'cover'
            }}
          />
        )}
      </div>
    </>
  )
}
