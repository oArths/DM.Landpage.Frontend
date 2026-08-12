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
    <section
      id={id}
      className="acordeon-section relative flex flex-col items-center justify-between w-full max-w-dvw overflow-x-hidden"
    >
      <div className="acordeon-layout relative flex w-full h-[512px] max-w-dvw overflow-hidden bg-ui-colors-background text-grey-scale-off-white z-[20] border border-purple-scale-stroke">
        <div className="acordeon-sidebar relative z-[2] flex flex-col items-center px-5 py-3.5 gap-2.5 border border-t-0 border-b-0 border-l-0 border-purple-scale-stroke">
          <h2 className="font-Inter text-3xl font-bold mt-auto vertical">
            Clientes & Parceiros
          </h2>
          <p className="bg-secondary-purple-heart h-2.5 w-10 trace" />
        </div>
        <div
          className={`acordeon-panel relative z-[1] flex-col items-center justify-center gap-10 overflow-hidden ${
            openMenu === null
              ? "flex shrink-0 mr-auto animation-slide-menu"
              : "flex animation-reverse-slide-menu"
          }`}
        >
          <div className="acordeon-content w-[min(420px,calc(100dvw-15rem))] shrink-0">
            <h2
              className={`font-Inter text-2xl font-bold shrink-[0] w-max whitespace-nowrap flex-none ${
                openMenu === null
                  ? "flex animation-text"
                  : "flex animation-reverse-text duration-150"
              }`}
            >
              Nossos clientes & Parceiros
            </h2>
            <span
              className={`font-DMSans text-base font-normal block w-full text-left whitespace-normal break-words ${
                openMenu === null
                  ? "animation-text"
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
              className={`acordeon-item relative z-[2] flex flex-row items-center bg-ui-colors-background border border-t-0 border-r-0 border-b-0 border-purple-scale-stroke ${
                openMenu === index && "mr-auto"
              }`}
            >
              <button
                type="button"
                onClick={() => selectMenu(index)}
                className={`acordeon-trigger relative z-[3] cursor-pointer flex flex-row items-start justify-between h-full pl-8 pr-2.5 font-Inter text-2xl font-semibold vertical bg-ui-colors-background border border-t-0 border-l-0 border-purple-scale-stroke ${
                  index === openMenu
                    ? "text-grey-scale-text"
                    : "text-grey-scale-off-white/70"
                }`}
              >
                {item.titulo}
                <I.ChevronDown
                  size={24}
                  className={`trigger text-grey-scale-french-gray ${
                    openMenu === index
                      ? "animation-rotate-90"
                      : "animation-reverse-rotate-90"
                  }`}
                />
              </button>
              <div
                className={`acordeon-panel relative z-[1] flex-col items-start justify-center w-auto gap-10 overflow-hidden ${
                  openMenu === index
                    ? "flex animation-slide-menu"
                    : previousOpenMenu === index
                      ? "flex animation-reverse-slide-menu"
                      : "hidden"
                }`}
              >
                <div className="acordeon-content w-[min(420px,calc(100dvw-15rem))] shrink-0">
                  <h3
                    className={`font-Inter text-2xl font-bold shrink-[0] w-max whitespace-nowrap flex-none ${
                      openMenu === index
                        ? "flex animation-text"
                        : previousOpenMenu === index
                          ? "flex animation-reverse-text"
                          : "hidden"
                    }`}
                  >
                    {item.titulo}
                  </h3>
                  <span
                    className={`font-DMSans text-base font-normal block w-full text-left whitespace-normal break-words ${
                      openMenu === index
                        ? "animation-text"
                        : previousOpenMenu === index
                          ? "animation-reverse-text"
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
