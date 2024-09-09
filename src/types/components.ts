import { User, UserOfList } from "./api";
import { Palette } from "./styles";

export interface TextProps {
    label: string,
    color?: Palette,
    size?: 32 | 18 | 12 | 24 | 28 | 15,
    weight?: "bold" | "lighter"
}

export type CardProps = Pick<UserOfList, "login" | "avatar_url" | "id"> & {
    onStarClick : (isActive: boolean) => void,
    isInFavourite : boolean
}

export type UserProfileLayoutProps = User

export type UserProfileInfoProps = Pick<User, "login" | "name" | "location" | "bio" | "followers" | "following">

export interface ImageProps {
    url: string,
    width?: number,
    classList?: string[],
    alt?: string
}

export interface AdvancedSearchInputProps {
    name: string,
    title: string,
    maxValue: number,
    initialValue: number
}