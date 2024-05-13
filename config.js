var config = {
  style: "mapbox://styles/ilabmedia/clvpi4zoa050201ph092tge2r",
  accessToken:
    "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  showMarkers: true,
  inset: false,
  theme: "dark",
  use3dTerrain: false,
  auto: false,
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "chapter0",
      alignment: "fully",
      hidden: true,
      location: {
        center: [120.77392, 23.75383],
        zoom: 5.18,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2, // make the flying slow
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter1",
      alignment: "centered",
      hidden: false,
      title: "Quarantine",
      description: "By: ChinaPower",
      location: {
        center: [120.83503, 23.52539],
        zoom: 5.96,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2, // make the flying slow
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter2",
      alignment: "right",
      hidden: false,
      description:
        "As geopolitical tensions surrounding Taiwan escalate, the specter of crisis looms large. China possesses a range of options short of outright invasion that could serve to coerce or punish Taiwan.",
      location: {
        center: [120.83503, 23.52539],
        zoom: 5.96,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter3",
      alignment: "right",
      hidden: false,
      description:
        "One often-discussed step would be to deploy the People’s Liberation Army (PLA) to forcefully blockade the island. A military-led blockade would be an overt act of war intended to force Taiwan’s capitulation by cutting it off from supplies of energy and other necessities.",
      location: {
        center: [120.83503, 23.52539],
        zoom: 5.96,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Blockade",
          opacity: 0,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "Blockade",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter4",
      alignment: "right",
      hidden: false,
      description:
        "However, ChinaPower analysis concludes that China is increasingly more likely to employ a quarantine around Taiwan, led not by the military but by law enforcement forces like the China Coast Guard (CCG) and other quasi-civilian forces like the maritime militia. A full quarantine would not aim to seal Taiwan off from the world but to demonstrate China’s power and to coerce maritime shipping into bending to Beijing’s will.",
      location: {
        center: [120.83503, 23.52539],
        zoom: 6.3,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "FullQuarantine",
          opacity: 0,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "FullQuarantine",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter5",
      alignment: "right",
      hidden: false,
      description:
        "China could also opt for a more limited, partial quarantine, blocking access to one or several of the island’s major ports, such as Kaohsiung, Taiwan’s busiest trading hub.",
      location: {
        center: [120.34681, 22.63992],
        zoom: 8.1,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "PartialQuarantine",
          opacity: 0,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "PartialQuarantine",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter6",
      alignment: "right",
      hidden: false,
      description:
        "Either form of quarantine would be a major gray zone action and would challenge the U.S.’s response capability in the region. This report lays out two scenarios in which China could attempt a quarantine of Taiwan.",
      location: {
        center: [120.83503, 23.52539],
        zoom: 6.3,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
