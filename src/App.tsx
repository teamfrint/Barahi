import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Footer from './components/layout/Footer'
import { HeroProps, ServicesProps, FooterProps } from './types'

function App() {
  const heroData: HeroProps = {
    title: "Build Faster with",
    titleHighlight: "Landing Kit",
    description: "The most flexible and reusable React foundation for your modern web projects. Focus on your business, we'll handle the architecture.",
    primaryAction: {
      text: "Get Started",
      onClick: () => console.log("Primary action clicked")
    },
    secondaryAction: {
      text: "Documentation",
      onClick: () => console.log("Secondary action clicked")
    }
  }

  const servicesData: ServicesProps = {
    title: "Everything you need",
    subtitle: "A comprehensive suite of tools and components to jumpstart your next project.",
    services: [
      {
        icon: "⚡",
        title: "Fast Performance",
        description: "Optimized for speed and efficiency, ensuring a smooth user experience across all devices."
      },
      {
        icon: "🧩",
        title: "Modular Design",
        description: "Easily swap components and styles to match your brand's unique identity."
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        description: "Looks great on desktops, tablets, and phones without any extra effort."
      }
    ]
  }

  const footerData: FooterProps = {
    brand: {
      logoText: "Landing",
      logoHighlight: "Kit",
      description: "Empowering developers to build beautiful websites in record time."
    },
    linkGroups: [
      {
        title: "Resources",
        links: [
          { text: "Features", href: "#" },
          { text: "Pricing", href: "#" },
          { text: "Tutorials", href: "#" }
        ]
      },
      {
        title: "Company",
        links: [
          { text: "About", href: "#" },
          { text: "Blog", href: "#" },
          { text: "Contact", href: "#" }
        ]
      }
    ],
    copyright: "Landing Kit Framework. All rights reserved."
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero {...heroData} />
        <Services {...servicesData} />
      </main>
      <Footer {...footerData} />
    </div>
  )
}

export default App
