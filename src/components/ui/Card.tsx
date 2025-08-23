import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg border border-secondary-100",
        paddingClasses[padding],
        hover && "hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
