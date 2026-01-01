// Section divider component matching Figma design
// Height: 128px with a centered gradient line that fades from transparent to purple in the center

const SectionDivider = () => {
  return (
    <div className="relative h-[128px] w-full">
      {/* Centered horizontal gradient divider line - fades from transparent to purple in center */}
      <div 
        className="section-divider-line"
      />
    </div>
  )
}

export default SectionDivider
