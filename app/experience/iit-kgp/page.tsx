'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export default function IITKGPInternshipPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-16 md:py-24">

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
          AI-driven Silicon Prediction for Steel Manufacturing
        </h1>
        <div className="flex flex-wrap items-baseline text-sm text-muted-foreground mb-6 gap-x-2.5">
          <span>Research Intern (ML/Data Science)</span>
          <span className="text-muted-foreground/50">|</span>
          <span>CoEAMT, IIT Kharagpur</span>
          <div className="w-full sm:w-auto flex items-baseline gap-x-2.5 mt-1 sm:mt-0">
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <span>Feb 2022 – Dec 2022</span>
            <span className="mx-1">·</span>
            <span>Est. 5 min read</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>TL;DR:</strong> During a 10-month research internship, I developed an Artificial Neural Network model to predict silicon impurity in hot metal for the IISCo Steel Plant. My work involved deep domain research, complex time-series data matching, and rigorous model benchmarking, resulting in a solution with 89.67% accuracy.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          This project was completed at the Center of Excellence in Advanced Manufacturing Technology (CoEAMT) under the mentorship of{' '}
          <a href="https://www.linkedin.com/in/surjya-k-pal-4ba9a41b/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Prof. Surjya K. Pal
          </a> and {' '}
          <a href="https://in.linkedin.com/in/pooja-sarkar-6944b1176" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Ms. Pooja Sarkar
          </a> for their client, the IISCo Steel Plant in Burnpur. 
        </p>
      </header>

      {/* Disclaimer */}
      <div className="text-center mb-16 p-4 bg-muted/50 border border-dashed rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Disclaimer:</strong> The data and findings presented are from a research project with the IISCo Steel Plant. Visuals are derived from my academic presentation to illustrate the project's methodology and outcomes.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">1. The Business Challenge: The High Cost of Impurity</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
                <div>
                    <p>
                        In steel manufacturing, controlling the silicon (Si) impurity in hot metal is critical. High silicon content leads to significant operational inefficiencies, including increased consumption of expensive resources like oxygen and lime, and higher production costs.
                    </p>
                    <p>
                        The goal for the IISCo plant was to move from reactive adjustments to proactive control. I was tasked with developing a predictive model to forecast silicon content, enabling the plant to optimize processes and reduce costs.
                    </p>
                </div>
                <figure>
                    <Image
                        src="/experience/iit-kgp/blast-furnace-diagram.png"
                        alt="A diagram of a blast furnace used in steel making."
                        width={600}
                        height={400}
                        className="rounded-lg border bg-white p-2"
                    />
                    <figcaption className="text-center text-xs text-muted-foreground mt-2">The complex environment of a blast furnace.</figcaption>
                </figure>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold tracking-tight">2. Understanding the Domain: The Metallurgy Behind the Model</h2>
            <p>
                Before diving into the data, the first step was to understand the complex chemical and physical processes inside a blast furnace. My research focused on answering a critical question: <em>why</em> is low silicon a priority? I found that it directly increases operational costs by requiring more oxygen and lime and creating excess slag. This domain knowledge was essential for identifying the most influential variables in the dataset.
            </p>
            <figure className="mt-6">
                <Image
                    src="/experience/iit-kgp/domain-research.png"
                    alt="A diagram showing why low silicon is preferred in hot metal."
                    width={1200}
                    height={675}
                    className="rounded-lg border bg-white"
                />
            </figure>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">3. The Process: From Raw Data to a Predictive Engine</h2>
          <h3 className="text-xl font-semibold mt-6">Data Matching, Cleaning & Feature Engineering</h3>
          <p>
            The first major hurdle was handling the raw plant data. Input variables had a significant time lag of 330-380 minutes before impacting the final output. I developed Python scripts to create uniform timestamps, accurately match inputs with their corresponding outputs, and systematically clean the dataset. This crucial process ensured data integrity and produced a high-quality dataset for modeling.
          </p>
          <Carousel className="w-full mt-8" opts={{ loop: true }}>
              <CarouselContent>
                  <CarouselItem><Image src="/experience/iit-kgp/process-time-lag.png" alt="Diagram showing the time lag between input and output variables" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                  <CarouselItem><Image src="/experience/iit-kgp/process-cleaning-code.png" alt="Python code snippet for data cleaning and timestamp matching" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
                  <CarouselItem><Image src="/experience/iit-kgp/process-cleaning-result.png" alt="Table showing data entries before and after cleaning" width={1280} height={720} className="rounded-lg border" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-16" /><CarouselNext className="mr-16" />
          </Carousel>

          <h3 className="text-xl font-semibold mt-8">Model Benchmarking</h3>
          <p>
            With a clean dataset, I benchmarked several machine learning algorithms to find the most effective model for this regression task. My evaluation included Partial Least Squares (PLS) Regression, Random Forest, XGBoost, and an Artificial Neural Network (ANN). This methodical approach ensured that the final model choice was backed by comparative performance data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">4. The Outcome: An 89% Accurate Prediction</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
              <div>
                  <p>
                      The final Artificial Neural Network model, built with Keras, consistently delivered the best performance, significantly outperforming other benchmarked models as shown in the comparison.
                  </p>
                   <p>
                      Trained on 49 distinct process parameters, the model achieved an **accuracy of 89.67%** (based on Mean Absolute Error). This provides a powerful tool for the plant's process control team to proactively optimize raw material mix, reduce resource consumption, and enhance blast furnace efficiency.
                  </p>
              </div>
               <figure>
                  <Image
                      src="/experience/iit-kgp/model-comparison-table.png"
                      alt="A table comparing the accuracy of Random Forest, XGBoost, and Artificial Neural Networks."
                      width={800}
                      height={450}
                      className="rounded-lg border"
                  />
                  <figcaption className="text-center text-xs text-muted-foreground mt-2">The ANN model showed superior performance.</figcaption>
              </figure>
          </div>
          <figure className="mt-8">
              <Image
                  src="/experience/iit-kgp/ann-result-plot.png"
                  alt="A scatter plot showing the high correlation between the model's predicted and actual silicon values."
                  width={800}
                  height={600}
                  className="rounded-lg border mx-auto"
              />
              <figcaption className="text-center text-xs text-muted-foreground mt-2">Predicted vs. Actual values for the final ANN model.</figcaption>
          </figure>
      </div>
      </div>

      {/* Skills Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8">
          <div>
            <h3 className="font-semibold mb-3 text-lg">Core ML & Data Science</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Predictive Modeling</Badge>
              <Badge variant="secondary">Time-Series Analysis</Badge>
              <Badge variant="secondary">Data Cleaning & Preprocessing</Badge>
              <Badge variant="secondary">Feature Engineering</Badge>
              <Badge variant="secondary">Model Benchmarking</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Algorithms & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Artificial Neural Networks</Badge>
              <Badge variant="secondary">Random Forest</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">Keras/TensorFlow</Badge>
              <Badge variant="secondary">Scikit-learn</Badge>
              <Badge variant="secondary">Pandas & NumPy</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">MATLAB</Badge>
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