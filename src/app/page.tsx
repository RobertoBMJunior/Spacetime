import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Painel esquerdo */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../images/stars.svg)] bg-cover  px-28 py-16">
        {/* blur */}
        <div className=" absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-1 top-0 w-2  bg-stripes" />

        <SignIn />

        <Hero />

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da Rocketseat por Roberto Júnior
        </div>
      </div>

      {/* Painel direito */}
      <div className="flex flex-col bg-[url(../images/stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
