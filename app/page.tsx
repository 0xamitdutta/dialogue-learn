import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl font-bold'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard id={1} name='John Doe' topic='Travel' subject='Science' duration={10} color='#ffda6e' />
        <CompanionCard id={1} name='John Doe' topic='Travel' subject='Science' duration={10} color='#ffda6e' />
        <CompanionCard id={1} name='John Doe' topic='Travel' subject='Science' duration={10} color='#ffda6e' />
      </section>

      <section className='home-section'>
        <CompanionsList title="Most Recent Companions" companions={recentSessions} />
        <CTA />
      </section>
    </main>
  )
}

export default Page