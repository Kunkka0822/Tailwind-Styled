import { ID } from "../common"

export type roomType = {
    id: ID;
    name: String;
    game: String;
    maxPlayers: Number;
    curPlayers: Number;
    limit: String;
    stakes: String;
}