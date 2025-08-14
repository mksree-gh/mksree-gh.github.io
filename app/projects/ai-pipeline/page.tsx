'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github } from 'lucide-react';

export default function AiPipelinePage() {
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
          A Multi-Agent Framework for Automated Data Analysis
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I engineered a stateful "team" of AI agents using LangGraph that automates exploratory data analysis and enables interactive, conversational querying of tabular data.
        </p>
        <div className="flex flex-wrap items-baseline text-sm text-muted-foreground gap-x-4 gap-y-2 mt-6">
          <div>
            <span className="font-semibold">Role:</span>
            <span className="ml-2">ML Engineer & AI Architect</span>
          </div>
          <span className="text-muted-foreground/50 hidden md:inline">|</span>
          <div>
            <span className="font-semibold">Type:</span>
            <span className="ml-2">Self-Project</span>
          </div>
        </div>
        <div className="mt-4">
            <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="font-semibold text-sm text-muted-foreground self-center mr-1">Tech Stack:</span>
                <Badge variant="secondary">LangGraph</Badge>
                <Badge variant="secondary">LangChain</Badge>
                <Badge variant="secondary">RAG</Badge>
                <Badge variant="secondary">Multi-Agent Systems</Badge>
                <Badge variant="secondary">Google Gemini</Badge>
                <Badge variant="secondary">Pandas</Badge>
            </div>
        </div>
        <div className="mt-6">
             <Button asChild>
                <Link href="https://github.com/mksree-gh/Multi-Agent-Data-Analysis-Pipeline" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View Code on GitHub
                </Link>
            </Button>
        </div>
      </header>
      
      <Image 
          src="/projects/ai-pipeline/hero-architecture.png"
          alt="A high-level diagram of the multi-agent architecture."
          width={1280}
          height={720}
          className="rounded-lg border mb-16 bg-white"
      />

      <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-16">
          
          <section>
              <h2 className="text-2xl font-semibold !mb-6">1. The Problem: Moving Beyond Stateless LLMs</h2>
              <p>
                  Standard data analysis is a manual, iterative process. While single-prompt interactions with LLMs are powerful for one-off tasks, they are fundamentally stateless. They lack the memory and collaborative reasoning needed for deep, sequential data exploration. My challenge was to design a system that could mimic a team of data experts working together on a dataset—exploring, summarizing, and then answering questions with full, persistent context.
              </p>
          </section>

          <section>
              <h2 className="text-2xl font-semibold !mb-6">2. The Solution: A Stateful Team of AI Agents with LangGraph</h2>
              <p>
                  To solve this, I engineered a multi-agent framework using LangGraph, a library for building stateful, cyclical applications. This approach allowed me to create a graph where each node is a specialized agent. The system coordinates four agents—a Data Scientist, Python Expert, Data Analyst, and Customer Engineer—that work together in two distinct, coordinated flows, passing state and context between them at each step.
              </p>
          </section>

          <section>
              <h2 className="text-2xl font-semibold !mb-6">3. How It Works: The Two Core Flows</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-start">
                  <div>
                      <h3 className="text-xl font-semibold !mb-4">Flow 1: Automated Insight Generation</h3>
                      <p>
                          The first flow is a fully autonomous loop where the AI agents perform exploratory data analysis. The Data Scientist agent formulates a hypothesis, the Python Expert executes the code, and the Data Analyst summarizes the result. This cycle repeats, with each agent building on the previous findings until a comprehensive business report is generated.
                      </p>
                  </div>
                  <figure>
                      <Image
                          src="/projects/ai-pipeline/flow-insight-generation.png"
                          alt="A flowchart of the automated insight generation loop."
                          width={800}
                          height={600}
                          className="rounded-lg border bg-white p-4"
                      />
                      <figcaption className="text-center text-xs text-muted-foreground mt-2">The autonomous analysis cycle.</figcaption>
                  </figure>
              </div>
               <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-start mt-12">
                   <div>
                      <h3 className="text-xl font-semibold !mb-4">Flow 2: Interactive Q&A</h3>
                      <p>
                          Once the initial analysis is complete, the system switches to an interactive mode. The Customer Engineer agent takes over, using a knowledge base built in the first flow to answer user questions. If the answer requires new computation, it calls on the Python Expert, providing a seamless, conversational way to query the dataset.
                      </p>
                  </div>
                   <figure>
                      <Image
                          src="/projects/ai-pipeline/flow-interactive-qa.png"
                          alt="A flowchart of the interactive Q&A flow with the user."
                          width={800}
                          height={600}
                          className="rounded-lg border bg-white p-4"
                      />
                      <figcaption className="text-center text-xs text-muted-foreground mt-2">The user-driven conversational flow.</figcaption>
                  </figure>
              </div>
          </section>
          
          <section>
              <h2 className="text-2xl font-semibold !mb-6">4. The Technical Core: Stateful Memory with RAG</h2>
              <p>
                  To manage context and ensure the agents have a persistent "memory" without overflowing the LLM's context window, I implemented Retrieval Augmented Generation (RAG). Each completed analysis cycle from the first flow is converted into a document and stored in an in-memory vector store. When a user asks a question, the Customer Engineer agent first retrieves the most relevant past interactions. This provides deep, historical context for generating smarter, more accurate answers.
              </p>
              <figure className="mt-8">
                  <Image
                      src="/projects/ai-pipeline/rag-explanation.png"
                      alt="A diagram explaining the Retrieval Augmented Generation (RAG) process."
                      width={1200}
                      height={675}
                      className="rounded-lg border bg-white p-4"
                  />
                  <figcaption className="text-center text-xs text-muted-foreground mt-2">RAG provides the agents with long-term memory by retrieving relevant past interactions.</figcaption>
              </figure>
          </section>

      </div>
    </main>
  );
}