import Image from "next/image";
import { LogoPurple, MenuIcon } from "../public/images";
export default function Home() {
  return (
    <section className="bg-ui-colors-background min-h-screen  text-white w-full h-full">
      <header className="h-[90px] w-full bg-transparent flex items-center justify-between py-5 px-[60px]">
        <Image
          src={LogoPurple}
          width={51}
          height={51}
          alt="Logo da Empresa Data Mastery"
        />
        <div>
          <Image
            src={MenuIcon}
            width={30}
            height={24}
            alt="Icone do menu lateral"
          />
        </div>
      </header>
      <span>
        <p>Ciência de dados, treinamentos e automação com i.a.</p>
        <h1>Learning Your Way</h1>
        <h2>Capacitando a sua Transformação Digital</h2>
        <button>Agende uma reunião</button>
      </span>
      <div className=" relative bg-transparent h-[90dvh] ">
        <div className="bg-primary-indigo z-[15]  blur-2xl absolute opacity-20 -top-20 left-[50%] p-0  w-[15vw] h-[15vw]  aspect-square rounded-full" />
        <div className="bg-primary-indigo z-[15]  blur-2xl absolute opacity-20 top-48 right-[80%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        <div className="bg-primary-indigo z-[15]  blur-2xl absolute opacity-20 -bottom-20 left-[70%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        <div
          className="w-full h-full absolute z-10 "
          style={{
            background:
              " radial-gradient(circle, rgba(0,3,25,0) 20%, rgb(0,3,25) 100%)",
          }}
        />
        <div className="w-full h-full relative overflow-hidden rounded-full ">
          <div className="grid place-items-start grid-cols-4 sm:grid-cols-6 lg:grid-cols-[repeat(13,minmax(0,1fr))] lg:grid-rows-9 bg-transparent">
            {Array.from({ length: 117 }).map((_, i) => (
              <div
                key={i}
                className={`h-full w-full  aspect-square border-[0.6px] border-t-0 border-l-0 border-indigo-700/45  ${
                  [16, 60, 36].includes(i)
                    ? "bg-indigo-700/45"
                    : "bg-transparent"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
