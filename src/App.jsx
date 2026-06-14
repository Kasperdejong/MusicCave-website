import { useState, useEffect } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sections = [
    {
      title: "The Problem",
      description:
        "Music listeners who use both Spotify and Apple Music often end up with incomplete and inconsistent playlists across platforms. Songs discovered through recommendations, Shazam, or personal playlists slowly drift apart over time.",
      bullets: [
        "Playlists become inconsistent over time",
        "Manual comparison is repetitive and time-consuming",
        "Users lose track of discovered music",
        "Existing tools focus on one-time transfers",
      ],
    },
    {
      title: "The Solution",
      description:
        "MusicCave identifies missing songs between Spotify and Apple Music playlists and transfers only what is needed to keep both libraries complete and synchronized.",
      bullets: [
        "Detects missing tracks automatically",
        "Transfers only what is needed",
        "Prevents duplicate entries",
        "Keeps libraries continuously aligned",
      ],
    },
    {
      title: "How It Works",
      description:
        "The system scans both platforms, compares track metadata, and generates a precise overview of missing songs so users stay fully in control of their music library.",
      bullets: [
        "Scans Spotify and Apple Music playlists",
        "Matches songs using metadata",
        "Shows missing, found, and unavailable tracks",
        "Supports repeated syncing",
      ],
    },
    {
      title: "Positioning",
      description:
        "Unlike playlist transfer tools, MusicCave focuses on precision gap-filling and ongoing maintenance instead of bulk migration.",
      bullets: [
        "Precision-based syncing instead of bulk transfer",
        "Built for repeated use",
        "Focus on library completeness",
        "Designed for cross-platform users",
      ],
    },
  ];

  // Automates slide transitions
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 4000); // Slides every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, sections.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  return (
    <div className="app-container">
      {/* HEADER WITH BACKGROUND VIDEO & OVERLAY TEXT */}
      <header className="header">
        <video 
          className="header-video" 
          src="Scrollrecording.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        
        <div className="header-content">
          <h1 className="header-title">MusicCave</h1>
          
          <p className="header-description">
            A synchronization tool that identifies missing songs between playlists 
            and automatically transfers only what is needed to keep both libraries 
            complete and up to date.
          </p>

          <div className="platform-tags">
            <span className="tag-spotify">Spotify</span>
            <span className="tag-separator">&amp;</span>
            <span className="tag-apple">Apple Music</span>
            <span className="tag-separator">users</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="main-content">
        {/* RESTORED: SIDE DECORATIVE BANNENS ENCOMPASSING ENTIRE SIDE AREA */}
        <div className="side-banner left-banner" />
        <div className="side-banner right-banner" />

        {/* ADDED: HOW DOES IT WORK SECTION WITH CAPTIONS */}
        <div className="how-it-works-section">
          <h2 className="how-it-works-title">How does it work?</h2>
          
          {/* UPDATED: VIDEO WITH YOUTUBE LINK AND HOVER BUBBLE */}
          <div className="how-it-works-video-wrapper">
            <img 
              src="Textbubble_video.png" 
              alt="Watch the video with sound on YouTube!" 
              className="video-hover-bubble" 
            />
            
            <a 
              href="https://www.youtube.com/watch?v=xikpG_yXttw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-link"
            >
              <video 
                src="MusicCave-alleenproduct.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="how-it-works-video"
              />
            </a>
          </div>

          <p className="how-it-works-explanation">
            MusicCave makes use of a Chrome extension to scrape information from your active Spotify and AppleMusic tabs on the web, 
            As long as you are logged in and have the correct playlists open, you can scan and start syncing after just scanning two playlists,
            MusicCave will identify any gaps and differences in these two  selected playlists and fill the target playlist with all the songs it doesn't already have from the other.
          </p>
          <div className="how-it-works-screenshots">
            <div className="screenshot-wrapper">
              <p className="screenshot-caption">Step 1: Scanning & matching playlist metadata</p>
              <img 
                src="ScanningApple.png" 
                alt="Step 1: Compare playlists" 
                className="how-it-works-image"
              />
            </div>
            <div className="screenshot-wrapper">
              <p className="screenshot-caption">Step 2: Syncing identified missing tracks</p>
              <img 
                src="Transferringspotify.png" 
                alt="Step 2: Sync differences" 
                className="how-it-works-image"
              />
            </div>
          </div>
        </div>

        {/* CENTERED DASHBOARD SECTION WITH POINTER ARROW */}
        <div className="dashboard-section">
          <div className="dashboard-info">
            <p className="dashboard-text">
              This is the dashboard where you can scan and transfer your playlists
            </p>
            <div className="dashboard-arrow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="4" x2="12" y2="20"></line>
                <polyline points="19 13 12 20 5 13"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="dashboard-preview">
            <img 
              src="screeniedashboard.png" 
              alt="MusicCave Dashboard Overview" 
              className="dashboard-image"
            />
          </div>
        </div>

        {/* CAROUSEL INTRO DESCRIPTION WITH SIDE LOGOS */}
        <div className="carousel-intro">
          <img 
            src="PurpleLogo.png" 
            alt="Purple MusicCave Logo" 
            className="intro-logo left-logo" 
          />
          <p className="carousel-intro-text">
            Designed specifically for Spotify and Apple Music users looking to transfer and sync their music, the cards below break down how MusicCave functions, the problems it solves, and it's precision-focused approach.
          </p>
          <img 
            src="Logo.png" 
            alt="MusicCave Logo" 
            className="intro-logo right-logo" 
          />
        </div>

        {/* AUTOPLAY CAROUSEL WITH NAVIGATION */}
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT ARROW */}
          <button 
            className="carousel-arrow prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div 
            className="carousel-track"
            style={{ 
              width: `${sections.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / sections.length)}%)` 
            }}
          >
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="carousel-slide"
                style={{ width: `${100 / sections.length}%` }}
              >
                <section className="card">
                  <div className="card-header">
                    <h2 className="card-title">{section.title}</h2>
                    <p className="card-description">{section.description}</p>
                  </div>

                  <ul className="bullet-list">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="bullet-item">
                        <span className="bullet-dot"></span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button 
            className="carousel-arrow next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* DOT INDICATORS */}
          <div className="carousel-dots">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* STICKY FOOTER */}
      <footer className="footer">
        <p className="footer-text">
          © 2026 MusicCave — Cross-platform music synchronization
        </p>
      </footer>
    </div>
  );
}