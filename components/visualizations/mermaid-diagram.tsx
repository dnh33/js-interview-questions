"use client"

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
    })
    
    if (containerRef.current) {
      mermaid.render('mermaid-diagram', chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      })
    }
  }, [chart])

  return (
    <div ref={containerRef} className="flex justify-center p-4 bg-muted/50 rounded-lg" />
  )
}