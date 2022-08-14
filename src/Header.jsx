import './Header.css';

export default function Header(props) {

  const title = props.title;

  return (
    <header className="relative inline-block">
      <div className="text-red border-r-2 border-black font-anom font-bold
            text-[45px] leading-[0.9em] text-right h-[85px] w-[200px] md:float-left">
        Philip Popien
      </div>
      <div className="relative -top-2 inline-block overflow-hidden h-[125px] w-[400px]">
        <h1 id="header" className="text-black
            text-[120px] font-anom font-bold leading-[0.9em]"
          style={{ letterSpacing: `-${title.length * 0.02}em` }}>
          {title}
        </h1>
      </div>
    </header>
  )
}