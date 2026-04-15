import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Hammer, Flame, Sparkles, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Craft — The Story Behind The Resin Anvil',
  description: 'Discover the story behind The Resin Anvil — handcrafted resin art forged in South Africa with fantasy lore, passion, and obsessive attention to detail.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#0d1117] min-h-screen">
      {/* ─── HERO BANNER ─────────────────────────────────── */}
      <div className="relative bg-[#0b0f1a] border-b border-[#c9921e]/15 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9921e 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9921e]/40 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/25 rounded-full mb-6">
            <Flame className="h-3.5 w-3.5 text-[#e8b84b]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">Our Craft</span>
          </div>
          <h1 className="font-heading text-h1 lg:text-display-sm font-semibold text-white mb-4">
            The Story of the Anvil
          </h1>
          <p className="text-[#e8e8e8]/50 text-lg max-w-xl mx-auto leading-relaxed">
            A love story between fantasy worlds, artisan craft, and the quiet magic of making something by hand.
          </p>
        </div>
      </div>

      {/* ─── ORIGIN STORY ─────────────────────────────────── */}
      <section className="container-custom py-section max-w-4xl">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main text */}
          <div className="lg:col-span-3 space-y-6 text-[#e8e8e8]/65 leading-relaxed">
            <p className="font-heading text-xl text-white/90 leading-relaxed italic">
              &ldquo;I never intended to start a business. I just wanted to make dice that felt like they came from another world.&rdquo;
            </p>
            <p>
              The Resin Anvil was born at a kitchen table in South Africa, surrounded by silicone moulds, pigment powder, and far too many unfinished fantasy novels. What started as a hobby — pouring resin dice for a D&amp;D campaign — quickly became something more.
            </p>
            <p>
              People kept asking where to get them. So the forge was lit.
            </p>
            <p>
              Today, every piece that leaves The Resin Anvil is still made the same way it always has been: by hand, one at a time, with an obsessive eye for colour, clarity, and the kind of detail that makes you look twice.
            </p>
          </div>

          {/* Side stat card */}
          <div className="lg:col-span-2">
            <div className="forge-panel border border-[#c9921e]/15 rounded-sm p-8 space-y-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9921e]/40 to-transparent" />
              {[
                { value: '100%', label: 'Hand-poured & finished' },
                { value: '1/1', label: 'Unique pieces — no duplicates' },
                { value: 'ZA', label: 'Proudly South African' },
                { value: '∞', label: 'Lore embedded per piece' },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="font-heading text-2xl font-semibold gold-shimmer w-12 flex-shrink-0">{value}</span>
                  <span className="text-[#e8e8e8]/45 text-sm leading-snug pt-1">{label}</span>
                </div>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9921e]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────── */}
      <section className="bg-[#0b0f1a] border-y border-[#c9921e]/10 py-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/20 rounded-full mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#e8b84b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">The Forge Code</span>
            </div>
            <h2 className="font-heading text-h2 font-semibold text-white">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Hammer,
                title: 'No Mass Production',
                desc: 'Every piece is poured individually. We will never use automated filling or batch production. The work is in the hands.',
              },
              {
                icon: Sparkles,
                title: 'Lore in Every Layer',
                desc: 'We name our pieces. We give them stories. Every colour choice, every inclusion is intentional — chosen to evoke a world, a feeling, a place.',
              },
              {
                icon: Heart,
                title: 'Community First',
                desc: 'Built for gamers, collectors, and fantasy lovers. We\'re part of the same community you are — tabletop nights, painted minis, world-building sessions.',
              },
              {
                icon: Flame,
                title: 'Obsessive Detail',
                desc: 'We sand. We polish. We reject pieces that don\'t meet the standard. If it doesn\'t feel right in your hand, it doesn\'t leave the forge.',
              },
              {
                icon: Sparkles,
                title: 'Safe Materials',
                desc: 'We use professional-grade, low-odour epoxy resin. All finished pieces are fully cured and safe for handling — no stickiness, no residue.',
              },
              {
                icon: Hammer,
                title: 'South African Made',
                desc: 'We\'re proudly local. Every purchase supports a one-person studio making something it believes in, right here in South Africa.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group border border-[#c9921e]/10 bg-[#0d1117] hover:border-[#c9921e]/25 transition-colors rounded-sm p-7">
                <div className="p-2.5 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm inline-flex mb-5 group-hover:bg-[#c9921e]/10 transition-colors">
                  <Icon className="h-4.5 w-4.5 text-[#c9921e]" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-[#e8e8e8]/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="py-section">
        <div className="container-custom text-center max-w-xl">
          <h2 className="font-heading text-h2 font-semibold text-white mb-4">
            Ready to Find Your Piece?
          </h2>
          <p className="text-[#e8e8e8]/45 text-sm mb-8 leading-relaxed">
            Browse the current collection — dice sets, coasters, sculptures, bookmarks, and more. Every item ships across South Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="btn-gold inline-flex items-center gap-2 px-9 py-4 text-sm font-bold uppercase tracking-widest rounded-sm"
            >
              <Hammer className="h-4 w-4" strokeWidth={2} />
              Browse the Forge
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#c9921e]/25 text-[#e8e8e8]/60 hover:text-[#e8b84b] hover:border-[#c9921e]/50 text-sm font-semibold uppercase tracking-widest transition-all rounded-sm"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
