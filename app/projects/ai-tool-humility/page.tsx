'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';


export default function IntellectualHumilityPage() {
    return (
        <main className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
            {/* Back Link Header */}
            <div className="mb-12">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* Page Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    From Text to Trait: An AI Tool for Identifying Intellectual Humility
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    My B.Tech thesis developing an LLM-based tool to analyze narratives for complex psychological traits, grounded in the philosophical wisdom of the Upanishads.
                </p>
                
                <div className="flex flex-wrap items-baseline text-sm text-muted-foreground gap-x-4 gap-y-2 mt-6">
                    <div>
                        <span className="font-semibold">Role:</span>
                        <span className="ml-2">Researcher & ML Engineer</span>
                    </div>
                    <span className="text-muted-foreground/50 hidden md:inline">|</span>
                    <div>
                        <span className="font-semibold">Institution:</span>
                        <span className="ml-2">
                            <a href="https://iitkgpcoeiks.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                                CoE-IKS, IIT Kharagpur
                            </a>
                        </span>
                    </div>
                </div>

                <div className="mt-4">
                    
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="font-semibold text-sm text-muted-foreground">Tech Stack:</span>
                        <Badge variant="secondary">Google Gemini Pro</Badge>
                        <Badge variant="secondary">Few-Shot Learning</Badge>
                        <Badge variant="secondary">Prompt Engineering</Badge>
                        <Badge variant="secondary">Streamlit</Badge>
                        <Badge variant="secondary">Hugging Face Spaces</Badge>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                     <Button asChild>
                        <Link href="https://huggingface.co/spaces/mksree/in_ih_traits" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                        </Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="https://huggingface.co/spaces/mksree/in_ih_traits/tree/main" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> View Code on Hugging Face
                        </Link>
                    </Button>
                </div>
            </header>
            
            <Image 
                src="/projects/ai-tool-humility/hero.png"
                alt="The title page of the B.Tech thesis report."
                width={1280}
                height={720}
                className="rounded-lg border mb-16"
            />

            <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-16">
                
                <section>
                    <h2 className="text-2xl font-semibold !mb-6">1. The Research Challenge: Bridging Ancient Wisdom and Modern AI</h2>
                    <p>
                        Intellectual Humility (IH) is a complex psychological virtue. While modern frameworks exist, there's a significant gap in applying AI to analyze IH traits derived from ancient Indian wisdom. My research, conducted at the{' '}
                        <a href="https://iitkgpcoeiks.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Centre of Excellence for Indian Knowledge Systems (CoE-IKS)
                        </a>, aimed to bridge this gap. The goal was to build an LLM-based tool capable of identifying 30 distinct IH traits based on the foundational framework developed by{' '}
                        <a href="https://iitkgp.academia.edu/JayashreeAanandGajjam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                             Dr. Jayashree Gajjam (2024)
                        </a>.
                    </p>
                    <figure className="mt-6">
                         <Image
                            src="/projects/ai-tool-humility/ih-traits-framework.png"
                            alt="A list of the 30 Intellectual Humility traits used as the foundation for the project."
                            width={1200}
                            height={675}
                            className="rounded-lg border bg-white p-4"
                        />
                        <figcaption className="text-center text-xs text-muted-foreground mt-2">The 30-trait Intellectual Humility framework that formed the basis of the model.</figcaption>
                    </figure>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold !mb-6">2. Methodology: From Zero-Shot Failure to Few-Shot Success</h2>
                    <p>
                        My initial approach using zero-shot learning with Google Gemini Pro was unsuccessful. The model identified generic positive traits but consistently failed to capture the specific, nuanced definitions required by the Upanishadic IH framework.
                    </p>
                    <Carousel className="w-full mt-8" opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem>
                                <Image src="/projects/ai-tool-humility/zero-shot-result.png" alt="An example showing the poor, generic output from a zero-shot learning approach." width={1280} height={720} className="rounded-lg border" />
                            </CarouselItem>
                             <CarouselItem>
                                <Image src="/projects/ai-tool-humility/zero-shot-analysis.png" alt="A detailed analysis of the crucial traits missed by the zero-shot model." width={1280} height={720} className="rounded-lg border" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
                    </Carousel>
                     <p className="text-center text-xs text-muted-foreground mt-2">
                        The carousel shows the initial generic output and an analysis of the key traits it missed.
                    </p>

                    <p className="mt-8">
                        This critical failure led me to pivot to a <strong>few-shot learning</strong> strategy. I meticulously curated a small, high-quality dataset of 12 annotated Upanishadic stories. By providing the LLM with these examples within a highly engineered prompt, I was able to effectively guide it to understand and apply the specific IH framework, leading to far more accurate and relevant analysis.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold !mb-6">3. The Outcome: A Deployed & Validated Tool</h2>
                    <p>
                        The final result is a functional, publicly accessible tool deployed on Hugging Face Spaces using Streamlit. It can analyze any story for Intellectual Humility traits and provides a "chain-of-thought" explanation for each identified trait, making the AI's reasoning transparent.
                    </p>
                    <figure className="mt-6">
                        <Image
                            src="/projects/ai-tool-humility/huggingface-demo.png"
                            alt="A screenshot of the final Streamlit application deployed on Hugging Face Spaces."
                            width={1200}
                            height={675}
                            className="rounded-lg border"
                        />
                    </figure>

                    <h3 className="text-xl font-semibold mt-8">Validation on Unseen & Cross-Lingual Texts</h3>
                    <p>
                        To validate the model's robustness, I tested it on diverse, unseen narratives. The tool successfully identified relevant IH traits in a biographical story about Dr. A.P.J. Abdul Kalam and, more surprisingly, was able to analyze a poem in Telugu—a language it was not trained on—and provide a correct analysis in English.
                    </p>
                    <Carousel className="w-full mt-8" opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem>
                                <Image src="/projects/ai-tool-humility/evaluation-kalam.png" alt="An example showing the model analyzing a story about Dr. APJ Abdul Kalam." width={1280} height={720} className="rounded-lg border" />
                            </CarouselItem>
                             <CarouselItem>
                                <Image src="/projects/ai-tool-humility/evaluation-telugu.png" alt="An example showing the model analyzing a Telugu poem and providing correct English output." width={1280} height={720} className="rounded-lg border" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
                    </Carousel>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold !mb-6">Key References</h2>
                    <p>This work stands on the shoulders of existing research. The following were central to the project's foundation:</p>
                    <ul className="!my-6 text-sm space-y-4">
                        <li>
                            Gajjam, Jayashree Aanand. “The Upaniṣadic Way of Intellectual Humility.” Brahmavidya, The Adyar Library Bulletin, vol. 88, 2024, pp. 127–192.
                        </li>
                        <li>
                            Wei, Jason, et al. “Chain-of-thought prompting elicits reasoning in large language models.” Advances in neural information processing systems, vol. 35, 2022, pp. 24824-24837. <a href="https://doi.org/10.48550/arXiv.2201.11903" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[Link]</a>
                        </li>
                         <li>
                            WHITCOMB, DENNIS, et al. “Intellectual Humility: Owning Our Limitations.” Philosophy and Phenomenological Research, vol. 94, no. 3, 2017, pp. 509–39. <a href="https://www.jstor.org/stable/48578888" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[Link]</a>
                        </li>
                    </ul>
                </section>

            </div>
        </main>
    );
}