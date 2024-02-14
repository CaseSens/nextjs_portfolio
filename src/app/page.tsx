import About from "./about";
import Header from "./components/Header";
import Home from "./home";

export default function Main() {
  return (
    <main
      id="main"
      className="relative min-h-screen w-full flex flex-col bg-darkblue"
    >
      <div
        style={{ backgroundImage: `url("grain.svg")` }}
        className="absolute pointer-events-none bg-repeat z-10 w-full h-full"
      ></div>
      <Header />
      <Home />
      <About />
    </main>
  );
}
