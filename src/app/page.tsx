import About from "./about";
import Header from "./components/Header";
import Home from "./home";

export default function Main() {
  return (
    <main
      id="main"
      className="relative h-full w-full flex flex-col"
    >
      <Header />
      <Home />
      <About />
    </main>
  );
}
