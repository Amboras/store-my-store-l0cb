'use client'

import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Package, MapPin, User, LogOut, Loader2 } from 'lucide-react'

export default function AccountPage() {
  const { customer, isLoggedIn, isLoading, logout, isLoggingOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/auth/login')
    }
  }, [isLoading, isLoggedIn, router])

  if (isLoading) {
    return (
      <div className="container-custom py-section flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!customer) return null

  return (
    <>
      <div className="border-b">
        <div className="container-custom py-section-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Account</p>
          <h1 className="text-h1 font-heading font-semibold">
            Hello, {customer.first_name || 'there'}
          </h1>
        </div>
      </div>

      <div className="container-custom py-section">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
          {/* Orders */}
          <Link
            href="/account/orders"
            className="group border rounded-sm p-6 hover:border-foreground transition-colors"
          >
            <Package className="h-6 w-6 mb-3" strokeWidth={1.5} />
            <h2 className="font-medium group-hover:underline underline-offset-4">Orders</h2>
            <p className="text-sm text-muted-foreground mt-1">View your order history</p>
          </Link>

          {/* Addresses */}
          <Link
            href="/account/addresses"
            className="group border rounded-sm p-6 hover:border-foreground transition-colors"
          >
            <MapPin className="h-6 w-6 mb-3" strokeWidth={1.5} />
            <h2 className="font-medium group-hover:underline underline-offset-4">Addresses</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage shipping addresses</p>
          </Link>

          {/* Profile */}
          <Link
            href="/account/profile"
            className="group border rounded-sm p-6 hover:border-foreground transition-colors"
          >
            <User className="h-6 w-6 mb-3" strokeWidth={1.5} />
            <h2 className="font-medium group-hover:underline underline-offset-4">Profile</h2>
            <p className="text-sm text-muted-foreground mt-1">Update your details</p>
          </Link>
        </div>

        {/* Account Details */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-4">Account Details</h2>
          <div className="border rounded-sm divide-y">
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="text-sm font-medium mt-0.5">
                  {customer.first_name} {customer.last_name}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium mt-0.5">{customer.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-8">
          <button
            onClick={() => logout()}
            disabled={isLoggingOut}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            {isLoggingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </div>
    </>
  )
}
