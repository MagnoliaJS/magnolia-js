import { Image } from "blitz"

const Sponsor = (props) => {
  return (
    <a href={props.link} className="m-3">
      {props.logo ? (
        <Image src={props.logo} alt={`${props.name}'s logo`} height="100" width="100" />
      ) : null}
      <h2>{props.name}</h2>
    </a>
  )
}

export default Sponsor
