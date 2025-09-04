'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, RefreshCw, Trash2, Edit2, ChevronRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SimpleQuote {
  id: string
  name: string
  email: string
  phone: string
  roomType: string
  status: string
  notes?: string
  createdAt: string
}

const statusColors = {
  NEW: 'default',
  CONTACTED: 'secondary',
  OFFER_SENT: 'outline',
  ACCEPTED: 'default',
  REJECTED: 'destructive',
  CANCELLED: 'secondary',
  COMPLETED: 'default',
} as const

const statusClasses = {
  NEW: 'bg-yellow-500 text-white hover:bg-yellow-600',
  CONTACTED: 'bg-blue-500 text-white hover:bg-blue-600',
  OFFER_SENT: 'bg-purple-500 text-white hover:bg-purple-600',
  ACCEPTED: 'bg-green-500 text-white hover:bg-green-600',
  REJECTED: 'bg-red-500 text-white hover:bg-red-600',
  CANCELLED: 'bg-gray-500 text-white hover:bg-gray-600',
  COMPLETED: 'bg-emerald-500 text-white hover:bg-emerald-600',
} as const

const statusLabels = {
  NEW: 'Yeni',
  CONTACTED: 'Görüşüldü',
  OFFER_SENT: 'Teklif Gönderildi',
  ACCEPTED: 'Kabul',
  REJECTED: 'Red',
  CANCELLED: 'İptal',
  COMPLETED: 'Tamamlandı',
}

interface SimpleQuoteListProps {
  status?: string
}

export default function SimpleQuoteList({ status }: SimpleQuoteListProps) {
  const [quotes, setQuotes] = useState<SimpleQuote[]>([])
  const [loading, setLoading] = useState(true)

  const fetchQuotes = async () => {
    setLoading(true)
    try {
      const url = status 
        ? `/api/simple-quote?status=${status}`
        : '/api/simple-quote'
        
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch')
      
      const data = await response.json()
      setQuotes(data)
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuotes()
  }, [status])

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/simple-quote/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      
      if (response.ok) {
        fetchQuotes()
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteQuote = async (id: string) => {
    if (!confirm('Bu talebi silmek istediğinize emin misiniz?')) return
    
    try {
      const response = await fetch(`/api/simple-quote/${id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        fetchQuotes()
      }
    } catch (error) {
      console.error('Error deleting quote:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (quotes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Henüz teklif talebi bulunmuyor.</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Adı Soyadı</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefon</TableHead>
            <TableHead>Oda Tipi</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell className="font-medium">{quote.name}</TableCell>
              <TableCell>{quote.email}</TableCell>
              <TableCell>{quote.phone}</TableCell>
              <TableCell>{quote.roomType}</TableCell>
              <TableCell>
                <Badge 
                  className={statusClasses[quote.status as keyof typeof statusClasses] || 'bg-gray-500 text-white'}
                >
                  {statusLabels[quote.status as keyof typeof statusLabels] || quote.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(quote.createdAt).toLocaleDateString('tr-TR')}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-xl">
                    <DropdownMenuLabel className="text-gray-900 font-semibold">İşlemler</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'CONTACTED')} className="hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium">
                      Görüşüldü Olarak İşaretle
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'OFFER_SENT')} className="hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 font-medium">
                      Teklif Gönderildi
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'ACCEPTED')} className="hover:bg-green-50 hover:text-green-700 transition-colors duration-200 font-medium">
                      Kabul Edildi
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'REJECTED')} className="hover:bg-red-50 hover:text-red-700 transition-colors duration-200 font-medium">
                      Reddedildi
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'CANCELLED')} className="hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200 font-medium">
                      İptal Edildi
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateStatus(quote.id, 'COMPLETED')} className="hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 font-medium">
                      Tamamlandı
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => deleteQuote(quote.id)}
                      className="text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors duration-200 font-medium"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Sil
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}