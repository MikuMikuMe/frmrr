import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function PartsStore() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Parts Store</h1>
          
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search for parts by name or model number" 
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-[#4CAF50] focus:border-[#FF9800] focus:ring-[#FF9800] bg-white bg-opacity-90"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white bg-opacity-90">
              <CardHeader>
                <CardTitle>Engine Components</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Filters & Maintenance Kits</li>
                  <li>Belts & Hoses</li>
                  <li>Engine Parts</li>
                  <li>Fuel System Components</li>
                </ul>
                <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
                  Browse Category
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white bg-opacity-90">
              <CardHeader>
                <CardTitle>Transmission Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Transmission Filters</li>
                  <li>Clutch Components</li>
                  <li>Gears & Shafts</li>
                  <li>Seals & Gaskets</li>
                </ul>
                <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
                  Browse Category
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white bg-opacity-90">
              <CardHeader>
                <CardTitle>Hydraulic Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Pumps & Motors</li>
                  <li>Cylinders & Seals</li>
                  <li>Valves & Controls</li>
                  <li>Hoses & Fittings</li>
                </ul>
                <Button className="w-full mt-4 bg-[#4CAF50] hover:bg-[#45a049]">
                  Browse Category
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
  )
}

