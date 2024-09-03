import React from 'react'

function Product(props) {

    const { productName, price } = props;      //Bunu console.log(props) da yapabiliriz. Aşağıdaki yorumlar full buna ait olacak
    //return içinde
    //<div></div>
    //<div> İsim: {props.producName} </div>
    //<div> İsim: {props.price} </div>

    //ya da en başta function Product(productName , price){} olarak da yapabiliriz sadece




    return (
        <div>
            <div>Ürün Bilgileri</div>

            <div>
                <div>İsim:{productName} </div>
                <div>Fiyat:{price}TL </div>
            </div>


        </div>
    )
}

export default Product