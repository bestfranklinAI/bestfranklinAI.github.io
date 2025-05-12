"use client"

import { useState, useEffect } from "react"

type TypingEffectOptions = {
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export function useTypingEffect(
  texts: string[],
  { typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 2000 }: TypingEffectOptions = {},
) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "deleting" | "pausing">("typing")

  useEffect(() => {
    if (!texts || texts.length === 0) return

    const currentText = texts[currentIndex]

    let timeout: NodeJS.Timeout

    // Typing phase
    if (phase === "typing") {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setPhase("deleting")
        }, delayBetweenTexts)
      }
    }

    // Deleting phase
    else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next text
        setPhase("typing")
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [texts, currentIndex, displayText, phase, typingSpeed, deletingSpeed, delayBetweenTexts])

  return { displayText, isTyping: phase === "typing" || phase === "deleting" }
}
