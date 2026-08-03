import Header from "./components/Header/Header"
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { TAB_CONTENT } from "./data.js";

function App() {
  const [selectedYear, setselectedYear] = useState("firstTab")
  
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
            <TabButton onSelect={() => handleSelect("firstTab")}>
              2019
            </TabButton>
            <TabButton onSelect={() => handleSelect("secondTab")}>
              2020
            </TabButton>
            <TabButton onSelect={() => handleSelect("thirdTab")}>
              2021
            </TabButton>
            <TabButton onSelect={() => handleSelect("fourthTab")}>
              2022
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{TAB_CONTENT[selectedYear].headline}</h3>
            <p style={{ whiteSpace: "pre-line" }}>
              {TAB_CONTENT[selectedYear].description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
