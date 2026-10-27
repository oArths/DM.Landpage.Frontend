import Image from "next/image";

interface InfoCardProps {
  icon: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ icon, alt, title, children }: InfoCardProps) {
  return (
    <div className="card">
      <div className="card-badge">
        <figure className="card-icon">
          <Image src={icon} fill sizes="24px" alt={alt} />
        </figure>
      </div>
      <span className="flex flex-col gap-4">
        <h2 className="font-Inter text-grey-scale-off-white text-2xl font-bold">
          {title}
        </h2>
        <p className="font-DMSans text-grey-scale-off-white text-base font-normal">
          {children}
        </p>
      </span>
    </div>
  );
}
