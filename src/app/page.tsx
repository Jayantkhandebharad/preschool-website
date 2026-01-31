import ClientWrapper from '@/components/ClientWrapper'
import HomeContent from '@/components/HomeContent'

export default function HomePage() {
  return (
    <ClientWrapper
      fallback={
        <div className="min-h-screen bg-hero flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orchid to-light-orchid rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">NG</span>
            </div>
            <h1 className="text-4xl font-display font-bold mb-4">Nyanarth Gurukkulam</h1>
            <p className="text-blue-200 mb-6">A Second Home for Your Little One</p>
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-orchid mx-auto"></div>
          </div>
        </div>
      }
    >
      <HomeContent />
    </ClientWrapper>
  )
}