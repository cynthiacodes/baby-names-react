import { babyNameData } from "../utils/babyNameData";
import { ascOrder } from "../utils/ascOrder";

export function BabyName(): JSX.Element {
  const listOfNames = babyNameData.map((object) => (
    <button key={object.id}>{object.name}</button>
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
