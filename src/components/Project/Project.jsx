import React from 'react'
import './Project.css'

const projects = [
  {
    id: 1,
    title: 'Personal Carbon Footprint Tracker',
    tech: 'React • SpringBoot • MySQL/PostgreSQL • REST API • AI Chatbot',
    desc: 'A deployed full-stack web application to track and reduce personal carbon footprint.',
    repo: 'https://github.com/Ashwini-955/GreenStep-Infysos_Internship_project',
    live: 'https://greenstep-web.vercel.app/'
  },
  {
    id: 2,
    title: 'Smart Umbrella',
    tech: 'Express • Node • MongoDB',
    desc: 'IOT based Hardware and Software Project.',
    repo: 'https://github.com/Ashwini-955/smart_umbrella',
    live: 'https://github.com/Ashwini-955/smart_umbrella'
  },
  {
    id: 3,
    title: 'Hotel Management',
    tech: 'Springboot • JWT • REST',
    desc: 'An App designed to meet the Restaurent management demands.',
    repo: 'https://github.com/kartikkumbhar150/Hotel_Management_Project',
    live: 'https://github.com/kartikkumbhar150/Hotel_Management_Project'
  },
  {
    id: 4,
    title: 'Chat Application',
    tech: 'MERN • Socket.io • REST API',
    desc: 'Interactive Console based project which allows all bank operations.',
    repo: 'https://github.com/Ashwini-955/chatapp-mern',
    live: '#'
  }
]

function Project(){
  return (
  <section id="project" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Selected Projects</h2>
        <p className="projects-sub">A few projects demonstrating full-stack and front-end skills.</p>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className="project-card"
              style={{ animationDelay: `${idx * 90}ms` }}
              tabIndex={0}
            >
              <div className="card-media" aria-hidden>
                <div className={`media-ghost media-${(idx % 4) + 1}`}></div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-tech">{p.tech}</p>
                <p className="card-desc">{p.desc}</p>
                <div className="card-actions">
                  { (p.link || p.live || p.repo) && (
                    <a
                      className="btn primary"
                      href={p.link || p.live || p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  ) }
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
