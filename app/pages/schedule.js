import { Head } from "blitz"

const Schedule = () => (
  <div className="center-text">
    <Head>
      <title>Schedule | MagnoliaJS</title>
    </Head>
    <h1>Schedule</h1>
    <h2>Tuesday, September 13</h2>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Title</th>
          <th>Speaker</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00AM</td>
          <td>Welcome</td>
          <td></td>
        </tr>
        <tr>
          <td>9:15AM</td>
          <td>Keynote</td>
          <td>Nashlie Sephus</td>
        </tr>
        <tr>
          <td>10:00AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>10:10AM</td>
          <td>Fullstack Typesafety with Next.js</td>
          <td>Brandon Bayer</td>
        </tr>
        <tr>
          <td>10:40AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>10:50AM</td>
          <td>Vue for React Developers</td>
          <td>Alex Riviere</td>
        </tr>
        <tr>
          <td>11:20AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>11:30AM</td>
          <td>How !to be Mentored</td>
          <td>Nerando Johnson</td>
        </tr>
        <tr>
          <td>12:00PM</td>
          <td>Lunch</td>
          <td></td>
        </tr>
        <tr>
          <td>1:30PM</td>
          <td>Welcome Back</td>
          <td></td>
        </tr>
        <tr>
          <td>1:40PM</td>
          <td>TBD</td>
          <td>Aja Washington</td>
        </tr>
        <tr>
          <td>2:10PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>2:20PM</td>
          <td>Presentations, Storytelling, and How Not to Suck at it</td>
          <td>Ash Banaszek</td>
        </tr>
        <tr>
          <td>2:50PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>3:00PM</td>
          <td>Making A Strong Case For Accessibility</td>
          <td>Todd Libby</td>
        </tr>
        <tr>
          <td>3:30PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>3:40PM</td>
          <td>
            You Can Get With This or You Can Get With That: Global State Management Options in React
          </td>
          <td>William Hill</td>
        </tr>
        <tr>
          <td>4:10PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>4:20PM</td>
          <td>Making Blockchains Suck Less</td>
          <td>Nader Dabit</td>
        </tr>
        <tr>
          <td>5:00PM</td>
          <td>Wrap Day 1</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h2>Wednesday, September 14</h2>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Title</th>
          <th>Speaker</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00AM</td>
          <td>Welcome</td>
          <td></td>
        </tr>
        <tr>
          <td>9:30AM</td>
          <td>TBD</td>
          <td>Andronica Klaas</td>
        </tr>
        <tr>
          <td>10:00AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>10:10AM</td>
          <td>TBD</td>
          <td>Michael Liendo</td>
        </tr>
        <tr>
          <td>10:40AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>10:50AM</td>
          <td>Recruiters Suck. Use Them.</td>
          <td>Taylor Desseyn</td>
        </tr>
        <tr>
          <td>11:20AM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>11:30AM</td>
          <td>TBD</td>
          <td>Waller Goble</td>
        </tr>
        <tr>
          <td>12:00PM</td>
          <td>Lunch</td>
          <td></td>
        </tr>
        <tr>
          <td>1:30PM</td>
          <td>Welcome Back</td>
          <td></td>
        </tr>
        <tr>
          <td>1:40PM</td>
          <td>Compressed.fm LIVE!</td>
          <td>James Quick and Amy Dutton</td>
        </tr>
        <tr>
          <td>2:10PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>2:20PM</td>
          <td>TBD</td>
          <td>Vince Falconi</td>
        </tr>
        <tr>
          <td>2:50PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>3:00PM</td>
          <td>How to Solve Hard Problems</td>
          <td>Gant Laborde</td>
        </tr>
        <tr>
          <td>3:30PM</td>
          <td>Break</td>
          <td></td>
        </tr>
        <tr>
          <td>3:40PM</td>
          <td>What AC:NH taught me about Psychological Safety</td>
          <td>Adrienne Tacke</td>
        </tr>
        <tr>
          <td>4:10PM</td>
          <td>Giveaways</td>
          <td></td>
        </tr>
        <tr>
          <td>7:00PM</td>
          <td>Afterparty @ JXN Tech District</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
)

Schedule.suppressFirstRenderFlicker = true
export default Schedule
