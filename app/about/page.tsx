import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <main className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">About frmrr</h1>

        <Card className="bg-white bg-opacity-90 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6">
              At frmrr, we believe in empowering farmers with the knowledge and resources they need to maintain and repair their own equipment. Our platform bridges the gap between agricultural machinery and technical expertise, making repair information accessible to all.
            </p>

            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Comprehensive repair guides for all major agricultural equipment</li>
              <li>Access to genuine parts and quality alternatives</li>
              <li>Community-driven support and knowledge sharing</li>
              <li>Expert technical assistance when needed</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Empowerment</h3>
                <p>We believe in giving farmers the tools and knowledge to be self-sufficient.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sustainability</h3>
                <p>Supporting equipment repair helps reduce waste and promotes sustainable farming practices.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Community</h3>
                <p>Building a network of farmers helping farmers through shared knowledge.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

