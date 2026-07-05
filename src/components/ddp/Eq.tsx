export function Eq({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`eq ${className}`}>
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
    </span>
  );
}