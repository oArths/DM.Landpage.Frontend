import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  alt?: string;
  linkedin?: string;
  github?: string;
}

export default function TeamCard({
  name,
  role,
  image,
  alt,
  linkedin,
  github,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-fit gap-5">
      <div className="relative w-full aspect-square mr-auto pointer-events-none select-none">
        <Image
          src={image}
          fill
          sizes="(max-width: 51px) 5vw"
          alt={alt ?? `Imagem representativa de ${name}`}
          unoptimized
        />
      </div>
      <span className="flex flex-col justify-center items-center gap-2.5">
        <h3 className="font-Inter text-grey-scale-off-white text-2xl font-bold">
          {name}
        </h3>
        <p className="font-DMSans text-grey-scale-off-white text-lg font-normal">
          {role}
        </p>
      </span>
      {(linkedin || github) && (
        <div className="flex flex-rows justify-evenly w-full">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${name}`}
              className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${name}`}
              className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
