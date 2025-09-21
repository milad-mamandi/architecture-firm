'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import contactBg from '@/public/contact-bg.avif'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import AnimatedBadge from './animated-badge'
import { Card, CardContent } from './ui/card'
import { WritingText } from './ui/shadcn-io/writing-text'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  email: z.email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Form submitted successfully!')
    form.reset()
  }

  return (
    <section className="flex flex-col items-center bg-[#6e99c2] pt-6 md:pt-20">
      <div
        className="z-10 flex max-w-3xl flex-col items-center justify-center gap-4 p-4 text-center"
        id="contact"
      >
        <AnimatedBadge>Get in Touch</AnimatedBadge>
        <WritingText
          text="Let’s Make Your Property Journey Effortless"
          className="text-white"
        />

        <p className="mt-4 text-lg tracking-tight text-white">
          Have questions or ready to take the next step? Whether you’re looking
          to buy, rent, or invest, our team is here to guide you every step of
          the way. Let’s turn your property goals into reality.
        </p>
        <Card className="mt-8 w-full rounded-4xl">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full text-start">
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full text-start">
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full text-start">
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full text-start">
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-2 w-full rounded-3xl py-6 text-lg font-normal"
                >
                  Book a Call
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-[-41%]" />
      <Image
        src={contactBg}
        className="h-auto w-full"
        alt="contact-bg"
        sizes="100vw"
      />
    </section>
  )
}
