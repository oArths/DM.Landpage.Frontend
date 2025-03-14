export default function Home() {
  return (
    <div className=" w-auto rounded-[50%] h-[90dvh] overflow-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12  ">
        {Array.from({ length: 96 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-full  aspect-square border  ${
              [7, 56, 28].includes(i) ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
