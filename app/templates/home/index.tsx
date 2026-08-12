import ButtonPrimary from "../../components/ButtonPrimary";
import GridBackground from "../../components/GridBackground";

export default function Home({ id }: { id?: string }) {
  return (
    <section id={id} className="relative flex items-center w-full h-[90dvh]">
      <span className="absolute top-[20%] z-20 flex flex-col items-center justify-center w-full gap-10">
        <p className="font-Inter text-grey-scale-text tracking-widest text-base font-extralight">
          CIÊNCIA DE DADOS, TREINAMENTOS E AUTOMAÇÃO COM I.A.
        </p>
        <span className="flex flex-col items-center justify-center gap-[15px]">
          <h1 className="font-Lexend text-grey-scale-off-white text-7xl font-bold">
            Learning Your Way
          </h1>
          <h2 className="font-Inter text-grey-scale-off-white text-2xl font-light">
            Capacitando a sua Transformação Digital
          </h2>
        </span>
        <ButtonPrimary href="/#contato" className="font-medium h-10 px-11 py-1.5">
          Agende uma reunião
        </ButtonPrimary>
      </span>
      <div className="bg-primary-indigo absolute bottom-20 left-[50%] z-[15] w-[15vw] h-[15vw] rounded-full opacity-20 blur-3xl" />
      <div className="bg-primary-indigo absolute top-48 right-[80%] z-[15] w-[25vw] h-[25vw] rounded-full opacity-20 blur-3xl" />
      <div className="bg-primary-indigo absolute -bottom-60 left-[80%] z-[15] w-[25vw] h-[25vw] rounded-full opacity-20 blur-3xl" />
      <div className="bg-vignette absolute z-10 w-full h-full" />
      <GridBackground highlight={[16, 60, 36]} className="w-full h-full" />
    </section>
  );
}
