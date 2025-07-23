import { useEffect } from 'react'

const Tickets = () => {
  useEffect(() => {
    if (document.getElementById('tixtree-script')) return
    const script = document.createElement('script')
    script.src = 'https://www.tixtree.com/widgets/tixtree.js'
    script.setAttribute('data-type', 'events')
    script.setAttribute('data-id', 'kayla-sween-559ecb850346')
    script.id = 'tixtree-script'
    script.async = true
    document.getElementById('tixtree-wrapper')?.appendChild(script)
  }, [])
  return (
    <section id='tickets' className='py-20 bg-gradient-to-b from-purple-900/10 to-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='text-purple-400'>Ticket</span>-or-Treat
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Get your tickets now for an unforgettable experience at MagnoliaConf!
          </p>
        </div>
        <div id='tixtree-wrapper'></div>
      </div>
    </section>
  )
}

export default Tickets
