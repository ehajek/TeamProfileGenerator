const generateEngineers = (data) => {
    return `
        <div class="column is-multiline is-one-third">
            <div class="card" id="employeeMember">
                <div class="card-content p-0">
                    <div class="card-header has-background-link-dark">
                    <div class="card-header-icon">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fas ${data.icon} fa-2x has-text-white"></i>
                        </span>
                    </span>
                </div>
                    <div class="media-content">
                        <p class="title is-2 has-text-white">${data.name}</p>
                        <p class="subtitle is-2 has-text-white">${data.role}</p>
                    </div>
                    </div>
                    <div>
                        <div class="content">
                        <p class="box m-1 p-1">ID: ${data.id}</p><br>
                        <p class="box m-1 p-1">Email: <a href="mailto:${data.email}">${data.email}</a></p><br>
                        <p class="box m-1 p-1">${data.specialInfo} ${data.getGithub()}</p>
                        </div>
                    </div>
                </div>  
            </div>      
        </div>
    `;
  };

  module.exports = generateEngineers;