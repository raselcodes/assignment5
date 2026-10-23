import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechCard from "./components/TechCard.jsx";
import YourStack from "./components/YourStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Load data from the JSON file (not hardcoded in the component)
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technologies."))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("Your stack was cleared.");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore the <span className="text-brand">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px] items-start">
            {loading ? (
              <div className="flex items-center justify-center gap-3 py-24 text-slate-500">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                Loading technologies...
              </div>
            ) : (
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    added={stack.some((item) => item.id === tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
            )}

            <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}




<b>

</b>