import AboutSection from '@/features/about/about-section'
import ExpertsSection from '@/features/experts/experts-section'
import HeroSection from '@/features/hero/hero-section'
import PropertiesSection from '@/features/properties/properties-section'
import ServicesSection from '@/features/services/services-section'

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col gap-24 px-4 pb-20 xl:px-20">
        <HeroSection />
        <ServicesSection />
        <PropertiesSection />
        <AboutSection />
        <ExpertsSection />
      </main>
    </div>
  )
}
