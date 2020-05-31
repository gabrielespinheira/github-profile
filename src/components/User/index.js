import React from 'react'

import { Container } from './styles'
import ShadowName from '../../components/ShadowName'
import { FiGithub, FiAtSign } from 'react-icons/fi'

function User({ user, repos }) {
  return (
    <Container>
      <ShadowName name={user.login} />

      <section className="card">
        <div className="stats">
          <div className="infos">
            <h1>{user.name}</h1>
            <h2>{user.bio}</h2>

            <div className="numbers">
              <div className="num_repo">
                <span>{user.public_repos}</span>
                <span>Repositórios</span>
              </div>

              <div className="num_repo">
                <span>{user.followers}</span>
                <span>Seguidores</span>
              </div>

              <div className="num_repo">
                <span>{user.following}</span>
                <span>Seguindo</span>
              </div>
            </div>
          </div>

          <div className="media">
            <img src={user.avatar_url} alt="Avatar" />
            <a
              href={user.html_url}
              className="git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={24} />
            </a>
            {user.blog && (
              <a
                href={user.blog}
                className="url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiAtSign size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="repos">
          {repos.map((repo) => (
            <a
              href={repo.url}
              key={repo.id}
              className="repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{repo.name}</div>
              <span>{repo.description}</span>
            </a>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default User
