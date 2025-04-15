import Image from "next/image"

export default function ProjectsAndMissions() {
  // Sample projects data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description:
        "A groundbreaking initiative that revolutionizes how we approach problem-solving in the digital age.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Mission Omega",
      description: "An ambitious mission to create sustainable technology solutions for communities in need.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 3,
      title: "Project Nexus",
      description: "Connecting disparate systems through innovative middleware and API solutions.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["GraphQL", "Docker", "Kubernetes"],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Missions</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Exploring the boundaries of technology through innovative projects and meaningful missions.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-20`}
          >
            <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden bg-gray-200">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 material-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="mb-6">{project.description}</p>
              <div>
                <h3 className="text-lg font-medium mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-steel-blue text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="px-6 py-3 bg-steel-blue text-white rounded-lg hover:bg-opacity-90 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
