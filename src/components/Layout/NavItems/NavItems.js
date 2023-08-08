import NavItem from "./NavItem/NavItem"

const NavItems = () => {
  return (
    <>
      <NavItem link="/conduct">Conduct</NavItem>
      <NavItem link="/covid">COVID-19 Policy</NavItem>
      <NavItem link="/faq">FAQs</NavItem>
      <NavItem link="/schedule">Schedule</NavItem>
      <NavItem link="/speakers">Speakers</NavItem>
      <NavItem link="/sponsors">Sponsors</NavItem>
      <NavItem link="/tickets" external>
        Tickets
      </NavItem>
    </>
  )
}

export default NavItems