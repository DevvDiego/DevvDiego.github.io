// basic functioning types

/* export type loadStatus = "success" | "failure" | "loading" */

// component types

export interface IconProps {
    name?: string,
    isDecorative?: boolean,
    fill?: string,
    stroke?: "currentColor" | string,
    width?: string,
    height?: string,
    children?: any
} 


export interface LabelProps {
    id: string,
    class?: string
    children: any
}


export interface ModalProps {
    open: boolean,
    title: string,
    isDestructive?: string,
    children: any
}


export interface InputProps {
    value: string | number | Date,
    oninput?: any,
    type: "button" | "text" | "email" | "phone" | "date" |"password",
    id: string,
    label: string, 
    placeholder: string,
    isRequired?: boolean,
    isDisabled?: boolean
}


export interface SelectProps {
    value: string | number,
    id: string,
    label: string,
    isRequired?: boolean,
    isDisabled?: boolean,
    class?: string,
    children: any
}


export interface TextareaProps {
    value: string,
    id: string,
    label: string,
    rows?: number,
    isRequired?: boolean,
    isDisabled?: boolean
}


export interface BlogCardProps {
    slug: string,
    title: string,
    summary: string,
    date: string | Date
    read_time_estimation: number,
    class?: string
}





//specific types

export interface LoadParams {
    slug: string
}


export interface FetchStatus {
    success: boolean,
    error: boolean,
    loading: boolean
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
    date: string | Date, 
    read_time_estimation: number,
    author_name: string, 
    author_degree: string,
    summary: string, 
    content: ContentBlock[],
    conclusion: string, 
    tags: string
}

export type ManyPosts = Post[]
