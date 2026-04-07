const raleway = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const dmSans = {
  fontFamily: "'DM Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}

interface ConfiguratorCTAProps {
  modelName: string
  requestAccessHref?: string
  signInHref?: string
}

export default function ConfiguratorCTA({
  modelName,
  requestAccessHref = "/configurator/request-access/",
  signInHref = "/configurator/sign-in/",
}: ConfiguratorCTAProps) {
  return (
    <section className="bg-zinc-900 py-24 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            <p
              style={raleway}
              className="text-[10px] uppercase tracking-[5px] text-zinc-500"
            >
              Configure Your Vessel
            </p>
            <h2
              style={raleway}
              className="font-bold uppercase tracking-[3px] text-3xl md:text-4xl lg:text-5xl text-white mt-2"
            >
              Build Your {modelName}
            </h2>
            <p
              style={dmSans}
              className="font-light text-zinc-400 leading-relaxed text-sm md:text-base mt-6 max-w-md"
            >
              Our online configurator lets you explore hull colours, deck
              layouts, interior finishes, and optional equipment — at your own
              pace, before you speak to us.
            </p>
            <p
              style={dmSans}
              className="font-light text-zinc-500 leading-relaxed text-sm md:text-base mt-4 max-w-md"
            >
              Access is by request. We review each application and respond
              within one business day.
            </p>
          </div>

          {/* Right Column Card */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 lg:p-10">
            <p
              style={raleway}
              className="text-[10px] uppercase tracking-[5px] text-zinc-500"
            >
              Configurator Access
            </p>
            <h3
              style={raleway}
              className="font-bold uppercase tracking-[2px] text-xl text-white mt-2"
            >
              Request Access
            </h3>

            {/* Bullet Items */}
            {["Explore layouts and finishes", "Compare option packages", "Share with your crew"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`border-l border-zinc-700 pl-4 mb-3 ${index === 0 ? "mt-6" : "mt-0"}`}
                >
                  <p style={dmSans} className="font-light text-zinc-400 text-sm">
                    {item}
                  </p>
                </div>
              )
            )}

            {/* Primary CTA */}
            <a
              href={requestAccessHref}
              style={raleway}
              className="block border border-white text-white text-center py-4 mt-8 hover:bg-white hover:text-zinc-950 transition-colors duration-200 text-[11px] uppercase tracking-[4px]"
            >
              Request Configurator Access →
            </a>

            {/* Secondary Link */}
            <a
              href={signInHref}
              style={dmSans}
              className="text-[11px] text-zinc-500 hover:text-white transition-colors mt-4 block text-center"
            >
              Already have access? Sign in →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
