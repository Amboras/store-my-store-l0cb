'use client'

import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-[#0d1117] via-[#1a2035] to-[#0d1117] border-b border-[#c9921e]/20">
      {/* Gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9921e]/60 to-transparent" />

      <div className="container-custom flex items-center justify-center py-2.5 text-sm">
        <div className="flex items-center gap-2.5 text-[#e8e8e8]/80">
          <Sparkles className="h-3 w-3 text-[#e8b84b] flex-shrink-0" />
          <p className="tracking-wide text-xs sm:text-sm text-center">
            <span className="text-[#e8b84b] font-semibold">Free shipping</span>
            {' '}on all orders over R750 &mdash;{' '}
            <Link href="/products" className="underline underline-offset-2 hover:text-[#e8b84b] transition-colors">
              Explore the Forge
            </Link>
          </p>
          <Sparkles className="h-3 w-3 text-[#e8b84b] flex-shrink-0" />
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 text-[#e8e8e8]/40 hover:text-[#e8b84b] transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
