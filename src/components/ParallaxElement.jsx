export default function ParallaxElement({ speed, className, children }) {
  return (
    <div 
      data-speed={speed}
      className={`${className} will-change-transform`}
    >
      {children}
    </div>
  );
} 