import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HSBCKineticCaseStudy() {
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
                  HSBC Kinetic
                </h1>
                <p className="text-xl text-gray-300">
                  A banking app based on real life insights from more than two
                  thousand UK businesses.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            HSBC Kinetic
                          </div>
                          <div className="text-xs text-gray-500">
                            Business Banking
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          £24,567
                        </div>
                        <div className="text-xs text-green-500">Available</div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-700">
                            Cash Flow
                          </span>
                          <span className="text-xs text-gray-500">
                            This Month
                          </span>
                        </div>
                        <div className="h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-50 rounded p-2">
                          <div className="text-xs text-gray-600">Income</div>
                          <div className="text-sm font-semibold">£12,345</div>
                          <div className="text-xs text-green-500">+15%</div>
                        </div>
                        <div className="bg-red-50 rounded p-2">
                          <div className="text-xs text-gray-600">Outgoing</div>
                          <div className="text-sm font-semibold">£8,234</div>
                          <div className="text-xs text-red-500">-8%</div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 rounded p-2">
                        <div className="text-xs text-gray-600 mb-1">Alert</div>
                        <div className="text-xs text-gray-700">
                          Cash shortfall predicted in 3 days
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-500">
                          Search transactions...
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
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
              <span className="text-white">Banking App</span>
            </div>

            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">UX Lead, Data & Insights</span>
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
                I worked closely with business analysts in London and India and
                partnered daily with product and engineering.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                As UX Lead in the Data and Insights team I owned the experience
                for business accounts with a focus on cash flow analysis,
                spending trends, and accounting software integration. I led
                discovery through delivery. I co created the roadmap with the
                product owner, partnered with BAs on requirements and acceptance
                criteria, and stayed close to engineers through grooming, crit,
                and pairing so intent matched implementation.
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
              src="/coverh.png"
              alt="High level customer flow from sign up to verification to data insights to alerts to next best actions"
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
                To understand real needs HSBC Kinetic ran field research and
                qualitative interviews with small business owners. These
                insights shaped features so the app is useful and relevant for
                day to day operations. Kinetic is available to new UK limited
                companies with turnover up to two million pounds.
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
              src="/HS1a.jpg"
              alt="HSBC Kinetic branding and interface"
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
                Small businesses need a simple way to see money in and out, spot
                issues early, and act with confidence. Our goal was to reduce
                effort, improve clarity, and connect insights to actions while
                meeting compliance requirements.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Success Meant
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Time to first insight measured in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Clear cash flow views and spending trends that drive
                    decisions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Seamless connections to accounting platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Alerts with next best actions that actually resolve issues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Compliance with KYC and AML while keeping friction low
                  </span>
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
              src="/1m_10.jpg"
              alt="Goals map showing user goals and business goals with shared success metrics"
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
                Research and Constraints
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I synthesised interview findings from small business owners and
                ran focused desk research on banking patterns and open banking
                integrations. I mapped tasks such as reconciling payments,
                managing invoices, and planning for shortfalls.
              </p>
              <h4 className="font-semibold text-foreground mb-2">
                Constraints
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Strict compliance requirements</li>
                <li>• Performance on lower end devices</li>
                <li>• Support for both mobile and tablet</li>
              </ul>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Data Driven Insights
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The app helps owners run accounts smoothly and take action in
                context. Core capabilities include viewing all accounts in one
                place, making payments quickly and safely, sending invoices with
                minimal effort, and tracking spending trends.
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
              src="/user-research.jpg"
              alt="Research wall with quotes, task model, and constraints list"
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
                With BAs and stakeholders I translated business goals into user
                stories and acceptance criteria.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                I held regular sessions to clarify edge cases and dependencies
                so tickets could land within roadmap deadlines. Once a story was
                ready I produced annotated wireframes that showed navigation,
                content hierarchy, and base functionality for each screen.
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
              src="/HS2.jpg"
              alt="Annotated wireframe with states for loading, error, empty, and success"
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
                High Fidelity Wireframes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I moved to high fidelity wireframes early to align on layout,
                hierarchy, and copy while still iterating quickly. Annotations
                explained behaviour, states, and validation so engineers could
                plan with confidence.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                User Flows
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I created detailed user flows that show every step to reach a
                goal. A representative example was cancelling a one off payment
                when a cash shortfall is predicted. The flow covered prediction,
                alert, decision, authentication, confirmation, and post action
                messaging.
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
              src="/HS1.jpg"
              alt="Step by step flow from alert to resolution with entry points and outcomes"
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
                Accounting Integrations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To reduce bookkeeping effort we aligned data structures and
                states with major accounting platforms. I defined reconciliation
                rules, error messaging, and permissions so owners stay in
                control. I also worked through edge cases such as duplicate
                invoices, partial payments, and currency mismatches.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Accessibility and Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From the start I designed for accessibility and regulatory
                needs. Colour and type scale that remain readable during long
                sessions. Clear focus order and keyboard friendly actions.
                Screen reader labels for transactions and graphs with useful
                summaries.
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
              src="/collaboration.jpg"
              alt="Accessibility checklist and example content patterns"
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
                Validation and Iteration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I ran quick moderated tests with clickable prototypes to
                validate comprehension and decision making. We watched how
                owners interpreted forecasts, handled alerts, and completed
                money movement. Findings led to simpler alert copy, clearer next
                actions, and a streamlined confirmation pattern.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Collaboration and Handoff
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I presented journeys and wireframes in an interactive InVision
                prototype to senior stakeholders including the CTO. After
                feedback I updated flows, finalised specs, and collaborated with
                the UI designer on visual polish and design tokens.
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
              Outcomes and Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                The shipped experience made it faster to understand cash
                position and act with confidence. Early signals showed fewer
                abandoned alerts and quicker resolution of predicted shortfalls.
                The work also established patterns for future insight features
                and created a component library that improved delivery speed.
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
              src="/product-strategy.jpg"
              alt="Dashboard of early indicators such as time to first insight and alert resolution rate"
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
              What I Would Do Next
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Expand forecasting with scenario planning and clear
                    assumptions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Introduce spaced nudges that help owners create healthy cash
                    habits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Add deeper invoice analytics and reconciliation suggestions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Run experiments on alert copy and entry points to lift
                    resolution rate
                  </span>
                </li>
              </ul>
            </div>
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
