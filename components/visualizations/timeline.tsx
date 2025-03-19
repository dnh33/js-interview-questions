"use client"

import { motion } from 'framer-motion'

interface TimelineEvent {
  title: string
  description: string
  time: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8 pl-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[44px] flex h-6 w-6 items-center justify-center rounded-full border bg-background">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{event.time}</span>
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}