import ExtLink from "./ExtLink";

export default function FindMoreBtn({ href }) {
  return(
    <ExtLink to={href} className="bg-blue hover:bg-red text-white rounded-full px-2"> find more</ExtLink>
  )
}