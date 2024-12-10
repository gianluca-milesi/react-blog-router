import style from "./PostsShow.module.css"
import sectionsStyle from "../../Sections.module.css"
import placeholder from "../../../assets/placeholder.png"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URI } from "../../../config"
import Tags from "../../../components/Tags/Tags.jsx"


function PostsShow() {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const { title, image, content, tags = [], category } = post

    const navigate = useNavigate()

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
            <section className={style.hero_section}>
                <figure className={style.hero_figure}>
                    <button className={style.back_button} onClick={() => navigate(-1)}>&larr;</button>
                    <img className={style.post_figure} src={`${API_BASE_URI}${image}`} />
                </figure>
            </section>

            <section className={style.information_section}>
                <div className="container">
                    <div className={style.information_body}>
                        <div className={style.description}>
                            <h1>{title}</h1>
                            <p>{content}</p>
                        </div>
                        <div className={style.categories}>
                            <Tags tags={tags} />
                            <p>Difficoltà: <span className={category === "difficile" ? style.difficile : style.facile}>{category}</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PostsShow