interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-row items-start justify-start gap-2.5 ${className}`}>
      <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
      <h2 className="font-Inter text-grey-scale-off-white text-3xl font-bold">
        {title}
      </h2>
    </div>
  );
}
