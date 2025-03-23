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

export default function Acordeon() {
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
    <section className="relative w-full h-screen flex  flex-col justify-between items-center ">
      <div className=" flex flex-row  border-purple-scale-stroke border bg-ui-colors-background  z-[20]  text-white w-full h-[512px]  ">
        <div className="flex flex-col items-center relative z-[2] justify-items-start gap-2.5 px-5 py-3.5 border-purple-scale-stroke border border-l-0 border-b-0 border-t-0">
          <h2 className="font-Inter font-bold text-3xl  h-auto vertical mt-auto">
            Clientes & Parceiros
          </h2>
          <p className="bg-secondary-purple-heart h-2.5 w-10" />
        </div>
        <div
          className={` flex-col  justify-center gap-10  relative z-[1]  overflow-hidden items-center  ${
            openMenu === null
              ? "flex animation-slide-menu mr-auto"
              : " flex animation-reverse-slide-menu   "
          }`}
        >
          <h2
            className={`font-Inter font-bold text-2xl  flex-none shrink-[0] min-w-fit ${
              openMenu === null
                ? "flex animation-text "
                : "flex animation-reverse-text duration-75"
            } `}
          >
            Nossos clientes & Parceiros
          </h2>
          <span
            className={`font-DMSans font-normal text-base text-left flex-none shrink-[0] min-w-fit ${
              openMenu === null
                ? "flex animation-text "
                : "flex animation-reverse-text duration-75"
            }`}
          >
            A Data Mastery Tech é uma empresa de serviços educacionais e
            consultorias especializada em Business Intelligence, Data
            Engineering, Data Science e Automação Robótica. Nosso propósito é
            ajudar empresas e profissionais a se desenvolverem na área de dados
            e gerar transformação digital.
          </span>
        </div>
        {Data &&
          Data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row items-center bg-ui-colors-background  border-purple-scale-stroke border border-t-0 border-r-0 border-b-0  relative z-[2] ${
                openMenu === index && " mr-auto"
              }`}
            >
              <label
                className="flex flex-row justify-between items-start h-full  relative z-[2] bg-ui-colors-background  px-5 pr-2.5 pl-8 font-Inter font-semibold  text-white/70 text-2xl vertical border-purple-scale-stroke border border-t-0 border-l-0 "
                onClick={() => selectMenu(index)}
              >
                {item.titulo}
                <I.ChevronDown
                  color="oklch(76.81% 0.0099 279.64)"
                  size={24}
                  className={`${
                    openMenu === index
                      ? "animation-rotate-90"
                      : " animation-reverse-rotate-90"
                  }`}
                />
              </label>
              <div
                className={`flex-col justify-center gap-10 items-start w-auto relative z-[1] overflow-hidden ${
                  openMenu === index
                    ? "flex animation-slide-menu "
                    : previousOpenMenu === index
                    ? "flex animation-reverse-slide-menu "
                    : "hidden"
                }`}
              >
                <h2
                  className={`font-Inter font-bold text-2xl flex-none  shrink-[0] min-w-fit ${
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
                  className={`font-DMSans font-normal text-base flex-none shrink-[0] min-w-fit text-left ${
                    openMenu === index
                      ? "flex animation-text "
                      : previousOpenMenu === index
                      ? "animation-reverse-text "
                      : "hidden"
                  }   `}
                >
                  {item.texto}
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-grey-scale-onyx w-[80dvw] h-[1px]"/>
    </section>
  );
}
