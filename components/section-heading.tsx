interface SectionHeadingProps {
  title: string
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="h-1 w-20 bg-primary mt-2"></div>
    </div>
  )
}
