import { Image, Link } from "blitz"
import logo from "public/MagnoliaHorizontalLogo-DarkJS.png"

const Layout = (props) => (
  <div className="flex flex-col bg-pink-100 p-3 min-h-screen">
    <nav>
      <div className="flex md:w-1/3 mx-auto my-4">
        <Link href="/">
          <a>
            <Image src={logo} alt="MagnoliaJS logo" placeholder="blur" />
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap justify-around text-lg font-semibold">
        <Link href="/conduct">
          <a className="mx-4">Conduct</a>
        </Link>
        <Link href="/sponsors">
          <a className="mx-4">Sponsors</a>
        </Link>
      </div>
    </nav>
    <main className="flex-grow md:mx-10 lg:mx-48 my-8 px-3 md:px-4 py-4 bg-white">
      {props.children}
    </main>
    <footer>&copy; MagnoliaJS</footer>
  </div>
)

export default Layout
