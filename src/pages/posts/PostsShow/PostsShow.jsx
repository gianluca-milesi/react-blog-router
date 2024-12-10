import style from "./PostsShow.module.css"
import sectionsStyle from "../../Sections.module.css"
import placeholder from "../../../assets/placeholder.png"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { API_BASE_URI } from "../../../config"


function PostsShow() {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const { title, image, content, tags = [], category } = post

    function fetchPost() {
        axios.get(`${API_BASE_URI}posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [id])


    return (
        <main>
            <section className="hero">
                <div className="container">
                    <h1>{title}</h1>
                    <figure>
                        <button className="button_back">Indietro</button>
                        <img src="..." />
                    </figure>
                </div>
            </section>

            <section className="information">
                <div className="container">
                    <div className="information_body">
                        <p>{content}</p>
                        <p>{tags}</p>
                        <p>{category}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PostsShow