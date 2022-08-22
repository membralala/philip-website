import AugmentedArt from "../pages/projects/AugmentedArt";
import PatchingAlice from "../pages/projects/PatchingAlice";
import DerPunkt from "../pages/projects/DerPunkt";
import Anthropo from "../pages/projects/Anthtopo"; 
import RemixRuhr20 from "../pages/projects/RemixRuhr20";
import RemixRuhr21 from "../pages/projects/RemixRuhr21"; 
import WarRequiem from "../pages/projects/WarRequiem"; 
import DivePanorama from "../pages/projects/DivePanorama";


export const projects = [
  {
    "id": 1,
    "title": "Augmented Art Advertising",
    "slug": "augmented-art-advertising",
    "year": 2022,
    "nr": 1,
    "desc": "A mixed reality project to replace advertisements with art.",
    "component": <AugmentedArt />,
    "tags": [
      "structural",
      "app",
      "media",
      "kollektiv 42",
    ],
  },
  {
    "id": 2,
    "title": "Patching Alice",
    "slug": "patching-alice",
    "year": 2021,
    "nr": 1,
    "desc": "A composition project to teach students modular synthesis and electronic composition.",
    "component": <PatchingAlice />,
    "tags": [
      "structural",
      "composition",
      "interdisciplinary",
    ],
  },
  {
    "id": 3,
    "title": "Der Punkt an dem das Bild an das Reale rührt",
    "slug": "der-punkt-an-dem-das-bild",
    "year": 2018,
    "nr": 2,
    "desc": "A multimedial exhibition with evolving sound installation.",
    "component": <DerPunkt />,
    "tags": [
      "composition",
      "interdisciplinary",
    ],
  },
  {
    "id": 4,
    "title": "War Requiem － Interludes",
    "slug": "war-requiem-interludes",
    "year": 2018,
    "nr": 1,
    "desc": "A composition project teaching students sample based composition with respect to Benjamin Britten.",
    "component": <WarRequiem />,
    "tags": [
      "composition",
      "interdisciplinary",
      "structural",
    ],
  },
  {
    "id": 5,
    "title": "Anthropozän － Planetarische Leitplanken",
    "slug": "anthropozaen",
    "year": 2017,
    "nr": 1,
    "desc": "A fulldome projection and multi-channel sond design and composition study.",
    "component": <Anthropo />,
    "tags": [
      "media",
      "interdisciplinary",
    ],
  },
  {
    "id": 6,
    "title": "REMIX.ruhr 2021",
    "slug": "remix-ruhr-2021",
    "year": 2021,
    "nr": 2,
    "desc": "A remix submit with students.",
    "component": <RemixRuhr21 /> ,
    "tags": [
      "music",
      "structural"
    ],
  },
  {
    "id": 7,
    "title": "REMIX.ruhr 2020",
    "slug": "remix-ruhr-2020",
    "year": 2020,
    "nr": 1,
    "desc": "A remix submit with students.",
    "component": <RemixRuhr20 />,
    "tags": [
      "music",
      "structural"
    ],
  },
  {
    "id": 8,
    "title": "DIVE Festival 2019 - Panorama Mapping",
    "slug": "DIVE-panorama",
    "year": 2019,
    "nr": 1,
    "desc": "A 4-channel projection mapping at Planetarium Bochum.",
    "component": <DivePanorama />,
    "tags": [
      "kollektiv 42", 
      "media",
    ],
  },
]