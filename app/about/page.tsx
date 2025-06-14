"use client"
import Image from"next/image"
import { motion } from "framer-motion"
import { BottomNavbar } from "@/components/bottom-navbar"
import { CartSidebar } from "@/components/cart-sidebar"
import { RefinedBackground } from "@/components/refined-background"

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      <RefinedBackground />

      {/* Header */}
      <header className="relative z-20 p-6 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <Image src="/dlogo.jpg" alt="logo" width={100} height={100} ></Image>
          <div>
            <h1 className="font-dancing text-2xl text-accent main-heading-glow">About Us</h1>
            <p className="text-body text-sm text-secondary">Know More</p>
          </div>
        </motion.div>
      </header>

      {/* About Content */}
      <section className="relative z-20 py-12 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl heading-primary text-center mb-8 text-accent"
          >
            About Doughniverse
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="modern-card p-8 mb-8"
          >
            <h2 className="heading-primary text-2xl text-accent mb-4">Our Story</h2>
            <p className="text-body text-primary text-lg leading-relaxed mb-4">
              Welcome to Doughniverse, Varanasi's premier dessert destination! We're not just another dessert shop –
              we're a universe of flavors, crafted with love and dedication to bring you the most extraordinary sweet
              experiences.
            </p>
            <p className="text-body text-primary text-lg leading-relaxed">
              Born from a passion for creating exceptional desserts, Doughniverse specializes in artisanal bombolonis,
              tubcakes, cheesecakes, and more. Every creation is 100% eggless, making our treats accessible to everyone
              while never compromising on taste or quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Eggless",
                description:
                  "All our desserts are completely eggless, ensuring everyone can enjoy our delicious treats without compromise.",
              },
              {
                title: "Exclusive",
                description:
                  "Unique recipes and flavors you won't find anywhere else. Each dessert is crafted with our signature touch.",
              },
              {
                title: "Epic",
                description:
                  "We don't just make desserts, we create epic experiences that leave lasting sweet memories.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="modern-card p-6 text-center"
                whileHover={{ y: -3 }}
              >
                <h3 className="heading-primary text-xl text-accent mb-3">{item.title}</h3>
                <p className="text-body text-primary">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-[var(--cream-yellow)] to-[var(--pale-yellow)] p-8 rounded-lg border-2 border-[var(--dark-charcoal)] mb-8"
            style={{ boxShadow: "3px 3px 0px var(--olive-green)" }}
          >
            <h2 className="heading-primary text-2xl text-[var(--dark-charcoal)] mb-4">Why Choose Doughniverse?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏪</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">
                    No Physical Store - Direct to You
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">WhatsApp Orders Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚚</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">
                    Delivery & Takeaway Available
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">11AM – 9PM Daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌱</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">100% Eggless Recipes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💝</span>
                  <span className="font-poppins text-[var(--dark-charcoal)] font-medium">Made with Love</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="modern-card p-8 text-center"
          >
            <h2 className="heading-primary text-2xl text-accent mb-4">Our Mission</h2>
            <p className="text-body text-primary text-lg leading-relaxed">
              To create a universe where every bite is a celebration, every dessert tells a story, and every customer
              becomes part of our sweet family. We believe in the power of desserts to bring joy, create memories, and
              connect hearts.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-[var(--dark-charcoal)] text-white py-8 px-6 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="flex justify-center space-x-6 mb-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/doughniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white smooth-transition border-2 border-white"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/919559545103"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white smooth-transition border-2 border-white"
            >
              <WhatsAppIcon />
            </motion.a>
          </div>
          <motion.p className="font-poppins text-lg mb-2 footer-text" whileHover={{ scale: 1.02 }}>
            Made with ❤️ for dessert lovers by daichianoop
          </motion.p>
          <p className="font-poppins footer-accent">© 2025 Doughniverse. All rights reserved.</p>
        </motion.div>
      </footer>

      <BottomNavbar />
      <CartSidebar />
    </div>
  )
}
