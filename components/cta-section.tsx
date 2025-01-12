import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Fix Your Tech Issues?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
              Don't let tech problems slow you down. Contact us today for fast and reliable solutions.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

