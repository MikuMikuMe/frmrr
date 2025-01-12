import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PopularRepairs() {
  const repairs = [
    { title: "Tractor Engine Overhaul", difficulty: "Advanced" },
    { title: "Combine Harvester Belt Replacement", difficulty: "Intermediate" },
    { title: "Irrigation System Repair", difficulty: "Beginner" },
    { title: "Hay Baler Knotter Troubleshooting", difficulty: "Intermediate" },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Popular Repairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {repairs.map((repair, index) => (
          <Card key={index} className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all">
            <CardHeader>
              <CardTitle>{repair.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Difficulty: {repair.difficulty}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

