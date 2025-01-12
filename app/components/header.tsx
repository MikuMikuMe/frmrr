import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#4CAF50] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">frmrr</h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-[#FF9800]">Home</Link>
          <Link href="/repair-guides" className="text-white hover:text-[#FF9800]">Repair Guides</Link>
          <Link href="/parts-store" className="text-white hover:text-[#FF9800]">Parts Store</Link>
          <Link href="/community" className="text-white hover:text-[#FF9800]">Community</Link>
          <Link href="/about" className="text-white hover:text-[#FF9800]">About Us</Link>
        </nav>
        <Button className="md:hidden bg-transparent hover:bg-[#45a049]">
          <Menu className="text-white" />
        </Button>
      </div>
    </header>
  )
}

