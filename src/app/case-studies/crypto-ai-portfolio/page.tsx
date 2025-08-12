import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CryptoAIPortfolioCaseStudy() {
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
                  Crypto Portfolio and
                  <br />
                  Insights Platform
                </h1>
                <p className="text-xl text-gray-300">
                  A full stack crypto portfolio platform that turns real-time market data into clear insights, automated trading recommendations, and a single view of holdings across exchanges and wallets.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Crypto Portfolio</div>
                          <div className="text-xs text-gray-500">Live • Connected</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">$24,567.89</div>
                        <div className="text-xs text-green-500">+2.34%</div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-700">Portfolio Value</span>
                          <span className="text-xs text-gray-500">24h</span>
                        </div>
                        <div className="h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 rounded p-2">
                          <div className="text-xs text-gray-600">BTC</div>
                          <div className="text-sm font-semibold">$12,345</div>
                          <div className="text-xs text-green-500">+1.2%</div>
                        </div>
                        <div className="bg-purple-50 rounded p-2">
                          <div className="text-xs text-gray-600">ETH</div>
                          <div className="text-sm font-semibold">$8,234</div>
                          <div className="text-xs text-red-500">-0.8%</div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 rounded p-2">
                        <div className="text-xs text-gray-600 mb-1">Risk Alert</div>
                        <div className="text-xs text-gray-700">High concentration in BTC (50%)</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-500">Search insights...</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
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
              <span className="text-white">Crypto Platform</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Led By)</span>
              <span className="text-white">Jennifer Jones</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">UX Research, UI Design, Strategy</span>
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
                I designed a full stack crypto portfolio platform as a finished concept.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                The product turns real-time market data into clear insights, automated trading recommendations, and a single view of holdings across exchanges and wallets. The work spans research, information architecture, flows, high fidelity UI, interactive prototypes, and a lightweight design system that is ready for engineering discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/cryptoapp2.jpg"
              alt="End to end journey from connect accounts to portfolio to insights to recommendation to review"
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
                Summary
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Investors deal with scattered data and noisy signals. This concept shows how a calm interface and explainable intelligence can reduce effort, build trust, and help people act with confidence while staying in control.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Outcomes of the Concept</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>A single portfolio view that reconciles exchange and on chain data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Insight cards that explain signals with confidence and risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>An automation builder with guardrails and instant pause</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>A chart friendly design system with accessibility baked in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Clickable prototypes that validate the main routes and patterns</span>
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
            <img
              src="/plan_14.jpg"
              alt="Concept overview board with key screens and principles"
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
              My Role
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                I led the entire experience from strategy to pixels. I shaped the product narrative, defined the information architecture, designed interactions and visuals, and created prototypes to test comprehension and decision making. I wrapped everything into a clear handoff pack for an engineering team to pick up.
              </p>
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
                Audience and Core Jobs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Two primary groups guided the design. Emerging investors want clarity and simple guidance. Active investors want deeper analytics, rules, and the ability to automate with safeguards.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Core Jobs the Product Must Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Connect exchanges and wallets using read only permissions</li>
                <li>• See true holdings, cost basis, and performance across time</li>
                <li>• Understand exposure, drawdown, and concentration risk</li>
                <li>• Act on recommendations with a preview of impact</li>
                <li>• Export reports for tax and accounting</li>
              </ul>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Research and Insight
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I combined short interviews, competitor scans, and quick concept tests using clickable prototypes. I focused on decision moments such as checking daily risk, rebalancing, and handling alerts.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reconciliation builds trust faster than any tagline</li>
                <li>• People want suggestions but need transparency on risk and confidence</li>
                <li>• Alerts must be precise and actionable or they become background noise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/user-research.jpg"
              alt="Persona one pagers and jobs to be done cards"
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
                I centered the IA around three questions. What do I own. What should I care about right now. What can I do next.
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-3">Sections and Their Roles</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Portfolio</strong> gives the single view across exchanges and chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Insights</strong> surfaces signals such as trend shifts, funding extremes, correlation breaks, and large wallet flows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Automations</strong> enables rule based actions and schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Activity and Audit</strong> provide history for transparency and learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Settings</strong> manages connections, permissions, and exports</span>
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
            <img
              src="/collaboration.jpg"
              alt="Sitemap and red routes for first connection and first action"
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
                Connect and Verify
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                First run gets value on screen quickly. People connect an exchange or wallet and see clear states for pending sync, partial imports, duplicates, and conflicts. Trust cues include last sync time, verified source badges, and read only by default.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Portfolio Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A calm dashboard presents total value, P and L, and allocation by asset and chain. Risk panels highlight drawdown and concentration with plain language summaries. Users can pivot by time frame and account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/gam_screen.jpg"
              alt="Responsive dashboard with time series, allocation treemap, and risk callouts"
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
                Insight Cards and Recommendations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each card explains the signal, shows recent context, and displays confidence and risk. People can simulate the impact of following a recommendation before committing. If they proceed, a short review makes limits and outcomes clear.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Automation Builder
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Playbooks include rebalance bands, scheduled dollar cost averaging, and stop loss or take profit with caps and a kill switch. A live preview shows expected behaviour and limits before saving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/new-app.jpg"
              alt="Automation builder with trigger, conditions, action, and guardrails"
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
                Data and AI Concept
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The interface shows how signals flow from data to decision in a transparent way. Normalised exchange and on chain data with near real time reconciliation powers feature pipelines for price, volume, funding, open interest, and wallet flows.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Trust, Security, and Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Security and control are visible by design. API keys are read only by default with clear upgrade paths for actions. Two factor authentication and hardware wallet support are first class. Permissions and data retention controls are explicit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/ipad3.jpg"
              alt="Trust framework card showing permissions, 2FA, audit, and education"
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
              Design System and Accessibility
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                I created a lightweight system that scales cleanly. Tokens cover type, spacing, colour roles, elevation, and motion. Components include cards, chips, banners, tabs, tables, empty states, and chart primitives. Keyboard navigation, logical focus order, high contrast themes, and reduced motion support ensure accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/ipad_2c.jpg"
              alt="Component inventory and token sheet"
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
                Validation and Evidence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I ran short cycles of moderated tests with prototypes. Participants connected a source, interpreted a risk panel, followed a recommendation, and created an automation. People reached first insight quickly, preferred plain language over technical jargon, and valued the simulator before acting.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Handoff Package
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I prepared a clear package that a build team could start from. This includes a narrative deck that tells the product story, annotated flows and high fidelity screens with states, interaction specs and content standards, and a starter design system with tokens and components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/med_mc1.jpg"
              alt="Handoff overview with links to decks, specs, and libraries"
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
              What I Would Explore Next
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Scenario planning for stress tests and futures, multi account goals like income targets and volatility budgets, social learning with anonymised benchmarks and opt in sharing, and localised tax tooling with smarter categorisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Image */}
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/mortgage_gym.jpg"
              alt="Lightweight roadmap and experiment backlog"
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
            <Link href="/contact">
              <Button className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}


