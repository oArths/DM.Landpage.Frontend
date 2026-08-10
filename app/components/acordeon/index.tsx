"use client";
import * as I from "lucide-react";
import { useState } from "react";
const Data = [
  {
    titulo: "Hermès Paris",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "SENAI Sâo Paulo",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Cielo",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Petroplus",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Borkar",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Grenke",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Knauf Ceiling",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Cori",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Locare",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "MWM",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Suporte de Domingo",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Ascending",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
];

export default function Acordeon({ id }: { id: string }) {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [previousOpenMenu, setPreviousOpenMenu] = useState<number | null>(null);

  const selectMenu = (index: number) => {
    if (openMenu === index) {
      setPreviousOpenMenu(index);
      setOpenMenu(null);
    } else {
      setPreviousOpenMenu(openMenu);
      setOpenMenu(index);
    }
  };
  return (
    <section id={id} className="acordeon-section relative w-full max-w-dvw overflow-x-hidden flex flex-col justify-between items-center">
      <div className="acordeon-layout flex w-full max-w-dvw overflow-hidden border border-purple-scale-stroke bg-ui-colors-background text-white z-[20] h-[512px]">
        <div className="acordeon-sidebar flex flex-col items-center relative z-[2] gap-2.5 px-5 py-3.5 border-purple-scale-stroke border border-l-0 border-b-0 border-t-0">
          <h2 className="font-Inter font-bold text-3xl vertical mt-auto">
            Clientes & Parceiros
          </h2>
          <p className="bg-secondary-purple-heart h-2.5 w-10 trace" />
        </div>
        <div
          className={`acordeon-panel flex-col justify-center gap-10 relative z-[1] overflow-hidden items-center ${
            openMenu === null
              ? "flex shrink-0 animation-slide-menu mr-auto"
              : " flex animation-reverse-slide-menu   "
          }`}
        >

          <div className="acordeon-content w-[min(420px,calc(100dvw-15rem))] shrink-0">
            <h2
              className={`font-Inter font-bold text-2xl flex-none shrink-[0] w-max whitespace-nowrap ${
                openMenu === null
                  ? "flex animation-text "
                  : "flex animation-reverse-text duration-150"
              } `}
            >
            Nossos clientes & Parceiros
            </h2>
            <span
              className={`font-DMSans font-normal text-base text-left block w-full whitespace-normal break-words ${
              openMenu === null
                ? "animation-text "
                : "animation-reverse-text duration-150"
            }`}
            >
            A Data Mastery Tech é uma empresa de serviços educacionais e
            consultorias especializada em Business Intelligence, Data
            Engineering, Data Science e Automação Robótica. Nosso propósito é
            ajudar empresas e profissionais a se desenvolverem na área de dados
            e gerar transformação digital.
            </span>
          </div>
        </div>
        {Data &&
          Data.map((item, index) => (
            <div
              key={index}
              className={`acordeon-item flex flex-row items-center bg-ui-colors-background border-purple-scale-stroke border border-t-0 border-r-0 border-b-0 relative z-[2] ${
                openMenu === index && " mr-auto"
              }`}
            >
              <label
                className={` ${ index === openMenu ?  "text-grey-scale-text" :"text-white/70"} acordeon-trigger flex flex-row justify-between items-start h-full relative z-[3] bg-ui-colors-background px-5 pr-2.5 pl-8 font-Inter font-semibold  text-2xl vertical border-purple-scale-stroke border border-t-0 border-l-0`}
                onClick={() => selectMenu(index)}
              >
                {item.titulo}
                <I.ChevronDown
                  size={24}
                  className={`trigger text-grey-scale-french-gray ${
                    
                    openMenu === index
                      ? "animation-rotate-90"
                      : " animation-reverse-rotate-90"
                  }`}
                />
              </label>
              <div
                className={`acordeon-panel flex-col justify-center gap-10 items-start w-auto relative z-[1] overflow-hidden ${
                  openMenu === index
                    ? "flex animation-slide-menu "
                    : previousOpenMenu === index
                      ? "flex animation-reverse-slide-menu "
                      : "hidden"
                }`}
              >
                <div className="acordeon-content w-[min(420px,calc(100dvw-15rem))] shrink-0">
                  <h2
                    className={`font-Inter font-bold text-2xl flex-none shrink-[0] w-max whitespace-nowrap ${
                      openMenu === index
                        ? "flex animation-text "
                        : previousOpenMenu === index
                          ? " flex animation-reverse-text "
                          : "hidden"
                    }`}
                  >
                  {item.titulo}
                  </h2>
                  <span
                    className={`font-DMSans font-normal text-base block w-full whitespace-normal break-words text-left ${
                    openMenu === index
                      ? "animation-text "
                      : previousOpenMenu === index
                        ? "animation-reverse-text "
                        : "hidden"
                  }`}
                  >
                  {item.texto}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

   
    </section>
  );
}
