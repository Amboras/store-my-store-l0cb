'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Hammer, Flame, Shield, Truck, Star, Sparkles, Package } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — Dark forge aesthetic
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0d1117] overflow-hidden min-h-[88vh] flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9921e 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9921e]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c9921e]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/30 bg-[#c9921e]/5 rounded-full mb-8 animate-fade-in">
              <Flame className="h-3.5 w-3.5 text-[#e8b84b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#e8b84b] font-semibold">
                Handcrafted in South Africa
              </span>
              <Flame className="h-3.5 w-3.5 text-[#e8b84b]" />
            </div>

            {/* Main headline */}
            <h1 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight text-white mb-6 animate-fade-in-up">
              Forged in{' '}
              <span className="gold-shimmer">Lore</span>
              <br />
              <span className="text-[#e8e8e8]/80">Layered in Light</span>
            </h1>

            {/* Subheading */}
            <p className="text-[#e8e8e8]/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up">
              One-of-a-kind resin art pieces — dice sets, sculptures, coasters, and more.
              Every creation is cast by hand, infused with fantasy and fire.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <Link
                href="/products"
                className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:shadow-lg hover:shadow-[#c9921e]/25"
              >
                <Hammer className="h-4 w-4" strokeWidth={2} />
                Enter the Forge
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#c9921e]/30 text-[#e8e8e8]/70 hover:text-[#e8b84b] hover:border-[#c9921e]/60 text-sm font-semibold uppercase tracking-widest transition-all rounded-sm"
              >
                Our Craft
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center justify-center gap-1.5 mt-14 animate-fade-in">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[#e8b84b] text-[#e8b84b]" />
              ))}
              <span className="ml-2 text-sm text-[#e8e8e8]/45">
                Loved by collectors across South Africa
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════════════════
          CRAFT PILLARS — 3-column value props
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d1117] border-y border-[#c9921e]/15 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c9921e]/15">
            <div className="flex items-start gap-5 px-8 py-6 md:py-0 group">
              <div className="p-2.5 border border-[#c9921e]/25 bg-[#c9921e]/5 rounded-sm flex-shrink-0 group-hover:bg-[#c9921e]/10 transition-colors">
                <Hammer className="h-5 w-5 text-[#c9921e]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide mb-1">Hand-Poured & One of a Kind</p>
                <p className="text-[#e8e8e8]/45 text-xs leading-relaxed">Each piece is individually cast — no two are ever identical. True artisan craft.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 px-8 py-6 md:py-0 group">
              <div className="p-2.5 border border-[#c9921e]/25 bg-[#c9921e]/5 rounded-sm flex-shrink-0 group-hover:bg-[#c9921e]/10 transition-colors">
                <Truck className="h-5 w-5 text-[#c9921e]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide mb-1">Shipped Across South Africa</p>
                <p className="text-[#e8e8e8]/45 text-xs leading-relaxed">Free shipping on orders over R750. Carefully packed to arrive in perfect condition.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 px-8 py-6 md:py-0 group">
              <div className="p-2.5 border border-[#c9921e]/25 bg-[#c9921e]/5 rounded-sm flex-shrink-0 group-hover:bg-[#c9921e]/10 transition-colors">
                <Shield className="h-5 w-5 text-[#c9921e]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide mb-1">Secure &amp; Safe Checkout</p>
                <p className="text-[#e8e8e8]/45 text-xs leading-relaxed">SSL-encrypted payments. Shop with confidence every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COLLECTIONS — Dynamic collection sections
      ═══════════════════════════════════════════════════════ */}
      {isLoading ? (
        <section className="py-section bg-[#0d1117]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-3 w-24 bg-[#c9921e]/10 rounded mx-auto mb-4 animate-pulse" />
              <div className="h-8 w-56 bg-[#1e2a3a] rounded mx-auto animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-[#1e2a3a] rounded-sm animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : (
        /* If no collections yet — show a placeholder CTA */
        <section className="py-section bg-[#0d1117]">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/20 rounded-full mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#e8b84b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">The Collection</span>
            </div>
            <h2 className="font-heading text-h1 font-semibold text-white mb-4">
              New Pieces Coming Soon
            </h2>
            <p className="text-[#e8e8e8]/50 max-w-md mx-auto mb-8">
              The forge is lit. Fresh creations are being cast and cured — check back soon or subscribe for first access.
            </p>
            <Link
              href="/products"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-sm"
            >
              Browse All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          BRAND STORY — Editorial section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-section bg-[#0b0f1a]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Decorative forge panel (left) */}
            <div className="relative">
              <div className="aspect-[4/5] forge-panel rounded-sm overflow-hidden border border-[#c9921e]/15 flex items-center justify-center">
                <div className="text-center px-8">
                  {/* Decorative rune circle */}
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border border-[#c9921e]/20" />
                    <div className="absolute inset-4 rounded-full border border-[#c9921e]/15" />
                    <div className="absolute inset-8 rounded-full border border-[#c9921e]/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Hammer className="h-16 w-16 text-[#c9921e]/60" strokeWidth={1} />
                    </div>
                    {/* Rotating dots */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <div
                        key={deg}
                        className="absolute w-1.5 h-1.5 rounded-full bg-[#c9921e]/30"
                        style={{
                          top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 88}px - 3px)`,
                          left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 88}px - 3px)`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="font-heading text-2xl text-white/80 italic leading-relaxed">
                    &ldquo;Every pour is a spell.<br />Every piece, a relic.&rdquo;
                  </p>
                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#c9921e]/50 to-transparent mx-auto" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#c9921e] text-[#0d1117] px-5 py-3 rounded-sm shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest">Made in SA</p>
              </div>
            </div>

            {/* Text (right) */}
            <div className="space-y-6 lg:max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#c9921e]/25 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9921e]">The Craft</span>
              </div>
              <h2 className="font-heading text-h1 font-semibold text-white leading-tight">
                Where Fantasy Meets<br />
                <span className="gold-shimmer">Artisan Craft</span>
              </h2>
              <p className="text-[#e8e8e8]/55 leading-relaxed">
                The Resin Anvil was born from a love of tabletop gaming, fantasy worlds, and the quiet magic of making things by hand. Based in South Africa, every piece is poured, cured, and finished with obsessive care.
              </p>
              <p className="text-[#e8e8e8]/45 leading-relaxed text-sm">
                Whether it&apos;s a set of dice destined for a dragon&apos;s hoard or a coaster that glows like an ember, we craft objects that carry lore in their layers.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#c9921e]/15">
                <div>
                  <p className="font-heading text-3xl font-semibold gold-shimmer">100%</p>
                  <p className="text-[#e8e8e8]/40 text-xs mt-1 uppercase tracking-wide">Handcrafted</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold gold-shimmer">SA</p>
                  <p className="text-[#e8e8e8]/40 text-xs mt-1 uppercase tracking-wide">Made Local</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold gold-shimmer">1/1</p>
                  <p className="text-[#e8e8e8]/40 text-xs mt-1 uppercase tracking-wide">Unique Pieces</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#e8b84b] text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all"
              >
                The Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROCESS — How each piece is made
      ═══════════════════════════════════════════════════════ */}
      <section className="py-section bg-[#0d1117]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/20 rounded-full mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#e8b84b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">The Process</span>
            </div>
            <h2 className="font-heading text-h2 font-semibold text-white mb-3">
              From Concept to Cast
            </h2>
            <p className="text-[#e8e8e8]/45 max-w-xl mx-auto text-sm leading-relaxed">
              Every Resin Anvil piece follows the same sacred rite — poured by hand, one at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c9921e]/10 border border-[#c9921e]/10 rounded-sm overflow-hidden">
            {[
              { icon: Sparkles, step: '01', title: 'Design & Concept', desc: 'Every piece begins as a vision — sketched, coloured, and imagined before a single drop of resin is poured.' },
              { icon: Flame, step: '02', title: 'Pouring the Resin', desc: 'Pigments, inclusions, and glitter are layered into food-safe moulds. Timing is everything.' },
              { icon: Package, step: '03', title: 'Curing & Finishing', desc: 'Each piece cures for 24–72 hours, then is demoulded, sanded, and polished by hand.' },
              { icon: Hammer, step: '04', title: 'Quality & Dispatch', desc: 'Inspected, photographed, and packaged with care before heading to your door across South Africa.' },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="bg-[#0d1117] p-8 group hover:bg-[#111827] transition-colors"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9921e]/50 mt-1">{step}</span>
                  <div className="p-2 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm group-hover:bg-[#c9921e]/10 transition-colors">
                    <Icon className="h-4 w-4 text-[#c9921e]" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-[#e8e8e8]/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NEWSLETTER — Forge Dispatch
      ═══════════════════════════════════════════════════════ */}
      <section className="py-section bg-[#0b0f1a]">
        <div className="container-custom max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/20 rounded-full mb-6">
            <Flame className="h-3.5 w-3.5 text-[#e8b84b]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">The Forge Dispatch</span>
          </div>
          <h2 className="font-heading text-h2 font-semibold text-white mb-3">
            First to the Forge
          </h2>
          <p className="text-[#e8e8e8]/45 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            New drops, limited editions, lore behind the pieces, and exclusive subscriber discounts — delivered straight to your inbox.
          </p>

          {newsletterSubmitted ? (
            <div className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9921e]/30 bg-[#c9921e]/5 rounded-sm">
              <Sparkles className="h-4 w-4 text-[#e8b84b]" />
              <p className="text-[#e8b84b] font-semibold text-sm tracking-wide">You&apos;re in the scroll! Check your inbox.</p>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-[#ffffff06] border border-[#c9921e]/20 px-5 py-3.5 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/25 focus:outline-none focus:border-[#c9921e]/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-gold px-6 py-3.5 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all hover:shadow-lg hover:shadow-[#c9921e]/20"
              >
                Join the Forge
              </button>
            </form>
          )}

          <p className="mt-4 text-[#e8e8e8]/25 text-xs">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </>
  )
}
