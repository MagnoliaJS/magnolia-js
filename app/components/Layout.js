import { Image, Link } from "blitz"
import logo from "public/MagnoliaHorizontalLogo-DarkJS.png"
import twitter from "public/icons/twitter.svg"

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
      <ul className="flex flex-wrap justify-around text-lg font-semibold">
        <li>
          <Link href="/conduct">
            <a className="mx-4">Conduct</a>
          </Link>
        </li>
        <li>
          <Link href="/sponsors">
            <a className="mx-4">Sponsors</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main className="flex-grow md:mx-10 lg:mx-48 mt-8 mb-4 px-3 md:px-4 py-4 bg-white">
      {props.children}
    </main>
    <footer className="flex justify-between md:mx-10 lg:mx-48 px-3 md:px-4">
      <div>
        <a href="https://twitter.com/magnoliajsconf">
          <Image src={twitter} alt="link to Twitter account." height="16" width="16" />
        </a>
      </div>
      <div>&copy; MagnoliaJS</div>
    </footer>
  </div>
)

export default Layout
