import Image from "next/image";
import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import SmoothScrollLink from "../../components/SmoothScrollLink";
export default function Footer() {
  return (
    <footer className="bg-ui-colors-footer-background px-20 py-12 w-full">
      <div className="flex flex-col gap-24 w-full items-center">
        <div className="relative w-[51px] h-[51px] mr-auto pointer-events-none select-none">
          <Image
            src="/images/logoPurple.svg"
            fill
            sizes="(max-width: 51px) 5vw"
            alt="Logo da Empresa Data Mastery"
            unoptimized
          />
        </div>
        <div className="flex flex-row w-[80%] justify-between">
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans font-bold text-xl text-grey-scale-french-gray mb-1">
              Explore
            </h2>
            <SmoothScrollLink href="#servicos" className="font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors">
              Nossos Serviços
            </SmoothScrollLink>
            <SmoothScrollLink href="#clientes" className="font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors">
              Clientes & Parceiros
            </SmoothScrollLink>
            <SmoothScrollLink href="#empresa" className="font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors">
              Nossa Empresa
            </SmoothScrollLink>
          </span>
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans font-bold text-xl text-grey-scale-french-gray mb-1">
              Entre em Contato
            </h2>
            <a href="https://wa.me/5511989639090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors">
              <FaWhatsapp className="text-secondary-purple-heart" size={20} />
              (11) 98963-9090
            </a>
            <a href="mailto:eduardo@ascending.solutions" className="flex items-center gap-2 font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors">
              <FaEnvelope className="text-secondary-purple-heart" size={20} />
              eduardo@ascending.solutions
            </a>
          </span>
          <span className="flex flex-col gap-2.5">
            <h2 className="font-DMSans font-bold text-xl text-grey-scale-french-gray mb-1">
              Nossas Redes
            </h2>
            <div className="flex flex-row gap-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p className="font-DMSans font-normal text-lg text-grey-scale-french-gray">
            © 2024. All Rights Reserved.{" "}
          </p>
          <span className="flex flex-row gap-1">
            <p className="font-DMSans font-normal text-lg text-grey-scale-french-gray ">
              Designed and Constructed by
            </p>
            <p className="font-DMSans font-semibold text-lg text-secondary-purple-heart ">
               Suporte de Domingo
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}
