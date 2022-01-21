import { Image, Link } from "blitz"
import logo from "public/MagnoliaHorizontalLogo-DarkJS.png"

const Layout = (props) => (
  <div className="m-3">
    <nav>
      <div className="flex w-1/3 mx-auto my-4">
        <Link href="/">
          <Image src={logo} alt="MagnoliaJS logo" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-around text-lg">
        <Link href="/conduct" className="m-4">
          Conduct
        </Link>
        <Link href="/sponsors" className="m-4">
          Sponsors
        </Link>
      </div>
    </nav>
    <main className="md:mx-10 lg:mx-48 bg-pink-200 my-8 p-4">{props.children}</main>
    <footer>&copy; MagnoliaJS</footer>
  </div>
)

export default Layout
