import { NextResponse } from 'next/server'

export async function GET() {
  const featuredItems = [
    { id: 1, title: 'REST API', description: 'A powerful REST API for data management', type: 'api' },
    { id: 2, title: 'GraphQL Tool', description: 'Simplify your GraphQL queries', type: 'tool' },
    { id: 3, title: 'Authentication API', description: 'Secure user authentication made easy', type: 'api' },
    { id: 4, title: 'Code Formatter', description: 'Keep your code clean and consistent', type: 'tool' },
  ]

  return NextResponse.json(featuredItems)
}

