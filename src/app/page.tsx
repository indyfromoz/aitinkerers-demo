import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl font-inter">
              Hello, I&apos;m <span className="text-blue-600">Indy</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-slabo max-w-2xl mx-auto">
              Welcome to my portfolio. I&apos;m passionate about creating
              digital experiences that combine elegant design with powerful
              functionality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200 font-inter"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Additional content section */}
        <div className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-gray-600 font-slabo leading-relaxed">
              This portfolio showcases my work and passion for development. Feel
              free to explore and reach out if you&apos;d like to connect.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
