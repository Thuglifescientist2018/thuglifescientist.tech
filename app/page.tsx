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

      {/* Alternating Sections */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Left image, right text */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image src="/placeholder.svg?height=400&width=600" alt="Feature image" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 material-card p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">There is nothing here</h3>
            <p className="mb-4">
              But hopefully there will be something near the future. 
            </p>
            <p>Yep.</p>
          </div>
        </div>

        {/* Right image, left text */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-20">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image src="/placeholder.svg?height=400&width=600" alt="Feature image" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 material-card p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Same for this section, lets say tuned</h3>
            <p className="mb-4">
              Empty
            </p>
            <p>
            Empty
            </p>
          </div>
        </div>

        {/* Left image, right text */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image src="/placeholder.svg?height=400&width=600" alt="Feature image" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 material-card p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Yet another substitude</h3>
            <p className="mb-4">
              Blank, thats how big bang started
            </p>
            <p>I will update it somewhere near the future</p>
          </div>
        </div>
      </section>
    </div>
  )
}
