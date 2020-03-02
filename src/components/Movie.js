import React from 'react'

function Movie({url, children}){
  return(
    <li>
      <a href={url}>
        <p>{children}</p>
      </a>
    </li>
  )
}

export default Movie
