// Section divider component matching Figma design
// Height: 128px with a centered gradient line that fades from transparent to purple in the center

const SectionDivider = () => {
  return (
    <div className="relative h-[128px] w-full">
      {/* Centered horizontal gradient divider line - fades from transparent to purple in center */}
      <div 
        className="absolute left-0 top-[64px] h-px w-full"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(127,90,240,0.5) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  )
}

export default SectionDivider
