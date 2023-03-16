import Link from 'next/link'
import React from 'react'

import { Container, Grid } from './styles'

export const Header: React.FC = () => {
  return (
    <Container id="header">
      <Grid>
        <a href="#" className="logo">
          <img src="/logo.webp" alt="OpenSource Courses" />
        </a>

        <ul>
          <li>
            <a href="#spotlight">Ínicio</a>
          </li>
          <li>
            <a href="#benefits">Vantagens</a>
          </li>
          <li>
            <a
              href="https://docs-opensourcecourses.notion.site/Documenta-o-Open-source-Courses-651ffb1c36054278be8f2a0b2bc17223"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </li>
          <li>
            <a href="#tutorial">Github</a>
          </li>
        </ul>
      </Grid>
    </Container>
  )
}
