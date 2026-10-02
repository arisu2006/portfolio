import React, { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create tactile noise grain pattern canvas
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = 256;
    noiseCanvas.height = 256;
    const noiseCtx = noiseCanvas.getContext('2d');
    const imgData = noiseCtx.createImageData(256, 256);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const val = Math.floor(Math.random() * 255);
      imgData.data[i] = val;
      imgData.data[i + 1] = val;
      imgData.data[i + 2] = val;
      imgData.data[i + 3] = 20; // Crisp tactile grain
    }
    noiseCtx.putImageData(imgData, 0, 0);
    const noisePattern = ctx.createPattern(noiseCanvas, 'repeat');

    // Vibrant Cyan Fluid Aurora Blobs (Top-Right & Bottom-Left matching media_1790867251491.png)
    const blobs = [
      { xFrac: 0.88, yFrac: 0.15, rFrac: 0.58, color: '#00d4ff', speedX: 1.2, speedY: 1.0 },
      { xFrac: 0.12, yFrac: 0.85, rFrac: 0.60, color: '#00b4d8', speedX: 1.0, speedY: 1.3 },
      { xFrac: 0.92, yFrac: 0.80, rFrac: 0.45, color: '#0077b6', speedX: 0.9, speedY: 1.1 }
    ];

    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let t = 0;

    const render = () => {
      t += 0.018; // Faster dynamic fluid motion!

      // Pitch black base matching reference photo
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Render vibrant fluid aurora gradient blobs
      blobs.forEach((blob, idx) => {
        const offset = idx * 2.1;
        const currentX = (blob.xFrac * width) + Math.sin(t * blob.speedX + offset) * 180;
        const currentY = (blob.yFrac * height) + Math.cos(t * blob.speedY + offset) * 150 - (scrollY * 0.15);
        const radius = (blob.rFrac * Math.max(width, height)) + Math.sin(t * 1.5 + offset) * 60;

        const grad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, radius);
        grad.addColorStop(0, blob.color);
        grad.addColorStop(0.35, blob.color + 'cc');
        grad.addColorStop(0.70, blob.color + '33');
        grad.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Apply film grain texture overlay
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = noisePattern;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg3dCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}
