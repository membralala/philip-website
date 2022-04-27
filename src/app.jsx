import Navbar from './Navbar';
import Header from './Header';


export default function App(props) {
  const title = props.title;

  return (
    <div className="mt-12 overflow-x-hidden">
      <div className="relative right-0 left-0 mr-auto ml-auto w-[95%] sm:w-3/4 lg:w-1/2 h-full">
        <Header title={title} />
        <Navbar title={title} />

        <div className="font-jets text-sm hyphens text-blue font-extralight
         leading-relaxed">
          {props.content}
        </div>

        {props.title ? (
          <footer className="font-anom text-sm text-blue text-center relative w-full bottom-12 mt-40">

            All rights reserved. contact: <a href="mailto:popien.philip@gmail.com" className="underline hover:text-red italic">popien.philip@gmail.com</a>
          </footer>) : <></>}
      </div>
    </div>

  );
}