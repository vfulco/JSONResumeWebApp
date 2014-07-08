
// $('#output').hide();

var myJSONObject;

function readInput() {
        $('#output').show();
        myJSONObject = 
        {
          "bio": {
            "firstName": "",
            "lastName": "",
            "email": {
              "work": "",
              "personal": ""
            },
            "phone": {
              "work": "",
              "personal": ""
            },
            "summary": "",
            "location": {
              "city": "",
              "countryCode": "",
              "state": ""
            },
            "websites": {
              "blog": ""
            },
            "profiles": {
              "github": "",
              "twitter": ""
            }
          },

          "work": [
            {
              "company": "",
              "position": "",
              "website": "",
              "startDate": "",
              "endDate": "",
              "summary": "",
              "highlights": [
                ""
              ]
            }
          ],

          "education": [
            {
              "institution": "",
              "startDate": "",
              "endDate": "",
              "area": "",
              "studyType": ,
              "courses": [
                ""
              ]
            }
          ],

          "awards": [
            {
              "title": "",
              "date": "",
              "awarder": ""
            }
          ],

          "publications": [
            {
              "name": "",
              "publisher": "",
              "releaseDate": "",
              "website": ""
            }
          ],

          "skills": [
            {
              "name": "",
              "level": "",
              "keywords": [
                ""
              ]
            },

            {
              "name": "",
              "level": "",
              "keywords": [
                "GIF"
              ]
            }
          ],
          
          "references": [
            {
              "name": "",
              "reference": ""
            }
          ]
        };
};

var str = JSON.stringify(myJSONObject, undefined, 2);

document.getElementById("output").innerHTML = str;


