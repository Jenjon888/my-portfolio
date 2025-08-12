import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MultiBrandDesignSystemCaseStudy() {
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
                  Multi-Brand
                  <br />
                  Design System
                </h1>
                <p className="text-xl text-gray-300">
                  In collaboration with another product designer, I developed a new multi-brand design system for a financial client, creating foundations, components, and comprehensive documentation to ensure consistency and scalability across various brands.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Design System</div>
                          <div className="text-xs text-gray-500">Multi-Brand • Financial</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">3 Stages</div>
                        <div className="text-xs text-gray-500">Complete</div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-700">Brand Coverage</span>
                          <span className="text-xs text-gray-500">100%</span>
                        </div>
                        <div className="h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50 rounded p-2">
                          <div className="text-xs text-gray-600">Components</div>
                          <div className="text-sm font-semibold">50+</div>
                          <div className="text-xs text-purple-500">Built</div>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <div className="text-xs text-gray-600">Brands</div>
                          <div className="text-sm font-semibold">Multi</div>
                          <div className="text-xs text-blue-500">Supported</div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded p-2">
                        <div className="text-xs text-gray-600 mb-1">Status</div>
                        <div className="text-xs text-gray-700">Design Council Established</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-500">Search components...</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
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
              <span className="text-white">Design System</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Led By)</span>
              <span className="text-white">Jennifer Jones + Partner</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">Product Design, System Design</span>
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
                This project was divided into three key stages: Discovery, Foundations, and Components.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                In collaboration with another product designer, I developed a new multi-brand design system for a financial client. The system ensures consistency and scalability across various brands within the client's portfolio while preserving each brand's unique identity.
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
              src="/plan_14.jpg"
              alt="Design system overview showing multi-brand architecture and component structure"
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
                Discovery
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Conducted comprehensive stakeholder interviews to understand their specific needs and requirements. I also performed an in-depth UI audit to identify areas for improvement, ensuring we addressed both user experience and visual design challenges.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Key Activities</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive stakeholder interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>In-depth UI audit and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>User experience and visual design assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Requirements gathering and prioritization</span>
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
              src="/user-research.jpg"
              alt="Stakeholder interviews and UI audit process documentation"
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
              Foundations
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Authored the foundational elements and guidelines for the design system on Supernova. This included creating detailed documentation and compiling a comprehensive set of assets. These foundations served as the blueprint for consistency and scalability across various brands within the client's portfolio.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Deliverables</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Foundational elements and guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Detailed documentation on Supernova</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comprehensive asset library</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Blueprint for consistency and scalability</span>
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
              alt="Supernova documentation and foundational elements showcase"
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
                Components
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built core components for the design system, meticulously incorporating brand theming kits to ensure each brand's unique identity was preserved while maintaining overall cohesion. These components were designed to be reusable, enhancing efficiency and consistency across different projects.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Core component library</li>
                <li>• Brand theming kits integration</li>
                <li>• Reusable design patterns</li>
                <li>• Cross-project consistency</li>
              </ul>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Workshops & Training
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conducted workshops and onboarding sessions using Figjam and Figma to help stakeholders and team members understand and effectively use the design system. These sessions included hands-on training and detailed explanations of the design principles and components.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Training Methods</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Interactive workshops</li>
                <li>• Hands-on training sessions</li>
                <li>• Figjam and Figma collaboration</li>
                <li>• Design principles education</li>
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
              src="/innovation.jpg"
              alt="Component library showcase with brand theming kits and reusable patterns"
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
                Our research and work have also led to the company creating their own design council.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                This council ensures ongoing improvement and adaptation, keeping the design system up-to-date with emerging trends and technologies. The establishment of this council represents a significant organizational commitment to design excellence and systematic thinking.
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
              src="/product-strategy.jpg"
              alt="Design council establishment and ongoing system evolution"
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
              Outcomes and Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                The multi-brand design system successfully established a foundation for consistency and scalability across the client's portfolio. The comprehensive documentation and training sessions ensured smooth adoption, while the establishment of a design council demonstrates long-term organizational commitment to design excellence.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Key Achievements</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Established design system foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Created comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Delivered training and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Established design council for ongoing evolution</span>
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
              src="/mortgage_gym.jpg"
              alt="Design system impact and organizational adoption metrics"
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


