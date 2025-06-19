import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaThumbsUp, FaCreditCard, FaMoneyBillWave, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GiWheat, GiHamburgerMenu } from 'react-icons/gi';

// Hero section background image with fallback
const heroImage = '/images/hero-market.jpg';
const defaultHeroImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 1200 800"%3E%3Crect fill="%232e7d32" width="1200" height="800"/%3E%3C/svg%3E';

// Product images with fallbacks
const productImages = {
  meat: '/images/halal-meat.jpg',
  spices: '/images/spices.jpg',
  produce: '/images/fresh-produce.jpg'
};

export default function Home() {
  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/images/logo.svg"
                  alt="Kabul Halal Market Logo"
                  fill
                  className="object-contain"
                />
              </div>
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
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/images/hero-bg.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <Image
                src="/images/halal-certified.svg"
                alt="Halal Certified"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Welcome to Kabul International Halal Market
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh Halal Meats',
                description: 'Premium quality halal-certified meats',
                price: 'From $8.99/lb',
                icon: '/images/meat-icon.svg'
              },
              {
                title: 'Imported Spices',
                description: 'Authentic spices from around the world',
                price: 'From $4.99',
                icon: '/images/spices-icon.svg'
              },
              {
                title: 'Fresh Produce',
                description: 'Local and imported fresh vegetables',
                price: 'Market Price',
                icon: '/images/produce-icon.svg'
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{product.title}</h3>
                <p className="text-gray-600 text-center mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">{product.price}</span>
                  <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-primary/5 rounded-lg flex items-center justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/logo.svg"
                  alt="Kabul Halal Market Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kabul International Halal Market is a trusted local halal grocery store in Austin, Texas. 
                We are dedicated to serving our community with the freshest meats, a wide variety of spices, 
                and a comprehensive selection of groceries. Our commitment to community values, customer satisfaction, 
                and quality service sets us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl font-bold">SK</span>
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
                "Kabul Halal International Market is my go-to for top-notch halal meats and groceries! 
                The freshness of their products is consistently outstanding, and you can tell they 
                prioritize quality. The staff are friendly and helpful."
              </p>
              <div className="mt-4 flex items-center text-primary">
                <FaThumbsUp className="mr-2" />
                <span>Helpful</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl font-bold">MA</span>
                </div>
                <div>
                  <h3 className="font-bold">Mohammed Ahmed</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The best halal market in Austin! Their meat selection is unmatched, 
                and their spices are authentic and fresh. The staff is knowledgeable 
                and always willing to help. Highly recommend!"
              </p>
              <div className="mt-4 flex items-center text-primary">
                <FaThumbsUp className="mr-2" />
                <span>Helpful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaStar className="text-4xl text-primary" />,
                title: 'Quality Products',
                description: 'Premium halal-certified meats and products'
              },
              {
                icon: <FaCreditCard className="text-4xl text-primary" />,
                title: 'Easy Payment',
                description: 'Multiple payment options available'
              },
              {
                icon: <FaMoneyBillWave className="text-4xl text-primary" />,
                title: 'Best Prices',
                description: 'Competitive prices on all products'
              },
              {
                icon: <GiWheat className="text-4xl text-primary" />,
                title: 'Fresh Selection',
                description: 'Daily fresh products and produce'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-700">6611 Airport Blvd</p>
                    <p className="text-gray-700">Austin, TX 78752</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-700">(512) 827-6557</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:bakhter2021@gmail.com" className="hover:text-primary">
                        bakhter2021@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-gray-700">Monday - Sunday</p>
                    <p className="text-gray-700">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=6611+Airport+Blvd,Austin,TX+78752&zoom=15`}>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kabul Halal Market</h3>
              <p className="text-gray-400">Your trusted source for halal products in Austin, Texas.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Main Street</p>
              <p className="text-gray-400">Austin, TX 78701</p>
              <p className="text-gray-400">(512) 555-0123</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Kabul Halal Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 