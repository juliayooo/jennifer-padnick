import { useState } from 'react'
import Portfolio from './Portfolio'

const properties = [
  { name: 'Coop, condo, townhouse and multi-family conveyancing'},
  { name: 'Office, retail, mixed-use and vacant land acquisition, disposition & development'},
  { name: 'Contract drafting, review & negotiation '},
  { name: 'Air rights transactions'},
  { name: '1031 tax-deferred like-kind property exchanges'},
  { name: 'Leasing: office, commercial, retail, industrial & mixed-use projects'},
  { name: 'Due Diligence & Agreements: coop and condo buildings, land title, easements, environmental, neighbor construction, licenses & dispute resolution'},
  { name: 'Financing: institutional bank loans, private / interfamily loans, & corporate'},
  { name: 'Clients: individuals, corporate, trust, LLC, multifamily & intergenerational'},
]

const marginPhotos = {
  sons: { src: `${import.meta.env.BASE_URL}images/ELAN.JPG`, alt: 'Jennifer with her two sons' },
  dog: { src: `${import.meta.env.BASE_URL}images/luna.jpg`, alt: 'The family dog' },
  garden: { src: `${import.meta.env.BASE_URL}images/yoga-mock.jpg`, alt: 'Hiking and gardening' },
}

export default function App() {
  const [marginPhoto, setMarginPhoto] = useState(null)

  return (
    <div className="layout">
      <div className="portfolio-panel">
        <Portfolio />
      </div>
      <div className="content-scroll">
        <div className="page">

          <header className="hero">
            <div className="hero-text">
              <div className="hero-main">
                <h1>Jennifer Padnick</h1>
                <p className="tagline">Big-firm experience. Small-firm attention. Every deal, every time.</p>
            </div>
              
            </div>
          </header>

          <section className="about">
            {/* <img className="headshot" src={`${import.meta.env.BASE_URL}images/HEADSHOT.JPG`}/> */}
            <p>
              At the Law Office of Jennifer Padnick, you get sophisticated,
              <strong> experienced real estate representation </strong>— at prices that won't break the bank.
              When you call, you get me. No juniors, no paralegals, no smoke and mirrors – <strong>just me,
              personally.</strong> You get me on every condo closing, townhouse purchase, office and
              retail lease, and everything in between. <strong>Decades of experience, watching every
              detail so you don't have to.</strong>
            </p>
          </section>

          <section className="bio-wrap">
            <section className="bio">
              <p>
                <h2>For over 25 years,</h2> real estate law has been my career. I spent my legal
                formative years at top NYC law firms, ran my own boutique real estate firm
                as a partner, and bring that senior-level experience to my clients. I live
                and work in NYC and raised my family here. I have{' '}
                <button className="bio-trigger" onClick={() => setMarginPhoto('sons')}>
                  2 great young adult sons
                </button>{' '}
                and{' '}
                <button className="bio-trigger" onClick={() => setMarginPhoto('dog')}>
                  a dog
                </button>{' '}
                that is the favorite child. I have bought, sold and leased properties in
                every borough, and many around the country. I{' '}
                <button className="bio-trigger" onClick={() => setMarginPhoto('garden')}>
                  hike, garden
                </button>
                , practice yoga, and travel the world, and still maintain that NYC is the
                greatest city. Feel free to contact me for testimonials and referrals and
                to discuss your real estate matters.
              </p>
            </section>

            {marginPhoto && marginPhotos[marginPhoto] && (
              <aside className="margin-photo">
                <button className="margin-close" onClick={() => setMarginPhoto(null)} aria-label="Close photo">
                  ×
                </button>
                <img src={marginPhotos[marginPhoto].src} alt={marginPhotos[marginPhoto].alt} />
              </aside>
            )}
          </section>

          <section className="properties">
            <h2>Experience</h2>
            <ul className="property-list">
              {properties.map((p) => (
                <li key={p.name} className="property-item">
                  <span className="property-name">{p.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="contact">
            <p>Jennifer Padnick, Esq.</p>
            <p>Law Office of Jennifer Padnick</p>
            <p>jplaw [at] padnick [dot] com</p>
            <p>(646) 431-4503</p>
          </footer>
        </div>
      </div>

      
    </div>
  )
}