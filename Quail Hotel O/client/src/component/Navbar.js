import React from 'react'

function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg ">
    <a class="navbar-brand" href="#">Quail Hotel</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/register">Register <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
       
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar