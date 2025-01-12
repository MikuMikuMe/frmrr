import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#4CAF50] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">About frmrr</h3>
            <p>Empowering farmers with the knowledge and parts to repair their own equipment.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/repair-guides" className="hover:text-[#FF9800]">Repair Guides</Link></li>
              <li><Link href="/parts-store" className="hover:text-[#FF9800]">Parts Store</Link></li>
              <li><Link href="/community" className="hover:text-[#FF9800]">Community Forum</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF9800]">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Connect With Us</h3>
            <ul>
              <li><Link href="#" className="hover:text-[#FF9800]">Facebook</Link></li>
              <li><Link href="#" className="hover:text-[#FF9800]">Twitter</Link></li>
              <li><Link href="#" className="hover:text-[#FF9800]">Instagram</Link></li>
              <li><Link href="#" className="hover:text-[#FF9800]">YouTube</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates and tips.</p>
            <input type="email" placeholder="Enter your email" className="mt-2 w-full p-2 rounded" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 frmrr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

