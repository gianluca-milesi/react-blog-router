import style from "./Card.module.css"

function Card({ item = {}, deleteItem = () => { } }) {

    const { id, title, image, content } = item

    return (
        <div className={style.card}>
            <img src={image} className={style.card_figure} />
            <div className={style.card_body}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <button className={style.delete_button} onClick={() => deleteItem(id)}>Elimina</button>
        </div>
    )
}

export default Card