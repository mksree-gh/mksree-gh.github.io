import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Github } from 'lucide-react';

export default function DocuSensePage() {
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
                  {/* Page Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    DocuSense: Intelligent PDF Management
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    An end-to-end project where I designed and engineered a smart document tool to turn digital clutter into an organized, queryable library using data science and machine learning.
                </p>
                
                {/* --- UPDATED HEADER META --- */}
                <div className="space-y-4 mt-6">
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2">
                        <div>
                            <span className="font-semibold">Role:</span>
                            <span className="ml-2">Product & ML Engineer</span>
                        </div>
                        <span className="text-muted-foreground/50 hidden md:inline">|</span>
                        <div>
                            <span className="font-semibold">Duration:</span>
                            <span className="ml-2">May 2023 (Self-Project)</span>
                        </div>
                    </div>
                    <div>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="font-semibold text-sm text-muted-foreground">Tech Stack:</span>
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">Pandas</Badge>
                            <Badge variant="secondary">Scikit-learn</Badge>
                            <Badge variant="secondary">NLTK</Badge>
                            <Badge variant="secondary">PyPDF2</Badge>
                            <Badge variant="secondary">Pytesseract</Badge>
                            <Badge variant="secondary">Jupyter</Badge>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                     <Button asChild>
                        <Link href="https://github.com/mksree-gh/DocuSense" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> View Code on GitHub
                        </Link>
                    </Button>
                </div>
            </header>

      <Image
        src="/projects/docusense/docusense-summary.png"
        alt="A collage of the DocuSense UI, showing the dashboard, search, and clustering features."
        width={1280}
        height={720}
        className="rounded-lg border mb-16"
      />

      <div className="prose prose-stone dark:prose-invert max-w-none text-base space-y-16">

        <section>
          <h2 className="text-2xl font-semibold mt-5 !mb-6">1. The Challenge: Taming Digital Chaos</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
  {/* Text Block */}
  <div className="md:w-2/3">
    <p className="mb-2 mt-10">
      As a student, I was dealing with a growing collection of disorganized PDFs—lecture notes, research papers, and personal documents. Finding a specific file was often a frustrating, time-consuming process.
    </p>
    <p>
      This "digital clutter" leads to inefficient search and wasted storage. I saw an opportunity to build a tool that doesn't just store PDFs, but understands them.
    </p>
  </div>

  {/* Image Block */}
  <div className="md:w-1/3 w-full flex md:justify-start justify-center">
    <div className="max-w-[150px] w-full">
      <Image
        src="/projects/docusense/pdf-scrolling-demo.gif"
        alt="PDF scrolling demo"
        width={150}
        height={300}
        className="rounded-xl border w-full h-auto"
        unoptimized
      />
    </div>
  </div>
</div>



          <div className="flex justify-center mt-8">
            <Image
              src="/projects/docusense/docusense-problem.png"
              alt="A messy closet representing digital clutter."
              width={1280}
        height={720}
              className="rounded-lg border mb-16"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold !mb-6">2. The Process: From Idea to Prototype</h2>
          <p>
            I approached this project with a dual mindset: as a Product Manager defining the "what" and "why," and as an Engineer building the "how."
          </p>
          <div className="space-y-6 pl-4 border-l-2 border-border ml-2 mt-8">
            <div>
              <h3 className="font-semibold text-lg">Product Thinking & Design</h3>
              <p>I started by defining the user pain points, brainstorming core features, and designing a clean UI in PowerPoint to make the functionality feel simple and accessible.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Technical Implementation</h3>
              <p>I built the data analysis pipeline using Pandas and PyPDF2. To enable the core features, I implemented:</p>
              <ul className="!my-4">
                <li><strong>MD5 Hashing</strong> for efficient duplicate detection.</li>
                <li><strong>TF-IDF & Cosine Similarity</strong> to engineer a content-based search engine with Scikit-learn.</li>
                <li><strong>K-Means Clustering</strong> to automatically group similar documents based on their content vectors.</li>
                <li><strong>OCR Integration</strong> with Pytesseract to extract text from scanned PDFs.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold !mb-6">3. The Solution: DocuSense in Action</h2>
          <p>
            The result is a practical PDF management tool built on a foundation of data science. The prototype delivers three core features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
            <div className="flex flex-col items-center">
              <Image src="/projects/docusense/feature-dashboard.png" alt="DocuSense Dashboard" width={300} height={600} className="rounded-2xl" />
              <h4 className="font-semibold mt-4">Analytics Dashboard</h4>
              <p className="text-sm text-muted-foreground">Instant insights on your entire PDF collection.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/projects/docusense/feature-search.png" alt="DocuSense Search" width={300} height={600} className="rounded-2xl" />
              <h4 className="font-semibold mt-4">Content-Based Search</h4>
              <p className="text-sm text-muted-foreground">Find files by what's inside them, not just by name.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/projects/docusense/feature-clustering.png" alt="DocuSense Clustering" width={300} height={600} className="rounded-2xl" />
              <h4 className="font-semibold mt-4">Intelligent Clustering</h4>
              <p className="text-sm text-muted-foreground">Automatically groups similar documents together.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold !mb-6">4. Future Scope & Learnings</h2>
          <p>
            This project was a valuable exercise in building a solution from the ground up. It provided a solid foundation, and the clear next steps for expanding its capabilities would be:
          </p>
          <ul className="!my-4">
            <li><strong>Text Summarization:</strong> Integrate a transformer model to provide quick summaries.</li>
            <li><strong>Supervised Classification:</strong> Use user-generated labels to train a model for smarter, personalized tagging.</li>
            <li><strong>Cloud Storage Integration:</strong> Connect directly to Google Drive, Dropbox, and OneDrive.</li>
          </ul>
        </section>

      </div>


      {/* Back Link Header */}
      <div className="mt-16 mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}