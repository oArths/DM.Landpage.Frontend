export default function Home() {
  return (
    <section className="bg-ui-colors-background text-white w-full h-full">
      <div className=" relative bg-transparent">
        <div className="bg-indigo-500 z-[1]  blur-2xl absolute opacity-20 top-8 left-[50%] p-0  w-[15vw] h-[15vw]  aspect-square rounded-full" />
        <div className="bg-indigo-500 z-[1]  blur-2xl absolute opacity-20 top-48 right-[80%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        <div className="bg-indigo-500 z-[1]  blur-2xl absolute opacity-20 -bottom-20 left-[70%] p-0  w-[25vw] h-[25vw]  aspect-square rounded-full" />
        <div className=" w-auto rounded-[50%] h-[90dvh] overflow-hidden">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12  bg-transparent ">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`h-full w-full  aspect-square border border-indigo-700  ${
                  [7, 56, 28].includes(i) ? "bg-indigo-700" : "bg-transparent"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
