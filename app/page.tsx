import NotesList from '@/app/components/notex-list'
import TimerCounter from '@/app/components/timer-counter'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <NotesList />
        <TimerCounter />
      </div>
    </main>
  )
}
