'use client'

import { usePolicies } from '@/hooks/use-policies'
import { Mail, MapPin, Clock, Phone, Flame, Loader2, Sparkles, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const { policies, isLoading, error } = usePolicies()
  const [submitted, setSubmitted] = useState(false)

  const contactEmail = policies?.contact_email || 'hello@theresinanvil.co.za'
  const contactPhone = policies?.contact_phone
  const contactAddress = policies?.contact_address

  return (
    <div className="bg-[#0d1117] min-h-screen">
      {/* ─── BANNER ──────────────────────────────────────── */}
      <div className="relative bg-[#0b0f1a] border-b border-[#c9921e]/15 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9921e 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9921e]/40 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9921e]/25 rounded-full mb-5">
            <Flame className="h-3.5 w-3.5 text-[#e8b84b]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9921e]">Get in Touch</span>
          </div>
          <h1 className="font-heading text-h1 font-semibold text-white mb-3">Send a Raven</h1>
          <p className="text-[#e8e8e8]/45 max-w-md mx-auto text-sm leading-relaxed">
            Questions about a piece? Custom orders? Commission requests? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* ─── MAIN CONTENT ────────────────────────────────── */}
      <div className="container-custom py-section">
        <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-h3 font-semibold text-white mb-2">Your Message</h2>
            <p className="text-[#e8e8e8]/40 text-sm mb-8">We reply within 24–48 hours. Custom orders welcome.</p>

            {submitted ? (
              <div className="border border-[#c9921e]/25 bg-[#c9921e]/5 rounded-sm p-8 text-center">
                <Sparkles className="h-8 w-8 text-[#e8b84b] mx-auto mb-4" />
                <p className="font-heading text-xl text-white mb-2">Message Received!</p>
                <p className="text-[#e8e8e8]/50 text-sm">The raven is on its way. We&apos;ll reply within 24–48 hours.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c9921e]/70 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Elara"
                      className="w-full bg-[#ffffff05] border border-[#c9921e]/15 focus:border-[#c9921e]/40 px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/20 focus:outline-none transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c9921e]/70 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Stormcrow"
                      className="w-full bg-[#ffffff05] border border-[#c9921e]/15 focus:border-[#c9921e]/40 px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/20 focus:outline-none transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c9921e]/70 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@yourquest.co.za"
                    className="w-full bg-[#ffffff05] border border-[#c9921e]/15 focus:border-[#c9921e]/40 px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/20 focus:outline-none transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c9921e]/70 mb-2">Subject</label>
                  <select className="w-full bg-[#0d1117] border border-[#c9921e]/15 focus:border-[#c9921e]/40 px-4 py-3 text-sm text-[#e8e8e8]/60 focus:outline-none transition-colors rounded-sm">
                    <option value="">Select a topic...</option>
                    <option value="order">Order enquiry</option>
                    <option value="custom">Custom / commission request</option>
                    <option value="product">Product question</option>
                    <option value="wholesale">Wholesale / stockist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c9921e]/70 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us what you&apos;re looking for..."
                    rows={5}
                    className="w-full bg-[#ffffff05] border border-[#c9921e]/15 focus:border-[#c9921e]/40 px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#e8e8e8]/20 focus:outline-none transition-colors resize-none rounded-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-3.5 text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:shadow-lg hover:shadow-[#c9921e]/20"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pt-10">
            <div className="forge-panel border border-[#c9921e]/15 rounded-sm p-7 space-y-7">
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9921e]/30 to-transparent" />

              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-[#c9921e]/50" />
                </div>
              ) : (
                <>
                  <div className="flex gap-4">
                    <div className="p-2 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm flex-shrink-0">
                      <Mail className="h-4 w-4 text-[#c9921e]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-[#e8e8e8]/50 text-sm hover:text-[#e8b84b] transition-colors"
                      >
                        {contactEmail}
                      </a>
                      <p className="text-[#e8e8e8]/30 text-xs mt-1">Reply within 24–48 hours</p>
                    </div>
                  </div>

                  {contactPhone && (
                    <div className="flex gap-4">
                      <div className="p-2 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm flex-shrink-0">
                        <Phone className="h-4 w-4 text-[#c9921e]" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">Phone</p>
                        <p className="text-[#e8e8e8]/50 text-sm">{contactPhone}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <div className="p-2 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm flex-shrink-0">
                      <MapPin className="h-4 w-4 text-[#c9921e]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Location</p>
                      <p className="text-[#e8e8e8]/50 text-sm">
                        {contactAddress || 'South Africa'}
                      </p>
                      <p className="text-[#e8e8e8]/30 text-xs mt-1">Shipping nationwide</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-2 border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm flex-shrink-0">
                      <Clock className="h-4 w-4 text-[#c9921e]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Response Hours</p>
                      <p className="text-[#e8e8e8]/50 text-sm">
                        Monday – Friday<br />
                        9:00 – 17:00 SAST
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="h-px bg-gradient-to-r from-transparent via-[#c9921e]/30 to-transparent" />
            </div>

            {/* Custom order callout */}
            <div className="border border-[#c9921e]/20 bg-[#c9921e]/5 rounded-sm p-6">
              <div className="flex gap-3 items-start">
                <Flame className="h-4 w-4 text-[#e8b84b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1.5">Custom Commission?</p>
                  <p className="text-[#e8e8e8]/50 text-xs leading-relaxed">
                    We love creating custom pieces — specific colour schemes, themes, names inscribed in the resin. Just drop us a message with your vision and we&apos;ll make it happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
