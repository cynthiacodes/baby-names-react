interface Button{
    name: string,
    gender: string,
    icon: string,
}



export function buttonId(buttonData: Button): string{
    if (buttonData.gender === "f") {
        return "girlButton";
       
      } else if (buttonData.gender === "m") {
        return "boyButton";
        
      } else {
        return "allButton";
       
      }

}