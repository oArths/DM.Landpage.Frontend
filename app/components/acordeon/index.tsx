import * as I from "lucide-react";
const Data = [
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
  {
    titulo: "Clientes",
    texto: "Aqui você encontra todos os clientes cadastrados no sistema.",
  },
];

export default function Acordeon() {
  return (
    // <section className="bg-ui-colors-background w-screen h-full flex flex-row justify-start items-start relative">
    <menu
      className="bg-transparent border-purple-scale-stroke border text-white w-[512px] h-full origin-center relative z-[1]"
      style={{ transform: "rotate(-90deg)" }}
    >
      <div className="flex flex-row gap-2.5 px-5 py-3.5 border-purple-scale-stroke border border-l-0 border-r-0 border-t-0">
        <p className="bg-secondary-purple-heart  h-10 w-2.5" />
        <h2 className="font-Inter font-bold text-3xl">Clientes & Parceiros</h2>
      </div>
      <div
        className="flex flex-col  justify-center gap-10 w-full h-auto items-start px-5 py-5"
        style={{ transform: "rotate(-90deg)" }}
      >
        <h2 className="font-Inter font-bold text-2xl">
          Nossos clientes & Parceiros
        </h2>
        <span className="font-DMSans font-normal text-base text-left">
          A Data Mastery Tech é uma empresa de serviços educacionais e
          consultorias especializada em Business Intelligence, Data Engineering,
          Data Science e Automação Robótica. Nosso propósito é ajudar empresas e
          profissionais a se desenvolverem na área de dados e gerar
          transformação digital.
        </span>
      </div>
      {Data &&
        Data.map((item, index) => (
          <div
            className="border-purple-scale-stroke border border-l-0 border-r-0 border-b-0"
            key={index}
          >
            <label className="flex flex-row justify-between px-5 pb-2.5 pt-8 font-Inter font-semibold text-white/70 text-2xl">
              {item.titulo}
              <I.ChevronDown color="oklch(76.81% 0.0099 279.64)" size={24} />
            </label>
            <div className="hidden px-5 pb-5">
              <h2>{item.titulo}</h2>
              <span>{item.texto}</span>
            </div>
          </div>
        ))}
    </menu>
    // </section>
  );
}
