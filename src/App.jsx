import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Leaf, Recycle } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="https://img1.wsimg.com/isteam/stock/9634"
            alt="Crystal clear water splash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            CRYSTAL H2O
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif italic">
              Pure Water, Pure Life
            </h2>
            
            <p className="text-lg md:text-2xl text-gray-100  max-w-2xl mx-auto">
              Experience the difference of crystal-clear purity in every drop
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Crystal H2O?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Droplet, title: "Pure & Refreshing", description: "Our advanced filtration ensures the purest, most refreshing water." },
              { Icon: Leaf, title: "Eco-Friendly", description: "Sustainable practices and packaging to protect our environment." },
              { Icon: Recycle, title: "100% Recyclable", description: "Our bottles are fully recyclable, promoting a circular economy." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Crystal Clear 500ml", image: "/placeholder.svg?height=300&width=150" },
              { name: "Mountain Spring 1L", image: "/placeholder.svg?height=300&width=150" },
              { name: "Sparkling Mineral 750ml", image: "/placeholder.svg?height=300&width=150" }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img src={product.image} alt={product.name} className="w-40 h-auto mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", quote: "Crystal H2O has become an essential part of my daily hydration routine. It tastes amazing!" },
              { name: "Mike R.", quote: "I love how Crystal H2O is committed to sustainability. Great taste and eco-friendly!" },
              { name: "Emily T.", quote: "The purity of Crystal H2O is unmatched. It's the only water brand I trust for my family." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Crystal H2O?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and make the switch to pure, refreshing hydration.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Order Now <ArrowRight className="inline-block ml-2" />
          </motion.button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Crystal H2O</h3>
              <p className="text-gray-400">Pure Water, Pure Life</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Products</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Email:  pashupati.enterprises25@gmail.com </p>
              <p className="text-gray-400 mb-4">Phone: 9564642525</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Crystal H2O. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;