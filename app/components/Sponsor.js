import { Image } from "blitz"

const Sponsor = (props) => {
  return (
    <a
      href={props.link}
      className="m-3 text-center min-w-full md:min-w-1/3 flex flex-col justify-evenly"
    >
      {props.logo ? (
        <Image
          src={props.logo}
          alt={`${props.name}'s logo`}
          layout="intrinsic"
          height="100%"
          width="100%"
        />
      ) : null}
      <h2 className="mt-4">{props.name}</h2>
    </a>
  )
}

export default Sponsor
