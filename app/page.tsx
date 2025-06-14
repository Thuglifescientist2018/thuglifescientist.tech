import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">ThuglifeScientist</h1>
        <h2 className="text-xl md:text-2xl mb-8 text-steel-blue">Started with nothing, grew up to be something</h2>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto material-card p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">About ThuglifeScientist</h3>
          <div className="text-left">
            <p className="mb-4">
              I am a solo developer and I like making passion projects, for starters, probably these things may end up in startups.
            </p>
            <p>
            There was nothing that would articulate what was inside of me, I couldn't find any way to nourish my genius, so I didn't code to become a coder, I coded to become a developer.
              I like researching things in life, I am not a formal physicist, but somewhere near the future through coding, I want to make research center, hopefully it will make my living because this is something I am doing even without getting paid, it fulfills my life.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}
