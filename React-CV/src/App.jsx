import Header from "./components/Header/Header"
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";


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
          <menu>
            <TabButton>2019</TabButton>
            <TabButton>2020</TabButton>
            <TabButton>2021</TabButton>
            <TabButton>2022</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App
