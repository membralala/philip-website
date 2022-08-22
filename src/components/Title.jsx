import { Link } from "react-router-dom";
import { Settings } from "react-feather";

export default function Title({title}) {
  return (
    <header className="relative flex w-full">
      <div className="text-red font-anom font-bold text-[46px] leading-[0.9em] w-[150px] h-[80px] border-r-[2px] border-black">
        <Link to="/about">Philip Popien</Link>
      </div>
      <div className="relative -top-1  w-full overflow-hidden h-24">
        <h1 id="header-title"
          className="relative text-black text-[100px] font-anom font-bold leading-[0.9em]"
          style={{ letterSpacing: `-${title.length * 0.02}em` }}
        >
          {title}
        </h1>
      </div>
    </header>
  )
}