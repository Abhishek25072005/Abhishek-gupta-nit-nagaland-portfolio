import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial dark mode state
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const handleMouseMoveGlobal = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeaveGlobal = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeaveGlobal);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('mouseleave', handleMouseLeaveGlobal);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle swarm
    const numParticles = Math.min(width > 768 ? 65 : 32, 75);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      baseAlpha: Math.random() * 0.45 + 0.25,
      isCherry: Math.random() > 0.35,
    }));

    let currentMouseX = mousePos.x;
    let currentMouseY = mousePos.y;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      currentMouseX += (mousePos.x - currentMouseX) * 0.15;
      currentMouseY += (mousePos.y - currentMouseY) * 0.15;

      const darkTheme = document.documentElement.classList.contains('dark');

      // 1. Draw glowing lines between neighboring particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = darkTheme 
              ? `rgba(225, 29, 72, ${0.12 * (1 - dist / 115)})`
              : `rgba(225, 29, 72, ${0.08 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Interactive Cursor Proximity Connection & Glow
      if (currentMouseX > 0 && currentMouseY > 0) {
        particles.forEach((p) => {
          const mdx = p.x - currentMouseX;
          const mdy = p.y - currentMouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxDistance = 180;

          if (mdist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(currentMouseX, currentMouseY);
            const intensity = (1 - mdist / maxDistance);
            ctx.strokeStyle = `rgba(244, 63, 94, ${intensity * 0.4})`;
            ctx.lineWidth = intensity * 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(244, 63, 94, 0.8)';
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      }

      // 3. Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Proximity glow to cursor
        const mdx = p.x - currentMouseX;
        const mdy = p.y - currentMouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const isNear = mdist < 180;
        const extraScale = isNear ? (1 - mdist / 180) * 1.8 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + extraScale, 0, Math.PI * 2);

        if (p.isCherry) {
          ctx.fillStyle = darkTheme 
            ? `rgba(244, 63, 94, ${isNear ? 0.9 : p.baseAlpha})` 
            : `rgba(225, 29, 72, ${isNear ? 0.85 : p.baseAlpha * 0.7})`;
          if (isNear) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(244, 63, 94, 0.9)';
          }
        } else {
          ctx.fillStyle = darkTheme 
            ? `rgba(139, 92, 246, ${isNear ? 0.85 : p.baseAlpha})` 
            : `rgba(99, 102, 241, ${isNear ? 0.75 : p.baseAlpha * 0.6})`;
          if (isNear) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      
      {/* 1. Global Interactive Spotlight Beam centered on Cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: isDark
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 63, 94, 0.18), rgba(99, 102, 241, 0.08), transparent 70%)`
            : `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(225, 29, 72, 0.13), rgba(244, 63, 94, 0.05), transparent 70%)`,
          opacity: isHovering ? 1 : 0.6
        }}
      />

      {/* 2. Interactive Cursor Halo Ring */}
      {isHovering && mousePos.x > 0 && mousePos.y > 0 && (
        <div
          className="absolute w-24 h-24 rounded-full pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: isDark
              ? 'radial-gradient(circle, rgba(244, 63, 94, 0.35) 0%, rgba(225, 29, 72, 0.1) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(225, 29, 72, 0.22) 0%, rgba(244, 63, 94, 0.08) 45%, transparent 70%)',
            boxShadow: isDark
              ? '0 0 40px rgba(244, 63, 94, 0.3)'
              : '0 0 30px rgba(225, 29, 72, 0.18)'
          }}
        />
      )}

      {/* 3. Deep Obsidian / Crisp Light Background Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* 4. Ambient Radial Glow Orbs */}
      <div 
        className="absolute -top-[15%] left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(225, 29, 72, 0.45) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[45%] -right-[10%] w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(244, 63, 94, 0.35) 0%, transparent 70%)' }}
      />

      {/* 5. Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid-bg opacity-35 dark:opacity-25" />

      {/* 6. Soft Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70 dark:to-black/85 pointer-events-none" />
    </div>
  );
}
