export interface bookType {
    type: LibraryType,
    bookData: bookData,
    handleClick: Function
}

export type LibraryType = 'table' | 'grid'

export interface bookData {
    name: string,
    images: any,
    author: string,
    biography: any,
    appearance: any
}

export interface radioInput {
    onChange: Function,
    defaultValue: LibraryType,
}

export default bookType;