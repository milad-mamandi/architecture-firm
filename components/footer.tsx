import { FacebookIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'

import ContactForm from './contact-form'

export default function Footer() {
  return (
    <footer className="mt-8">
      <ContactForm />
      <div className="flex flex-col justify-between bg-black p-4 text-white md:flex-row md:items-end md:p-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2 md:justify-center">
            <Image
              src="/logo-white.avif"
              alt="Logo"
              width={58}
              height={58}
              className="w-10 md:w-[58px]"
            />
            <span className="text-lg font-semibold uppercase md:text-2xl">
              Architectura
            </span>
          </div>
          <a href="tel:+989911216353">
            <p className="mt-2 text-lg">+98-991-121-6353</p>
          </a>
          <a href="mailto:m.mamandi72@gmail.com">
            <p className="text-lg">m.mamandi72@gmail.com</p>
          </a>
          <p className="text-lg">Tehran, Iran</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mt-4 flex flex-row gap-4 md:mt-0 md:justify-end">
            <a
              href="https://www.linkedin.com/in/milad-mamandi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-neutral-800 p-2 text-center shadow-sm hover:bg-neutral-700 md:p-3">
                <LinkedinIcon strokeWidth={1} />
              </div>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-neutral-800 p-2 text-center shadow-sm hover:bg-neutral-700 md:p-3">
                <FacebookIcon strokeWidth={1} />
              </div>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-neutral-800 p-2 text-center shadow-sm hover:bg-neutral-700 md:p-3">
                <YoutubeIcon strokeWidth={1} />
              </div>
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()}. All rights reserved by Milad
            Mamandi.
          </p>
        </div>
      </div>
    </footer>
  )
}
