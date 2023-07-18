import { ascOrder } from "./ascOrder";
import { babyNamesData } from "./babyNamesData";

export function filterBabyNames(gender: string) {
  const sortedData = babyNamesData.sort(ascOrder);
  const filteredNames = sortedData.filter((baby) => baby.sex === gender);
  return filteredNames;
}
