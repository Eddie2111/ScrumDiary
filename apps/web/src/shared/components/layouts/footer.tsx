import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Community"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {footerSections.map((section, index: number) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">{section.title}</h3>
              <ul className="space-y-2">

                {section.links.map((link, index: number) => (

                  <li key={index}>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>

                ))}

              </ul>
            </div>
          ))}

        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 ScrumDiary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
