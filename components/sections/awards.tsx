"use client"

import SectionHeading from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Awards() {
  const awardsData = [
    {
      title: "Team MVP",
      organization: "TEMG 4950N: Meta LLM for Digital Transformation of Viu International",
      year: " Dec 2024",
      description:
        "Recognized for outstanding contributions to the team project, leading to successful implementation of a large language model for Viu International.",
    },
    {
      title: "Champion in Generative AI Hackathon for Social Good 2023-2024",
      organization: "Join University Competition",
      year: "Oct 2024",
      description:
        "Developed a generative AI solution to recommend environmentally friendly recipe to the users and encourage people to buy rescue food / nearly expired food from supermarkets.",
    },
    {
      title: "Fung Scholarships",
      organization: "Victor and William Fung Foundation Ltd",
      year: "Nov 2024",
      description:
        "The Fung Scholarships promote leadership development through scholarships, fellowships and educational programmes.",
    },
    {
      title: "Most Innovative Project Award",
      organization: "Code Free Soft Limited",
      year: "2023",
      description:
        "Developing a cutting-edge application designed to revolutionize recycling rewards. It is an innovative platform enables recyclers to effortlessly claim and redeem reward points when they recycle at designated recycling spots. With a user-friendly interface and a diverse selection of rewards, we empower individuals to make a positive impact on the environment while enjoying exciting incentives.",
    },
    {
      title: "AIA Scholarship",
      organization: "AIA",
      year: "2023",
      description:
        "The AIA scholarship provides HK$50,000 annually to scholars to recognize their track record of academic excellence and community service.",
    }
  ]

  return (
    <section id="awards" className="py-16 scroll-mt-16">
      <SectionHeading title="Awards & Achievements" />
      <div className="grid md:grid-cols-2 gap-6">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="border-l-4 border-l-primary h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-primary"
                >
                  <Award className="h-6 w-6" />
                </motion.div>
                <div>
                  <CardTitle>{award.title}</CardTitle>
                  <p className="text-muted-foreground">{award.organization}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {award.year}
                </div>
                <p>{award.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
