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

export default function HushhEngineerPage() {
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
                    Product Engineer at Hushh.ai
                </h1>
                <div className="flex flex-wrap items-baseline text-sm text-muted-foreground mb-6 gap-x-2.5">
                    <span>Product Engineer</span>
                    <span className="text-muted-foreground/50">|</span>
                    <span><a
                        href="https://www.hushh.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                    >
                        Hushh.ai
                    </a> (Pune)</span>
                    <div className="w-full sm:w-auto flex items-baseline gap-x-2.5 mt-1 sm:mt-0">
                        <span className="hidden sm:inline text-muted-foreground/50">|</span>
                        <span>May 2024 – May 2025</span>
                        <span className="mx-1">·</span>
                        <span>Est. 5 min read</span>
                    </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>TL;DR:</strong> In my full-time role, I led the execution of our core AI products and company-wide processes. I architected the flagship PKM prototype that defined our agentic AI strategy, implemented the agile framework that scaled our 10+ person team, crafted enterprise-ready use cases for leaders in finance and retail, and represented Hushh at global tech forums in Paris and Abu Dhabi, generating over 70 enterprise leads.
                </p>
                {/* --- NEW "WORKED WITH" SECTION --- */}
                <p className="text-sm text-muted-foreground mt-4">
                    In this role, I worked closely with{' '}
                    <a href="https://www.linkedin.com/in/manishsainani" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Manish Sainani
                    </a> (CEO) and{' '}
                    <a href="https://www.linkedin.com/in/jjustindonaldson/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Justin Donaldson
                    </a> (CTO). I was also fortunate to be mentored by industry leaders{' '}
                    <a href="https://www.linkedin.com/in/sureshattuluri/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Suresh Attuluri
                    </a> and{' '}
                    <a href="https://www.linkedin.com/in/ahstein/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        Andrew Stein
                    </a>, whose guidance was invaluable in shaping our technical and product strategies.
                </p>
            </header>

            <div className="space-y-24">
                
                {/* Section 1: Architecting the Core AI Experience */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Architecting the Core AI Experience</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            My primary technical project was leading the design and definition of the Personal Knowledge Model (PKM), the cornerstone of our AI assistant strategy. The key challenge was designing a system of trust for collaborative data access. I architected and built a high-fidelity interactive prototype that became the official visual blueprint for the product. By focusing on a transparent UI with granular, revocable consent, I solved for the core user problem of sharing sensitive data simply and safely. This work was central to the company's strategic pivot towards agentic AI, secured leadership buy-in, and provided a foundational spec that aligned our product and engineering teams.
                        </p>
                    </div>
                    <video
                        className="rounded-lg border mt-8"
                        src="/experience/hushh/engineer/pkm-demo.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </section>

                {/* Section 2: Driving Operational Excellence */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Driving Operational Excellence & Predictable Delivery</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            As the team grew, I identified that our rapid development pace led to unpredictable timelines and cross-team friction. I designed and implemented a new agile framework to bring clarity and structure to our workflow. This involved defining specific KPIs for Engineering, UI/UX, and Product, and establishing a 15-minute daily standup to resolve blockers quickly. Leading a team of 10+ across engineering, BD, and design, this new process established a culture of predictable delivery and enabled us to ship internal MVPs within a reliable 2-month timeline.
                        </p>
                    </div>
                    <Image
                        src="/experience/hushh/engineer/team-kpis.png"
                        alt="A designed diagram showing KPIs for Engineering, UI/UX, and Feedback Loops"
                        width={1280}
                        height={720}
                        className="rounded-lg border mt-8"
                    />
                </section>

                {/* Section 3: Representing Hushh on the Global Stage */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Representing Hushh on the Global Stage</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                           I was selected as a key representative for Hushh.ai at two major international forums. At <strong>Viva Technology 2024 in Paris</strong>, I engaged directly with leadership teams from global brands like L'Oréal, demoing our vision for personalized retail. At <strong>Abu Dhabi Finance Week 2024</strong>, I connected with financial leaders and strategic partners. These engagements were crucial for business development, resulting in over 70 qualified enterprise leads and establishing foundational relationships with partners like LVMH and Reliance.
                        </p>
                    </div>
                    {/* --- NEW IMAGE GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg border">
                           <Image 
                                src="/conferences/vivatech/vivatech-1.jpeg" 
                                alt="Presenting to the L'Oréal leadership team at Viva Technology in Paris" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg border">
                            <Image 
                                src="/conferences/adfw/adfw-2.jpeg" 
                                alt="With CEO of Hushh and CEO of Prime Investrade at Abu Dhabi Finance Week"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
                
                {/* Section 4: Crafting Enterprise-Ready Use Cases */}
                <section>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Crafting Enterprise-Ready Use Cases</h2>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-base">
                        <p>
                            A critical part of my role was translating our complex technology into tangible solutions for enterprise clients. I personally developed detailed use-case presentations and led deep-dive conversations with leaders across finance, e-commerce, and retail. This included engaging with innovation teams at <strong>Reliance, Visa, MasterCard, Standard Chartered, Kotak Mahindra, Flipkart, JioMart, and LVMH</strong> to design tailored AI-driven solutions around deep personalization, consent-driven marketing, and omnichannel experiences. This work directly shaped our product roadmap and proved instrumental in our B2B sales efforts.
                        </p>
                    </div>
                    <Carousel className="w-full mt-8" opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem><Image src="/experience/hushh/engineer/use-case-1.png" alt="Use Case for AI-powered interactions in e-commerce" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/engineer/use-case-2.png" alt="Use Case for consent-driven targeted marketing" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                            <CarouselItem><Image src="/experience/hushh/engineer/use-case-3.png" alt="Use Case for seamless omnichannel customer experiences" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
                    </Carousel>
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
                            <Badge variant="secondary">Team Leadership</Badge>
                            <Badge variant="secondary">Agile & Scrum</Badge>
                            <Badge variant="secondary">GTM Execution</Badge>
                            <Badge variant="secondary">PRD Ownership</Badge>
                            <Badge variant="secondary">API Design</Badge>
                            <Badge variant="secondary">KPI Definition</Badge>
                            <Badge variant="secondary">Enterprise Client Engagement</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">AI & Machine Learning</h3>
                        <div className="flex flex-wrap gap-2">
                             <Badge variant="secondary">LLM Tech (RAG, Prompt Eng.)</Badge>
                            <Badge variant="secondary">Multi-Agent Orchestration</Badge>
                            <Badge variant="secondary">NLP (Semantic Search)</Badge>
                            <Badge variant="secondary">Scikit-learn</Badge>
                            <Badge variant="secondary">PyTorch</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Tools & Tech</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">SQL</Badge>
                            <Badge variant="secondary">Figma</Badge>
                            <Badge variant="secondary">Git & GitHub</Badge>
                            <Badge variant="secondary">Google Cloud (GCP)</Badge>
                            <Badge variant="secondary">Supabase</Badge>
                            <Badge variant="secondary">Prototyping (Lovable)</Badge>
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