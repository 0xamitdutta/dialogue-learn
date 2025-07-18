export const dynamic = "force-dynamic";
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companions.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessions = await getRecentSessions(10);

  return (
    <main>
      <h1 className='text-2xl font-bold'>Popular Companions</h1>

      <section className='home-section'>
        {
          companions.map((companion) => (
            <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
          ))
        }
      </section>

      <section className='home-section'>
        <CompanionsList title="Most Recent Companions" companions={recentSessions} />
        <CTA />
      </section>
    </main>
  )
}

export default Page