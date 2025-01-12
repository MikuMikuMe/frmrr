import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Community() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Community Forum</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle>Latest Discussions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">Tractor won't start in cold weather</h3>
                <p className="text-sm text-gray-600">Started by John D. • 5 replies</p>
              </li>
              <li>
                <h3 className="font-bold">Best oil for high-mileage engines?</h3>
                <p className="text-sm text-gray-600">Started by Sarah M. • 12 replies</p>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
              View All
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle>Expert Corner</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">Hydraulic System Maintenance Tips</h3>
                <p className="text-sm text-gray-600">By Technical Expert Mike</p>
              </li>
              <li>
                <h3 className="font-bold">Understanding Transmission Fluid Types</h3>
                <p className="text-sm text-gray-600">By Master Mechanic Lisa</p>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
              View All
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">Fixed my harvester just in time</h3>
                <p className="text-sm text-gray-600">Community story by Robert F.</p>
              </li>
              <li>
                <h3 className="font-bold">Money saved on DIY repairs</h3>
                <p className="text-sm text-gray-600">Success story by Maria G.</p>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
              View All
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white bg-opacity-90">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Connect with fellow farmers, share your experiences, and learn from others. Our community is here to help you succeed with your equipment maintenance and repairs.
          </p>
          <Button className="bg-[#FF9800] hover:bg-[#F57C00]">
            Create Account
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

