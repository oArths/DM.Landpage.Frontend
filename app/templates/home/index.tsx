export default function Home({ id }: { id?: string }) {
  return (
    <section id={id} className=" relative bg-transparent flex items-center h-[90dvh] w-full  ">
      <span className="flex flex-col items-center justify-center w-full gap-10 absolute top-[20%] z-20">
        <p className="font-Inter font-extralight text-base text-gray-scale-text tracking-widest">
          CIÊNCIA DE DADOS, TREINAMENTOS E AUTOMAÇÃO COM I.A.
        </p>
        <span className="flex flex-col items-center justify-center gap-[15px]">
          <h1 className="font-lexend  text-grey-scale-off-white font-bold text-7xl ">
            Learning Your Way
          </h1>
          <h2 className="font-Inter  text-grey-scale-off-white font-light text-2xl ">
            Capacitando a sua Transformação Digital
          </h2>
        </span>
        <button className="font-DMSans font-medium text-base h-10 cursor-pointer px-11 py-1.5 bg-secondary-purple-heart rounded-sm ">
          Agende uma reunião
        </button>
      </span>
      <div className="bg-primary-indigo z-[15]  blur-3xl absolute opacity-20 bottom-20 left-[50%] p-0  w-[15vw] h-[15vw]  aspect-square rounded-full" />
      <div className="bg-primary-indigo z-[15]  blur-3xl absolute opacity-20 top-48 right-[80%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
      <div className="bg-primary-indigo z-[15]  blur-3xl absolute opacity-20 -bottom-60 left-[80%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
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
                [16, 60, 36].includes(i) ? "bg-indigo-700/45" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
