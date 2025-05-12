"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <motion.div
        className="h-1 w-20 bg-primary mt-2"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}
