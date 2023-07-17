interface Button{
    name: string,
    gender: string,
    icon: string,
}



export function buttonId(buttonData: Button): string{
    if (buttonData.gender.toLowerCase() === "f") {
        return "girlButton";
       
      } else if (buttonData.gender.toLowerCase() === "m") {
        return "boyButton";
        
      } else {
        return "allButton";
       
      }

}