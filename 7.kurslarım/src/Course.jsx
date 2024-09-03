import React from 'react'

function Course({course}) {
    const {id,title,description,price,link,image} = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={210} height={110} />
            <h4 className='coursetitle'>{title}</h4>
            <p className='coursedesc'>{description}</p>
            <h3 className='courseprice'>{price}₺</h3>
            <div className='courselink'><a style={{textDecoration:'none'}} href={link}>Satın almak için</a></div>
        </div>
        
    </div>
  )
}

export default Course