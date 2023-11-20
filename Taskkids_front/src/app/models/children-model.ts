import { Parents } from "./parents-model";




export class Children{
    id: number;
    nickname: string;
    gender: string;
    age: number;
    scores: number;
    parent: Parents[];

    constructor(id: number,nickname: string,gender: string,age: number,scores: number,parent: Parents[]){
    
    this.id = id;
    this.nickname = nickname;
    this.gender = gender;
    this.age = age;
    this.scores = scores;
    this.parent = parent;
    }

}
