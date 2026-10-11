import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Expertise } from '@/components/expertise/Expertise'
import { Hero } from '@/components/hero/Hero'
import { Performance } from '@/components/performance/Performance'
import { Projects } from '@/components/projects/Projects'
import { Experience } from '@/components/experience/Experience'
import { Resume } from '@/components/resume/Resume'
import { Technologies } from '@/components/technologies/Technologies'

export function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Experience />
      <Expertise />
      <Performance />
      <Resume />
      <Contact />
    </>
  )
}
