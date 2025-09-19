import HeroSection from '@/features/hero/hero-section'
import ServicesSection from '@/features/services/services-section'

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  )
}
