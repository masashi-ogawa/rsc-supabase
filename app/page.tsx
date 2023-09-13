import NotesList from '@/app/components/notex-list'
import TimerCounter from '@/app/components/timer-counter'
import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <Suspense fallback={<Spinner color="border-green-500" /> }>
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
