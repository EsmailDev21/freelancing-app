import { Picture } from "./auth";
import { User } from "./user"


export type Team = {
    _id:string,
    members:User[],
    manager:User,
    createdOn:Date,
    purpose?:string,
    level:TeamLevel,
    brand?:Brand
    //add other attributes later like services, orders done, brand , etc...
}

export type Brand = {
    _id:string,
    name:string;
    logo:Picture
}
export enum TeamLevel{
    "JUST_ESTABLISHED",
    "SMALL_TEAM",
    "STARTUP",
    "COMPANY",
    "ENTERPRISE",
}