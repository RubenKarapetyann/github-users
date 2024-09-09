export interface UserOfList {
    login: string,
    id: number,
    avatar_url: string,
} 

export interface User extends UserOfList {
    name: string,
    location: string,
    followers: number,
    following: number,
    bio: string
}

export type UsersList = UserOfList[]