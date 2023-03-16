import socialLinks from "@/data/social-links";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-8 border-t-2 border-gray-100">
          <div className="flex flex-col md:flex-row md:order-2 items-center">
            <div className="flex justify-center items-center space-x-6 order-1 md:order-2">
              {socialLinks.map((item) => (
                  item.href !== "#" && (
                      <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                  )
              ))}
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}