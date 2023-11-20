
export class Tasks{
    id: number;
    description: string;
    rewardAmount: number;
    periodicity: string;
    //parent: Parents[];

    constructor(id: number,description: string,rewardAmount: number,periodicity: string){
    
    this.id = id;
    this.description = description;
    this.rewardAmount = rewardAmount;
    this.periodicity = periodicity;
    //this.parent = parent;
    }




}