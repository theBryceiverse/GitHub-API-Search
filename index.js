
function getGithub(handle) {
  const url = 'https://api.github.com/users/' + handle + '/repos';
  //theBryceiverse

  fetch(url/*, options*/)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function displayResults(responseJson) {
    console.log(responseJson);
    //removes previus results
    $('.results').remove(); 

    //loops through repositories and grabs url & name
    for(i = 0; i < responseJson.length; i++){
       $('form').append(`
       <a class="results" href="${responseJson[i].html_url}"><h2>${responseJson[i].name}</h2></a>
       `)
    }
}

function watchForm(){
    $('form').submit(event => {
      event.preventDefault();

        let handle = $('#js-search-term').val(); 

      getGithub(handle);
    });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});
