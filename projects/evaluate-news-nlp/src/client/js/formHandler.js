function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    console.log(url)
    //Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch(`http://localhost:8082/evaluate/${formText}`)
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res
    // })



    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
        });
        return response.json(); 
      }
      
      postData('http://localhost:8082/evaluate', {url})
        .then(data => {
            document.getElementById('results').innerHTML = data.agreement
            console.log(data)
        });
}

export { handleSubmit }
