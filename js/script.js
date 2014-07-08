// some data structure loop
	// if Generate is pressed
		// take button data
		// put into JSON string

var myJSONObject = 
{
		"bio": {
        	"firstName": "", "lastName": "", 
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
        		"region": "",
        		"state": ""
        	},

        	"websites": {
        		"blog": ""
        	},

        	"profiles": {
        		"twitter": "",
        		"github": ""
        	}
        },

        "work": [{
        	"company": "",
        	"position": "",
        	"website": "",
        	"startDate": "",
        	"endDate": "",
        	"summary": "",
        	"highlights": [
        		""
        	]
        }],

        "education": [{
        	"institution": "",
        	"area": "",
        	"studyType": "",
        	"startDate": "",
        	"endDate": "",
        	"courses": [
        		""
        	]
        }]

};

var str = JSON.stringify(myJSONObject, undefined, 2);

document.getElementById("output").innerHTML = str;


