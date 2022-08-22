import ExtLink from "../../components/ExtLink";

export default function OrganicPatterns() {
	return (
		<div>
			<div className="mb-12" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
				<iframe src="https://player.vimeo.com/video/534019951?h=a9863131d6&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed"
					frameBorder="0" allowFullScreen
					style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
					title="Philip Popien - Alice &amp;amp; Bob (2020)">
				</iframe>
			</div>

			<div>
        <div className="mb-12">
          <h3 className="text-red font-bold text-3xl mb-2">Organic Patterns (2018)</h3>
          <p className="text-red text-md leading-normal">Live Electronics (2-Channel), 1-Channel Live Video</p>
          <p className="text-red text-md leading-normal">Video by: <ExtLink to="https://vimeo.com/search?q=anastasija%20delidova" className="italic hover:text-blue underline font-medium">Anastasija Delidova</ExtLink></p>
        </div>
        <div className="text-blue text-content">
          <p className="mb-2">
            Due to deep sinusoid frequencies, headphones are highly recommended. 
          </p>
          <p className="mb-4">
            <span className="italic">Organic Patterns</span> is a live performance for generative 
						musical structures and video improvisation. Soundscapes from birds in the australian 
						jungle are reduced to their rhytmical patterns and then enhanced through snythetic voices.
						The video, which is played live but is also synced to musical events, looks for the pure movement
						of the flock and reduces the bodies to abstract shapes. 
          </p>
          <p className="mb-4">
            The music was performed with Max/Msp and Ableton. Video was played with Resolume Arena. Data was 
						exchanged through OSC-protocol. 
          </p>
          <p className="mb-4">
            <span className="italic">Organic Patterns</span> is the second composition of a series
            named <span className="text-red italic">living structures</span>. It was performed 
						at <span className="text-red italic">Folkwang University</span> in Essen, Germany.
          </p>

        </div>
      </div>
		</div>
	)
}