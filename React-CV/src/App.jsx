import Header from "./components/Header/Header"
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedYear, setselectedYear] = useState('test')
  
  function handleSelect(selectedButton) {
    setselectedYear(selectedButton);
  }
  
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
          <menu style={{ marginTop: "3rem" }}>
            <TabButton onSelect={() => handleSelect("2019")}>
              2019
            </TabButton>
            <TabButton onSelect={() => handleSelect("2020")}>
              2020
            </TabButton>
            <TabButton onSelect={() => handleSelect("2021")}>
              2021
            </TabButton>
            <TabButton onSelect={() => handleSelect("2022")}>
              2022
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>Headline</h3>
            <p>Information</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
