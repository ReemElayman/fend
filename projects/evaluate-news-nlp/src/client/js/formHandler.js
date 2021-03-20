function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    console.log(url)
    //Client.checkForName(formText)



    document.getElementById("analysis").innerHTML='<p id="msg">waiting for the results ....</p>'


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
          document.getElementById("analysis").innerHTML=
        ` <table>
          <tr>
            <th>Agreement</th>
            <th>Score Tag</th>
            <th>Subjectivity</th>
            <th>Confidence</th>
            <th>Irony</th>
            
          </tr>
          <tr>
            <td>${data.agreement}</td>
            <td>${data.score_tag}</td>
            <td>${data.subjectivity}</td>
            <td>${data.confidence}</td>
            <td>${data.irony}</td>
          </tr>
        </table>`;
            console.log(data)
        });
}

export { handleSubmit }
