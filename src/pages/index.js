import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { BsFillCheckSquareFill } from "react-icons/bs";

const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <p>¡Bienvenidos a mi blog personal!</p>
      <p>La idea es compartir:</p>
      <p>
        <BsFillCheckSquareFill color='#00e676' size='16' />
        {" "}experiencias,</p>
      <p>
        <BsFillCheckSquareFill color='#00e676' size='16' />{" "} puntos de vista,</p>
      <p><BsFillCheckSquareFill color='#00e676' size='16' /> poesias,</p>
      <p><BsFillCheckSquareFill color='#00e676' size='16' /> historias</p>
      <p><BsFillCheckSquareFill color='#00e676' size='16' /> y todo lo demás.</p>
      <br />
      <p>¡Gracias por pasar y compartir!</p>
      <StaticImage
        alt="Augusto Diaz sentado al piano"
        src="../images/augusto1.jpg"
      />
      <small>China, 2016.(Photo Credit: Allen Wang)</small>
    </Layout>
  )
}

export default IndexPage