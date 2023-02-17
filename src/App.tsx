import clsx from "clsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Header />
      <div className="relative isolate flex-auto">
        <Hero />
      </div>
    </div>
  );
}
export default App;
