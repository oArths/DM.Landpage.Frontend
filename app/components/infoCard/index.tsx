import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}

export default function BenefitCard({ icon, alt, title, children }: BenefitCardProps) {
  return (
    <div className="flex flex-row items-center justify-center w-fit h-full p-7 gap-7 border border-grey-scale-onyx/50 rounded-3xl">
      <div className="relative w-[90px] h-[90px] min-w-[20%]">
        <Image src={icon} fill sizes="(max-width: 51px) 5vw" alt={alt} />
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
