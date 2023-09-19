import React, { useState, useEffect } from 'react';
import "./RightSide.css";
import Product from "./Product";
import { Link } from 'react-router-dom';

function RightSidepannel(props){

    const [listOfProduct,setListOfProducts]= useState([]);

    useEffect(() =>{

        let list=[

            { id:12345,name: "Iphone 11",rating: "1234", price: "4682", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464514"},
            { id:85222,name: "Iphone 12",rating: "1234", price: "2365", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464375"},
            { id:55555,name: "Iphone 13",rating: "1234", price: "7856", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464413"},
            { id:1756369,name: "Iphone 13",rating: "1234", price: "7856", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464413"},
            { id:458620,name: "Iphone 13",rating: "1234", price: "7856", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464413"},
            { id:145630,name: "Iphone 14",rating: "1234", price: "1259", image:"https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939460320"}
        ]
        setListOfProducts(list);

    },[]);


    return(

        <div className="Rightside_main">

            {/* <Product rating="12344" price="5000" name="iphone 11"  image="https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464375"/>
            <Product />
            <Product />
            <Product />

            <Product />
            <Product />
            <Product />
            <Product /> */}

            {
               listOfProduct.map((item)=>(

                <Link to={"/order/"+item.id}>
               
                <Product definition={item} />
                </Link>
               )) 
            }
     
     {/* // <Product rating={item.rating} name={item.name} image={item.image} /> */}
     
     
         
        </div>
    );
}
export default RightSidepannel;