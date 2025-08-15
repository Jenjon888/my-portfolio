import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function MedifyGAMSATCaseStudy() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      <HeroHeader />

      {/* Hero Header Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold leading-tight mb-4 animate-fade-in-slide-up">
                  Medify GAMSAT
                  <br />
                  Practice Platform
                </h1>
                <p className="text-xl text-gray-300">
                  A responsive web app designed to help students prepare for the
                  GAMSAT exam, built with ReactJS on AWS and delivered in close
                  partnership with developers, the CTO, and product owners.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            GAMSAT Practice
                          </div>
                          <div className="text-xs text-gray-500">
                            Study • Practice • Review
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">
                          Section 1
                        </div>
                        <div className="text-xs text-gray-500">Reasoning</div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-700">
                            Progress
                          </span>
                          <span className="text-xs text-gray-500">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-50 rounded p-2">
                          <div className="text-xs text-gray-600">Completed</div>
                          <div className="text-sm font-semibold">12/16</div>
                          <div className="text-xs text-green-500">
                            Tutorials
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <div className="text-xs text-gray-600">Next</div>
                          <div className="text-sm font-semibold">Mock Test</div>
                          <div className="text-xs text-blue-500">Ready</div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 rounded p-2">
                        <div className="text-xs text-gray-600 mb-1">
                          Study Tip
                        </div>
                        <div className="text-xs text-gray-700">
                          Practice time management with mock exams
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-500">
                          Search tutorials...
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metadata Row */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex flex-wrap justify-start gap-8 text-sm">
            <div className="flex gap-2">
              <span className="text-gray-300">(Project Type)</span>
              <span className="text-white">Educational Platform</span>
            </div>

            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">UX Design, UI Design, Strategy</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Year)</span>
              <span className="text-white">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Copy Section */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium">
                I led UX and UI from discovery to delivery and worked day to day
                with engineering and content teams.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                I co planned sprints with the PO, aligned scope with the CTO,
                and wrote functional specs that flowed straight into Jira. I
                stayed close to implementation so the shipped product matched
                the intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/logom.jpg"
              alt="Medify logo"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Section with Title and Bullet Points */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-foreground mb-6">
                Company
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Medify offers mock exams and study tools that help students
                improve study habits and maximise exam performance. The platform
                includes detailed study guides, interactive exercises, progress
                tracking, personalised recommendations, and a library of
                articles and video tutorials. The new GAMSAT experience sits
                alongside UCAT and BMAT and is fully responsive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/medify.jpg"
              alt="Medify dashboard"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Problem and Goals
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                GAMSAT is a long and demanding exam. Students need structured
                practice, feedback they can act on, and an interface that stays
                out of the way. The goal was to help students self assess,
                identify weak areas, and build confidence before the real test
                while growing Medify&apos;s footprint across Australia, New
                Zealand, and the UK.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Success Meant
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Clear learning pathways that reduce time to first practice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Tutorials and mocks that mirror the real exam format
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Simple navigation that lets students find the next best
                    action without friction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Progress tracking that turns data into decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/sitemap.png"
              alt="Success metrics map with user goals and business goals"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Copy Section with Different Background Colors */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="space-y-4 bg-blue-50 dark:bg-blue-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Research
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I began with domain research to understand the structure and
                demands of the exam. I reviewed the ACER site to map the
                official breakdown of sections and timing, and to capture the
                tone and examples used in guidance for candidates.
              </p>
              <h4 className="font-semibold text-foreground mb-2">
                Research Sources
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ACER website for exam structure and timing</li>
                <li>• Student forums including Med Students Online</li>
                <li>• Adjacent study tools for benchmarking</li>
              </ul>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Core Requirements
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To kick off delivery I gathered business requirements with
                stakeholders and turned them into actionable user stories and
                acceptance criteria. This became the backlog that drove sprint
                planning.
              </p>
              <h4 className="font-semibold text-foreground mb-2">
                Deliverables
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• User journeys and task flows</li>
                <li>• Information architecture and navigation model</li>
                <li>• Low fidelity wireframes and clickable prototypes</li>
                <li>• UI design system components and patterns</li>
                <li>• Functional specifications mapped to Jira tickets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/gam_screen.jpg"
              alt="Research wall showing exam breakdown, quotes from students, and early task flows"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Copy Section */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium">
                A major focus was the tutorial area. Content was prepared by
                experienced teachers and scholars with more than seventy five
                tutorials and companion cheat sheets.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                The challenge was to make this library fast to scan, easy to
                navigate, and comfortable to read on any device. I designed the
                information model around how people actually learn.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Learning Design Principles
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Chunk content into small units with a clear reading order
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Pair each tutorial with a quick practice item to reinforce
                    learning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Provide a lightweight summary for quick revision and a
                    deeper dive for mastery
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Copy Section with Different Background Colors */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="space-y-4 bg-blue-50 dark:bg-blue-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Navigation Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Navigation was kept intuitive and predictable. Tabs at the top
                of each page to reduce scrolling and keep orientation. Clear
                signposting so key areas are always one click away. Persistent
                progress and section status so students know where they stand.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Engineering Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I worked closely with engineering to ensure the patterns were
                feasible in React and performant on AWS. We agreed on component
                contracts early which kept delivery smooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/gam_screen.jpg"
              alt="Component inventory and states for tabs, cards, progress, and question types"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Copy Section */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Accessibility and Responsiveness
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From the start I designed for accessibility and comfort during
                long sessions. Scalable type and readable line length for
                sustained reading. High contrast palette that still feels calm.
                Keyboard friendly navigation and logical focus order.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Validation and Iteration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I validated the flow with quick rounds of moderated usability
                sessions using prototypes. We observed how students discovered
                tutorials, started a mock, paused, and resumed. Pain points
                included hesitation on where to start and how to review
                mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/mflow.png"
              alt="Responsive breakpoints and type scale"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Copy Section with Different Background Colors */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="space-y-4 bg-blue-50 dark:bg-blue-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Content and Learning Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Working with the content team we defined a repeatable structure
                for tutorials and review. Learning objective at the top so
                intent is clear. Estimated time and difficulty to set
                expectations. Practice now and save for later to support
                different study styles.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Engineering Handoff and Specs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                After finalising the UI I wrote functional specification
                documents that defined how each feature should behave and which
                technologies would support it. These specs were reviewed with
                senior leadership and used to create Jira tickets with clear
                acceptance criteria per story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Results and Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                The shipped experience made it easier for students to start fast
                and stay on track. Early feedback highlighted the clarity of
                navigation, the usefulness of chunked tutorials, and the
                confidence boost from practice and review cycles that mirror the
                real exam. On the business side the work expanded Medify&apos;s
                offering and created a scalable pattern library for future exam
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/med_mc1.jpg"
              alt="Analytics dashboard showing completion rates and return visits"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/case-studies">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
