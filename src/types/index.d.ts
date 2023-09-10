export interface Tag {
    _id: string;
    name: string;
}

export interface Category {
    _id: string;
    name: string;
}

export interface Author {
    _id: string;
    name: string;
    email: string;
    avtar: string;
}

export interface BlogPost {
    _id: string;
    title: string;
    description: string;
    content: string;
    banner: string;
    meta_title: string;
    meta_description: string;
    tags: Tag[];
    category: Category;
    comment: any[]; // Assuming comment is an array of some type
    author: Author;
    createdAt: string;
    updatedAt: string;
    slug: string;
    __v: number;
}
