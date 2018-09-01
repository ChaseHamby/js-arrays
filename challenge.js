console.log('hi there');

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

  const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

  // Congressional District

  const districtStringBuilder = () => {
    const newString =`<h1>District : ${elizabethSanger.congressionalDistrict}</h1>`
    printToDom(newString, 'congressionalDistrict');
  }

  // Statements

  const statementsStringBuilder = () => {
    let newString = '';
    for(i = 0; i < elizabethSanger.statements.length; i++){
       newString += `<div class="statement">`;
       newString += `<h2>${elizabethSanger.statements[i].statement}</h2>`;
       newString += `<h3>${elizabethSanger.statements[i].category}</h3>`;
       newString += `</div>`; 
    }
    printToDom(newString, 'statements');
  };

  // Events

  const eventsStringBuilder = () => {
    let newString = '';
    for(i = 0; i < elizabethSanger.events.length; i++){
       newString += `<div class="event">`;
       newString += `<h3>${elizabethSanger.events[i].date}</h2>`;
       newString += `<h3>${elizabethSanger.events[i].title}</h3>`;
       newString += `<h3>${elizabethSanger.events[i].description}</h3>`;
       newString += `</div>`; 
    }
    printToDom(newString, 'events');
  };

  // Volunteers

  const volunteersStringBuilder = () => {
    let newString = '';
    for(i = 0; i < elizabethSanger.volunteers.length; i++){
       newString += `<div class="volunteer">`;
       newString += `<h1>${elizabethSanger.volunteers[i].name}</h1>`;
       newString += `<h3>${elizabethSanger.volunteers[i].address}</h3>`;      
       newString += `<h3>${elizabethSanger.volunteers[i].email}</h3>`;       
       newString += `<h3>${elizabethSanger.volunteers[i].phone}</h3>`;
       newString += `<h3>${elizabethSanger.volunteers[i].availability}</h3>`;
       newString += `<h3>${elizabethSanger.volunteers[i].activities}</h3>`;
       newString += `</div>`; 
    }
    printToDom(newString, 'volunteers');
  };

  // Donation form

  const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate Here</a>`;
    printToDom(newString, 'donationForm');
  };

  // Biography

  const bioStringBuilder = () => {
    const newString = `<h2>Biography</h2><p>${elizabethSanger.biography}</p>`;
    printToDom(newString,'biography');
};

  // Mission Statement
  const missionStatementStringBuilder = () => {
    const newString = `<h1>Mission Statement: ${elizabethSanger.missionStatement} </h1>`;
    printToDom(newString, 'missionStatement');
  };

  // Images
  const imagesStringBuilder = () => {
    let newString = '';
    for(i = 0; i < elizabethSanger.images.length; i++){
        newString += `<div class="images">`
        newString += `<img src="${elizabethSanger.images[i].imageUrl}">`
        printToDom(newString, 'images');
    };
};

  // Registration Form

  const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
    printToDom(newString, 'voterRegistration');
  };


  districtStringBuilder();
  statementsStringBuilder();
  donationFormStringBuilder();
  voterRegistrationStringBuilder();
  eventsStringBuilder();
  bioStringBuilder();
  volunteersStringBuilder ();
  missionStatementStringBuilder();
  imagesStringBuilder();


//////// part 3 //////////////


// Voter Registration

  const updateVoterRegistration = (newUrl) => {
      elizabethSanger.voterRegistrationUrl = newUrl;
      voterRegistrationStringBuilder(); 
  };
    updateVoterRegistration('classtracker.zoeames.com');

// Congressional District

  const updateDistrict = (newDistrict) => {
    elizabethSanger.congressionalDistrict = newDistrict;
    districtStringBuilder();
  };
    updateDistrict('8');

// Mission Statement

const updateMissionStatement = (newMission) => {
  elizabethSanger.missionStatement = newMission;
  missionStatementStringBuilder();
};
  updateMissionStatement('This is the new statement that we are using.');

// Biography

const updateBiography = (newBiography) => {
  elizabethSanger.biography = newBiography;
  bioStringBuilder();
};
  updateBiography('I was born again through functions.');

// Donation Form

const updateDonationForm = (newDonationUrl) => {
  elizabethSanger.donationFormUrl = newDonationUrl;
  donationFormStringBuilder(); 
};
updateDonationForm('beeradvocate.com');

// Statements

const updateStatements = (newStatement, newCategory) => {
  let statements = {
    statement: newStatement,
    category: newCategory
  }
  statementsStringBuilder();
};
  updateStatements();

// Volunteers

const updateVolunteers = (newName, newEmail, newAddress, newPhone, newAvailability, newActivities) => {
  let volunteers = {
    name: newName,
    email: newEmail,
    address: newAddress,
    phone: newPhone,
    availability: newAvailability,
    activities: newActivities
  }
  volunteersStringBuilder();
};
  updateVolunteers();

// Events

const updateEvents = (newDate, newTitle, newDescription) => {
  let events = {
    date: newDate,
    title: newTitle,
    description: newDescription
  }
  eventsStringBuilder();
};
  updateEvents();

// Images

const updateImages = (newImageUrl, newDescription, newType) => {
  let images = {
    imageUrl: newImageUrl,
    description: newDescription,
    type: newType
  }
  imagesStringBuilder();
};
  updateImages();