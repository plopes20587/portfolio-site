import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../siteData'

type Props = {
  study: CaseStudy
}

const projectColors: Record<string, { bg: string; text: string; imagePath: string }> = {
  'kfc-pdp-redesign': { 
    bg: 'bg-purple', 
    text: 'text-purple',
    imagePath: '/src/assets/images/projects/kfc-mockup.png'
  },
  'photon-website': { 
    bg: 'bg-orange', 
    text: 'text-orange',
    imagePath: '/src/assets/images/projects/photon-mockup.png'
  },
  'cellebrite-website': { 
    bg: 'bg-green', 
    text: 'text-green',
    imagePath: '/src/assets/images/projects/cellebrite-mockup.png'
  },
  'senegence-redesign': { 
    bg: 'bg-blue', 
    text: 'text-blue',
    imagePath: '/src/assets/images/projects/semesence-mockup.png'
  },
}

const CaseStudyCard = ({ study }: Props) => {
  const colors = projectColors[study.slug] || { bg: 'bg-primary', text: 'text-primary', imagePath: '' }

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="h-full"
    >
      <Link
        to={`/case/${study.slug}`}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl ${colors.bg} p-6 shadow-lg`}
      >
        <div className="space-y-4">
          <div className="h-48 overflow-hidden rounded-lg bg-white/10">
            {colors.imagePath ? (
              <img 
                src={colors.imagePath} 
                alt={`${study.title} mockup`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.currentTarget.style.display = 'none'
                }}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-white/30 text-sm">Mockup Image</span>
              </div>
            )}
          </div>
          <p className="text-sm text-white/70">{study.tags?.[0] || ''}</p>
          <h3 className="font-display text-2xl font-normal text-white">{study.title}</h3>
          <p className="text-base leading-relaxed text-white">{study.blurb}</p>
          {study.metrics && (
            <ul className="space-y-2">
              {study.metrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-white">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-white" />
                  <span>{metric.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a
          href={`/case/${study.slug}`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className={`mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold ${colors.text} transition hover:opacity-90`}
        >
          View Project
        </a>
      </Link>
    </motion.div>
  )
}

export default CaseStudyCard
