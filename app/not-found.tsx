'use client'

import AnimatedButton from '@/components/animated-button'

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-(--spacing(18)))] flex-col items-center justify-center gap-8">
      <h1 className="text-7xl">404</h1>
      <p className="max-w-lg px-4 text-center md:text-lg">
        Looks like the page you're looking for isn't here. Maybe it’s taking a
        break, just like we all need sometimes.
      </p>
      <AnimatedButton href="/" text="Back Home" />
    </div>
  )
}
