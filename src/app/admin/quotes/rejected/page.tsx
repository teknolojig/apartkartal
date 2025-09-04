import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import SimpleQuoteList from '@/components/admin/SimpleQuoteList'

export default async function RejectedQuotesPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Reddedilen Talepler</h1>
        <SimpleQuoteList status="REJECTED" />
      </div>
    </AdminLayout>
  )
}