'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export default function EyPage() {
  return (
    <main className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Data Quality Engineering at EY
        </h1>
        <div className="flex flex-wrap items-baseline text-sm text-muted-foreground mb-6 gap-x-2.5">
          <span>Python Developer Intern</span>
          <span className="text-muted-foreground/50">|</span>
          <span>EY, Gurgaon (Remote)</span>
          <div className="w-full sm:w-auto flex items-baseline gap-x-2.5 mt-1 sm:mt-0">
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <span>Apr 2023 – Jun 2023</span>
            <span className="mx-1">·</span>
            <span>Est. 4 min read</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>TL;DR:</strong> As an intern at EY, I designed and built a Python tool to automate data quality validation for a major insurance client. I structured 800+ DQ rules into a scalable JSON engine, led a team of three in the initial phase, and introduced a multi-state validation process (raw, trimmed, uniform) that successfully identified that most data errors were due to simple formatting issues, not inaccuracies.
        </p>
      </header>
      
      {/* Main Content */}
      <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-8">
        <p>
          During my internship at Ernst & Young, I was tasked with solving a critical data integrity problem. I developed a Python-based tool to automate the validation of over 10 years of insurance records against 125+ distinct data quality (DQ) rules, surfacing insights that were previously buried in manual checks. This project was a deep dive into data governance, software engineering, and proactive problem-solving.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight">The Challenge: Uncovering the "Why" Behind Data Errors</h2>
          <p>
            An insurance client was struggling with poor data quality, but they lacked visibility into the root causes. Manual checks were slow, and it was unclear whether errors stemmed from genuinely incorrect information or simple formatting inconsistencies. The goal was to build a scalable, rule-based engine that could provide a clear, color-coded report that business stakeholders could understand at a glance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Solution: A Dynamic, JSON-Driven Validation Tool</h2>
          <p>
            I architected and built a Python tool that dynamically validates data based on a flexible, JSON-driven rule engine. Instead of hard-coding each of the 125+ rules, I designed a system that could ingest rules and map them to specific data fields, making the tool both powerful and maintainable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. Differentiating Error Types for Deeper Insights</h3>
          <p>
            My core idea was to test the data under multiple conditions: its raw state, a "trimmed" state (whitespace removed), and a "uniform" state (standardized capitalization). This was a crucial innovation. The final report showed validation scores for each state, instantly revealing that a majority of errors were due to simple text formatting issues. This insight helped the client focus their data cleanup efforts effectively.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2. Structuring a Scalable Rule Engine</h3>
          <p>
            I structured over 800 DQ rules from text-based documents into a `rules.json` and a `map.json` file. This decoupled the validation logic from the codebase, allowing new rules to be added or modified without changing the core Python script. This design made the tool highly scalable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Automating Reporting & Visualization</h3>
          <p>
            The tool automatically generates a comprehensive Excel report with color-coded scores (Green, Amber, Red) for each data field. This visual scoring system, which I proposed, allowed business leaders to immediately identify high-concern areas and monitor trends over time, surfacing 87% of critical data quality issues automatically.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">Leadership & Mentorship</h2>
          <p>
            Beyond coding, my role involved team leadership. Before building the tool, I led a team of three junior members, teaching them data cleaning fundamentals and how to translate business rules into Python logic. Towards the end of my internship, I led the project handover to two other developers, working with them to refactor the code for efficiency and long-term ownership.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            I worked under the guidance of{' '}
            <a href="https://www.linkedin.com/in/arpit-tejan-02b5a174/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Arpit Tejan
            </a> (Data Science Manager) and{' '}
            <a href="https://www.linkedin.com/in/parth-behl-7224481a8/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Parth Behl
            </a> (Consultant).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">Key Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Pandas</Badge>
            <Badge variant="secondary">JSON</Badge>
            <Badge variant="secondary">NumPy</Badge>
            <Badge variant="secondary">Data Governance</Badge>
            <Badge variant="secondary">Rule-Based Systems</Badge>
            <Badge variant="secondary">Data Validation</Badge>
          </div>
        </div>
      </div>
      
      {/* Back to home - Moved to the end for consistency */}
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