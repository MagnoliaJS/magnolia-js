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
      <div className="flex justify-around text-lg">
        <Link href="/conduct">
          Conduct
        </Link>
        <Link href="/sponsors">
          Sponsors
        </Link>
      </div>
    </nav>
    <main className="mx-96">
      {props.children}
    </main>
    <footer>
      &copy; MagnoliaJS
    </footer>
  </div>
)

export default Layout
