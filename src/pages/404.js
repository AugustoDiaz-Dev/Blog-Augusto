import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: "red",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  textAlign: 'center',
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Página no encontrada</title>
      <h1 style={headingStyles}>Página no encontrada</h1>
      <p style={paragraphStyles}>
        Disculpe, no pudimos encontrar la página que usted busca <span role="img" aria-label="Pensive emoji">
          {" "}😔
        </span>.
      </p>
      <Link to="/">INICIO</Link>.
    </main>
  )
}

export default NotFoundPage
