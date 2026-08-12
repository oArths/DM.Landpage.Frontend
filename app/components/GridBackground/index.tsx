interface GridBackgroundProps {
  highlight?: number[];
  className?: string;
}

export default function GridBackground({ highlight = [], className = "" }: GridBackgroundProps) {
  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <div className="grid place-items-start grid-cols-4 sm:grid-cols-6 lg:grid-cols-[repeat(13,minmax(0,1fr))] lg:grid-rows-9">
        {Array.from({ length: 117 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-full aspect-square border-[0.6px] border-t-0 border-l-0 border-indigo-700/45 ${
              highlight.includes(i) ? "bg-indigo-700/20" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
