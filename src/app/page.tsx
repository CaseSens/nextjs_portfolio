import About from "./about";
import Home from "./home";

export default function Main() {
  return (
    <main id="main" className="h-full w-full min-h-full flex flex-col shrink-0 grow-0 hide-scrollbar">
      <Home />
      <About />
    </main>
  );
}
