const portfolioItems = [
  {
    name: "10 JAY ST",
    type: "COMMERCIAL",
    description: "",
    images: ["10jayst.jpeg"]
  },
  {
    name: "10-12 CROSBY",
    type: "Commercial",
    description: "",
    images: ["10-12CROSBYCOM2.png", "10-12CROSBYCOM.png"]
  },
  {
    name: "FALCHI BUILDING",
    type: "Commerical",
    description: "",
    images: ["FAULCHICOM.png"]
  },
  {
    name: "31 Grove",
    type: "Residential",
    description: "",
    images: ["31GROVERES.png", "31GROVERES2.png"]
  },
  {
    name: "60 E 42nd St",
    type: "Commercial",
    description: "",
    images: ["60E42COM.png"]
  },
  {
    name: "114 5th Ave",
    type: "Commercial",
    description: "",
    images: ["114-5COM.png"]
  },
  {
    name: "120 Broadway",
    type: "Commercial",
    description: "",
    images: ["120BWYCOM.png", "120BWYCOM2.png"]
  },
  {
    name: "161 W 75th St",
    type: "Residential",
    description: "",
    images: ["161W75RES.png"]
  },
  {
    name: "200 W 79th St",
    type: "Residential",
    description: "",
    images: ["200W79RES.png"]
  },
  {
    name: "210 Pacific St",
    type: "Residential",
    description: "",
    images: ["210PACIFICRES.png","210PACIFICRES.png"]
  },
  {
    name: "850 St. Nicholas",
    type: "Residential",
    description: "",
    images: ["850STNRES.png","850STNRES2.png"]
  },
  {
    name: "E 61st St",
    type: "Residential",
    description: "",
    images: ["E61RES.png"]
  },

  {
    name: "14 Leroy",
    type: "Residential",
    description: "",
    images: ["14LEROYRES2.png", "14LEROYRES.png"]
  }
];
export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        {portfolioItems.map((item) => (
          <div className="portfolio-item" key={item.name}>
            <div className="portfolio-info">
              <h3 className="portfolio-name">{item.name}</h3>
              <p className="portfolio-type">{item.type}</p>
            </div>
            <div className="portfolio-image">
              {item.images.map((src, i) => (
                <img key={i} src={src} alt={`${item.name} photo ${i + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}