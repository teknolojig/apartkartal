'use client'

import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  FileText, 
  Home, 
  LogOut, 
  ChevronLeft,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Ban,
  Send,
  RefreshCw
} from 'lucide-react'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: ReactNode
}

const menuItems = [
  { 
    title: 'Dashboard', 
    href: '/admin', 
    icon: Home,
    exact: true 
  },
  { 
    title: 'Tüm Talepler', 
    href: '/admin/quotes', 
    icon: FileText,
    exact: true
  },
  { 
    title: 'Yeni Talepler', 
    href: '/admin/quotes/new', 
    icon: Clock,
    count: true
  },
  { 
    title: 'Görüşülenler', 
    href: '/admin/quotes/contacted', 
    icon: Users 
  },
  { 
    title: 'Teklif Gönderilenler', 
    href: '/admin/quotes/offer-sent', 
    icon: Send 
  },
  { 
    title: 'Kabul Edilenler', 
    href: '/admin/quotes/accepted', 
    icon: CheckCircle 
  },
  { 
    title: 'Reddedilenler', 
    href: '/admin/quotes/rejected', 
    icon: XCircle 
  },
  { 
    title: 'İptal Edilenler', 
    href: '/admin/quotes/cancelled', 
    icon: Ban 
  },
  { 
    title: 'Tamamlananlar', 
    href: '/admin/quotes/completed', 
    icon: RefreshCw 
  },
]

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">
            Yönetim Paneli
          </h1>
        </div>
        
        <nav className="px-4 pb-6">
          {menuItems.map((item) => {
            const isActive = item.exact 
              ? pathname === item.href 
              : pathname.startsWith(item.href)
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="border-t px-4 py-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:text-red-600"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Çıkış Yap
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="bg-white shadow-sm border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Ana Siteye Dön
              </Button>
            </div>
          </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}