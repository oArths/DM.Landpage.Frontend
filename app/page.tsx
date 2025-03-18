import Image from "next/image";
import { LogoPurple } from "../public/images";
export default function Home() {
  return (
    <section className="bg-ui-colors-background min-h-screen  text-white w-full h-full">
      <header className="h-[90px] w-full bg-transparent flex items-center justify-between py-5 px-[60px]">
        <Image
          src={LogoPurple}
          width={51}
          height={51}
          alt="Logo da Empresa Data Mastry"
        />
        <div>menu</div>
      </header>
      <div className=" relative bg-transparent ">
        <div className="bg-primary-indigo z-[3]  blur-2xl absolute opacity-20 -top-20 left-[50%] p-0  w-[15vw] h-[15vw]  aspect-square rounded-full" />
        <div className="bg-primary-indigo z-[3]  blur-2xl absolute opacity-20 top-48 right-[80%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        <div className="bg-primary-indigo z-[3]  blur-2xl absolute opacity-20 -bottom-20 left-[70%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        {/* <div className=" w-full  absolute z-[2] bg-amber-300 bg-clip-content  rounded-full h-[90dvh] overflow-hidden"></div> */}
        <div className="w-full h-full relative ">
          <div
            className="absolute inset-0 bg-transparent"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(77,0,133,0.8) 100%)",
            }}
          />
          <div className="grid grid-cols-4  relative z-[1] sm:grid-cols-6 lg:grid-cols-[repeat(13,minmax(0,1fr))] lg:grid-rows-9 bg-transparent">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`h-full w-full  aspect-square border border-indigo-700/45  ${
                  [7, 56, 28].includes(i)
                    ? "bg-indigo-700 opacity-45"
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
