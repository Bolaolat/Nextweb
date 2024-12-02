import Link from 'next/link'
import { motion } from 'framer-motion'

interface FeaturedCardProps {
  id: number
  title: string
  description: string
  type: 'api' | 'tool'
}

export default function FeaturedCard({ id, title, description, type }: FeaturedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-primary">{type.toUpperCase()}</span>
          <Link
            href={`/${type}s/${id}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

