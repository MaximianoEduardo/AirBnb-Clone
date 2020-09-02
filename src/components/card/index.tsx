import React from 'react';
import './styles.css'

interface CardProps{

  src: string
  title: string
  description: string
  price?: number

}

const Card: React.FC<CardProps> = ({ src, title, description, price }) => {
  return (
      <div className="card">
          <img src={src} alt={title}/>
          <div className="card__info">
            <h2>{title}</h2>
            <span>{description}</span>
            
              {
                price ? (
                  <span> $ {price} /Night</span>
                ) : (
                  <>
                  </>
                )
              }
            
          </div>
      </div>
  )
}

export default Card;
