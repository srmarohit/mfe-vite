export default function MFE() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                <span className="text-blue-600">Module Federation</span> 2.0
              </h1>
              <p className="text-gray-600 mt-2">
                Micro-frontend architecture for modern web applications
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/module-federation/core"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              Introduction
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  What is Module Federation?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Module Federation is an architectural pattern for the
                  decentralization of JavaScript applications (similar to
                  microservices on the server-side). It allows you to share code
                  and resources among multiple JavaScript applications (or
                  micro-frontends). This can help you:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reduce code duplication
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Improve code maintainability
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Lower the overall size of your applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Enhance the performance of your applications
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✨</span>
                  What is Module Federation 2.0?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Module Federation 2.0
                  </code>{" "}
                  differs from the{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Module Federation
                  </code>{" "}
                  built into{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Webpack5
                  </code>{" "}
                  by providing not only the core features of module export,
                  loading, and dependency sharing but also additional dynamic
                  type hinting,{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Manifest
                  </code>
                  ,{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Federation Runtime
                  </code>
                  , and{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Runtime Plugin System
                  </code>
                  . These features make{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Module Federation
                  </code>{" "}
                  more suitable for use as a micro-frontend architecture in
                  large-scale{" "}
                  <code className="bg-gray-800 text-gray-100 px-2 py-1 rounded text-sm font-mono">
                    Web
                  </code>{" "}
                  applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              🔥 Features
            </h2>
            <p className="text-gray-700 mb-6">
              Module Federation has the following features:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Code sharing, Dependency reuse",
                  desc: "Share modules across applications without duplication",
                },
                {
                  icon: "📝",
                  title: "Manifest",
                  desc: "Automatic manifest generation for module discovery",
                },
                {
                  icon: "🎨",
                  title: "Module Federation Runtime",
                  desc: "Advanced runtime capabilities for dynamic loading",
                },
                {
                  icon: "🧩",
                  title: "Runtime Plugins System",
                  desc: "Extensible plugin architecture for customization",
                },
                {
                  icon: "🚀",
                  title: "Dynamic type prompt",
                  desc: "TypeScript support with dynamic type hints",
                },
                {
                  icon: "🛠️",
                  title: "Chrome Devtool",
                  desc: "Browser extension for debugging and inspection",
                },
                {
                  icon: "🦀",
                  title: "Rspack and Webpack Support",
                  desc: "Compatible with modern bundlers",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              🎯 Use Cases
            </h2>
            <p className="text-gray-700 mb-6">
              Module Federation is suitable for the following scenarios:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Large Applications",
                  desc: "For large applications, you can break the application into multiple micro-frontends and use Module Federation to share code and resources between them.",
                  color: "bg-blue-50 border-blue-100",
                },
                {
                  title: "Microfrontend Architecture",
                  desc: "Module Federation is an ideal tool for building microfrontend architectures.",
                  color: "bg-green-50 border-green-100",
                },
                {
                  title: "Multi-team Development",
                  desc: "Module Federation can assist multiple teams in collaboratively developing large applications.",
                  color: "bg-purple-50 border-purple-100",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className={`${useCase.color} border rounded-lg p-6`}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-700">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History & Future Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* History */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                🕠 History of Module Federation
              </h2>
              <p className="text-gray-700 mb-4">
                Module Federation is a new feature introduced in Webpack 5, but
                its history dates back to 2017. At that time, the Webpack team
                began exploring a way to share code between multiple
                applications.
              </p>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-800">2018</h4>
                  <p className="text-gray-600">
                    Webpack 4.20 was released, introducing module hooks, which
                    laid the foundation for the development of Module
                    Federation.
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800">2019</h4>
                  <p className="text-gray-600">
                    Webpack 5 was released, officially introducing the Module
                    Federation feature.
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-800">Present</h4>
                  <p className="text-gray-600">
                    Module Federation has become a powerful tool for building
                    modern web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Future */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                🕰️ The Future of Module Federation
              </h2>
              <p className="text-gray-700 mb-4">
                Module Federation aims to become an architectural method for
                building large web applications, similar to microservices in the
                backend. Module Federation will provide more capabilities to
                meet the foundational needs of large web application
                decentralization, currently including these parts:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Providing comprehensive Devtool tools
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Offering more high-level framework capabilities like Router,
                  Sandbox, SSR
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Providing best practices for large web applications based on
                  Module Federation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community & Next Steps */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              Community & Next Steps
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Follow Us */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/module-federation/core"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition duration-300"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-gray-300">
                        Star us on GitHub
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://discord.com/channels/1055442562959290389/1055442563718467637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.3 12.3 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <div>
                      <div className="font-medium">Discord</div>
                      <div className="text-sm text-gray-300">
                        Join the community
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Next Steps */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  ✨ Next Steps
                </h3>
                <p className="text-gray-700 mb-4">You might want to:</p>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">🚀</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Get Started Quickly
                      </div>
                      <div className="text-sm text-gray-600">
                        Learn how to use Module Federation
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition duration-300"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Integrations
                      </div>
                      <div className="text-sm text-gray-600">
                        Choose the package for your project
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition duration-300"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Consult Configuration
                      </div>
                      <div className="text-sm text-gray-600">
                        Understand how to configure Module Federation
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Module Federation 2.0</h3>
              <p className="text-gray-400">
                Micro-frontend architecture for modern web applications
              </p>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Built with React, Vite, and Module Federation</p>
              <p className="mt-1">
                © {new Date().getFullYear()} Module Federation Demo. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
