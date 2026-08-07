import CoreConceptList from "./CoreConceptList";
import TabButton from "./TabButton";
import { useState } from "react";
import { TAB_CONTENT } from "../data.js";

export default function TabContent() {
  const [selectedYear, setselectedYear] = useState("firstTab");

  function handleSelect(selectedButton) {
    setselectedYear(selectedButton);
  }

  return (
    <section id="experience-info">
      <h2>My coding experience</h2>
      <CoreConceptList />
      <menu style={{ marginTop: "3rem" }}>
        <TabButton onSelect={() => handleSelect("firstTab")}>2019</TabButton>
        <TabButton onSelect={() => handleSelect("secondTab")}>2020</TabButton>
        <TabButton onSelect={() => handleSelect("thirdTab")}>2021</TabButton>
        <TabButton onSelect={() => handleSelect("fourthTab")}>2022</TabButton>
      </menu>
      <div id="tab-content">
        <h3>{TAB_CONTENT[selectedYear].headline}</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          {TAB_CONTENT[selectedYear].description}
        </p>
      </div>
    </section>
  );
}
