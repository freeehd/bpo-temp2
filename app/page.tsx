import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
    </main>
  )
}

