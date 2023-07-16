import { Link } from "react-router-dom";

export default function Title({title}) {
  return (
    <header className="relative flex w-full">
      <div className="absolute sm:relative w-full text-center sm:text-left text-red font-anom font-bold text-[46px] leading-[0.9em] tracking-tighter sm:w-[150px] h-[80px] sm:border-r-[2px] sm:border-black">
        <Link to="/about">Philip Popien</Link>
      </div>
      <div className="relative top-8 mb-8 sm:mb-0 text-center sm:text-left sm:-top-1 w-full overflow-hidden h-24">
        <h1 id="header-title"
          className="relative text-black text-[100px] font-anom font-bold leading-[0.9em]"
          style={{ letterSpacing: `-${title.length * 0.015}em` }}
        >
          {title}
        </h1>
      </div>
    </header>
  )
}