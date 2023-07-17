import { useState } from "react";
import { babyNamesData } from "../utils/babyNamesData";
import { ascOrder } from "../utils/ascOrder";
import "./BabyApp.css";
import { filterButtons } from "../utils/filterButtonsData";
import { buttonId } from "../utils/buttonId";

interface Baby {
  id: number;
  name: string;
  sex: string;
}

export function BabyName(): JSX.Element {
  const [mainList, setMainList] = useState<Baby[]>(babyNamesData);
  const [query, setQuery] = useState<string>("");
  const [favourite, setFavourite] = useState<Baby[]>([]);

  const sortedBabyData = mainList.sort(ascOrder);
  const filteredSearchData = sortedBabyData.filter((baby) =>
    baby.name.toLowerCase().includes(query)
  );
  const buttonsOfNames = filteredSearchData.map((baby) => (
    <button
      onClick={() => moveToFaveClick(baby)}
      className={baby.sex === "f" ? "femaleName" : "maleName"}
      key={baby.id}
    >
      {baby.name}
    </button>
  ));
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const moveToFaveClick = (baby: Baby) => {
    setFavourite((prevFaves) => [...prevFaves, baby]);
    setMainList((prevNames) =>
      prevNames.filter((babyInfo) => babyInfo.name !== baby.name)
    );
  };

  const moveToMainList = (baby: Baby) => {
    setMainList((prevNames) => [...prevNames, baby]);
    setFavourite((prevFaves) =>
      prevFaves.filter((babyInfo) => babyInfo.name !== baby.name)
    );
  };

  const faveNamesButtons = favourite.map((baby) => (
    <button
      onClick={() => moveToMainList(baby)}
      className={baby.sex === "f" ? "femaleName" : "maleName"}
      key={baby.id}
    >
      {baby.name}
    </button>
  ));

  const filterGenderButtons = filterButtons.map((button) => (
    <>
      <button
        id={buttonId(button)}
        className="filter"
        key={button.name}
        value={button.gender}
      >
        <img  className = "icon" src={button.icon} alt="" />
      </button>
    </>
  ));

  return (
    <>
      <h1>Baby Names App</h1>
      <div className="mainGrid">
        <input
          className="searchBar"
          placeholder="Search Baby Name"
          onChange={handleQuery}
          value={query}
        />
        {filterGenderButtons}
        <h2 className="fave">Favourite:{faveNamesButtons}</h2>
        <hr className="line" />
        <div className="nameButtons">{buttonsOfNames}</div>
      </div>
    </>
  );
}
