import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faJackOLantern, faPumpkin } from '@fortawesome/pro-solid-svg-icons'
import { ReactComponent as Logo } from '/src/assets/logo.svg'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#speakers', label: 'Schedule' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#venue', label: 'Venue' },
    { href: '#tickets', label: 'Tickets' },
    { href: '#conduct', label: 'Code of Conduct' },
    { href: 'https://shop.magnoliaconf.com/pages/donate', label: 'Donate' },
    { href: 'https://shop.magnoliaconf.com', label: 'Shop' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className='fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-orange-500/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4 gap-4'>
          <div className='lg:w-[30%] w-[100%]'>
            <a href='/'>
              <Logo className='logo max-h-[4rem]' />
            </a>
          </div>

          <div className='hidden lg:flex space-x-8 items-center'>
            {navItems.map((item) => {
              if (item.href.startsWith('https')) {
                return (
                  <a
                    href={item.href}
                    key={item.href}
                    className='text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium'
                  >
                    {item.label} <FontAwesomeIcon icon={faExternalLink} className='ml-2' />
                  </a>
                )
              }
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className='text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium'
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-white'>
            {isOpen ? (
              <FontAwesomeIcon icon={faJackOLantern} className='jack-glow' />
            ) : (
              <FontAwesomeIcon icon={faPumpkin} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-black/95'>
              {navItems.map((item) => {
                if (item.href.startsWith('https')) {
                  return (
                    <a
                      href={item.href}
                      key={item.href}
                      className='block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium w-full text-left'
                    >
                      {item.label} <FontAwesomeIcon icon={faExternalLink} className='ml-2' />
                    </a>
                  )
                }
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className='block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium w-full text-left'
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
