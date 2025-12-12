// basic functioning types

/* export type loadStatus = "success" | "failure" | "loading" */







//specific types

export interface LoadParams {
    slug: string
}


export interface ClassProp {
    class?: string; 
}


type ContentTypes = "paragraph" | "subtitle" | "tip" | "code";

export interface ContentBlock {
    type: ContentTypes;
    text: string,
}

export interface Post {
    title: string,
    slug: string,
    technology: string,
    date: string, 
    read_time_estimation: number,
    author_name: string, 
    author_degree: string,
    summary: string, 
    content: ContentBlock[],
    conclusion: string, 
    tags: string
}

export type ManyPosts = Post[]
