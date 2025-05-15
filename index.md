---
layout: single
title: ""
permalink: /
---

<style>
  .welcome-banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .welcome-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }

  .welcome-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 768px) {
    .welcome-text {
      font-size: 2.5rem;
    }
  }
</style>

<div class="welcome-banner">
  <img src="/assets/images/welcome.jpg" alt="Welcome Image">
  <div class="welcome-text">Welcome</div>
</div>
