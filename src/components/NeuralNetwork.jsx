import { useEffect, useRef } from 'react';
import './NeuralNetwork.css';

function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, active: false };
    const INFLUENCE_RADIUS = 120;
    const NODE_ATTRACT_STRENGTH = 18;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

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
          nodes.push({ x, y, baseX: x, baseY: y, layer: layerIndex, index: i });
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

    // Throttle hover-spawned pulses
    let lastHoverPulseTime = 0;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 0.016;

      // Update node positions — attract toward mouse
      nodes.forEach((node) => {
        if (mouse.active) {
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < INFLUENCE_RADIUS && dist > 0) {
            const strength = (1 - dist / INFLUENCE_RADIUS) * NODE_ATTRACT_STRENGTH;
            node.x += (node.baseX + (dx / dist) * strength - node.x) * 0.1;
            node.y += (node.baseY + (dy / dist) * strength - node.y) * 0.1;
          } else {
            node.x += (node.baseX - node.x) * 0.1;
            node.y += (node.baseY - node.y) * 0.1;
          }
        } else {
          node.x += (node.baseX - node.x) * 0.08;
          node.y += (node.baseY - node.y) * 0.08;
        }
      });

      // Spawn extra pulses when hovering near a node
      if (mouse.active && time - lastHoverPulseTime > 0.25) {
        for (const node of nodes) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          if (Math.sqrt(dx * dx + dy * dy) < 40) {
            const outgoing = connections.filter((c) => c.from === node);
            if (outgoing.length > 0) {
              const conn = outgoing[Math.floor(Math.random() * outgoing.length)];
              pulses.push({ conn, progress: 0, speed: 0.006 + Math.random() * 0.006 });
              lastHoverPulseTime = time;
            }
            break;
          }
        }
      }

      // Cap total pulses to avoid runaway growth
      while (pulses.length > maxPulses + 8) {
        pulses.shift();
      }

      // Draw connections
      connections.forEach((conn) => {
        const basePulse = 0.04 + 0.015 * Math.sin(time * conn.speed * 2 + conn.offset);

        // Brighten connections near the mouse
        let proximity = 0;
        if (mouse.active) {
          const midX = (conn.from.x + conn.to.x) / 2;
          const midY = (conn.from.y + conn.to.y) / 2;
          const dist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
          if (dist < INFLUENCE_RADIUS) {
            proximity = (1 - dist / INFLUENCE_RADIUS) * 0.12;
          }
        }

        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${basePulse + proximity})`;
        ctx.lineWidth = 0.4 + proximity * 4;
        ctx.stroke();
      });

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          // Remove extra hover-spawned pulses when they finish
          if (pulses.length > maxPulses) {
            pulses.splice(i, 1);
            continue;
          }
          const conn = connections[Math.floor(Math.random() * connections.length)];
          p.conn = conn;
          p.progress = 0;
          p.speed = 0.003 + Math.random() * 0.004;
          continue;
        }

        const x = p.conn.from.x + (p.conn.to.x - p.conn.from.x) * p.progress;
        const y = p.conn.from.y + (p.conn.to.y - p.conn.from.y) * p.progress;

        const grd = ctx.createRadialGradient(x, y, 0, x, y, 6);
        grd.addColorStop(0, 'rgba(123, 94, 167, 0.6)');
        grd.addColorStop(1, 'rgba(123, 94, 167, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const baseGlow = 0.08 + 0.06 * Math.sin(time * 0.8 + node.layer * 0.8 + node.index * 0.5);

        // Boost glow near mouse
        let hoverBoost = 0;
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < INFLUENCE_RADIUS) {
            hoverBoost = (1 - dist / INFLUENCE_RADIUS) * 0.35;
          }
        }

        const glow = baseGlow + hoverBoost;
        const nodeRadius = 4.5 + hoverBoost * 4;
        const glowRadius = 12 + hoverBoost * 16;

        // Outer glow
        const outerGrd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        outerGrd.addColorStop(0, `rgba(123, 94, 167, ${glow})`);
        outerGrd.addColorStop(1, 'rgba(123, 94, 167, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = outerGrd;
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.3 + glow, 1)})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
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
