import React from 'react'
import Rest from './Rest'
const Restaurents = (props) => {
  return (
    <div className="container divider">
            <div className="cards">
            {props.restaurents.map((restaurents)=>(
                <Rest key={restaurents.id} restaurents={restaurents} />
            ))}
            </div>
        </div>
  )
}

export default Restaurents