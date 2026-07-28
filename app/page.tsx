import Home from "./templates/home";
import Contact from "./templates/contact";
import Service from "./templates/services";
import Acordeon from "./components/acordeon";
export default function Main() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-hidden text-white w-full h-full scroll-smooth">
      <Home id="empresa" />
      <Acordeon id="clientes" />
      <div className="bg-grey-scale-onyx w-[60%] h-[1px] my-40" />
      <Service id="servicos" />
      <div className="bg-grey-scale-onyx w-[60%] h-[1px] my-40" />
      <Contact id="contato" />
      <div className="bg-grey-scale-onyx w-[60%] h-[1px] my-40" />
    </main>
  );
}
