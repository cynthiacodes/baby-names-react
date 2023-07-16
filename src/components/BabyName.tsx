import { useState } from "react";
import { babyNamesData } from "../utils/babyNamesData";
import { ascOrder } from "../utils/ascOrder";
import "./BabyApp.css";

interface Baby {
  id: number;
  name: string;
  sex: string;
}

export function BabyName(): JSX.Element {
  const [babyName, setBabyName] = useState<Baby[]>(babyNamesData);
  const [query, setQuery] = useState<string>("");
  const [favourite, setFavourite] = useState<Baby[]>([]);

  const sortedBabyData = babyName.sort(ascOrder);
  const filteredSearchData = sortedBabyData.filter((baby) =>
    baby.name.toLowerCase().includes(query)
  );
  const buttonsOfNames = filteredSearchData.map((baby) => (
    <button
      onClick={() => handleFaveClick(baby)}
      className={baby.sex === "f" ? "femaleName" : "maleName"}
      key={baby.id}
    >
      {baby.name}
    </button>
  ));
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFaveClick = (baby: Baby) => {
    console.log(`button ${baby.name} have been clicked`, baby);
    setFavourite((prevFaves) => [...prevFaves, baby]);
    setBabyName((prevNames) =>
      prevNames.filter((babyInfo) => babyInfo.name !== baby.name)
    );
  };

  const faveNamesButtons = favourite.map((baby) => (
    <button
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
        <h2>Favourite:{faveNamesButtons}</h2>
        <hr />
        <div className="nameButtons">{buttonsOfNames}</div>
      </div>
    </>
  );
}
