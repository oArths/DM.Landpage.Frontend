import Image from "next/image";

interface InfoCardProps {
  icon: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ icon, alt, title, children }: InfoCardProps) {
  return (
    <div className="flex flex-col items-start justify-center w-fit h-full p-7 gap-7 border border-grey-scale-onyx/50 rounded-3xl">
      <div className="rounded-xl p-3  bg-purple-heart-500/10">

        <figure className="relative  w-[24px] h-[24px]">
          <Image src={icon} fill sizes="width: 24px" alt={alt} />
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
