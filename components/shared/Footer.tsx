// components/shared/Footer.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-background">
            <div className="max-w-6xl mx-auto py-16 px-6">

                {/* "Let's connect." Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-foreground">
                        Let's connect.
                    </h2>
                </div>

                {/* --- Main Footer Content (Revised Layout) --- */}
                <div className="relative flex flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-center">

                    {/* Left side: Copyright (Absolutely positioned on desktop) */}
                    <div className="order-last md:order-none md:absolute md:left-0 text-center md:text-left">
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                            © {new Date().getFullYear()} Keerthi Sree Marrapu. All rights reserved.
                        </p>
                        <Link href="/privacy" className="text-sm text-muted-foreground underline hover:text-foreground">
                            Privacy & Terms
                        </Link>
                    </div>


                    {/* Center: Social Links (This will now be perfectly centered) */}
                    <div className="flex justify-center space-x-8">
                        <Link
                            href="https://linkedin.com/in/mksree"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:mksree066@gmail.com"
                            className="text-base font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                            Email
                        </Link>
                    </div>

                    {/* Right side: Download CV Button (Absolutely positioned on desktop) */}
                    <div className="md:absolute md:right-0">
                        <Button asChild>
                            <Link href="/Keerthi_Sree_Marrapu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download CV
                            </Link>
                        </Button>
                    </div>


                </div>
            </div>
        </footer>
    );
};