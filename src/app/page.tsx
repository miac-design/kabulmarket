import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaThumbsUp, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Kabul Halal Market"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="#about" className="text-gray-800 hover:text-gray-600">About</Link>
          <Link href="#products" className="text-gray-800 hover:text-gray-600">Products</Link>
          <Link href="#reviews" className="text-gray-800 hover:text-gray-600">Reviews</Link>
          <Link href="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Kabul International Halal Market</h1>
        <p className="text-xl text-gray-600 mb-8">Your local source for fresh halal meats and groceries in Austin, Texas.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kabul International Halal Market is a trusted local halal grocery store in Austin, Texas. 
          We are dedicated to serving our community with the freshest meats, a wide variety of spices, 
          and a comprehensive selection of groceries. Our commitment to community values, customer satisfaction, 
          and quality service sets us apart.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        
        <div className="space-y-12">
          {/* Fresh Halal Meats */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fresh Halal Meats</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Beef: Premium cuts of halal beef</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Lamb: Tender halal lamb</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Chicken: Fresh halal chicken</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Goat: High-quality halal goat</span>
              </li>
            </ul>
          </div>

          {/* Imported Spices & Pantry Goods */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Imported Spices & Pantry Goods</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Spices: Authentic spices from around the world</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Rice: Variety of rice grains</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Lentils: High-quality lentils</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Oils: Cooking oils and ghee</span>
              </li>
            </ul>
          </div>

          {/* Fresh Produce */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fresh Produce</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Fruits: Fresh and seasonal fruits</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Vegetables: Variety of fresh vegetables</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">•</span>
                <span>Herbs: Aromatic herbs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/avatar1.jpg"
                    alt="Sarah Khan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Sarah Khan</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Kabul Halal International Market is my go-to for top-notch halal meats and groceries! 
                The freshness of their products is consistently outstanding, and you can tell they 
                prioritize quality. The staff are friendly and helpful.
              </p>
              <div className="mt-4 flex items-center text-primary">
                <FaThumbsUp className="mr-2" />
                <span>Helpful</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/avatar2.jpg"
                    alt="Omar Khan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Omar Khan</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Top-notch halal meats and groceries with consistently fresh products and outstanding quality.
              </p>
              <div className="mt-4 flex items-center text-primary">
                <FaThumbsUp className="mr-2" />
                <span>Helpful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-primary text-2xl">📍</div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>6611 Airport Blvd, Austin, TX 78752</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-primary text-2xl">📞</div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>(512) 827-6557</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-primary text-2xl">🕘</div>
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p>Open Daily – Closes at 9 PM</p>
                </div>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/map.jpg"
                  alt="Store Location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-primary">Payment Options</h2>
          <p className="mb-8">We accept SNAP/EBT, credit cards, and debit cards for your convenience.</p>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <GiWheat className="text-4xl text-primary mb-2" />
              <span className="text-sm">SNAP/EBT</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCreditCard className="text-4xl text-primary mb-2" />
              <span className="text-sm">Credit Cards</span>
            </div>
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-4xl text-primary mb-2" />
              <span className="text-sm">Debit Cards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 