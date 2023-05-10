import { EntityIdentifier } from "./entity";

export interface Meme {
  id: EntityIdentifier;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
