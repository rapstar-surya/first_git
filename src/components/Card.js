import React from 'react'
import style from './Card.module.css'
const Card = (props) => {
    const { name, image, designation, description } = props.User1;
    // const {names, images, designations, descriptions} = props.User2;

    return (
        <>
            <div className={style.mainDiv}>
                <img className={style.imeg} src={image} /><br /><br />
                {designation}
                <h1>{name}</h1>
                {description}<br />
            </div>
           
        </>
    )
}

export default Card

// https://docs.google.com/document/d/1uGL1ZBnKlVZPIPoJK96oh8vN1ra59lDlHWurvwapKFM/edit