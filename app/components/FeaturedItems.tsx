import FeaturedCard from './FeaturedCard'

const featuredItems = [
  { id: 1, title: 'REST API', description: 'A powerful REST API for data management', type: 'api' },
  { id: 2, title: 'GraphQL Tool', description: 'Simplify your GraphQL queries', type: 'tool' },
  { id: 3, title: 'Authentication API', description: 'Secure user authentication made easy', type: 'api' },
  { id: 4, title: 'Code Formatter', description: 'Keep your code clean and consistent', type: 'tool' },
]

export default function FeaturedItems() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Featured APIs and Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <FeaturedCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

