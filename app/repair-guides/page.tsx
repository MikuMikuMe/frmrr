import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RepairGuides() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Repair Guides</h1>

      <Tabs defaultValue="tractors" className="w-full">
        <TabsList className="w-full justify-start bg-white bg-opacity-10 p-1">
          <TabsTrigger value="tractors" className="text-white">Tractors</TabsTrigger>
          <TabsTrigger value="harvesters" className="text-white">Harvesters</TabsTrigger>
          <TabsTrigger value="irrigation" className="text-white">Irrigation</TabsTrigger>
          <TabsTrigger value="implements" className="text-white">Implements</TabsTrigger>
        </TabsList>

        <TabsContent value="tractors" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white bg-opacity-90">
              <CardHeader>
                <CardTitle>Engine Maintenance Guide</CardTitle>
                <CardDescription>Complete guide to tractor engine maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Oil and filter changes</li>
                  <li>Fuel system maintenance</li>
                  <li>Cooling system service</li>
                  <li>Belt and hose inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-90">
              <CardHeader>
                <CardTitle>Transmission Service</CardTitle>
                <CardDescription>Maintaining your tractor's transmission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Fluid level checks</li>
                  <li>Filter replacement</li>
                  <li>Clutch adjustment</li>
                  <li>Troubleshooting guide</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Similar content structure for other tabs */}
      </Tabs>
    </main>
  )
}

