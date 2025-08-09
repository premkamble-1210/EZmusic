import React from "react";
import { motion } from "framer-motion";

// Enhanced floating music notes animation with random drift and more notes
const FloatingNotes = () => {
  const notes = Array.from({ length: 12 }).map((_, i) => {
    const icons = ["🎵", "🎶", "🎧", "🎷", "🎸", "🎺", "🎤"];
    return {
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 90 + 2}%`,
      size: Math.random() * 1.5 + 1.5,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 5,
      drift: Math.random() * 40 - 20,
    };
  });
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {notes.map((note, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: 0, opacity: 0 }}
          animate={{ y: "-10vh", x: note.drift, opacity: [0, 1, 0] }}
          transition={{
            duration: note.duration,
            repeat: Infinity,
            delay: note.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ left: note.left, fontSize: `${note.size}rem` }}
        >
          {note.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Animated gradient background with overlay shimmer
const AnimatedGradient = ({ children }) => (
  <>
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="min-h-screen w-full fixed inset-0 -z-20"
      style={{
        background:
          "linear-gradient(120deg, #0f0c29 0%, #302b63 50%, #ff00cc 100%)",
        backgroundSize: "200% 200%",
      }}
    />
    {/* Animated shimmer overlay */}
    <motion.div
      initial={{ opacity: 0.2, backgroundPosition: "0% 0%" }}
      animate={{ opacity: 0.4, backgroundPosition: "100% 100%" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="min-h-screen w-full fixed inset-0 -z-10 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #ff00cc44 0%, transparent 60%), radial-gradient(circle at 80% 70%, #00dbde33 0%, transparent 60%)",
        backgroundSize: "200% 200%",
        mixBlendMode: "screen",
      }}
    />
    {children}
  </>
);

// Animated music wave progress bar with color pulse
const MusicWave = () => (
  <div className="flex items-end gap-1 h-8 mt-4">
    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
      <motion.div
        key={n}
        className="w-2 rounded shadow-lg"
        initial={{ height: 8 + n * 6, backgroundColor: '#ec4899' }}
        animate={{
          height: [16, 32, 12, 28, 20, 36, 18][n - 1],
          backgroundColor: [
            '#ec4899', // pink-500
            '#a21caf', // purple-800
            '#2563eb', // blue-600
            '#f472b6', // pink-400
            '#818cf8', // indigo-400
            '#f472b6',
            '#ec4899',
          ][n - 1],
        }}
        transition={{
          duration: 0.7 + n * 0.13,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
// Sparkle animation overlay
const Sparkles = () => {
  const sparkles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 0.7 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/80 shadow-lg"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}rem`,
            height: `${s.size}rem`,
            filter: "blur(1px)",
            mixBlendMode: "overlay",
          }}
        />
      ))}
    </div>
  );
};

const features = [
  {
    title: "Real-time Music Rooms",
    desc: "Listen together, live. Join or create rooms and sync playback instantly.",
  },
  {
    title: "Playlist Sharing (Dynamic Linking)",
    desc: "Share playlists with a tap—friends join instantly via dynamic links.",
  },
  {
    title: "Import Playlists",
    desc: "Bring your favorite playlists from other platforms.",
  },
  {
    title: "Merge Playlists",
    desc: "Combine multiple playlists into one seamless mix.",
  },
  {
    title: "Built with React Native, Firebase, YouTube API",
    desc: "Modern tech stack for speed, reliability, and fun.",
  },
];

// Animated showcase card
const ShowcaseCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 max-w-xs mx-auto mt-8 glass-card"
    style={{
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      border: "1px solid rgba(255,255,255,0.18)",
    }}
  >
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg">
        <span className="text-4xl">🎤</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Live Room</h3>
      <p className="text-sm text-white/80 text-center mb-2">
        See who's listening, chat, and sync music in real time.
      </p>
      <MusicWave />
    </div>
  </motion.div>
);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function EZMusicLanding() {
  // Parallax effect for hero section
  const [parallax, setParallax] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setParallax(window.scrollY * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden">
      <AnimatedGradient />
      <FloatingNotes />
      <Sparkles />

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10"
        style={{ transform: `translateY(-${parallax}px)` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg"
        >
          EZmusic
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl font-semibold text-white/90"
        >
          Music, Together. Instantly.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-2 max-w-xl text-white/70"
        >
          Experience real-time music rooms, playlist sharing, and more—all in a vibrant, social app built for music lovers.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 16px #ff00cc" }}
          className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg neon-glow animate-pulse"
          onClick={() => scrollToSection("download")}
        >
          Download APK
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <MusicWave />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto" id="features">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
        >
          Features
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 glass-card shadow-lg hover:scale-105 transition-transform"
              style={{
                boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.25)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h3 className="text-xl font-bold text-pink-400 mb-2">{f.title}</h3>
              <p className="text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <ShowcaseCard />
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 flex flex-col items-center justify-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
        >
          Get the App
        </motion.h2>
        <motion.a
          href="/apk/app-release.apk"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 16px #ff00cc" }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg neon-glow animate-pulse"
        >
          Download APK
        </motion.a>
        <p className="mt-4 text-white/60 text-sm">
          <span className="text-pink-400">EZmusic</span> is free and always will be.
        </p>
      </section>
    </div>
  );
}