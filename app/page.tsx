import FeaturedItems from './components/FeaturedItems'
import SearchBar from './components/SearchBar'
import WhatsAppButtons from './components/WhatsAppButtons'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to DevToolsHub</h1>
      <SearchBar />
      <FeaturedItems />
      <WhatsAppButtons />
    </div>
  )
}

