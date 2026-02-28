import { useEffect, useRef } from 'react';
import './NeuralNetwork.css';

function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Define neural network layers
    const layers = [2, 3, 4, 3, 2];
    const getNodes = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const nodes = [];
      const layerSpacing = w / (layers.length + 1);

      layers.forEach((count, layerIndex) => {
        const x = layerSpacing * (layerIndex + 1);
        const nodeSpacing = h / (count + 1);
        for (let i = 0; i < count; i++) {
          const y = nodeSpacing * (i + 1);
          nodes.push({ x, y, layer: layerIndex, index: i });
        }
      });

      return nodes;
    };

    // Build connections between adjacent layers
    const getConnections = (nodes) => {
      const connections = [];
      for (let l = 0; l < layers.length - 1; l++) {
        const fromNodes = nodes.filter((n) => n.layer === l);
        const toNodes = nodes.filter((n) => n.layer === l + 1);
        fromNodes.forEach((from) => {
          toNodes.forEach((to) => {
            connections.push({ from, to, speed: 0.3 + Math.random() * 0.7, offset: Math.random() * Math.PI * 2 });
          });
        });
      }
      return connections;
    };

    let nodes = getNodes();
    let connections = getConnections(nodes);

    const handleResize = () => {
      resize();
      nodes = getNodes();
      connections = getConnections(nodes);
    };

    window.removeEventListener('resize', resize);
    window.addEventListener('resize', handleResize);

    // Pulses traveling along connections
    const maxPulses = 6;
    const pulses = [];
    for (let i = 0; i < maxPulses; i++) {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      if (conn) {
        pulses.push({ conn, progress: Math.random(), speed: 0.003 + Math.random() * 0.004 });
      }
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 0.016;

      // Draw connections
      connections.forEach((conn) => {
        const pulse = 0.04 + 0.015 * Math.sin(time * conn.speed * 2 + conn.offset);
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${pulse})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      });

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          const conn = connections[Math.floor(Math.random() * connections.length)];
          p.conn = conn;
          p.progress = 0;
          p.speed = 0.003 + Math.random() * 0.004;
          continue;
        }

        const x = p.conn.from.x + (p.conn.to.x - p.conn.from.x) * p.progress;
        const y = p.conn.from.y + (p.conn.to.y - p.conn.from.y) * p.progress;

        const grd = ctx.createRadialGradient(x, y, 0, x, y, 6);
        grd.addColorStop(0, 'rgba(201, 168, 76, 0.6)');
        grd.addColorStop(1, 'rgba(201, 168, 76, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const glow = 0.08 + 0.06 * Math.sin(time * 0.8 + node.layer * 0.8 + node.index * 0.5);

        // Outer glow
        const outerGrd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
        outerGrd.addColorStop(0, `rgba(201, 168, 76, ${glow})`);
        outerGrd.addColorStop(1, 'rgba(201, 168, 76, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = outerGrd;
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + glow})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="neural-network">
      <canvas ref={canvasRef} className="neural-canvas" />
    </div>
  );
}

export default NeuralNetwork;
