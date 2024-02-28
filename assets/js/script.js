//Fang de relevante elementer med querySelector og gem det i en variabel 
let main= document.querySelector('main'); 


const contacts = [
    {
      name: {
        first: "Bernard",
        last: "Coulston"
      },
      location: {
        street: "Smithstreet",
        number: "11",
        zipCode: "97832",
        city: "Wostershireston",
        country: "United Kingdom"
      },
      contact: {
        mobile: "32876234",
        email: "bc@whaaat.co.uk"
      },
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        twitter: "https://twitter.com/home"
      },
      picture: "1.jpg"
    },
    {
      name: {
        first: "Andrea",
        last: "Huffstader"
      },
      location: {
        street: "Lostersquare",
        number: "142",
        zipCode: "45636",
        city: "Hundleham",
        country: "United Kingdom"
      },
      contact: {
        mobile: "",
        email: "ah@whaaat.co.uk"
      },
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        twitter: "https://twitter.com/home"
      },
      picture: "2.jpg"
    },
    {
      name: {
        first: "Helen",
        last: "Farquad"
      },
      location: {
        street: "Mincerroad",
        number: "23",
        zipCode: "89762",
        city: "Upper Darpaville",
        country: "United Kingdom"
      },
      contact: {
        mobile: "23443345",
        email: "hf@whaaat.co.uk"
      },
      social: {
        linkedin: "",
        twitter: "https://twitter.com/home"
      },
      picture: "3.jpg"
    },
    {
      name: {
        first: "Jonathan",
        last: "Livingston"
      },
      location: {
        street: "Ocean drive",
        number: "1",
        zipCode: "98765",
        city: "Beachly",
        country: "United Kingdom"
      },
      contact: {
        mobile: "23455345",
        email: ""
      },
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        twitter: ""
      },
      picture: "4.jpg"
    },
    {
      name: {
        first: "Peter",
        last: "Hamstrung"
      },
      location: {
        street: "Faucolt street",
        number: "21",
        zipCode: "345645",
        city: "Causton",
        country: "United Kingdom"
      },
      contact: {
        mobile: "",
        email: "ph@whaaat.co.uk"
      },
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        twitter: "https://twitter.com/home"
      },
      picture: "5.jpg"
    }
  ];

//loop igennem array og forEach og find det relevante indhold som skal indsætter i HTML. 
contacts.forEach(function(contact){
    main.innerHTML += `
    <article class="contactCard">
        <img src="./assets/images/${contact.picture}" alt="" class="contactImg">
        <div class="textContent">
          <h2 class="name">${contact.name.first} ${contact.name.last}</h2>
          <ul class="adress">
          <li>${contact.location.street}</li>
          <li>${contact.location.number}</li>
          <li>${contact.location.zipCode}</li>
          <li>${contact.location.city}</li>
          <li>${contact.location.country}</li>
          </ul>
          <div class="socials">
            <ul>
                <li>${contact.contact.mobile}</li>
                <li>${contact.contact.email}</li>
                <li>${contact.social.linkedin}</li>
                <li>${contact.social.twitter}</li>
            </ul>
          </div>
        </div>
      </article>`
});


