
function generateHTML () {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#FF0000">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#FF0000">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
    <!-- <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/> -->
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="is-size-1" id="header">My Team</h1>
        </div>
      </div>
    </section>
    <div>
      <section class="section" id="EmployeeCardSection">
          <div class="columns is-centered is-multiline" id="allEmployeeCards">
  `;
};

  module.exports = generateHTML;