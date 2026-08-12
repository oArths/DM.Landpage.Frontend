import Image from "next/image";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const exploreLinkClasses =
  "font-DMSans text-grey-scale-french-gray text-lg font-normal hover:text-secondary-purple-heart transition-colors";

export default function Footer() {
  return (
    <footer className="bg-ui-colors-footer-background w-full py-12 px-20">
      <div className="flex flex-col items-center w-full gap-24">
        <div className="relative w-[51px] h-[51px] mr-auto pointer-events-none select-none">
          <Image
            src="/images/logoPurple.svg"
            fill
            sizes="(max-width: 51px) 5vw"
            alt="Logo da Empresa Data Mastery"
            unoptimized
          />
        </div>
        <div className="flex flex-row justify-between w-[80%]">
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans text-grey-scale-french-gray text-xl font-bold mb-1">
              Explore
            </h2>
            <SmoothScrollLink href="/#servicos" className={exploreLinkClasses}>
              Nossos Serviços
            </SmoothScrollLink>
            <SmoothScrollLink href="/#clientes" className={exploreLinkClasses}>
              Clientes & Parceiros
            </SmoothScrollLink>
            <SmoothScrollLink href="/#empresa" className={exploreLinkClasses}>
              Nossa Empresa
            </SmoothScrollLink>
          </span>
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans text-grey-scale-french-gray text-xl font-bold mb-1">
              Entre em Contato
            </h2>
            <a
              href="https://wa.me/5511989639090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-DMSans text-grey-scale-french-gray text-lg font-normal hover:text-secondary-purple-heart transition-colors"
            >
              <FaWhatsapp className="text-secondary-purple-heart" size={20} />
              (11) 98963-9090
            </a>
            <a
              href="mailto:eduardo@ascending.solutions"
              className="flex items-center gap-2 font-DMSans text-grey-scale-french-gray text-lg font-normal hover:text-secondary-purple-heart transition-colors"
            >
              <FaEnvelope className="text-secondary-purple-heart" size={20} />
              eduardo@ascending.solutions
            </a>
          </span>
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans text-grey-scale-french-gray text-xl font-bold mb-1">
              Nossas Redes
            </h2>
            <div className="flex flex-row gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="font-DMSans text-grey-scale-french-gray text-lg font-normal">
            © 2024. All Rights Reserved.{" "}
          </p>
          <span className="flex flex-row gap-1">
            <p className="font-DMSans text-grey-scale-french-gray text-lg font-normal">
              Designed and Constructed by
            </p>
            <p className="font-DMSans text-secondary-purple-heart text-lg font-semibold">
              Suporte de Domingo
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}
