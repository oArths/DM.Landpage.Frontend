export default function HomeAbout() {
  return (
    <section  className=" relative bg-transparent flex items-center h-[90dvh] w-full  ">
      <span className="flex flex-col items-center justify-center w-full gap-10 absolute top-[20%] z-20">
   
        <span className="flex flex-col items-center justify-center gap-[17px] w-fit">
          <h1 className="font-lexend  text-grey-scale-off-white font-bold text-7xl ">
            Conheça a Data Mastery
          </h1>
          <h2 className="font-Inter  text-grey-scale-off-white font-light text-2xl text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.
          </h2>
        </span>
 
      </span>
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
              className={`h-full w-full  aspect-square border-[0.6px] border-t-0 border-l-0 border-indigo-700/45 bg-transparent
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
