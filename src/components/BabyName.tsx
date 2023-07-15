import { babyNameData } from "../utils/babyNameData";
import { compareNames } from "../utils/compareNames";

export function BabyName(): JSX.Element {
  const listOfNames = babyNameData.map((object) => (
    <button key={object.id}>{object.name}</button>
  ));

  const sortNames = babyNameData.sort(compareNames);

  console.log(sortNames);

  return (
    <>
      <h1>Baby Name App</h1>
      <div>{listOfNames}</div>
    </>
  );
}
