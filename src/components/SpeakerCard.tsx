import { Card, CardContent } from '@/components/ui/card'
import speakerHeadshot from '@/assets/placeholder.svg'

interface SpeakerCardProps {
  name: string
  talkTitle: string
  headshot?: string
}

export const SpeakerCard = ({ name, talkTitle, headshot = speakerHeadshot }: SpeakerCardProps) => {
  return (
    <Card className='relative overflow-hidden bg-gradient-card border-magnolia-border shadow-card hover:shadow-magnolia transition-all duration-300 hover:-translate-y-2 group max-w-sm'>
      <CardContent className='p-6'>
        {/* Headshot */}
        <div className='relative mb-6 mx-auto w-32 h-32'>
          <div className='absolute inset-0 bg-gradient-magnolia rounded-full p-0.5'>
            <img
              src={headshot}
              alt={`${name} headshot`}
              className='w-full h-full object-cover rounded-full bg-magnolia-card'
            />
          </div>
          {/* Glowing effect on hover */}
          <div className='absolute inset-0 rounded-full bg-gradient-magnolia opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg'></div>
        </div>

        {/* Speaker Name */}
        <h3 className='text-xl font-bold text-center mb-3'>
          <span className='bg-gradient-magnolia bg-clip-text text-transparent'>{name}</span>
        </h3>

        {/* Talk Title */}
        <p className='text-muted-foreground text-center leading-relaxed'>{talkTitle}</p>

        {/* Decorative accent */}
        <div className='mt-4 h-0.5 w-16 bg-gradient-magnolia mx-auto rounded-full'></div>
      </CardContent>

      {/* Subtle background pattern */}
      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-magnolia opacity-5 rounded-bl-full'></div>
    </Card>
  )
}
