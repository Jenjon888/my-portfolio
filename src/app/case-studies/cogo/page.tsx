import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContentSection from '@/components/content-3';


export default function ProjectAlphaCaseStudy() {
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
                  Project Alpha
                </h1>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-96 bg-white rounded-lg shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
                    <div className="absolute top-4 left-4 text-xs text-gray-600 transform -rotate-12">
                      Powered by Alpha Health
                    </div>

                    <div className="text-center mb-8">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        ALPHA
                      </div>
                      <div className="text-lg text-gray-600">Healthcare</div>
                    </div>

                    <div className="relative w-32 h-32 mb-6">
                      <div className="absolute inset-0 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                        <div className="text-xs text-gray-600 text-center">
                          Patient Care • Analytics • Management
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
              <span className="text-white">Finance</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Project)</span>
              <span className="text-white">Healthcare Platform </span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Roles)</span>
              <span className="text-white">Product Designer</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-300">(Year)</span>
              <span className="text-white">2023</span>
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
                The Lyra ecosystem brings together our models, products and
                platforms.
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                Lyra is evolving to be more than just the models. It supports an
                entire ecosystem — from products to the APIs and platforms
                helping developers and businesses innovate.
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
              alt="Project Alpha logo design"
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
                 Key Implementation Features
               </h2>
              
             </div>
             <div className="space-y-4">
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Advanced adaptive learning algorithms</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Comprehensive progress tracking </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Intuitive navigation design </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Real-time feedback mechanisms </span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Extensive content library with 75+ tutorials</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Mobile-responsive design for seamless access</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Collaborative learning features</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                   <span>Integration with external study resources</span>
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
              src="/med_mc1.jpg"
              alt="Project Alpha logo design"
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
              Comprehensive Solution Development
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Our approach to solving this complex challenge involved a
                comprehensive design strategy that prioritized user experience
                and educational effectiveness. We began with extensive user
                research to understand the specific needs and pain points of
                GAMSAT students, conducting interviews with current and former
                test-takers to identify common study patterns and areas where
                traditional study methods fell short.
              </p>
              <p>
                The design process incorporated iterative prototyping and user
                testing at every stage, ensuring that each feature and
                interaction was optimized for the target audience. We focused on
                creating an intuitive interface that would reduce cognitive load
                and allow students to concentrate on their studies rather than
                navigating the application. The solution included personalized
                learning paths, adaptive testing algorithms, and comprehensive
                progress tracking to provide students with clear feedback on
                their improvement areas.
              </p>
              <p>
                Throughout the development process, we maintained close
                collaboration with educational experts and content creators to
                ensure that the platform not only functioned well but also
                delivered genuine educational value. The final product
                successfully addressed the core challenge of creating an
                accessible, effective study tool that could serve as a viable
                alternative to traditional GAMSAT preparation methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One Column Copy Section */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold text-foreground mb-8">
            The Lyra ecosystem brings together our models, products and
            platforms.
          </h2>
        </div>
      </section> */}

     

      {/* Two Column Copy Section with Different Background Colors */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="space-y-4 bg-blue-50 dark:bg-blue-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Strategic Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our strategic approach focused on understanding the unique needs
                of medical school applicants and creating a comprehensive study
                platform that would address their specific challenges. We
                conducted extensive research into the GAMSAT exam structure and
                identified key areas where students typically struggle, allowing
                us to develop targeted solutions that would maximize their
                chances of success.
              </p>
            </div>
            <div className="space-y-4 bg-green-50 dark:bg-green-950 p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Innovation Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The innovation focus centered around creating an adaptive
                learning system that could personalize the study experience for
                each student. By leveraging advanced algorithms and user data,
                we developed a platform that could identify individual learning
                patterns and adjust content delivery accordingly, ensuring that
                every student received the most effective study materials for
                their specific needs and learning style.
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
              Comprehensive Solution Development
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Our approach to solving this complex challenge involved a
                comprehensive design strategy that prioritized user experience
                and educational effectiveness. We began with extensive user
                research to understand the specific needs and pain points of
                GAMSAT students, conducting interviews with current and former
                test-takers to identify common study patterns and areas where
                traditional study methods fell short.
              </p>
              <p>
                The design process incorporated iterative prototyping and user
                testing at every stage, ensuring that each feature and
                interaction was optimized for the target audience. We focused on
                creating an intuitive interface that would reduce cognitive load
                and allow students to concentrate on their studies rather than
                navigating the application. The solution included personalized
                learning paths, adaptive testing algorithms, and comprehensive
                progress tracking to provide students with clear feedback on
                their improvement areas.
              </p>
              <p>
                Throughout the development process, we maintained close
                collaboration with educational experts and content creators to
                ensure that the platform not only functioned well but also
                delivered genuine educational value. The final product
                successfully addressed the core challenge of creating an
                accessible, effective study tool that could serve as a viable
                alternative to traditional GAMSAT preparation methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Copy Section */}
      {/* <section className="bg-white dark:bg-gray-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Medify aimed to create a GAMSAT study app as an alternative to
                taking the real test, targeting students in Australia, New
                Zealand, and the UK. The core problem was to help students
                achieve higher scores on the GAMSAT exam. This involved
                providing a variety of interactive exercises and tests that
                would enable students to self-assess their knowledge and
                identify weak spots in their studies. The ultimate goal was to
                increase student confidence before taking the actual exam by
                equipping them with the necessary tools for success.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Design Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A specific design challenge identified was creating an effective
                and easy-to-use navigational system for the tutorial section.
                The tutorials, prepared by an experienced content team including
                teachers and scholars, comprised over 75 tutorials and cheat
                sheets. The challenge was to structure this information in a way
                that was intuitive and required minimal effort for students to
                access and understand. The designer aimed to avoid common user
                problems associated with complex navigation, where users spend
                too much time figuring out how an app works.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* One Column Body Copy Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Comprehensive Solution Development
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl text-left">
              <p>
                Our approach to solving this complex challenge involved a
                comprehensive design strategy that prioritized user experience
                and educational effectiveness. We began with extensive user
                research to understand the specific needs and pain points of
                GAMSAT students, conducting interviews with current and former
                test-takers to identify common study patterns and areas where
                traditional study methods fell short.
              </p>
              <p>
                The design process incorporated iterative prototyping and user
                testing at every stage, ensuring that each feature and
                interaction was optimized for the target audience. We focused on
                creating an intuitive interface that would reduce cognitive load
                and allow students to concentrate on their studies rather than
                navigating the application. The solution included personalized
                learning paths, adaptive testing algorithms, and comprehensive
                progress tracking to provide students with clear feedback on
                their improvement areas.
              </p>
              <p>
                Throughout the development process, we maintained close
                collaboration with educational experts and content creators to
                ensure that the platform not only functioned well but also
                delivered genuine educational value. The final product
                successfully addressed the core challenge of creating an
                accessible, effective study tool that could serve as a viable
                alternative to traditional GAMSAT preparation methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="/gam_screen.jpg"
              alt="Medify GAMSAT study app interface"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Column Images */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/4.5] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/1.jpg"
                alt="Medify interface design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-[4/4.5] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/1b.jpg"
                alt="Medify interface design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

             {/* Single Column Image */}
       <section className="bg-white dark:bg-gray-950 py-16">
         <div className="mx-auto max-w-5xl px-6">
           <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
             <img
               src="/logom.jpg"
               alt="Project Alpha logo design"
               className="w-full h-full object-cover rounded-lg"
             />
           </div>
         </div>
       </section>



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
