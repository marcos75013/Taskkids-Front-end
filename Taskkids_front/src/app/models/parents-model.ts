import { Children } from "./children-model";

export class Parents{
    id: number;
    email: string;
    password: string;
    nickname?: string;
    picture: string;
    children: Children[];

    constructor(id: number, email: string, password: string, nickname: string, picture: string, children: Children[]){
        this.id = id;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.picture = picture;
        this.children = children;
    }

}


