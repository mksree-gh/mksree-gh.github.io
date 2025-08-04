'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export default function EyPage() {
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
            <span>Est. 5 min read</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>TL;DR:</strong> I designed and built a scalable Python engine to automate data quality validation for a major financial client. My core contribution was a multi-state validation process that proved most data errors were simple formatting issues, not factual inaccuracies, saving significant manual review time.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          This project was completed under the guidance of{' '}
          <a href="https://www.linkedin.com/in/arpit-tejan-02b5a174/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Arpit Tejan
          </a> (Data Science Manager) and{' '}
          <a href="https://www.linkedin.com/in/parth-behl-7224481a8/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Parth Behl
          </a> (Consultant).
        </p>
      </header>

      {/* Disclaimer */}
      <div className="text-center mb-12 p-4 bg-muted/50 border border-dashed rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Disclaimer:</strong> To protect client confidentiality, all data, field names, and business domains shown in the following visuals are representative examples created to demonstrate the tool's architecture and impact.
        </p>
      </div>

      {/* Project Highlights Section */}
      <section className="my-16 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-center">Project Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Architected a Scalable Rule Engine</h3>
            <p className="text-sm text-muted-foreground">Designed a system to process gigabytes of historical data, validating millions of records against 125+ business rules using a decoupled Python and JSON architecture.</p>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Engineered a Reusable Function Library</h3>
            <p className="text-sm text-muted-foreground">Normalized 800+ unstructured business requirements into ~30 core, reusable Python functions, making the system highly maintainable.</p>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Pioneered Multi-State Validation</h3>
            <p className="text-sm text-muted-foreground">My core idea: testing data as-is, trimmed, and uniform proved most errors were simple formatting issues, not factual inaccuracies.</p>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Automated Reporting & Visualization</h3>
            <p className="text-sm text-muted-foreground">Built an automated pipeline that generated reports with visualizations (pie/bar charts) and a color-coded scoring system, surfacing 87% of critical DQ issues to make results actionable.</p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">1. The Challenge & A New Direction</h2>
          <p>
            The initial challenge was immense: the business had poor data quality, but the reasons were unclear, and the rules for validation were scattered across unstructured documents. In the project's foundational phase, I took the initiative to establish a more strategic direction, advocating for a shift away from writing a separate function for every single rule. I guided my team towards an approach centered on creating a library of reusable, generalized functions. This pivot set the stage for the highly efficient and scalable system that followed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">2. A Decoupled, Scalable Architecture</h2>
          <p>
            Realizing that a simple script would be unmanageable, I took the lead in designing a fully-fledged, scalable system. To ensure the solution was robust, I designed a decoupled architecture where the rule logic (`rules.json`), field mappings (`map.json`), and the core validation script were separated. This design was a key proposal of mine, ensuring that new rules and data sources could be added in the future without changing the core engine code.
          </p>
          <figure className="mt-6">
            <Image src="/ey/dq-architecture-flowchart.png" alt="System architecture flowchart" width={1200} height={675} className="rounded-lg border bg-muted" />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              I designed this system architecture for scalability, separating configuration from the core processing engine.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">3. From Chaos to Code</h2>
          <p>
            The most critical part of my design was creating the reusable rule architecture. I led a team of three to analyze over 800 ambiguous, text-based business rules and normalized them into a modular set of ~30 reusable Python functions. This strategy transformed vague requirements into a structured, machine-readable format that was both efficient and easy to maintain.
          </p>
          <figure className="mt-6">
            <Image src="/ey/dq-rule-normalization-before-after.png" alt="Rule normalization before and after" width={1200} height={675} className="rounded-lg border bg-muted" />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              This visualizes my process of translating unstructured requests into an engineered set of reusable functions.
            </figcaption>
          </figure>
          <p className="mt-8">This normalized rule engine was then applied across more than 15 distinct business domains, providing a comprehensive, enterprise-wide view of data quality.</p>
          <figure className="mt-6">
            <Image src="/ey/dq-domain-coverage-table.png" alt="Table showing domain coverage" width={1200} height={675} className="rounded-lg border bg-muted" />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              The framework was configured to execute thousands of rule applications across various business domains.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">4. The Core Insight</h2>
          <p>
            My central hypothesis was that many "errors" were merely formatting issues. To test this, I pioneered a multi-state validation check within the tool that tested each field three times: as-is (Raw), with whitespace removed (Trimmed), and with standardized capitalization (Uniform). The results were transformative and proved my hypothesis correct.
          </p>
          <figure className="mt-6">
            <Image src="/ey/dq-multistate-validation-chart.png" alt="Multi-state validation chart" width={1200} height={675} className="rounded-lg border bg-muted" />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              This chart shows the dramatic improvement in quality scores after standardization.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">5. Impact and Handover</h2>
          <p>
            The project's most significant outcome was a paradigm shift in how the organization understood data quality. The stakeholders could clearly distinguish between "unclean" data (formatting issues) and truly "inaccurate" data (factual errors). This allowed the business to focus their expert reviewers only on the genuinely inaccurate data.
          </p>
          <figure className="mt-6">
            <Image src="/ey/dq-stakeholder-report-table.png" alt="Stakeholder report table" width={1200} height={675} className="rounded-lg border bg-muted" />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              The final stakeholder report used a simple Red-Amber-Green scoring system the client wanted to make results actionable.
            </figcaption>
          </figure>
          <p className="mt-8">
            Towards the end of my internship, I led the project handover to two other developers, working with them to refactor the code for long-term efficiency and ownership. This ensured the tool I built would continue to provide value long after my internship concluded.
          </p>
        </div>
      </div>

      {/* Skills & Tools Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8">

          <div>
            <h3 className="font-semibold mb-3 text-lg">Core Engineering & Data</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Pandas</Badge>
              <Badge variant="secondary">NumPy</Badge>
              <Badge variant="secondary">JSON</Badge>
              <Badge variant="secondary">Data Cleaning & Manipulation</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">System Design & Architecture</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Rule-Based Systems</Badge>
              <Badge variant="secondary">Software Architecture</Badge>
              <Badge variant="secondary">Automation Scripting</Badge>
              <Badge variant="secondary">Requirements Analysis</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">Methodology & Domain</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Data Governance</Badge>
              <Badge variant="secondary">Data Validation</Badge>
              <Badge variant="secondary">Team Leadership & Mentoring</Badge>
            </div>
          </div>

        </div>
      </section>

      {/* Back to Experience */}
      <div className="mt-24">
        <Link
          href="/#experience"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Experience
        </Link>
      </div>
    </main>
  );
}