interface Baby {
    id: number; 
    name: string; 
    sex: string;
}

export function compareNames(a:Baby, b:Baby): number {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
