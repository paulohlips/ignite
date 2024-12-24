type PostProps = {
    author: string,
    content: string
}

export const Post = ({ author, content }: PostProps) => {
    return (
        <div>
            <p>Author: {author}</p>
            <p>{content}</p>
        </div>
    )
}