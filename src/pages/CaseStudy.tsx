import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../siteData'

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <div className="space-y-4">
        <p className="text-slate-300">Case study not found.</p>
        <Link className="text-accent hover:underline" to="/work">
          Back to work
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Case study</p>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{study.title}</h1>
        <p className="max-w-3xl text-slate-300">{study.blurb}</p>
      </div>

      {study.metrics && (
        <div className="grid gap-4 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/5 bg-panel/70 px-4 py-4 text-sm text-slate-200 shadow-inner shadow-white/5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-slate-50">{metric.value}</p>
            </div>
          ))}
        </div>
      )}

      {study.sections && (
        <div className="space-y-4 rounded-3xl border border-white/5 bg-panel/70 px-6 py-8 shadow-xl shadow-black/40 sm:px-8 sm:py-10">
          {study.sections.map((section) => (
            <div key={section.heading} className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-50">{section.heading}</h2>
              <p className="text-slate-300">{section.copy}</p>
            </div>
          ))}
        </div>
      )}

      <a
        href="/#work"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-lilac"
      >
        ← Back to work
      </a>
    </div>
  )
}

export default CaseStudyPage
