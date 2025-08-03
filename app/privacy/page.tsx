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
        All content on this website, including text, images, and downloadable documents, is © {new Date().getFullYear()} Keerthi Sree Marrapu. All rights reserved. You may not copy, reproduce, distribute, or modify any content without written permission.
      </p>

      <p className="mb-4">
        This site may use analytics tools (such as Google Analytics) to improve performance and user experience. No personally identifiable data is collected without your consent.
      </p>

      <p className="mb-4">
        This site may include links to third-party content or tools (e.g., LinkedIn, external resources). I am not responsible for the privacy practices or content of external websites.
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
