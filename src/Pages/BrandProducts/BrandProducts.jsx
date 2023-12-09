// import React from 'react';
import img1 from '../../assets/ban1.jpg'
import img2 from '../../assets/ban3.jpg'
import img4 from '../../assets/McDonal1.jpg'
import img5 from '../../assets/McDonal2.jpg'

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandProducts = () => {
    const [brandProducts, setBrandProducts] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/brandProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setBrandProducts(data)
            });
    }, [id])
    return (
        <div>

            <div className="carousel w-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2}className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <h2 className=" mt-20 text-center font-mono font-bold text-4xl">{id}</h2>
            <div className="flex items-center justify-center mt-20 mb-20">
                {
                    brandProducts.length == 0 ? <p className="text-4xl text-red-500">There have no Items on {id}</p> : ""
                }
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            brandProducts.map(brandProduct => <div key={brandProduct._id}>
                                <div>
                                    <div>
                                        <div className="card lg:card-side bg-base-100 h-[350px] shadow-xl rounded-none">
                                            <figure><img className=" h-[300px]" src={brandProduct.image} alt="Album" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{brandProduct.productName}</h2>
                                                <h2 className="card-title text-2xl text-red-600" >{brandProduct.brandName}</h2>
                                                <h2 className="">Type: {brandProduct.type}</h2>
                                                <h2 className="">Price: {brandProduct.price}</h2>
                                                {/* <h2 className=""><span className="font-bold">Short Description:</span> {brandProduct.shortDescription}</h2> */}
                                                <h2 className="">Rattings: {brandProduct.ratting}</h2>
                                                <div className="flex items-center gap-3">
                                                    <Link to={{ pathname: `/productDetails/${brandProduct._id}` }} className="btn btn-active">Details</Link>
                                                    <Link to={`/updateProducts/${brandProduct._id}`} className="btn btn-active btn-neutral">Update</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;