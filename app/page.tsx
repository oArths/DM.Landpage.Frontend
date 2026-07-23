import Acordeon from "./components/acordeon";
import Header from "./templates/header";
import Home from "./templates/home";
import Service from "./templates/services";
export default function Main() {
  return (
    <main className="bg-ui-colors-background min-h-screen flex flex-col items-center overflow-hidden text-white w-full h-full">
      <Header />
      <Home />
      <Acordeon />
      <div className="bg-grey-scale-onyx w-[60%] h-[1px] my-40" />
      <Service />
      <div className="bg-grey-scale-onyx w-[60%] h-[1px] my-40" />
    </main>
  );
}
