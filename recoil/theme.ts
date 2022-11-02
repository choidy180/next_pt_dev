import { atom } from "recoil";
import { v1 } from "uuid";

export const isThemeAtom = atom<string>({
    key: `isTheme`,
    default: '#1e272e',
})

export const isMobileAtom = atom<Boolean | Boolean[] | undefined>({
    key: `isMobile`,
    default: false,
})