import AliceBob from "../pages/works/AliceBob";
import DunklerWald from "../pages/works/DunklerWald";
import Identity from "../pages/works/Identity";
import OrganicPatterns from "../pages/works/OrganicPatterns";
import Schmutz from "../pages/works/Schmutz";
import Schneerose from "../pages/works/Schneerose";
import SecretWindow from "../pages/works/SecretWindow";

export const works = [
  {
    "id": 1,
    "title": "Secret Window inside a fragile structured Mind",
    "slug": "secret-window",
    "year": 2017,
    "nr": 1,
    "desc": "A breakdown of a neurotic thought process.",
    "component": <SecretWindow />,
    "tags": [
      "media", 
      "living structures", 
      "composition", 
      "electronics",
    ],
  },
  {
    "id": 2,
    "title": "Organic Patterns",
    "slug": "organic-patterns",
    "year": 2018,
    "nr": 1,
    "desc": "A study of self-regulating structures.",
    "component": <OrganicPatterns />,
    "tags": [
      "media", 
      "living structures", 
      "performance", 
      "electronics",
      "kollektiv 42"
    ],
  },
  {
    "id": 3,
    "title": "identity",
    "slug": "identity",
    "year": 2018,
    "nr": 2,
    "desc": "A vulnerable moment of disorientation.",
    "component": <Identity />,
    "tags": [
      "media", 
      "living structures", 
      "composition", 
      "electronics",
      "kollektiv 42",
    ],
  },
  {
    "id": 4,
    "title": "Dunkler Wald",
    "slug": "dunkler-wald",
    "year": 2019,
    "nr": 1,
    "desc": "A dystopia in 4 scenes.",
    "component": <DunklerWald />,
    "tags": [
      "media",
      "kollektiv 42",
    ],
  },
  {
    "id": 5,
    "title": "Alice & Bob",
    "slug": "alice-and-bob",
    "year": 2020,
    "nr": 1,
    "desc": "An A.I. drama.",
    "component": <AliceBob />,
    "tags": [
      "media", 
      "the progress report", 
      "composition", 
      "instrumental", 
      "electronics",
    ],
  },
  {
    "id": 6,
    "title": "Schmutz",
    "slug": "schmutz",
    "year": 2020,
    "nr": 2,
    "desc": "A polluted world and a polluted mind.",
    "component": <Schmutz />,
    "tags": [
      "media", 
      "the progress report", 
      "composition", 
      "electronics",
    ],
  },
  {
    "id": 7,
    "title": "Schneerose",
    "slug": "schneerose",
    "year": 2022,
    "nr": 1,
    "desc": "A glimpse of a suppressed memory.",
    "component": <Schneerose />,
    "tags": [
      "composition",
      "instrumental",
      "electronics",
    ]
  }
]