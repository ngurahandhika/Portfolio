import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="relative left-0 top-0 right-0 bottom-auto w-full h-0.5 mx-0 my-auto bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400" />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-foreground">
                Gusti Ngurah
              </h2>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:flex md:justify-end">
            <div className="flex flex-wrap justify-between md:justify-end md:space-x-48">
              <div className="w-1/2 sm:w-auto mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Quick Nav
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#home"
                      className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/ngurahandhika?tab=repositories"
                      className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
                    >
                      Work
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/ngurahandhika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-400 dark:border-gray-600 text-center md:text-left text-gray-500 text-sm">
          &copy; 2024-2025 Gusti Ngurah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
