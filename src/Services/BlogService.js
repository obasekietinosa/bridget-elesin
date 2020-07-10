import fetch from "isomorphic-unfetch"

export default class BlogService {
    ROOT_URL = "https://services.etin.space/demos/bridgetelesin/blog.php/"
    BASE_API_URL = this.ROOT_URL
    POSTS_URL = this.BASE_API_URL
    CATEGORIES_URL = this.BASE_API_URL + "categories/"
    AUTHOR_URL = this.BASE_API_URL + "authors/"

    getCategories = async (limit=100, offset=0) => {
        console.log("Getting categories")
        let response = await fetch(this.CATEGORIES_URL + "?_embed&per_page=" + limit, {
            method: 'GET'
        })
        let data = await response.json()
        return data
    }

    getPosts = async (limit=100, offset=0) => {
        console.log("Getting posts")
        let response = await fetch(this.POSTS_URL + "?limit=" + limit, {
            method: 'GET'
        })
        let data = await response.json()
        console.log(data)
        return data
    }

    getCategoryWithPosts = async (categorySlug, limit=100, offset=0) => {
        console.log("Getting category")
        let categoryResponse = await fetch(`${this.CATEGORIES_URL}?slug=${categorySlug}`, {
            method: 'GET'
        })
        let data = await categoryResponse.json()
        data = data[0]

        let postsResponse = await fetch(this.POSTS_URL + "?_embed&categories=" + data.id + "&per_page=" + limit, {
            method: 'GET'
        })
        data.posts = await postsResponse.json()
        return data
    }

    getPostBySlug = async (slug) => {
        console.log("Getting Post")
        let response = await fetch(this.POSTS_URL + "?post_id=" + slug, {
            method: 'GET'
        })
        let data = await response.json()
        return data
    }

    getAuthor = async (slug) => {
        console.log("Getting Author")
        let response = await fetch(this.AUTHOR_URL + "?slug=" + slug, {
            method: 'GET'
        })
        let data = await response.json()
        return data[0]
    }
}