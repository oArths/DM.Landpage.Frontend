import Image from "next/image";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ui-colors-footer-background w-full py-12 px-20">
      <div className="flex flex-col items-center w-full gap-24">
        <div className="relative w-[66px] h-[66px] mx-auto sm:mr-auto pointer-events-none select-none">
          <Image
            src="/images/logoPurple.svg"
            fill
            sizes="(max-width: 66px) 5vw"
            alt="Logo da Empresa Data Mastery"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-[90px] xl:gap-[0px]  xl:flex-row justify-between w-[80%]">
          <span className="flex items-center xl:items-start flex-col gap-2.5">
            <h2 className="footer-heading">Explore</h2>
            <SmoothScrollLink href="/#servicos" className="link-explore">
              Nossos Serviços
            </SmoothScrollLink>
            <SmoothScrollLink href="/#clientes" className="link-explore">
              Clientes & Parceiros
            </SmoothScrollLink>
            <SmoothScrollLink href="/#empresa" className="link-explore">              
            Nossa Empresa
            </SmoothScrollLink>
          </span>
          <span className="  hidden xl:flex flex-col gap-2.5">
            <h2 className="footer-heading">Entre em Contato</h2>
            <a
              href="https://wa.me/5511989639090"
              target="_blank"
              rel="noopener noreferrer"
              className="link-explore flex items-center gap-2"
            >
              <FaWhatsapp className="text-secondary-purple-heart" size={20} />
              (11) 98963-9090
            </a>
            <a
              href="mailto:eduardo@ascending.solutions"
              className="link-explore flex items-center gap-2"
            >
              <FaEnvelope className="text-secondary-purple-heart" size={20} />
              eduardo@ascending.solutions
            </a>
          </span>
          <span className="flex items-center  flex-col gap-2.5">
            <h2 className="footer-heading">Nossas Redes & Comunidades</h2>
            <div className="flex flex-row gap-11">
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
        <div className="flex flex-col-reverse items-center gap-5 xl:flex-row justify-between w-full">
          <p className="font-DMSans text-grey-scale-french-gray text-lg font-normal">
            © 2024. All Rights Reserved.{" "}
          </p>
          <span className="flex flex-col items-center xl:flex-row gap-1">
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
