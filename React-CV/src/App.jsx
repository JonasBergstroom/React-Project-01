import Header from "./components/Header/Header"
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";


function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <section id="experience-info">
          <h2>My coding experience</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                kye={conceptItem.title}
                {...conceptItem}
              ></CoreConcept>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App
