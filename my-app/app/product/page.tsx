
import Image from "next/image";
import girlimage from "../../public/image/girl.png";
import blueimage from "../../public/image/blue.png";
import redimage from "../../public/image/red.png";


const products = [
  {
    id: 1,
    name: "Shirt Soft Cotton",
    price: "SAR 40.00",
    image: 'blue.png',
  },
  {
    id: 2,
    name: "Zip Up Neck Shirt",
    price: "SAR 40.00",
    image: 'red.png',
  },
  {
    id: 3,
    name: "Classic Long Sleeve",
    price: "SAR 40.00",
    image: "red.png",
  },
  {
    id: 4,
    name: "Shirt Soft Cotton",
    price: "SAR 40.00",
    image: "blue.png",
  },
  {
    id: 5,
    name: "Classic Long Sleeve",
    price: "SAR 40.00",
    image:"blue.png",

   
  },
  {
    id: 6,
    name: "Shirt Soft Cotton",
    price: "SAR 40.00",
    image: "blue.png",
  },
];

export default function ProductBody() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen px-4 md:px-10 py-6">
  
      <div className="relative  h-[250px] rounded-xl overflow-hidden mb-8">
        <Image src={girlimage} alt="philo.png" width={600} height={600} />
            
          


        <div className="absolute inset-0 bg-black/20 flex items-center">
          <div className="pl-10 text-white">
            <h1 className="text-5xl font-light leading-tight">
              Simple <br /> is More
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        
        <aside className="bg-white p-5 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-5">Filter</h2>

          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Brand</h3>

            <div className="space-y-2 text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Nike
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Adidas
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Puma
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Uniqlo
              </label>
            </div>
          </div>

    
          <div className="mb-6">
            <h3 className="font-medium mb-3">Size</h3>

            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border px-3 py-2 rounded-md hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="font-medium mb-3">Colors</h3>

            <div className="flex gap-3">
              {[
                "bg-black",
                "bg-red-500",
                "bg-yellow-400",
                "bg-green-500",
                "bg-blue-500",
                "bg-purple-500",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer ${color}`}
                />
              ))}
            </div>
          </div>
        </aside>

        
        <main>
        
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              64 Result for clothes
            </h2>

            <select className="border rounded-lg px-4 py-2 bg-white">
              <option>Popular</option>
              <option>Newest</option>
              <option>Low Price</option>
              <option>High Price</option>
            </select>
          </div>

    
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="relative  h-[260px] mb-4">
                  <Image src={redimage}
                   alt={'red.png'}
                  width={200}
                   height={200}
                   
                    />

                  
                </div>

                <h3 className="font-medium text-lg">{product.name}</h3>

                <p className="text-black-600 font-semibold mt-2">
                  {product.price}
                </p>

                <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
