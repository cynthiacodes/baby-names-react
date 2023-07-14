import { babyNameData } from "../utils/babyNameData";
export function BabyName(): JSX.Element {

const listOfNames = babyNameData.map((object) => <button key = {object.id}>{object.name}</button>)

 


  return (
    <>
      <h1>Baby Name App</h1>
      <div>{listOfNames}</div>

    </>
  );
}
