export default function FindMoreBtn({ href }) {
  return(
    <a
      href={href}
      title={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue hover:bg-red text-white rounded-full px-2"
    >
      find more
    </a>
  )
}