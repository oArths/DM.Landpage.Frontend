import Acordeon from "./components/acordeon";
import Header from "./templates/header";
import Home from "./templates/home";
export default function Main() {
  return (
    <main className="bg-ui-colors-background min-h-screen flex flex-col items-center text-white w-full h-full">
      <Header />
      <Home />
      <Acordeon/>
    </main>
  );
}
