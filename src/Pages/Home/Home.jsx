import Branddetails from "../BrandDetails/Branddetails";
import Updateproduct from "../UpdateProducts/Updateproduct";
import img from '../../assets/starbucks.jpeg'

const Home = () => {
    return (
        <div className="max-w-6xl  mx-auto">
             <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598625456132-bb6cb433e42e?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Foodies</h1>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 my-20 lg:grid-cols-2">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl py-3 font-bold italic ">About Foodis!!!</h2>
                <img className="w-80" src={img} alt="" />
            </div>
            <div className="text-justify  font-extralight ">
            Food and drinks are an essential part of human existence, satisfying our basic needs while also offering avenues for creativity and pleasure. From the rich, comforting aroma of a freshly baked loaf of bread to the vibrant, tangy burst of a ripe citrus fruit, the world of food tantalizes our senses and nourishes our bodies. Culinary traditions span the globe, offering a kaleidoscope of flavors and textures. Whether it's a hearty bowl of ramen in Japan, a fragrant curry in India, or a classic hamburger in the United States, each culture's cuisine tells a unique story. In the realm of beverages, too, there's a vast array to explore - from the earthy warmth of coffee to the effervescent delight of champagne. Food and drinks connect people, create memories, and bring joy to our lives. They're a celebration of the senses and a testament to our cultural diversity.
            </div>

        </div>
            <Updateproduct></Updateproduct>
            <Branddetails></Branddetails>
        </div>
    );
};

export default Home;