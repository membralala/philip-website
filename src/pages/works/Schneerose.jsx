import ExtLink from "../../components/ExtLink";


export default function Schneerose() {
	return (
		<div>
      <div>
      <iframe className="mb-12" title="schneerose" width="100%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1467847834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true">
      </iframe>
      </div>
			<div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">Schneerose (2022)</h3>
          <p className="text-red text-md leading-normal">Piano, Fixed Media Electronics (2-Channel)</p>
          <p className="text-red leading-normal">Performed by: 
            <ExtLink 
              enabled={true} 
              to="https://www.youtube.com/channel/UCjw6ipKDIUwzSv3HF5A3NHw/videos?app=desktop&view_as=subscriber&fbclid=IwAR2QRLglwYASvROwVZRumm3RivI7U3qz51ouq_1GMgh3J3xtBl9ddUwyD9A"
              className="italic hover:text-blue underline font-medium">
                Mirela Zhulali
            </ExtLink>
          </p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-4">
            <span className="italic">Schneerose</span> is ment to be a musical interpretation of a trauma.
            Therefore it is inspired by the process of a suppressed memory's reconstruction.
            Also its musical material is completely based on the Albanian folk song "Lule Bore", which
            can be literally translated as something like "rose out of snow". However, just very rarely 
            a small glimpse of the original ballad occurs in <span className="italic">Schneerose</span> as 
            nostalgic phrases. The composition, which is influenced by spectralism, tries to focus on 
            a dramaturgic approach rather than on a formal structure of musical parts. The fixed media 
            electronics have some retro aesthetics with analogue noise and synth voices, but also use 
            digital delays to generate glitchy digital noise textures. 
          </p>
          <p className="mb-4">
            The composition was made algorithmically and realized in python. Electronics were made in Max/Msp, Ableton 
            and with modular synthesizers. For the recording as well as for the premiere the piano was played 
            by the albanian pianist Mirela Zhulali, who also influenced the composition process. 
          </p>
        </div>
      </div>
		</div>
	)
}