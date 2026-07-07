"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  size: number;
}

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  phase: number;
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Particles
    const COUNT = 180;
    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const t = Math.random();
      let r, g, b;
      if (t < 0.4) { r = 59;  g = 130; b = 246; } // blue
      else if (t < 0.7) { r = 124; g = 58;  b = 237; } // purple
      else              { r = 6;   g = 182; b = 212; } // cyan
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r, g, b,
        size: Math.random() * 1.5 + 0.5,
      };
    });

    // Aurora blobs
    const blobs: Blob[] = [
      { x: W * 0.2, y: H * 0.3, vx: 0.4, vy: 0.3, radius: Math.min(W, H) * 0.35, r: 59,  g: 130, b: 246, phase: 0 },
      { x: W * 0.7, y: H * 0.6, vx: -0.3, vy: 0.4, radius: Math.min(W, H) * 0.3, r: 124, g: 58,  b: 237, phase: 2 },
      { x: W * 0.5, y: H * 0.1, vx: 0.2, vy: -0.2, radius: Math.min(W, H) * 0.28, r: 6,   g: 182, b: 212, phase: 4 },
    ];

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / W, y: e.clientY / H };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize, { passive: true });

    let t = 0;
    const draw = () => {
      frameRef.current = requestAnimationFrame(draw);
      t += 0.005;

      ctx.clearRect(0, 0, W, H);

      // Draw aurora blobs
      for (const blob of blobs) {
        blob.phase += 0.008;
        blob.x += blob.vx + Math.sin(blob.phase) * 0.5;
        blob.y += blob.vy + Math.cos(blob.phase * 0.7) * 0.4;

        // Mouse attraction
        blob.x += (mouseRef.current.x * W - blob.x) * 0.0008;
        blob.y += (mouseRef.current.y * H - blob.y) * 0.0008;

        // Bounce
        if (blob.x < 0 || blob.x > W) blob.vx *= -1;
        if (blob.y < 0 || blob.y > H) blob.vy *= -1;

        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        grad.addColorStop(0, `rgba(${blob.r},${blob.g},${blob.b},0.07)`);
        grad.addColorStop(0.5, `rgba(${blob.r},${blob.g},${blob.b},0.03)`);
        grad.addColorStop(1, `rgba(${blob.r},${blob.g},${blob.b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow
      const mx = mouseRef.current.x * W;
      const my = mouseRef.current.y * H;
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
      mg.addColorStop(0, "rgba(59,130,246,0.06)");
      mg.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = mg;
      ctx.beginPath();
      ctx.arc(mx, my, 200, 0, Math.PI * 2);
      ctx.fill();

      // Draw particles
      for (const p of particles) {
        p.x += p.vx + (mouseRef.current.x - 0.5) * 0.05;
        p.y += p.vy + (mouseRef.current.y - 0.5) * 0.05;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const alpha = 0.3 + p.z * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.5 + p.z * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha})`;
        ctx.fill();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 1 }}
    />
  );
}
