
import UpdateProductCard from './UpdateProductCard';
import { useEffect, useState } from 'react';

const Updateproduct = () => {
    // const [items, setItems] = useState([])

    // const [brands, setBrands] = useState([]);
    // useEffect(() => {
    //     fetch('/brand.json')
    //         .then(res => res.json())
    //         .then(data => setBrands(data))
    // }, [])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const handleBrand = bndName => {
    //     console.log(products);
    //     //    let reqProduct = []
    //     if (bndName != 'All') {
    //         const targetProduct = products.filter(product => product.brandName === bndName);

    //         console.log(targetProduct);
    //         setItems(targetProduct)
    //     }
    //     else {
    //         setItems(products)
    //     }
    // }


    return (
        <div >
            <div>
                <h2 className="text-6xl text-center font-extrabold italic my-10">Available Products</h2>
            </div>
            {/* <div className='flex flex-row gap-3 items-center justify-center normal-case max-w-2xl mx-auto my-10'>
                
                {
                    brands.map(product => <button onClick={() => handleBrand(`${product.brandName}`)} key={product.id} className="btn btn-outline normal-case btn-neutral">{product.brandName}</button>)
                }
            </div> */}

           
            <div className='max-w-5xl mx-auto grid grid-cols-2 gap-5'>
                {
                    products.map(product => <UpdateProductCard
                        key={product._id} product={product}></UpdateProductCard>)
                }

            </div>



        </div>
    );
};

export default Updateproduct;