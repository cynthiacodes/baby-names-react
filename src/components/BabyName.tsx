import { useState } from "react";
import { babyNameData } from "../utils/babyNameData";
import { ascOrder } from "../utils/ascOrder";
import "./BabyApp.css";

export function BabyName(): JSX.Element {
  const [inputName, setInputName] = useState<string>();

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const buttonsOfNames = babyNameData.map((baby) => (
    <button
      className={baby.sex === "f" ? "femaleName" : "maleName"}
      key={baby.id}
    >
      {baby.name}
    </button>
  ));

  const sortNames = babyNameData.sort(ascOrder);

  return (
    <>
      <h1>Baby Name App</h1>
      <div className="mainGrid">
        <input
          className="searchBar"
          placeholder="Search Baby Name"
          onChange={handleSearchInput}
          value={inputName}
        />
        <hr />
        <div className="nameButtons">{buttonsOfNames}</div>
      </div>
    </>
  );
}
