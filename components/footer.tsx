import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-primary">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Image
              src="https://centralcoastwilds.com/slices/newfront_01.jpg"
              alt="Central Coast Wilds Logo"
              width={52}
              height={52}
              className="inline-block rounded-sm mr-2 mb-4"
            />
            <h3 className="mb-4 text-lg font-semibold text-white">Central Coast Wilds</h3>
            <p className="text-sm text-white/70">
              Restoring the habitats that sustain us.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/team/" className="text-white/70 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-white/70 hover:text-white">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-white/70 hover:text-white">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/consulting" className="text-white/70 hover:text-white">
                  Ecological Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/restoration" className="text-white/70 hover:text-white">
                  Ecological Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/agriculture" className="text-white/70 hover:text-white">
                  Ecological Agriculture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
            <div className="flex flex-col space-x-4">

              <p className="text-white/70 text-sm"><strong>Nursery:</strong> (831) 459-0655<br /><strong>Office:</strong> (831) 459-0656</p>
              <p className="text-sm text-white/70"><strong>Email:</strong>info@ccw.eco</p>
              <p className="text-sm text-white/70"><strong>Mailing Address:</strong>
                125 Walk Circle
                Santa Cruz, CA 95060</p>
              <Link href="https://www.instagram.com/centralcoastwilds/" className="text-white/70 hover:text-white mt-4">
                <Instagram />
              </Link>

            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary/20 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} CCW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
