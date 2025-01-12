import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedEquipment() {
  const equipment = [
    { name: "John Deere 8R Tractor", type: "Tractor" },
    { name: "Case IH Axial-Flow Combine", type: "Harvester" },
    { name: "New Holland BigBaler", type: "Baler" },
    { name: "Kubota M7 Series", type: "Tractor" },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Equipment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipment.map((item, index) => (
          <Card key={index} className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: {item.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

