"use client"

import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { services } from "@/lib/services"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  return (
    <header className="sticky top-0 md:top-4 z-50 w-full    ">
      <div className="container mx-auto flex h-16 items-center justify-between bg-secondary/60 rounded-md mt-0 md:mt-4 px-4 mb-0 md:mb-5 backdrop-blur">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold ml-4 md:ml-0 flex items-center ">
            <Image
              src="https://centralcoastwilds.com/slices/newfront_01.jpg"
              alt="Central Coast Wilds Logo"
              width={45}
              height={52}
              className="inline-block rounded-sm mr-2"
            />
            <p className="text-primary text-sm"><span className="font-bold">Central</span> <br /> Coast Wilds</p>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/" className="bg-transparent">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[550px] md:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.link}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>

                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about/team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Our Team</div>

                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about/links" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Links & Resources</div>

                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/articles" className="bg-transparent">Articles</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact" className="bg-transparent">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/jobs" className="bg-transparent">Jobs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/appointment">Book Appointment</Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-4 mt-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                  Home
                </Link>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && services.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="pl-8 py-2 text-sm text-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="flex items-center justify-between text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    About
                    <ChevronDown className={cn("h-4 w-4 transition-transform", aboutOpen && "rotate-180")} />
                  </button>
                  {aboutOpen && (
                    <>
                      <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="pl-8 py-2 text-sm text-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                        About Us
                      </Link>
                      <Link href="/about/team" onClick={() => setMobileMenuOpen(false)} className="pl-8 py-2 text-sm text-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                        Our Team
                      </Link>
                      <Link href="/about/links" onClick={() => setMobileMenuOpen(false)} className="pl-8 py-2 text-sm text-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                        Links & Resources
                      </Link>
                    </>
                  )}
                </div>
                <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                  Articles
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                  Contact
                </Link>
                <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="text-md font-medium px-4 py-2 rounded-md transition-colors hover:bg-primary hover:text-primary-foreground">
                  Job Opportunities
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
