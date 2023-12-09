// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ProductDetails = () => {
    const [getProducts, setGetProducts] = useState([]);
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const n = location;
    // console.log(location);
    useEffect(() => {
        fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/productDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setGetProducts(data)
            });
    }, [id])

    const handleAddToCart = (getProducts) => {
        console.log(getProducts);
        const addToCartProducts = {
            user: user.email,
            image: getProducts.image,
            productName: getProducts.productName,
            brandName: getProducts.brandName,
            price: getProducts.price,
            shortDescription: getProducts.shortDescription,
            ratting: getProducts.ratting
        }
        fetch('https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/addToCard', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addToCartProducts)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Add to Your Cart',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(result => {
                    if (result.isConfirmed) {
                          navigate('/')
                      }
                  })
            }
            })
    }
    return (
        <div > 
            {
                <div className="grid grid-col-1 max-w-4xl mx-auto my-40" key={getProducts._id}>
                    <div className="card lg:card-side bg-base-100 h-[350px] shadow-xl rounded-none">
                            <figure><img className=" h-[300px]" src={getProducts.image}alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{getProducts.productName}</h2>
                                <h2 className="card-title text-2xl text-red-600" >{getProducts.brandName}</h2>
                                {/* <h2 className="">Type: {getProducts.type}</h2> */}
                                <h2 className="">Price: {getProducts.price}</h2>
                                <h2 className=""><span className="font-bold">Short Description:</span> {getProducts.shortDescription}</h2>
                                {/* <h2 className="">Rattings: {getProducts.ratting}</h2>     */}
                                <div className="flex items-center gap-3">
                                    {/* <Link to={`/productDetails/${p._id}`} className="btn btn-active">Details</Link> */}
                                    <button onClick={()=>handleAddToCart(getProducts)} className="btn btn-active btn-neutral">Add to Cart</button>
                                </div>                
                            </div> 
                        </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;