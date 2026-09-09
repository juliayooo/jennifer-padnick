import { useState, useEffect, useRef } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

const portfolioItems = [
  { name: "10 JAY ST", type: "COMMERCIAL", images: ["10jayst.jpeg"] },
  { name: "10-12 CROSBY", type: "Commercial", images: ["10-12CROSBYCOM2.png", "10-12CROSBYCOM.png"] },
  { name: "FALCHI BUILDING", type: "Commerical", images: ["FAULCHICOM.png"] },
  { name: "31 Grove", type: "Residential", images: ["31GROVERES.png", "31GROVERES2.png"] },
  { name: "60 E 42nd St", type: "Commercial", images: ["60E42COM.png"] },
  { name: "114 5th Ave", type: "Commercial", images: ["114-5COM.png"] },
  { name: "120 Broadway", type: "Commercial", images: ["120BWYCOM.png", "120BWYCOM2.png"] },
  { name: "161 W 75th St", type: "Residential", images: ["161W75RES.jpg"] },
  { name: "200 W 79th St", type: "Residential", images: ["200W79RES.jpg"] },
  { name: "210 Pacific St", type: "Residential", images: ["210PACIFICRES.png"] },
  { name: "850 St. Nicholas", type: "Residential", images: ["850STNRES.png", "850STNRES2.png"] },
  { name: "E 61st St", type: "Residential", images: ["E61RES.png"] },
  { name: "14 Leroy", type: "Residential", images: ["14LEROYRES2.jpg", "14LEROYRES.png"] }
];

const gallerySlides = portfolioItems.flatMap((item) =>
  item.images.map((filename) => ({
    name: item.name,
    type: item.type,
    filename
  }))
);

const SPAWN_INTERVAL = 3200;
const FLOAT_DURATION = 13000;

// 1. Define discrete columns (horizontal percentage positions)
const LANES = [5, 28, 52, 75]; 

// 2. Standardize sizes into predictable options
const SIZES = [400, 600, 500];

let floaterId = 0;

export default function Portfolio() {
  const [imageUrls, setImageUrls] = useState({});
  const [floaters, setFloaters] = useState([]);
  
  const slideCursor = useRef(0);
  const laneCursor = useRef(0);
  const sizeCursor = useRef(0);

  useEffect(() => {
    gallerySlides.forEach((slide) => {
      const imageRef = ref(storage, `assets/${slide.filename}`);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrls((prev) => ({ ...prev, [slide.filename]: url }));
        })
        .catch((err) => {
          console.error(`Failed to load ${slide.filename}:`, err);
        });
    });
  }, []);

  useEffect(() => {
    const spawn = () => {
      const slide = gallerySlides[slideCursor.current % gallerySlides.length];
      slideCursor.current += 1;

      // Cycle lanes deterministically with a small random jitter to prevent static grid look
      const laneIndex = laneCursor.current % LANES.length;
      laneCursor.current += 1;
      const baseLeft = LANES[laneIndex];
      const leftJitter = (Math.random() - 0.5) * 4; // slight +/- 2% shift
      const left = Math.max(2, Math.min(80, baseLeft + leftJitter));

      // Cycle through preset sizes deterministically
      const width = SIZES[sizeCursor.current % SIZES.length];
      sizeCursor.current += 1;

      // Add a slight duration variance for dynamic feel while maintaining consistent speed
      const duration = FLOAT_DURATION + (Math.random() * 1500 - 750);
      const id = floaterId++;

      setFloaters((prev) => [...prev, { id, slide, left, width, duration }]);
    };

    spawn();
    const interval = setInterval(spawn, SPAWN_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id) => {
    setFloaters((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="portfolio">
      {floaters.map((f) => {
        const url = imageUrls[f.slide.filename];
        if (!url) return null;
        return (
          <div
            key={f.id}
            className="portfolio-floater"
            style={{
              left: `${f.left}%`,
              width: `${f.width}px`,
              animationDuration: `${f.duration}ms`
            }}
            onAnimationEnd={() => handleAnimationEnd(f.id)}
          >
            <img
              className="portfolio-floater-img"
              src={url}
              alt={`${f.slide.name} photo`}
            />
            <div className="portfolio-floater-caption">
              <h3 className="portfolio-floater-name">{f.slide.name}</h3>
              <p className="portfolio-floater-type">{f.slide.type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}