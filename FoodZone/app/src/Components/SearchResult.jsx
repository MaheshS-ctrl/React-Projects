import React from 'react'

const SearchResult = ({data:foods}) => {       //data jo app.jsx se aya he usko alias de diya 'foods'
  return (
      <div className="FoodCartContainer">

        <div className="FoodCards">
            {
                foods?.map( ({name , image , text , price}) => (
                    <div key={name} className='food-Card'>

                    <div className='food-image'>
                        <img src={image} alt="Not Found" />
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <div className='prize'>
                            <button>${price.toFixed(2)}</button>
                        </div>
                    </div>

                    </div>
                )
                )
            }
        </div>

      </div>
  )
}

export default SearchResult
