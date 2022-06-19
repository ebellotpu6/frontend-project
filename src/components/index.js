export { default as Background } from "./Background";
export { default as Header } from "./Header";
export { default as MenuItem } from "./MenuItem";
export { default as Breadcrumb } from "./Breadcrumb";
export { default as Loading } from "./Loading";
export { default as ObjectCard } from "./ObjectCard";
export { default as ObjectLink } from "./ObjectLink";
export { default as ObjectInfo } from "./ObjectInfo";
export { default as InfoContent } from "./InfoContent";
export { default as CharacterDetails } from "./CharacterDetails";
export { default as FilmDetails } from "./FilmDetails";
export { default as SpecieDetails } from "./SpecieDetails";
export { default as StarshipDetails } from "./StarshipDetails";
export { default as VehicleDetails } from "./VehicleDetails";
export { default as PlanetDetails } from "./PlanetDetails";
export { default as ExtraInfo } from "./ExtraInfo";
export { default as ObjectExtraInfo } from "./ObjectExtraInfo";
export { default as ObjectCard2 } from "./ObjectCard2";
export { default as Footer } from "./Footer";

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}