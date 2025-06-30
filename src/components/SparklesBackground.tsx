import React from 'react';

const NUM_SPARKLES = 30;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const SparklesBackground = () => {
  const sparkles = Array.from({ length: NUM_SPARKLES }).map((_, i) => {
    const left = random(0, 100);
    const top = random(0, 100);
    const size = random(6, 16);
    const duration = random(2, 5);
    const delay = random(0, 3);
    return (
      <span
        key={i}
        className="sparkle-bg"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles}
    </div>
  );
};

export default SparklesBackground; 