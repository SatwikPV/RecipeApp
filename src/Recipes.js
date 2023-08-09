import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image}) => {
    return (
        <div className={style.reci}>
            <h1>
                {title}
            </h1>
            <p>
                Calories: {calories}
            </p>
            <img src={image} alt='' className={style.image}/>
        </div>
    )
}

export default Recipe;