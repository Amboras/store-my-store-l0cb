'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import ProductGrid from '@/components/product/product-grid'

interface CollectionSectionProps {
  collection: {
    id: string
    handle: string
    title: string
    metadata?: Record<string, unknown>
  }
  alternate?: boolean
}

export default function CollectionSection({ collection, alternate }: CollectionSectionProps) {
  const description = collection.metadata?.description
  const hasDescription = typeof description === 'string' && description

  return (
    <section className={`py-section ${alternate ? 'bg-[#0b0f1a]' : 'bg-[#0d1117]'} border-t border-[#c9921e]/10`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#c9921e]/20 rounded-full mb-3">
              <Sparkles className="h-3 w-3 text-[#e8b84b]" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9921e]">Collection</span>
            </div>
            <h2 className="font-heading text-h2 font-semibold text-white">
              {collection.title}
            </h2>
            {hasDescription && (
              <p className="text-[#e8e8e8]/45 mt-2 max-w-lg text-sm leading-relaxed">{description}</p>
            )}
          </div>
          <Link
            href={`/collections/${collection.handle}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#e8e8e8]/50 hover:text-[#e8b84b] transition-colors whitespace-nowrap group"
            prefetch={true}
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Gold rule */}
        <div className="h-px bg-gradient-to-r from-[#c9921e]/30 via-[#c9921e]/10 to-transparent mb-10" />

        {/* Product Grid */}
        <ProductGrid collectionId={collection.id} limit={4} />

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href={`/collections/${collection.handle}`}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#c9921e]/25 text-[#e8e8e8]/55 hover:text-[#e8b84b] hover:border-[#c9921e]/50 text-sm font-semibold uppercase tracking-widest transition-all rounded-sm"
            prefetch={true}
          >
            See All in {collection.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
