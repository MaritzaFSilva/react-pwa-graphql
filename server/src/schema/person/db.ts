import { Person } from "../../@types/person.js";

import personsJson from "../../../data/db.json" assert { type: "json" };

const persons = personsJson as Person[];

export { persons };
