import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export default function HushhInternshipPage() {
    return (
        <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">

            {/* Back to Experience */}
            <div className="mb-12">
                <Link
                    href="/#experience"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Experience
                </Link>
            </div>

            {/* Page Header */}
            <header className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Product Internship at Hushh.ai
                </h1>
                <div className="flex flex-wrap items-baseline text-sm text-muted-foreground mb-6 gap-x-2.5">
                    <span>ML & Product Management Intern</span>
                    <span className="text-muted-foreground/50">|</span>
                    <span><a
                        href="https://www.hushh.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                    >
                        Hushh.ai
                    </a> (Hybrid)</span>
                    <div className="w-full sm:w-auto flex items-baseline gap-x-2.5 mt-1 sm:mt-0">
                        <span className="hidden sm:inline text-muted-foreground/50">|</span>
                        <span>Jun 2023 – May 2024</span>
                        <span className="mx-1">·</span>
                        <span>Est. 4 min read</span>
                    </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>TL;DR:</strong> As an intern, I authored the foundational strategy documents, PRDs, and pitch decks that guided early product development. I defined core user stories, PRDs for 5 products, contributed to crucial GTM plans, built a key research prototype, and shipped the first Vibe Search demo, leading to a full-time offer.

                </p>
                <p className="text-sm text-muted-foreground mt-4">
                    I worked closely with{' '}
                    <a href="https://www.linkedin.com/in/manishsainani" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Manish Sainani
                    </a> (CEO) and{' '}
                    <a href="https://ae.linkedin.com/in/sunaz-sharaf" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Sunaz Sharaf
                    </a> (GM). My role evolved after my initial work as an ML Engineer showcased a strong aptitude for product strategy. This body of work led to a <strong>Pre-Placement Offer (PPO)</strong> for a full-time role.
                </p>
            </header>

            <div className="space-y-24">

                {/* Project 1: GTM Strategy */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Crafting the Go-to-Market Strategy</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            Within my first weeks, I created the initial Lean Canvas to align leadership on our value proposition. This informed the investor pitch decks I developed for partners like LVMH and for Milan Fashion Week 2023. I visualized our data ecosystem, defined the data ingestion strategy, created "before and after" user stories, and built a central demo repository using Google Sites that served as the single source of truth for our product vision during these critical partnership conversations.
                        </p>
                    </div>
                    <Carousel className="w-full mt-8" opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-lean-canvas.png" alt="Lean Canvas" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-wallet-problem.png" alt="Wallet Problem Statement" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-wallet-functionality.png" alt="Wallet Functionalities" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-wallet-onboarding.png" alt="Wallet Onboarding Flow" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-coffee-user-story.png" alt="Coffee User Story" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-knowledge-entryways.png" alt="Knowledge Entryways" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/gtm-data-ingestion.png" alt="Data Ingestion Strategy" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
                    </Carousel>
                </section>

                {/* Project 2: Product Blueprint */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">From User Needs to Product Blueprints</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            I took ownership of formalizing our product vision by authoring the initial Product Requirements Documents (PRDs) for our core offerings. This included <strong>Vibe Search</strong> (an AI-powered visual search engine), <strong>Valet Chat</strong> (an AI assistant for managing receipts and analyzing spending), and the <strong>Hushh Agent App</strong> (a tool for sales agents to securely access customer data). To ground these products in real-world needs, I developed detailed user personas and stories that illustrated the core problems we were solving, which was essential for aligning our design and engineering teams on a shared, user-centric vision.
                        </p>
                    </div>
                    <Carousel className="w-full mt-8" opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-isabella.png" alt="User Story 1" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-sofia.png" alt="User Story 2" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-elana.png" alt="User Story 3" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-access-insights.png" alt="User Story 4" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-william.png" alt="User Story 5" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/intern/prd-user-story-widget.png" alt="User Story 6" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
                    </Carousel>
                </section>

                {/* Project 3: Vibe Search Demo */}
                <section>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Vibe Search Demo</h2>
                            <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                                <p>
                                    The culmination of my strategic work was shipping the first functional demo of Vibe Search. I scoped the features for this initial version and structured the development into a 4-phase roadmap, which was crucial for managing our team's resources and delivering value incrementally. This demo proved the viability of our AI-powered visual search concept.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <video
                                className="rounded-[2rem] border-3 border-muted max-w-xs w-full"
                                src="/experience/hushh/intern/prd-vibe-search-demo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                    </div>
                </section>

                {/* Project 4: Prototyping for Insight */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Prototyping for Insight: The Brand Affinity Explorer</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            As part of my research into the "agent side" of our business model, I identified a key pain point: in-house sales teams needed a faster way to understand customer preferences. To solve this, I proactively designed and built the Brand Affinity Explorer—an interactive dashboard prototype. This tool transforms complex data into an instant visual profile, helping leadership visualize how our data could create real-world value for B2B clients.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <Image
                            src="/experience/hushh/intern/prototype-brand-affinity.gif"
                            alt="Brand Affinity Explorer Demo GIF"
                            width={1280}
                            height={720}
                            className="rounded-lg border mb-6"
                            unoptimized
                        />
                        <div className="flex gap-4 justify-center">
                            <Button asChild>
                                <Link href="https://mksree-gh.github.io/brand-affinity-explorer/" target="_blank">View the Live Demo</Link>
                            </Button>
                            <Button asChild variant="secondary">
                                <Link href="https://github.com/mksree-gh/brand-affinity-explorer" target="_blank">See the Code on GitHub</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Beyond the Highlights */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Beyond the Highlights</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            While these projects showcase my core work, my role as an intern was multifaceted and touched on nearly every aspect of our growth. This page is just a glimpse of my contributions. I was also deeply involved in executing LinkedIn marketing campaigns, creating design assets for our brand, managing project timelines from start to finish, and pitching our vision directly to potential partners.
                        </p>
                    </div>
                </section>



            </div>

            <Separator className="my-16" />

            {/* Skills Section */}
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8">
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Product & Strategy</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Market Research</Badge>
                            <Badge variant="secondary">Competitive Analysis</Badge>
                            <Badge variant="secondary">Go-to-Market (GTM)</Badge>
                            <Badge variant="secondary">PRDs & User Stories</Badge>
                            <Badge variant="secondary">Pitch Decks</Badge>
                            <Badge variant="secondary">Lean Canvas</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">AI & Machine Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">On-device ML (Research)</Badge>
                            <Badge variant="secondary">NLP (Semantic Search)</Badge>
                            <Badge variant="secondary">Data Pipelines</Badge>
                            <Badge variant="secondary">ChatGPT</Badge>
                            <Badge variant="secondary">Gemini</Badge>
                            <Badge variant="secondary">Claude</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Tools & Tech</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Figma</Badge>
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">Vite</Badge>
                            <Badge variant="secondary">Tailwind CSS</Badge>
                            <Badge variant="secondary">Google Analytics</Badge>
                            <Badge variant="secondary">Gmail API</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to home */}
            <div className="mt-24">
                <Button asChild variant="ghost" className="pl-0">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </Button>
            </div>
        </main>
    );
}