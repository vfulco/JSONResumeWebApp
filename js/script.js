$('#output').hide();

var myJSONObject;
var str;

function readInput() {
  $('#output').show();

  var inputFirstName = document.getElementById("inputFirstName").value;
  var inputLastName = document.getElementById("inputLastName").value;
  var inputWorkEmail = document.getElementById("inputWorkEmail").value;
  var inputPersonalEmail = document.getElementById("inputPersonalEmail").value;
  var inputWorkPhone = document.getElementById("inputWorkPhone").value;
  var inputPersonalPhone = document.getElementById("inputPersonalPhone").value;
  var inputBioSummary = document.getElementById("inputBioSummary").value;
  var inputCity = document.getElementById("inputCity").value;
  var inputCountry = document.getElementById("inputCountry").value;
  var inputRegion = document.getElementById("inputRegion").value;
  var inputState = document.getElementById("inputState").value;
  var inputWebsiteTagname = document.getElementById("inputWebsiteTagname").value;
  var inputWebsiteURL = document.getElementById("inputWebsiteURL").value;
  var inputProfileTagname = document.getElementById("inputProfileTagname").value;
  var inputProfileUsername = document.getElementById("inputProfileUsername").value;
  var inputCompany = document.getElementById("inputCompany").value;
  var inputPosition = document.getElementById("inputPosition").value;
  var inputWorkWebsite = document.getElementById("inputWorkWebsite").value;
  var inputWorkStartDate = document.getElementById("inputWorkStartDate").value;
  var inputWorkEndDate = document.getElementById("inputWorkEndDate").value;
  var inputWorkSummary = document.getElementById("inputWorkSummary").value;
  var inputHighlights = document.getElementById("inputHighlights").value;
  var inputInstitution = document.getElementById("inputInstitution").value;
  var inputArea = document.getElementById("inputArea").value;
  var inputStudyType = document.getElementById("inputStudyType").value;
  var inputEduStartDate = document.getElementById("inputEduStartDate").value;
  var inputEduEndDate = document.getElementById("inputEduEndDate").value;
  var inputCourses = document.getElementById("inputCourses").value;
  var inputTitle = document.getElementById("inputTitle").value;
  var inputAwardDate = document.getElementById("inputAwardDate").value;
  var inputAwarder = document.getElementById("inputAwarder").value;
  var inputPublicationName = document.getElementById("inputPublicationName").value;
  var inputPublisher = document.getElementById("inputPublisher").value;
  var inputReleaseDate = document.getElementById("inputReleaseDate").value;
  var inputPublicationWebsite = document.getElementById("inputPublicationWebsite").value;
  var inputSkillName = document.getElementById("inputSkillName").value;
  var inputLevel = document.getElementById("inputLevel").value;
  var inputSkillKeywords = document.getElementById("inputSkillKeywords").value;
  var inputHobbyName = document.getElementById("inputHobbyName").value;
  var inputHobbyKeywords = document.getElementById("inputHobbyKeywords").value;
  var inputReferenceName = document.getElementById("inputReferenceName").value;
  var inputReference = document.getElementById("inputReference").value;

  myJSONObject = 
  {
    "bio": 
    {
      "firstName": inputFirstName,
      "lastName": inputLastName,
      "email": {
        "work": inputWorkEmail,
        "personal": inputPersonalEmail
      },
      "phone": {
        "work": inputWorkPhone,
        "personal": inputPersonalPhone
      },
      "summary": inputBioSummary,
      "location": {
        "city": inputCity,
        "countryCode": inputCountry,
        "state": inputState
      },
      "websites": {
        // filled from bottom for custom property name
      },
      "profiles": {
        // filled from bottom for custom property name
      }
    },

    "work": [
      {
        "company": inputCompany,
        "position": inputPosition,
        "website": inputPublicationWebsite,
        "startDate": inputWorkStartDate,
        "endDate": inputWorkEndDate,
        "summary": inputWorkSummary,
        "highlights": [
          inputHighlights
        ]
      }
    ],

    "education": [
      {
        "institution": inputInstitution,
        "startDate": inputEduStartDate,
        "endDate": inputEduEndDate,
        "area": inputArea,
        "studyType": inputStudyType,
        "courses": [
          inputCourses
        ]
      }
    ],

    "awards": [
      {
        "title": inputTitle,
        "date": inputAwardDate,
        "awarder": inputAwarder
      }
    ],

    "publications": [
      {
        "name": inputPublicationName,
        "publisher": inputPublisher,
        "releaseDate": inputReleaseDate,
        "website": inputPublicationWebsite
      }
    ],

    "skills": [
      {
        "name": inputSkillName,
        "level": inputLevel,
        "keywords": [
          inputSkillKeywords
        ]
      }
    ],

    "hobbies": [
      {
        "name": inputHobbyName,
        "keywords": [
          inputHobbyKeywords
        ]
      }
    ],
    
    "references": [
      {
        "name": inputReferenceName,
        "reference": inputReference
      }
    ]
  };

  myJSONObject.bio.websites[inputWebsiteTagname] = inputWebsiteURL;
  myJSONObject.bio.profiles[inputProfileTagname] = inputProfileUsername;

  str = JSON.stringify(myJSONObject, undefined, 2);

  document.getElementById("output").innerHTML = '<pre id="outputText">' + str + '</pre>';

};

// POST request for the theme
// currently not working - needs work

// JSONTest = function() {
//     var resultDiv = $("#themeResults");

//     $.ajax({
//         url: "http://themes.jsonresume.org/theme/modern",
//         type: "POST",
//         data: { resume: "resumeObject" },
//         dataType: "json",
//         success: function (result) {
//             switch (result) {
//                 case true:
//                     processResponse(result);
//                     break;
//                 default:
//                     resultDiv.html(result);
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//         alert(xhr.status);
//         alert(thrownError);
//         }
//     });
// };

console.log(JSONTest);

function copyToClipboard() {
  window.prompt("The JSON is selected - copy it with CMD + C (Mac) or CTRL + C (Windows)", str);
}
