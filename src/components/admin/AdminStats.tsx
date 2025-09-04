'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Users
} from 'lucide-react'

interface Stats {
  total: number
  new: number
  contacted: number
  offerSent: number
  accepted: number
  rejected: number
  cancelled: number
  completed: number
}

export default function AdminStats() {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    new: 0,
    contacted: 0,
    offerSent: 0,
    accepted: 0,
    rejected: 0,
    cancelled: 0,
    completed: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/simple-quote')
      if (!response.ok) throw new Error('Failed to fetch')
      
      const quotes = await response.json()
      
      const newStats: Stats = {
        total: quotes.length,
        new: quotes.filter((q: any) => q.status === 'NEW').length,
        contacted: quotes.filter((q: any) => q.status === 'CONTACTED').length,
        offerSent: quotes.filter((q: any) => q.status === 'OFFER_SENT').length,
        accepted: quotes.filter((q: any) => q.status === 'ACCEPTED').length,
        rejected: quotes.filter((q: any) => q.status === 'REJECTED').length,
        cancelled: quotes.filter((q: any) => q.status === 'CANCELLED').length,
        completed: quotes.filter((q: any) => q.status === 'COMPLETED').length,
      }
      
      setStats(newStats)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const cards = [
    {
      title: 'Toplam Talep',
      value: stats.total,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Yeni Talepler',
      value: stats.new,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Kabul Edilenler',
      value: stats.accepted,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Reddedilenler',
      value: stats.rejected,
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ]

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="h-24 bg-gray-100"></CardHeader>
              <CardContent className="h-20 bg-gray-50"></CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {card.title}
                </CardTitle>
                <div className={`p-2 ${card.bgColor} rounded-lg`}>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Durum Dağılımı
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Görüşüldü</span>
                <span className="font-semibold">{stats.contacted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Teklif Gönderildi</span>
                <span className="font-semibold">{stats.offerSent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">İptal Edildi</span>
                <span className="font-semibold">{stats.cancelled}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tamamlandı</span>
                <span className="font-semibold">{stats.completed}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Dönüşüm Oranları
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Kabul Oranı</span>
                  <span className="font-semibold">
                    {stats.total > 0 ? ((stats.accepted / stats.total) * 100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${stats.total > 0 ? (stats.accepted / stats.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Red Oranı</span>
                  <span className="font-semibold">
                    {stats.total > 0 ? ((stats.rejected / stats.total) * 100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full" 
                    style={{ width: `${stats.total > 0 ? (stats.rejected / stats.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}