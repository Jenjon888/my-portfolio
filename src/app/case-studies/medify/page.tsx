import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function MedifyCaseStudy() {
  return (
    <main className="font-sans min-h-dvh bg-background text-foreground">
      <HeroHeader />

      {/* Hero Header Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold leading-tight mb-4">
                  Type Hype,
                  <br />
                  Massive Assembly
                </h1>
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-white p-6 flex flex-col items-center justify-center">
                    {/* Powered by text */}
                    <div className="absolute top-4 left-4 text-xs text-black transform -rotate-12">
                      Powered by Massive Assembly
                    </div>

                    {/* App Logo */}
                    <div className="text-center mb-8">
                      <div className="text-2xl font-bold text-black mb-2">
                        TYPE
                      </div>
                      <div className="text-2xl font-bold text-black">HYPE</div>
                      {/* Cross symbol */}
                      <div className="relative mt-2">
                        <div className="w-8 h-0.5 bg-black mx-auto"></div>
                        <div className="w-0.5 h-8 bg-black mx-auto mt-1"></div>
                      </div>
                    </div>

                    {/* Circular text path */}
                    <div className="relative w-32 h-32 mb-6">
                      <svg className="w-32 h-32" viewBox="0 0 128 128">
                        <defs>
                          <path
                            id="circle"
                            d="M64,20 A44,44 0 1,1 64,108 A44,44 0 1,1 64,20"
                            fill="none"
                          />
                        </defs>
                        <text className="text-xs fill-black">
                          <textPath href="#circle" startOffset="0%">
                            YPE BASED CREATOR TOOL - TYPE BASED CREATOR
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* CREATE button */}
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <span className="text-sm font-medium text-black">
                        CREATE
                      </span>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metadata Row */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex gap-2">
              <span className="text-muted-foreground">(Brand)</span>
              <span>Massive Assembly</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">(Led By)</span>
              <span>Massive Assembly</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">(Roles)</span>
              <span>Design, Animation</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">(Year)</span>
              <span>2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
                  Image Placeholder
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                  1200 x 900
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
                  Image Placeholder
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                  1200 x 900
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Company</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Medify currently offers UCAT and BMAT mock exams for students to
              improve their study habits and maximize their exam performance,
              including detailed study guides and interactive exercises.
              Students can create their own accounts to track their progress,
              receive personalized recommendations, and discover helpful
              resources like blog posts and video tutorials.
            </p>
            <p className="text-muted-foreground">
              The GAMSAT app is fully responsive.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The GAMSAT study app being created by Medify was to be offered to
              students from all over Australia, New Zealand and the UK as an
              alternative to taking the real test.
            </p>
            <p className="text-muted-foreground mb-4">
              The aim of this project was to help students achieve higher scores
              on the GAMSAT exam by providing a variety of interactive exercises
              and tests that would help them self-assess and identify weak spots
              in their studies.
            </p>
            <p className="text-muted-foreground">
              Students would receive greater confidence before taking the exam
              because they knew what they had to do to succeed.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              I began by doing research on{' '}
              <a
                href="https://acer.edu.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                acer.edu.au
                <ExternalLink className="h-3 w-3" />
              </a>{' '}
              which offers the gamsat exam to get a full understanding of how
              the exam is constructed and broken down into different sections.
            </p>
            <p className="text-muted-foreground mb-4">
              Acer's website provides an overview of what is covered in each
              section of the exam, as well as examples of questions from each
              section. This helped me gain an understanding of how each section
              worked and what types of questions might be asked, which was
              important because I didn't want to spend too much time on any one
              section before moving on to another.
            </p>
            <p className="text-muted-foreground">
              Another website I used for research included{' '}
              <a
                href="https://medstudentsonline.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                medstudentsonline.com.au
                <ExternalLink className="h-3 w-3" />
              </a>
              , which provides a forum for students to discuss the exam and ask
              questions about it. I found this useful, as there were many people
              asking questions about how they should approach different sections
              of the exam, or what they can do to improve their performance in
              certain areas.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Core Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              In order to get the project off to a good start, I began by
              gathering business requirements from stakeholders, including
              business analysts.
            </p>
            <p className="text-muted-foreground mb-4">
              The first step was to create a backlog of user stories to be used
              for product development. I defined each user story as a feature
              that would be needed by users and then assigned the stories to a
              sprint during which they would be developed and implemented.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Deliverables</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• User Journeys</li>
                <li>• Wireframes</li>
                <li>• Interactive prototypes</li>
                <li>• UI design</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>UI Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              One of the important parts of the app is the tutorial section. The
              tutorials were prepared by an experienced content team including
              teachers, scholars etc. with over 75 tutorials including cheat
              sheets.
            </p>
            <p className="text-muted-foreground mb-4">
              I had to find a way to create an effective and easy-to-use
              navigational system to help the students access and read the
              tutorials.
            </p>
            <p className="text-muted-foreground mb-4">
              I looked at different ways of structuring the information so that
              it would be easier for students to understand. The first thing
              that I did was look at how people learn best: by taking in small
              pieces of information at a time and building on top of them until
              they have a complete picture in their minds. This meant breaking
              down each tutorial into smaller sections so that students could
              digest them more easily.
            </p>
            <p className="text-muted-foreground mb-4">
              After looking at how people use apps, I wanted to create an
              intuitive layout for navigating through tutorials without having
              to look at instructions or have tooltips every time you want to
              switch between sections. Having something quick and simple to use
              without spending too much time figuring out how it works is one of
              the most common user problems.
            </p>
            <p className="text-muted-foreground mb-4">
              In order to achieve this, I created a navigational system that
              uses tabs at the top of each page. This ensures that users don't
              have to scroll down every page in order to find what they need.
              The tabs also allow users to move between different tutorials
              quickly and easily.
            </p>
            <p className="text-muted-foreground">
              I also ensured all the signposting was very clear and made so
              there was only one click to access important or relevant areas.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Functionality Specs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              After the initial UI designs were completed I wrote functional
              specification documents defining how the new system would work and
              what technologies it would use to implement its functionality.
            </p>
            <p className="text-muted-foreground mb-4">
              This document was approved by senior management before development
              began on any new features or functionality and is used as a guide
              for the development of the app. It also served as documentation
              for the creation of the Jira tickets with requirements being
              broken down into baseline acceptance criteria for each relevant
              ticket for the sprint.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-muted-foreground">ReactJS</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Backend & Infrastructure</h4>
                <p className="text-muted-foreground">AWS</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button variant="outline" className="mr-4">
              View All Case Studies
            </Button>
          </Link>
          <Link href="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>

      <SharedFooter />
    </main>
  );
}
