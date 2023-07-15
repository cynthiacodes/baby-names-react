import { babyNameData } from "../utils/babyNameData";
import { ascOrder } from "../utils/ascOrder";
import "./BabyApp.css";

export function BabyName(): JSX.Element {
  const listOfNames = babyNameData.map((baby) => (
    <button className = {baby.sex === "f"? "femaleName": "maleName"}key={baby.id}>{baby.name}</button>
  ));

  const sortNames = babyNameData.sort(ascOrder);

  console.log(sortNames);

  return (
    <>
      <h1>Baby Name App</h1>
      <div>{listOfNames}</div>
    </>
  );
}
