import Head from "next/head"
import Link from "next/link"
import Layout from "../components/Layout/Layout"

const Schedule = () => (
  <Layout>
    <div className="center-text">
      <Head>
        <title>Schedule | MagnoliaJS</title>
      </Head>
      <h1>Schedule</h1>

      <h2>Tuesday, October 17</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7:30am</td>
            <td>Registration and Breakfast</td>
          </tr>
          <tr>
            <td>9:00am</td>
            <td>Opening Remarks w/ Kenneth LaFrance</td>
          </tr>
          <tr>
            <td>9:15am</td>
            <td><Link href="/speakers/taylor-desseyn">Content Creation w/ Taylor Desseyn</Link></td>
          </tr>
          <tr>
            <td>9:45am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>9:50am</td>
            <td><Link href="/speakers/alex-riviere">Small Design Systems for Developers w/ Alex Riviere</Link></td>
          </tr>
          <tr>
            <td>10:10am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>10:15am</td>
            <td><Link href="/speakers/rizel-scarlett">Breaking Barriers: Emerging technologies as catalysts for equity in tech w/ Rizel Scarlett</Link></td>
          </tr>
          <tr>
            <td>10:45am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>10:50am</td>
            <td><Link href="/speakers/angie-jones">Refactoring the Web w/ Angie Jones</Link></td>
          </tr>
          <tr>
            <td>12:00pm</td>
            <td>Lunch</td>
          </tr>
          <tr>
            <td>1:30pm</td>
            <td>Welcome Back</td>
          </tr>
          <tr>
            <td>1:35pm</td>
            <td><Link href="/speakers/jaimin-patel">D3.js: Changing the Way People Do Cancer Research w/ Jaimin Patel</Link></td>
          </tr>
          <tr>
            <td>2:05pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>2:10pm</td>
            <td><Link href="/speakers/karl-groves">Everything You Need to Know About JavaScript Accessibility w/ Karl Groves</Link></td>
          </tr>
          <tr>
            <td>2:40pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>2:45pm</td>
            <td><Link href="/speakers/tyler-clark">Getting the Job… Tips For Your Next React Interview Challenge w/ Tyler Clark</Link></td>
          </tr>
          <tr>
            <td>3:15pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>3:20pm</td>
            <td><Link href="/speakers/patricio-vargas">From Chaos to Order: How React Monorepos Can Simplify Your Codebase w/ Pato Vargas</Link></td>
          </tr>
          <tr>
            <td>3:50pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>4:00pm</td>
            <td><Link href="/speakers/danielle-maxwell">To Micro Frontend or Not to Micro Frontend: 5 Questions to Ask First w/ Danielle Maxwell</Link></td>
          </tr>
          <tr>
            <td>4:30pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>4:35pm</td>
            <td><Link href="/speakers/taylor-desseyn">A Manifesto in Hiring w/ Taylor Desseyn</Link></td>
          </tr>
          <tr>
            <td>5:00pm</td>
            <td>Day 1 Closing Remarks</td>
          </tr>
          <tr>
            <td>7:00pm</td>
            <td>Day 1 Mixer at the Mississippi Museum of Art</td>
          </tr>
        </tbody>
      </table>

      <h2>Wednesday, October 18</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00am</td>
            <td>Registration and Breakfast</td>
          </tr>
          <tr>
            <td>9:00am</td>
            <td>Opening Remarks w/ Kenneth LaFrance</td>
          </tr>
          <tr>
            <td>9:15am</td>
            <td><Link href="/speakers/chris-demars">Accessibility in the Enterprise: The Relationship of A11y and ROI w/ Chris DeMars</Link></td>
          </tr>
          <tr>
            <td>9:45am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>9:50am</td>
            <td><Link href="/speakers/modupeoluwa-daniel">How to Learn Technical Skills Effectively w/ Mo Daniel</Link></td>
          </tr>
          <tr>
            <td>10:10am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>10:30am</td>
            <td><Link href="/speakers/blake-watson">The Joys of Home-Cooked Apps w/ Blake Watson</Link></td>
          </tr>
          <tr>
            <td>11:00am</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>11:05am</td>
            <td><Link href="/speakers/mark-noonan">The Testing Sea Monster: a whale of a tale about front-end testing w/ Mark Noonan</Link></td>
          </tr>
          <tr>
            <td>12:00pm</td>
            <td>Lunch</td>
          </tr>
          <tr>
            <td>1:30pm</td>
            <td>Welcome Back</td>
          </tr>
          <tr>
            <td>1:35pm</td>
            <td><Link href="/speakers/michael-liendo">Want to Moonlight While Employed? Let&apos;s Get SaaSy! w/ Michael Liendo</Link></td>
          </tr>
          <tr>
            <td>2:05pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>2:10pm</td>
            <td><Link href="/speakers/abbey-perini">Cognitive Load and Your Development Environment w/ Abbey Perini</Link></td>
          </tr>
          <tr>
            <td>2:40pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>2:45pm</td>
            <td><Link href="/speakers/nerando-johnson">Unlocked: Growing Your Skills Through Open Source Development And Civic Hacking w/ Nerando Johnson</Link></td>
          </tr>
          <tr>
            <td>3:15pm</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>3:20pm</td>
            <td><Link href="/speakers/todd-libby">Deceptive Patterns & FAST w/ Todd Libby</Link></td>
          </tr>
          <tr>
            <td>4:00pm</td>
            <td>Day 2 Closing Remarks and Giveaways</td>
          </tr>
          <tr>
            <td>7:00pm</td>
            <td>Afterparty @ the BeanPath</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Schedule
