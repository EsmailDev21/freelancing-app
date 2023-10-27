import { Picture } from "./auth"
import { Team } from "./team"
import { User } from "./user"

export type Service = {
    _id:string,
    title:string,
    description:string,
    details:string,
    packages:ServicePackage[],
    categories:ServiceCategory[],
    images:Picture[],
    attachements?:any
}

export type ServicePackage={
    type:PackageType
    name:string,
    description:string;
    price:number,

}
export enum PackageType{
    "STARTER",
    "ADVANCED",
    "PREMIUM"
}
export type ServiceCategory={
    _id:string
    name:string,
    subCategories?:ServiceCategory | null,

}