import Home from "./templates/home";
import Contact from "./templates/contact";
import Service from "./templates/services";
import Acordeon from "./components/acordeon";
export default function Main() {
  return (
    <main className="flex flex-col items-center w-full h-full min-h-screen overflow-hidden text-grey-scale-off-white">
      <Home id="empresa" />
      <Acordeon id="clientes" />
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <Service id="servicos" />
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <Contact id="contato" />
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
    </main>
  );
}
