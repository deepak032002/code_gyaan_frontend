export const getBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/v1/blog/getPublishBlog/")
    return res.json()
}