interface ProductCardProps {
    icon: string;
    title: string;
    price: string;
    description: string;
    titleColor?: string; // optional prop for color
  }
  
  export default function ProductCard({ icon, title, price, description,titleColor = "text-gray-900" }: ProductCardProps) {
    return (
      <div className="bg-pink-100 p-4 rounded-lg shadow-sm relative">
        <div className="flex items-start">
          <span className="text-2xl mr-4">{icon}</span>
          <div>
            <h3 className={`text-lg font-semibold ${titleColor}`}>{title}</h3>
            <p className="text-gray-600">{description}</p>
            <a href="https://wa.me/1234567890" className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-orange-600">Get in touch&gt;</a>
          </div>
        </div>
        <span className="absolute top-4 right-4 bg-yellow-200 text-black px-3 py-1 rounded-full text-sm">{price}</span>
      </div>
    );
  }



