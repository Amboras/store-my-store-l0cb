'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X, LogIn, Hammer } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'
import CartDrawer from '@/components/cart/cart-drawer'
import { useCollections } from '@/hooks/use-collections'

export default function Header() {
  const { itemCount } = useCart()
  const { isLoggedIn } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: collections } = useCollections()

  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuCloseRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleMobileMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !mobileMenuRef.current) return
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#c9921e]/20 shadow-lg shadow-black/20'
            : 'bg-[#0d1117] border-b border-[#c9921e]/15'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-[68px] items-center justify-between gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 lg:hidden text-[#e8b84b]/80 hover:text-[#e8b84b] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Hammer className="h-6 w-6 text-[#c9921e] group-hover:text-[#e8b84b] transition-colors" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-semibold tracking-wide text-white">
                  The Resin Anvil
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c9921e]/70 font-body font-medium">
                  Forged in Lore
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/products"
                className="relative text-[13px] tracking-[0.1em] uppercase text-[#e8e8e8]/75 hover:text-[#e8b84b] transition-colors duration-200 py-1"
                prefetch={true}
              >
                Shop All
              </Link>
              {collections?.slice(0, 4).map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="relative text-[13px] tracking-[0.1em] uppercase text-[#e8e8e8]/75 hover:text-[#e8b84b] transition-colors duration-200 py-1"
                  prefetch={true}
                >
                  {collection.title}
                </Link>
              ))}
              <Link
                href="/about"
                className="relative text-[13px] tracking-[0.1em] uppercase text-[#e8e8e8]/75 hover:text-[#e8b84b] transition-colors duration-200 py-1"
                prefetch={true}
              >
                Our Craft
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-0.5">
              <Link
                href="/search"
                className="p-2.5 text-[#e8e8e8]/60 hover:text-[#e8b84b] transition-colors"
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href={isLoggedIn ? '/account' : '/auth/login'}
                className="p-2.5 text-[#e8e8e8]/60 hover:text-[#e8b84b] transition-colors hidden sm:block"
                aria-label={isLoggedIn ? 'Account' : 'Sign in'}
              >
                {isLoggedIn ? <User className="h-[18px] w-[18px]" /> : <LogIn className="h-[18px] w-[18px]" />}
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-[#e8e8e8]/60 hover:text-[#e8b84b] transition-colors"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#c9921e] text-[9px] font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleMobileMenuKeyDown}
            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-[#0d1117] border-r border-[#c9921e]/20 animate-slide-in-right"
          >
            <div className="flex items-center justify-between p-5 border-b border-[#c9921e]/20">
              <div className="flex items-center gap-2.5">
                <Hammer className="h-5 w-5 text-[#c9921e]" strokeWidth={1.75} />
                <span className="font-heading text-lg font-semibold text-white">The Resin Anvil</span>
              </div>
              <button
                ref={mobileMenuCloseRef}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-[#e8e8e8]/60 hover:text-[#e8b84b] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-5 space-y-1">
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3.5 text-base tracking-wide text-[#e8e8e8]/80 hover:text-[#e8b84b] transition-colors border-b border-[#c9921e]/10"
                prefetch={true}
              >
                Shop All
              </Link>
              {collections?.map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3.5 text-base tracking-wide text-[#e8e8e8]/80 hover:text-[#e8b84b] transition-colors border-b border-[#c9921e]/10"
                  prefetch={true}
                >
                  {collection.title}
                </Link>
              ))}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3.5 text-base tracking-wide text-[#e8e8e8]/80 hover:text-[#e8b84b] transition-colors border-b border-[#c9921e]/10"
                prefetch={true}
              >
                Our Craft
              </Link>
              <div className="pt-5 space-y-1">
                <Link
                  href={isLoggedIn ? '/account' : '/auth/login'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors"
                >
                  {isLoggedIn ? 'My Account' : 'Sign In'}
                </Link>
                <Link
                  href="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors"
                >
                  Search
                </Link>
              </div>
            </nav>
            {/* Mobile menu bottom tagline */}
            <div className="absolute bottom-8 left-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9921e]/50 font-body">
                Forged in Lore &amp; Layered in Light
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
