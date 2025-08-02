import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

export default function HushhExperiencePage() {
  return (
    <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          My Journey at Hushh.ai
        </h1>
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <span>Keerthi Sree Marrapu</span>
          <span className="mx-2">·</span>
          <span>June 2023 - May 2025</span>
          <span className="mx-2">·</span>
          <span>Est. 5 min read</span>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>TL;DR:</strong> Over two years, I grew from a Product Intern defining core strategy to a Product Engineer leading teams and shipping AI-powered solutions. I authored foundational PRDs, introduced agile processes that scaled with the team, and represented the company at global tech forums in Paris and Abu Dhabi.
        </p>
      </header>

      <Separator className="my-12" />

      {/* Role: Product Engineer */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Product Engineer</h2>
          <p className="text-muted-foreground">May 2024 – May 2025</p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-8">
          <p>
            Transitioning to a full-time role, my responsibilities expanded to include end-to-end execution, team leadership, and representing the company on a global stage. This role was about delivering on the strategic plans I had previously helped create.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-3">Architecting the AI-Powered User Experience</h3>
            <p>
              My primary technical project was leading the design and definition of the Personal Knowledge Model (PKM), Hushh's core AI assistant. The key challenge was designing a system of trust for collaborative data access. I designed and built a high-fidelity interactive prototype that became the official visual blueprint for the product, focusing on a transparent UI with granular consent. This work was central to the company's strategic pivot towards agentic AI, secured leadership buy-in, and provided a foundational spec that aligned our product and engineering teams.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Driving Operational Excellence & Predictable Delivery</h3>
            <p>
              As the team grew, I identified that our rapid development pace led to unpredictable timelines. I designed and implemented a new agile framework, defining specific KPIs for Engineering, UI/UX, and Product. I established a 15-minute daily standup to resolve blockers and a weekly update cadence, leading a team of 10+ across multiple functions. This new process established a culture of predictable delivery, enabling us to ship MVPs within a reliable 2-month timeline.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Representing Hushh on the Global Stage</h3>
            <p>
              I was selected to represent Hushh.ai at two major international forums. I presented our product vision at <strong>Viva Technology 2024 in Paris</strong> and <strong>Abu Dhabi Finance Week 2024</strong>. These engagements were crucial for business development, resulting in over 70 qualified leads and establishing key relationships with enterprise clients like LVMH and Reliance.
            </p>
          </div>
        </div>
      </section>
      
      <Separator className="my-12" />

      {/* Role: Product Management Intern */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">ML & Product Management Intern</h2>
          <p className="text-muted-foreground">June 2023 – May 2024</p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-8">
          <p>
            As an intern, my primary focus was on product discovery and strategy. I conducted user research, scoped technical requirements, and authored the foundational documents that guided our early development. This role was about turning ambitious ideas into actionable plans.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Defining Core Products: Vibe Search & Hushh Wallet</h3>
            <p>
              I authored the initial Product Requirements Documents (PRDs) for key new initiatives, including <strong>Vibe Search</strong>, our AI-powered visual search engine. I mapped detailed user journeys, defined feature sets, and created multi-phase development roadmaps that provided a clear blueprint for the engineering team's execution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Shaping Go-to-Market Strategy & Pitch Decks</h3>
            <p>
              I contributed directly to our business narrative, translating complex product ideas into compelling stories for investors and partners. I created content and structure for investor pitch decks (including a version following the Sequoia Capital template), drafted Go-to-Market (GTM) plans, and helped define our competitive positioning. On the technical side, I also built our first fashion data pipeline using the Gmail API and explored on-device ML models.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Skills & Tools Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Tools</h2>
          <div className="grid grid-cols-1 gap-y-8">
          
          <div>
            <h3 className="font-semibold mb-3 text-lg">Product Management</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Roadmapping</Badge>
              <Badge variant="secondary">PRDs & User Stories</Badge>
              <Badge variant="secondary">UX & Market Research</Badge>
              <Badge variant="secondary">A/B Testing</Badge>
              <Badge variant="secondary">GTM Strategy</Badge>
              <Badge variant="secondary">Competitive Analysis</Badge>
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
              <Badge variant="secondary">LangChain/LangGraph</Badge>
              <Badge variant="secondary">OpenAI & Google GenAI APIs</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Languages & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Pandas & NumPy</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">Git & GitHub</Badge>
              <Badge variant="secondary">Google Cloud (GCP)</Badge>
              <Badge variant="secondary">Supabase</Badge>
              <Badge variant="secondary">Framer</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="mt-24">
        <Link 
          href="/#experience"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Experience
        </Link>
      </div>
    </main>
  );
}