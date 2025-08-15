import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UXChatbotCaseStudy() {
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
                  UX Research & Design
                  <br />
                  Chatbot
                </h1>
                <p className="text-xl text-gray-300">
                  An AI-powered mentor that helps people learn UX research and
                  design through practical guidance and grounded knowledge.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          UX Research Assistant
                        </div>
                        <div className="text-xs text-gray-500">
                          Online • Ready to help
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-4">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-3 max-w-[200px]">
                          <p className="text-xs text-gray-800">
                            Hello! I&apos;m here to help with your UX research
                            questions.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <div className="bg-gray-200 rounded-lg p-3 max-w-[200px]">
                          <p className="text-xs text-gray-800">
                            How do I plan a usability test?
                          </p>
                        </div>
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-3 max-w-[200px]">
                          <p className="text-xs text-gray-800">
                            Great question! Here&apos;s a step-by-step
                            approach...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-500">
                          Type your question...
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
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
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
              <span className="text-white">AI Chatbot</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Led By)</span>
              <span className="text-white">Jennifer Jones</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">
                UX Research, AI Design, Development
              </span>
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
                I designed a chatbot that helps people learn UX research and
                design in a practical way.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                It uses modern large language models and is grounded in my own
                corpus of research notes, case studies, workshop decks, and
                writing. The aim is simple. Give learners a trusted mentor that
                explains methods, critiques artefacts, and suggests the next
                best step with clear references.
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
              src="/chatbot.avif"
              alt="Conversation flow from greet to intent to grounded answer to next action to reflection"
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
                What the Chatbot Does
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                The assistant recognises a learner&apos;s intent, retrieves
                relevant material from my curated knowledge base, and responds
                with a short explanation, a concrete example, and one action
                that moves the work forward. When a topic needs a human view it
                says so and points to the most relevant source.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Outcomes of the Concept
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Multiturn tutoring that adapts to level and goal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Grounded answers with inline source chips so trust is
                    visible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Practical actions such as generate a test plan or critique
                    my interview script
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Reflection prompts that turn sessions into learning logs
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
            <img
              src="/cogo_2.jpg"
              alt="Chat UI with an answer that includes sources and action chips"
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
                I led the experience from problem framing to high fidelity
                design. I mapped user and business goals, designed the
                conversation model, curated and structured the corpus, and built
                prototypes to test comprehension, trust, and time to useful
                outcome. I&apos;ve kept the design ready for engineering
                discovery.
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
                Audience and Goals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Two groups shaped the experience. Beginners who want foundations
                and clear examples. Practitioners who need quick refreshers,
                critique, and patterns they can reuse. The goal was to
                democratize UX research knowledge by making expert guidance
                accessible 24/7, helping practitioners make better decisions
                about their research approach and methodology selection.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Conversation Architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I designed a simple loop that keeps the bot predictable and
                useful. The core steps include triaging intent and skill level,
                retrieving relevant sources from the curated corpus, composing
                answers with real examples, offering practical actions, and
                logging key takeaways with reflection prompts to close the loop.
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
              src="/cogo_7.jpg"
              alt="Persona cards for beginner and practitioner with top jobs to be done"
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
                All answers are grounded in a structured corpus built from my
                work.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                Each item carries an abstract, key takeaways, and canonical
                references. Project artefacts are de identified and annotated
                with why we chose a path and what outcomes we saw. This turns
                citations into something learners can actually use.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Content Coverage
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Methods such as interviews, diary studies, surveys, and
                    usability testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Synthesis patterns including affinity mapping and insight
                    writing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Design artefacts such as journey maps, IA proposals, and
                    interaction patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Facilitation playbooks for workshops and stakeholder
                    alignment
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
            <img
              src="/cogo-features.png"
              alt="Knowledge graph that links methods to artefacts and examples"
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
                UX and UI Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The chat interface keeps attention on the dialogue while making
                controls obvious. The header shows topic and level with a quick
                switch. Messages include source chips that expand to the exact
                paragraph used. Smart chips suggest next steps so learners can
                move with one tap. A compact side panel holds saved artefacts,
                templates, and a learning log.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Multilingual Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Language is first class. The assistant greets in the user&apos;s
                language, formats dates and currency correctly, and handles code
                switching mid chat. Tone guidance keeps phrasing respectful and
                clear while leaving policy and terminology consistent.
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
              src="/cogol.jpg"
              alt="High fidelity chat screens across mobile and desktop with source chips and action chips"
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
                Guardrails and Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The bot stays inside scope, avoids legal or HR advice, and names
                limitations. Sensitive content is masked in the transcript and
                redacted in stored logs. Before any action the bot summarises
                what it will do and asks for confirmation.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Trust Cues</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Visible citations tied to real documents</li>
                <li>• Clear capability statement and limits</li>
                <li>• Data controls with a short privacy note</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Validation and Metrics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I evaluated the prototype with short tasks and adversarial
                prompts. We measured time to first useful answer, grounded
                accuracy against the corpus, critique helpfulness, and
                confidence lift after a session.
              </p>
              <h4 className="font-semibold text-foreground mb-2">
                What I Track
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Resolution rate for common tasks such as write a screener or
                  plan a test
                </li>
                <li>• Accuracy and refusal accuracy for grounded answers</li>
                <li>• Helpfulness scores for critique and examples</li>
                <li>
                  • Repeat use of generated templates and the learning log
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
              src="/innovation.jpg"
              alt="Guardrail map showing grounding, refusal, redaction, and escalation"
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
              Design System and Content Standards
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                I built a small system for fast iteration. Tokens cover type,
                spacing, colour roles, elevation, and motion. Components include
                bubbles, source chips, suggestion chips, inputs, and system
                notices. Content standards define tone, empathy markers, and how
                to explain trade offs so guidance stays honest and practical.
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
              alt="Component inventory and tone guide"
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
                I would add short learning paths such as research foundations in
                a week, expand right to left language support, allow uploads for
                richer critique with side by side comparisons, and prototype a
                community review mode where anonymised examples show how
                different researchers solved the same problem.
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
              src="/bk1.jpeg"
              alt="Lightweight roadmap with near and next experiments"
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
              <Button className="w-full sm:w-auto">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
