'use client'

import Link from 'next/link'
import { Hammer, Instagram, Facebook, Mail, MapPin } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
    { label: 'Collections', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'Our Craft', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="bg-[#0d1117] border-t border-[#c9921e]/15">
      {/* Top decorative strip */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9921e]/40 to-transparent" />

      <div className="container-custom py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <Hammer className="h-5 w-5 text-[#c9921e] group-hover:text-[#e8b84b] transition-colors" strokeWidth={1.75} />
              <span className="font-heading text-xl font-semibold text-white">
                The Resin Anvil
              </span>
            </Link>
            <p className="text-sm text-[#e8e8e8]/50 leading-relaxed max-w-xs mb-6">
              Handcrafted resin art forged with fantasy lore and layered in light. Each piece is unique, made with passion in South Africa.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/theresinanvil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm text-[#e8e8e8]/40 hover:text-[#e8b84b] hover:bg-[#c9921e]/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/theresinanvil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm text-[#e8e8e8]/40 hover:text-[#e8b84b] hover:bg-[#c9921e]/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@theresinanvil.co.za"
                className="p-2 rounded-sm text-[#e8e8e8]/40 hover:text-[#e8b84b] hover:bg-[#c9921e]/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9921e] mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9921e] mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Location */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9921e] mb-5">
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 text-[#e8e8e8]/35">
              <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-[#c9921e]/50" />
              <p className="text-xs leading-relaxed">
                Handcrafted in<br />South Africa
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-12 pt-10 border-t border-[#c9921e]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9921e] mb-1">
                The Forge Dispatch
              </p>
              <p className="text-sm text-[#e8e8e8]/50">
                New releases, lore drops &amp; exclusive offers — straight to your inbox.
              </p>
            </div>
            <form
              className="flex gap-0 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 bg-[#ffffff08] border border-[#c9921e]/20 px-4 py-2.5 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/30 focus:outline-none focus:border-[#c9921e]/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#c9921e] hover:bg-[#e8b84b] text-[#0d1117] text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#c9921e]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8e8e8]/25">
            &copy; {new Date().getFullYear()} The Resin Anvil. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-[#e8e8e8]/25 hover:text-[#c9921e] transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-[#e8e8e8]/20">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
