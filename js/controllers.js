
function setFetchInfo(elementID, elementChange) {
    if (document.getElementById(elementID).currentSrc) {
        document.getElementById(elementID).src = elementChange;
    }
    else{
        document.getElementById(elementID).innerHTML = elementChange;
    }
}

fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(json => {
    console.log(json.results[0])
    const personalNameTxt = "< "+json.results[0].name.first+' '+ json.results[0].name.last+' > <span class="blinking-uncerscore">_</span>';
    const birthdayInfoTxt = "> Cumpleaños: "+new Date(json.results[0].dob.date).toLocaleDateString("en-US")+'<span class="blinking-uncerscore">_</span>';
    const locationInfoTxt = "> Ubicacion: "+json.results[0].location.state+' - '+json.results[0].location.street.number+' '+json.results[0].location.street.name+'<span class="blinking-uncerscore">_</span>';
    const profilePhotoPath = json.results[0].picture.large;
    const emailInfoTxt = "> Email: "+json.results[0].email+'<span class="blinking-uncerscore">_</span>';
    const phoneInfoTxt = "> Telefono: "+json.results[0].phone+'<span class="blinking-uncerscore">_</span>';

    setFetchInfo('personal-name',personalNameTxt);
    setFetchInfo('birthday-info',birthdayInfoTxt);
    setFetchInfo('location-info',locationInfoTxt);
    setFetchInfo('profile-image',profilePhotoPath);
    setFetchInfo('email-info',emailInfoTxt);
    setFetchInfo('phone-info',phoneInfoTxt);
    setFetchInfo('location-contact-info',locationInfoTxt);
})