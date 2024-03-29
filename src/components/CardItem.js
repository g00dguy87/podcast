import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link'>
                <figure className='cards__item__pic-wrap'>
                    <img src='/' alt='brandit. Folge 1' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Placeholder</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem
