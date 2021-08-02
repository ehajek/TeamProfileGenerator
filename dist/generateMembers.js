const generateMembers = (data) => {
    return `
        <div class="column is-multiline is-one-third">
            <div class="card" id="employeeMember">
                <div class="card-content p-0">
                    <div class="card-header has-background-link-dark">
                    <div class="card-header-icon">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-2 has-text-white">${data.name}</p>
                        <p class="subtitle is-2 has-text-white">${data.role}</p>
                    </div>
                    </div>
                    <div>
                        <div class="content">
                        <p class="box m-1 p-1">ID: ${data.id}</p><br>
                        <p class="box m-1 p-1">Email: ${data.email}</p><br>
                        <p class="box m-1 p-1">${data.specialInfo} ${data.specialData}</p>
                        </div>
                    </div>
                </div>  
            </div>      
        </div>
    `;
  };

  module.exports = generateMembers;