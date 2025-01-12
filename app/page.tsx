import { Search, Book, Tractor } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import PopularRepairs from './components/popular-repairs'
import FeaturedEquipment from './components/featured-equipment'

export default function Home() {
  return (
    <main className="container mx-auto mt-16 px-4">
      <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-black bg-opacity-30 backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-8 text-white">How can we help you fix your farm equipment?</h2>

        <div className="relative mb-8">
          <Input 
            type="search" 
            placeholder="Search for guides or parts" 
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-[#4CAF50] focus:border-[#FF9800] focus:ring-[#FF9800] bg-white bg-opacity-90"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/repair-guides">
            <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-bold py-2 px-4 rounded-full flex items-center">
              <Book className="mr-2" />
              Repair Guides
            </Button>
          </Link>
          <Link href="/parts-store">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded-full flex items-center">
              <Tractor className="mr-2" />
              Equipment Parts
            </Button>
          </Link>
        </div>
      </div>

      <PopularRepairs />
      <FeaturedEquipment />
    </main>
  )
}

