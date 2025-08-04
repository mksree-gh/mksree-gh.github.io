// app/privacy/page.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';


export default function PrivacyPage() {
    return (
        <main className="max-w-3xl mx-auto py-20 px-6">

            <h1 className="text-3xl font-semibold mb-6">Privacy & Terms</h1>

            <p className="mb-4">
                This website is owned and operated by Keerthi Sree Marrapu.
            </p>

            <p className="mb-4">
                All content on this website, including text, images, and downloadable documents, is © {new Date().getFullYear()} Keerthi Sree Marrapu. All rights reserved. The CV and portfolio may be downloaded, shared, or distributed for personal, professional, or hiring-related purposes. However, modification, reproduction, or republication of any content is not permitted without written permission.
            </p>

            <p className="mb-4">
                This site may use analytics tools (such as Google Analytics) to improve performance and user experience. No personally identifiable data is collected without your consent.
            </p>

            <p className="mb-4">
                This site may include links to third-party content or tools (e.g., LinkedIn, external resources). I am not responsible for the privacy practices or content of external websites.
            </p>

            <h2 className="text-xl font-semibold mt-12 mb-4">About This Site</h2>

            <p className="mb-4">
                This portfolio was designed and developed by Keerthi Sree Marrapu using <span className="font-medium">Next.js</span>, <span className="font-medium">Tailwind CSS</span>, and <span className="font-medium">TypeScript</span>. The site is statically generated and hosted via GitHub Pages.
            </p>

            <p className="mb-4">
                It aims to be fast, accessible, and minimal — with all content authored and maintained manually. You're welcome to reach out if you're curious about the stack or implementation details.
            </p>


            {/* Back to Home */}
            <div className="mt-24">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </div>



        </main>
    );
}
