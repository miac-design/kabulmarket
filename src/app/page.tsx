import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaThumbsUp, FaCreditCard, FaMoneyBillWave, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GiWheat, GiHamburgerMenu } from 'react-icons/gi';

const defaultHeroImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 1200 800"%3E%3Crect fill="%232e7d32" width="1200" height="800"/%3E%3C/svg%3E';

export default function Home() {
  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Kabul Halal Market</h1>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 hover:text-primary">
              <GiHamburgerMenu size={24} />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Products', 'Reviews', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-primary relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${defaultHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Kabul International Halal Market
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your local source for fresh halal meats and groceries in Austin, Texas.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Browse Fresh Meats
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh Halal Meats',
                description: 'Premium quality halal-certified meats',
                price: 'From $8.99/lb',
                bgColor: '#f87171'
              },
              {
                title: 'Imported Spices',
                description: 'Authentic spices from around the world',
                price: 'From $4.99',
                bgColor: '#fbbf24'
              },
              {
                title: 'Fresh Produce',
                description: 'Local and imported fresh vegetables',
                price: 'Market Price',
                bgColor: '#34d399'
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              >
                <div 
                  className="h-48 relative"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">{product.price}</span>
                    <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* Footer */}
      <footer className="bg-footer-bg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>6611 Airport Blvd</p>
              <p>Austin, TX 78752</p>
              <p>(512) 827-6557</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>9:00 AM - 9:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="flex space-x-4">
                <GiWheat size={24} className="text-primary" />
                <FaCreditCard size={24} className="text-primary" />
                <FaMoneyBillWave size={24} className="text-primary" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Kabul International Halal Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 