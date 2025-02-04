import MarianaMachoski from "./mariana-machoski/user-info.json";
import LeticiaLeahy from "./leticia-leahy/user-info.json";

const users = {
  "mariana-machoski": MarianaMachoski,
  "leticia-leahy": LeticiaLeahy,
};

export type User = keyof typeof users;

export default users;
