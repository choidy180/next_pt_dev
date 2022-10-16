import { atom } from "recoil";
import { v1 } from "uuid";

export const isThemeAtom = atom<Boolean | Boolean[] | undefined>({
    key: `isTheme`,
    default: true,
})