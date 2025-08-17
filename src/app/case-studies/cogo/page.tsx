import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function CoGoCaseStudy() {
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
                  CoGo: Designing a Platform for Conscious Spending
                </h1>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-96 bg-white rounded-lg shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 p-6 flex flex-col items-center justify-center">
                    <div className="absolute top-4 left-4 text-xs text-gray-600 transform -rotate-12">
                      Conscious Spending
                    </div>

                    <div className="text-center mb-8">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        CoGo
                      </div>
                      <div className="text-lg text-gray-600">Ethical Fintech</div>
                    </div>

                    <div className="relative w-32 h-32 mb-6">
                      <div className="absolute inset-0 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                        <div className="text-xs text-gray-600 text-center">
                          Values • Rewards • Impact
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
                      <span className="text-sm font-medium text-gray-800">
                        START
                      </span>
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-lg"></div>
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
              <span className="text-gray-300">(Industry)</span>
              <span className="text-white">Fintech</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Project)</span>
              <span className="text-white">Mobile App Redesign</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">Product UX/UI Lead</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Year)</span>
              <span className="text-white">2018</span>
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
                CoGo is a mobile app that helps people support environmentally friendly businesses.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                It launched in December 2018 as an ethical fintech platform, connecting consumers with companies that align with their values and rewarding them for spending responsibly. As the Product UX/UI Lead, I was responsible for the experience strategy and design.
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
              src="/cogo_m12.jpg"
              alt="CoGo app interface showing conscious spending features"
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
                Understanding the Vision
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                CoGo's mission is simple: make it easy for consumers to spend in line with their values. When users shop at verified businesses, they earn points redeemable for discounts or free products. The app calculates a user's "CoGo score" based on transactions within 30 days, displays past spending choices, and recommends alternative businesses that match the user's selected values.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The idea was compelling, but the initial product had difficulty communicating its benefits. New users downloaded the app but rarely signed up, and those who did often failed to engage long term. We needed to uncover why, identify the most important user needs, and design an experience that met those needs while staying true to CoGo's ethical mission.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Two Column Images */}
            <section className="bg-gray-50 dark:bg-gray-800 py-2">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/4.5] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/1c1.jpg"
                alt="CoGo app interface showing value selection"
                width={600}
                height={675}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-[4/4.5] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/1c2.jpg"
                alt="CoGo app interface showing rewards system"
                width={600}
                height={675}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>



      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Defining the Challenge
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Our immediate project was to redesign the Living Wage wallet ahead of Living Wage Week. We had five weeks to carry out research, design, testing, and final implementation. App Store submission deadlines, compliance checks, and the need for security and usability testing meant we had to get the experience right quickly.
              </p>
              <p>
                It was clear that we were dealing with more than a new user interface. We needed to understand the underlying reasons users were dropping off and ensure the app delivered value from the first interaction. Without that, even the best-looking design would not succeed.
              </p>
            </div>
          </div>
        </div>
      </section>


      

                  

            

      {/* Two Column Copy Section with Different Background Colors */}
      <section className="pt-16 pb-0">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="space-y-4 bg-blue-50 dark:bg-blue-950 pt-8 pb-8 pl-8 pr-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Research and Discovery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The first step was to gather evidence. I believe that good design begins with a clear understanding of user goals and context, so I invested in research early. I reviewed existing analytics to see where people abandoned the process, then scheduled interviews with users and recruited participants for moderated usability tests.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 pt-8 pb-8 pl-4 pr-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Key Pain Points
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our research uncovered several pain points: onboarding was confusing, the value proposition was unclear, and navigation was inconsistent. Once inside the app, people struggled to find their way back to key features like the rewards or value selection.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Full Width Image */}
       <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cogo_2.jpg"
              alt="CoGo app redesign showing improved user interface"
              width={1400}
              height={788}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pt-8 pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Designing for Clarity and Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Armed with these insights, I set out to redesign the experience. My focus was to make the app straightforward and rewarding from the outset. We began with ideation workshops that included the product manager, head of data, and other stakeholders. Together we prioritised features, aligned on the value proposition, and defined the core goals for the redesign.
              </p>
              <p>
                We simplified the sign-up process, providing clear explanations of how CoGo works and why users might care. Rather than hiding important information behind account creation, we highlighted benefits upfront—showing examples of points earned, explaining how values influence recommendations, and letting people browse ethical businesses before committing.
              </p>
              <p>
                I reorganised the navigation to reduce complexity. Key features—such as the wallet, rewards, and value selection—moved to more prominent positions, while redundant screens were removed. I worked closely with the development team to ensure these changes were technically feasible and didn't impact performance.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Full Width Image */}
      <section className="bg-gray-50 dark:bg-gray-800 pt-4 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/befaf.jpg"
              alt="CoGo app redesign showing improved user interface"
              width={1400}
              height={788}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

 {/* Single Column Image */}
 <section className="bg-white dark:bg-gray-950 pt-4 pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/1m_8.jpg"
              alt="CoGo app final design showing improved user experience"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>




      {/* One Column Body Copy Section */}
      <section className="bg-white dark:bg-gray-950 pt-8 pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Testing and Iteration
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Usability testing was essential. I organised one-on-one sessions with participants using our prototypes. We asked them to sign up, set their values, explore local businesses, and complete a purchase scenario. These sessions revealed issues with perceived affordances, layout, and search functionality.
              </p>
              <p>
                After initial testing, I ran a focus group with four existing users. They interacted with a high-fidelity prototype and discussed topics such as goal-setting, tracking, and sharing results with friends. Their feedback further refined our approach, prompting improvements to the goal-setting flow and clarification of ethical criteria.
              </p>




              <p>
                Throughout these iterations, I maintained a detailed functional specification and collaborated closely with developers. My background in coding helped me communicate edge cases, performance considerations, and the rationale behind interaction patterns. This alignment ensured that the final implementation matched the design intent.
              </p>
            </div>
          </div>
        </div>
      </section>

                         {/* Full Width Image */}
                         <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cogo_7.jpg"
              alt="CoGo app redesign showing improved user interface"
              width={1400}
              height={788}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

             {/* Full Width Image */}
             <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cogo-features.png"
              alt="CoGo app redesign showing improved user interface"
              width={1400}
              height={788}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </section>



     

      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 pt-8 pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Outcome and Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                The redesign launched on time during Living Wage Week. Within the first month we saw a significant increase in user engagement:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed max-w-2xl text-left">
                <li>• Sign-up conversion improved by around 20 percent.</li>
                <li>• Daily active users increased by roughly 30 percent, and retention improved.</li>
                <li>• Feedback from users was overwhelmingly positive; they appreciated the clearer value proposition and smoother navigation.</li>
              </ul>
              <p>
                More importantly, the redesign positioned CoGo as a credible, user-centred platform. Ethical businesses saw increased visibility, and consumers found it easier to align their spending with their values.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Single Column Image */}
       <section className="bg-white dark:bg-gray-950 pt-4 pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src="/cogo_hold.jpeg"
              alt="CoGo app final design showing improved user experience"
              width={1200}
              height={675}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* One Column Body Copy Section */}
      {/* <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Reflection
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                This project reinforced the importance of grounding design decisions in research and close collaboration. By deeply understanding user motivations and aligning them with business goals, we could deliver meaningful improvements quickly. Working hand in hand with developers ensured that design and implementation were cohesive, and staying informed about emerging technologies allowed us to anticipate future needs.
              </p>
              <p>
                For me, the biggest lesson was that even under tight deadlines, investing time upfront in understanding and testing pays off. Clear, empathetic design—supported by data and technical know‑how—helped transform CoGo from a promising idea into a product that people enjoy using and that supports businesses doing good.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button variant="outline" className="mr-4">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>

      <SharedFooter />
    </main>
  );
}
