export default function ExtLink({ to = "", enabled = true, className = "", ...props }) {
  return (
    <>
      { enabled
        ?<a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          title={to}
          className={className}
        >{props.children}</a>
        :<span title="not available" className={`${className} cursor-pointer`}>{props.children}</span>
      }
    </>
  )
} 