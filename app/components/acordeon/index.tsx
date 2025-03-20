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
    <section className="relative w-full h-[100%] flex items-center ">
      <div className="bg-transparent flex flex-row border-purple-scale-stroke border text-white w-full h-[512px]  ">
        <div className="flex flex-col items-center justify-items-start gap-2.5 px-5 py-3.5 border-purple-scale-stroke border border-l-0 border-b-0 border-t-0">
          <h2 className="font-Inter font-bold text-3xl  h-auto vertical mt-auto">
            Clientes & Parceiros
          </h2>
          <p className="bg-secondary-purple-heart h-2.5 w-10" />
        </div>
        <div className="flex flex-col  justify-center gap-10 w-auto  items-start pl-20 pr-[120px]">
          <h2 className="font-Inter font-bold text-2xl   ">
            Nossos clientes & Parceiros
          </h2>
          <span className="font-DMSans font-normal text-base text-left">
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
              className="border-purple-scale-stroke border border-t-0 border-r-0 border-b-0 cursor-pointer"
              key={index}
            >
              <label className="flex flex-row justify-between items-start h-full  px-5 pr-2.5 pl-8 font-Inter font-semibold text-white/70 text-2xl vertical">
                {item.titulo}
                <I.ChevronDown color="oklch(76.81% 0.0099 279.64)" size={24} className="-rotate-90" />
              </label>
              <div className="hidden px-5 pb-5">
                <h2>{item.titulo}</h2>
                <span>{item.texto}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
