import React, { useEffect, useRef } from 'react';

const NetworkMap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = 300; // Fixed height for this card
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Node definitions
    const nodes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: i === 0 ? 12 : Math.random() * 4 + 4, // Make one core node
      isCore: i === 0,
      color: i === 0 ? '#00f0ff' : (Math.random() > 0.8 ? '#ff0055' : '#8b9bb4')
    }));

    // Draw loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            // Draw line with opacity based on distance
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Highlight connections to core node or if an issue is present
            let strokeStyle = `rgba(139, 155, 180, ${1 - distance / 120})`;
            if ((nodes[i].isCore || nodes[j].isCore) && Math.random() > 0.95) {
                strokeStyle = `rgba(0, 240, 255, ${1 - distance / 120})`; // Pulse data transfer
            } else if (nodes[i].color === '#ff0055' || nodes[j].color === '#ff0055') {
                 strokeStyle = `rgba(255, 0, 85, ${0.5 * (1 - distance / 120)})`; // Error connection
            }
            
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        
        if (node.isCore) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = node.color;
        } else {
             ctx.shadowBlur = 5;
             ctx.shadowColor = node.color;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next drawings
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="dashboard-card network-map glass-panel">
      <div className="card-header">
        <h2>Network Topology</h2>
        <div className="legend">
          <span className="legend-item"><span className="dot core"></span> Core</span>
          <span className="legend-item"><span className="dot active"></span> Active</span>
          <span className="legend-item"><span className="dot issue"></span> Issue</span>
        </div>
      </div>
      <div className="canvas-container">
        <canvas ref={canvasRef} className="topology-canvas"></canvas>
      </div>
    </div>
  );
};

export default NetworkMap;
