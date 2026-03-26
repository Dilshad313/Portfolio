import React from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 0,
    title: "Spiritus",
    description: "A modern Spiritus website focused on mental health care, built to provide seamless access to therapy services with a clean, responsive, and user-friendly design.",
    image: "/projects/project4.png",
    tags: ["REACT", "NODEJS"],
    demoUrl: "https://spiritus.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Classora",
    description: "A comprehensive College/School Management System built using the MERN stack, designed to streamline academic operations with scalable, secure, and user-friendly web solutions.",
    image: "/projects/project5.png",
    tags: ["REACT", "NODEJS"],
    demoUrl: "https://classora-delta.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Talko",
    description: "A secure real-time chat application featuring private messaging, group chats, and channels for seamless communication.",
    image: "/projects/project6.png",
    tags: ["REACT", "NODEJS"],
    demoUrl: "https://real-chat-app-silk.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Allen Solly",
    description: "A beautiful Allen Solly website using HTML and CSS",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Kerala Taste",
    description: "A beautiful Kerala Taste website using HTML and CSS",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Starbucks",
    description: "A beautiful Starbucks website using HTML and CSS",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  {project.description}
                </p>

                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href="https://github.com/Dilshad313"
            target='_blank'
            rel='noopener noreferrer'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
