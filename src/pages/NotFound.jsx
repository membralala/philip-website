import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar title=""/>
      <div className="relative">
        <div className="relative mt-48 mb-64 text-4xl text-red w-full text-center">
          <span className="px-2 font-bold border-r-2 border-black">404</span>
          <span className="px-2">Page Not Found</span>
        </div>
      </div>
    </>
  )
}