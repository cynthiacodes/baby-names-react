import { useState } from "react";
import { babyNamesData } from "../utils/babyNamesData";
import { ascOrder } from "../utils/ascOrder";
import "./BabyApp.css";

export function BabyName(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const sortedBabyData = babyNamesData.sort(ascOrder);

  const filteredSearchData = sortedBabyData.filter((baby) =>
    baby.name.toLowerCase().includes(query)
  );

  const buttonsOfNames = filteredSearchData.map((baby) => (
    <button
      onClick={() => console.log(`button ${baby.name} have been clicked`)}
      className={baby.sex === "f" ? "femaleName" : "maleName"}
      key={baby.id}
    >
      {baby.name}
    </button>
  ));

  return (
    <>
      <h1>Baby Name App</h1>
      <div className="mainGrid">
        <input
          className="searchBar"
          placeholder="Search Baby Name"
          onChange={handleQuery}
          value={query}
        />
        <h2>Favourite:</h2>
        <hr />
        <div className="nameButtons">{buttonsOfNames}</div>
      </div>
    </>
  );
}
