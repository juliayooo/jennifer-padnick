import { useState } from 'react'
import Portfolio from './Portfolio'

const properties = [
  {
    name: 'Coop, condo, townhouse and multi-family conveyancing',
    note: 'Drafted the HOA governing documents.',
  },
  {
    name: 'Office, retail, mixed-use and vacant land acquisition, disposition & development',
    note: 'Drafted the HOA governing documents.',
  },
  {
    name: 'Contract drafting, review & negotiation ',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: 'Air rights transactions',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: '1031 tax-deferred like-kind property exchanges',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: 'Leasing: office, commercial, retail, industrial & mixed-use projects',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: 'Due Diligence & Agreements: coop and condo buildings, land title, easements, environmental, neighbor construction, licenses & dispute resolution',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: 'Financing: institutional bank loans, private / interfamily loans, & corporate',
    note: 'Resolved a decade-long easement conflict.',
  },
  {
    name: 'Clients: individuals, corporate, trust, LLC, multifamily & intergenerational',
    note: 'Resolved a decade-long easement conflict.',
  },
]

const marginPhotos = {
  sons: { src: '/images/ELAN.jpg', alt: 'Jennifer with her two sons' },
  dog: { src: '/images/luna.jpg', alt: 'The family dog' },
  garden: { src: '/images/yoga-mock.jpg', alt: 'Hiking and gardening' },
}

export default function App() {
  const [marginPhoto, setMarginPhoto] = useState(null)

  return (
    <div className="page">

<header className="hero">
  <div className="hero-text">
    <div className="hero-main">
      <h1>Jennifer Padnick</h1>
      <p className="tagline">Big-firm experience. Small-firm attention. Every deal, every time.</p>
    </div>
    <a
      className="linkedin-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/jennifer-padnick-74a53b65/"
    >
      {/* <img
        className="linkedin"
        src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
        alt="LinkedIn"
      /> */}
    </a>
  </div>
</header>

      <section className="about">
        <img className="headshot" src="/images/HEADSHOT.jpg"/>

        <p>
          At the Law Office of Jennifer Padnick, you get sophisticated, 
          <strong> experienced real estate representation </strong>— at prices that won't break the bank.
          When you call, you get me. No juniors, no paralegals, no smoke and mirrors – <strong>just me,
          personally.</strong> You get me on every condo closing, townhouse purchase, office and
          retail lease, and everything in between. <strong>Decades of experience, watching every
          detail so you don't have to.</strong> 
        </p>
      </section>

<Portfolio />

      <section className="bio-wrap">
        <section className="bio">
          <p>
            For over 25 years, real estate law has been my career. I spent my legal
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

        {marginPhoto && marginPhotos[marginPhoto]  && (
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
              <span className="property-note">{p.note}</span>
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
  )
}