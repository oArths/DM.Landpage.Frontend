import Link from "next/link";
import Image from "next/image";
import * as L from "lucide-react";
import * as I from "react-icons/fa";
import GridBackground from "../../components/GridBackground";
import SmoothScrollLink from "../../components/SmoothScrollLink";

interface menuInterface {
  openMenu: () => void;
}

const navLinkClasses =
  "font-DMSans text-grey-scale-french-gray text-5xl font-semibold hover:text-secondary-purple-heart transition-colors";

export default function Menu({ openMenu }: menuInterface) {
  return (
    <section className="fixed inset-0 top-0 z-30 bg-ui-colors-background">
      <div className="relative z-[50] flex flex-col w-full h-screen">
        <div className="flex items-center justify-between w-full h-[90px] py-5 px-[60px] bg-transparent">
          <Link href="/" onClick={openMenu} className="relative w-[51px] h-[51px]">
            <Image
              src="/images/logoPurple.svg"
              fill
              sizes="(max-width: 51px) 5vw"
              alt="Logo da Empresa Data Mastery"
            />
          </Link>
          <button
            type="button"
            onClick={openMenu}
            aria-label="Fechar menu"
            className="cursor-pointer"
          >
            <L.X size={24} strokeWidth={2} className="text-grey-scale-off-white" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-[70%]">
          <div className="flex flex-row items-center justify-around w-[90%] h-full">
            <span className="flex flex-col items-start justify-evenly h-full">
              <SmoothScrollLink href="/#clientes" onClick={openMenu} className={navLinkClasses}>
                Clientes & Parceiros
              </SmoothScrollLink>
              <SmoothScrollLink href="/#servicos" onClick={openMenu} className={navLinkClasses}>
                Serviços
              </SmoothScrollLink>
              <SmoothScrollLink href="/about" onClick={openMenu} className={navLinkClasses}>
                Nossa Empresa
              </SmoothScrollLink>
              <SmoothScrollLink href="/#contato" onClick={openMenu} className={navLinkClasses}>
                Contato
              </SmoothScrollLink>
            </span>
            <div className="flex flex-col items-center justify-center h-full gap-14 px-16 border-l border-purple-heart-700">
              <span className="flex flex-col gap-2.5">
                <h2 className="font-DMSans text-grey-scale-french-gray text-xl font-bold mb-1">
                  Info de Contato
                </h2>
                <a
                  href="https://wa.me/5511989639090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-DMSans text-grey-scale-french-gray text-lg font-normal hover:text-secondary-purple-heart transition-colors"
                >
                  <I.FaWhatsapp className="text-secondary-purple-heart" size={20} />
                  (11) 98963-9090
                </a>
                <a
                  href="mailto:eduardo@ascending.solutions"
                  className="flex items-center gap-2 font-DMSans text-grey-scale-french-gray text-lg font-normal hover:text-secondary-purple-heart transition-colors"
                >
                  <I.FaEnvelope className="text-secondary-purple-heart" size={20} />
                  eduardo@ascending.solutions
                </a>
              </span>
              <span className="flex flex-col items-start gap-2.5 w-full">
                <h2 className="font-DMSans text-grey-scale-french-gray text-xl font-bold mb-1">
                  Nossas Redes
                </h2>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaYoutube size={24} />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaDiscord size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaLinkedin size={24} />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <GridBackground highlight={[16, 27, 60, 36]} className="absolute inset-0 z-40 max-h-screen" />
    </section>
  );
}
