import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { getRecentUserSessions, getUserCompanions } from '@/lib/actions/companions.action';
import CompanionsList from '@/components/CompanionsList';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const user = await currentUser();
  if (!user)
    redirect('/sign-in');

  // Fetch completed lessons and created companions
  const sessionsHistory = await getRecentUserSessions(user.id, 5);
  const createdCompanions = await getUserCompanions(user.id);

  return (
    <main className='min-lg:w-3/4'>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        {/* Profile Card */}
        <div className="flex items-center gap-4 rounded-4xl">
          <Image
            src={user.imageUrl}
            alt="user"
            width={150}
            height={150}
            className='rounded-lg'
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
            <span className="text-muted-foreground text-base">{user.emailAddresses?.[0]?.emailAddress}</span>
          </div>
        </div>
        {/* Stats */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center border border-black rounded-2xl px-8 py-4 bg-white min-w-[160px]">
            <div className="flex justify-start items-center gap-2 mb-1">
              <Image src="/icons/check.svg" alt="check" width={30} height={30} />
              <span className="text-2xl font-bold">{sessionsHistory.length}</span>
            </div>
            <span className="text-base">Lessons Completed</span>
          </div>
          <div className="flex flex-col items-center justify-center border border-black rounded-2xl px-8 py-4 bg-white min-w-[160px]">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icons/cap.svg" alt="cap" width={30} height={30} />
              <span className="text-2xl font-bold">{createdCompanions.length}</span>
            </div>
            <span className="text-base">Companions Created</span>
          </div>
        </div>
      </section>

      {/* Completed Lessons */}
      <Accordion type="multiple">
        <AccordionItem value="recent-sessions">
          <AccordionTrigger className="text-2xl font-bold mb-6">Recent Sessions</AccordionTrigger>
          <AccordionContent>
            <CompanionsList title="Recent Lessons" companions={sessionsHistory} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Companions Created Accordion */}
      <Accordion type="multiple">
        <AccordionItem value="companions-created">
          <AccordionTrigger className="text-2xl font-bold">Companions Created</AccordionTrigger>
          <AccordionContent>
            <CompanionsList title="My Companions" companions={createdCompanions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

export default Profile