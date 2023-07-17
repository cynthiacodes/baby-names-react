interface Button{
    name: string,
    gender: string,
    icon: string,
};



export function buttonId(buttonData: Button): string{
    if (buttonData.gender === "girl") {
        return "girlButton";
       
      } else if (buttonData.gender === "boy") {
        return "boyButton";
        
      } else {
        return "allButton";
       
      }

}