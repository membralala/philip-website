import GithubLogo from "../logos/github.png";
import SoundcloudLogo from "../logos/soundcloud.png";
import VimeoLogo from "../logos/vimeo.png";
import InstagramLogo from "../logos/instagram.png";

export default function Footer() {
  return (
    <footer className="font-anom text-sm text-blue relative w-full bottom-12 mt-40 tracking-tighter">
      <div className="relative w-3/5 md:w-1/4 grid grid-cols-4 gap-4 justify-items-center mx-auto mb-2">
        <a
          href="https://github.com/membralala"
          target="_blank"
          rel="noopener noreferrer"
          title="https://github.com/membralala"
          className="hover:bg-color-red"
        >
          <img alt="" src={GithubLogo} className="w-8" />
        </a>
        <a
          href="https://soundcloud.com/philippopien"
          target="_blank"
          rel="noopener noreferrer"
          title="https://soundcloud.com/philippopien"
          className=""
        >
          <img alt="" src={SoundcloudLogo} className="w-8" />
        </a>
        <a
          href="https://vimeo.com/philippopien"
          target="_blank"
          rel="noopener noreferrer"
          title="https://vimeo.com/philippopien"
          className=""
        >
          <img alt="" src={VimeoLogo} className="w-8" />
        </a>
        <a
          href="https://www.instagram.com/philip_popien/"
          target="_blank"
          rel="noopener noreferrer"
          title="https://www.instagram.com/philip_popien/"
          className=""
        >
          <img alt="" src={InstagramLogo} className="w-8" />
        </a>
      </div>
      <div className="text-center">
        All rights reserved. contact:{" "}
        <a
          href="mailto:popien.philip@gmail.com"
          className="underline hover:text-red italic"
        >
          popien.philip@gmail.com
        </a>
      </div>
    </footer>
  );
}
