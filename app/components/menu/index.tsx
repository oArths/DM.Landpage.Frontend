import Image from "next/image";
import Link from "next/link";
import * as L from "lucide-react";
import * as I from "react-icons/fa";
import SmoothScrollLink from "../../components/SmoothScrollLink";
interface menuInterface {
  openMenu: () => void;
}

export default function Menu({openMenu}: menuInterface) {
  return (
    <section className="fixed inset-0 top-0 bg-ui-colors-background z-30  ">
      <div className="flex flex-col w-full  h-screen relative z-[50]">
        <div className="h-[90px] w-full bg-transparent flex items-center justify-between py-5 px-[60px]">
          <Link href="/" onClick={openMenu} className="relative w-[51px] h-[51px]">
            <Image
              src="/images/logoPurple.svg"
              fill
              sizes="(max-width: 51px) 5vw"
              alt="Logo da Empresa Data Mastery"
            />
          </Link>
          <div onClick={openMenu} className="cursor-pointer">
            <L.X size={24} strokeWidth={2}  className="text-grey-scale-off-white "/>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-[70%]  ">
          <div className="flex flex-row items-center justify-around  w-[90%] h-full">
            <span className="flex flex-col   items-start justify-evenly h-full">
              <SmoothScrollLink
                href="/#clientes"
                onClick={openMenu}
                className="font-DMSans font-semibold text-5xl text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
              >
                Clientes & Parceiros
              </SmoothScrollLink>
              <SmoothScrollLink
                href="/#servicos"
                onClick={openMenu}
                className="font-DMSans font-semibold text-5xl text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
              >
                Serviços
              </SmoothScrollLink>
              <SmoothScrollLink
                href="/about"
                onClick={openMenu}
                className="font-DMSans font-semibold text-5xl text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
              >
                Nossa Empresa
              </SmoothScrollLink>
              <SmoothScrollLink
                href="/#contato"
                onClick={openMenu}
                className="font-DMSans font-semibold text-5xl text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
              >
                Contato
              </SmoothScrollLink>
            </span>
            <div className=" flex flex-col items-center justify-center gap-14 h-full px-16 border-l border-purple-600">
              <span className="flex flex-col gap-2.5">
                <h2 className="font-DMSans font-bold text-xl text-grey-scale-french-gray mb-1">
                  Info de Contato
                </h2>
                <a
                  href="https://wa.me/5511989639090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
                >
                  <I.FaWhatsapp
                    className="text-secondary-purple-heart"
                    size={20}
                  />
                  (11) 98963-9090
                </a>
                <a
                  href="mailto:eduardo@ascending.solutions"
                  className="flex items-center gap-2 font-DMSans font-normal text-lg text-grey-scale-french-gray hover:text-secondary-purple-heart transition-colors"
                >
                  <I.FaEnvelope
                    className="text-secondary-purple-heart"
                    size={20}
                  />
                  eduardo@ascending.solutions
                </a>
              </span>
              <span className="flex flex-col  items-start gap-2.5 w-full">
                <h2 className="font-DMSans font-bold text-xl text-grey-scale-french-gray mb-1">
                  Nossas Redes
                </h2>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaYoutube size={24} />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaDiscord size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-purple-heart transition-colors"
                  >
                    <I.FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
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

      <div className="absolute inset-0 z-40 overflow-hidden rounded-full max-h-screen">
        <div className="grid place-items-start grid-cols-4 sm:grid-cols-6 lg:grid-cols-[repeat(13,minmax(0,1fr))] lg:grid-rows-9">
          {Array.from({ length: 117 }).map((_, i) => (
            <div
              key={i}
              className={`h-full w-full aspect-square border-[0.6px] border-t-0 border-l-0 border-indigo-700/45 ${
                [16, 27, 60, 36].includes(i)
                  ? "bg-indigo-700/15"
                  : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
