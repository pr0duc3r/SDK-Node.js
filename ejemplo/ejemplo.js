var sdk = require('../lib/todo-pago');

var options = {
	wsdl : 'https://developers.todopago.com.ar/services/t/1.1/Authorize?wsdl',
	endpoint : "https://developers.todopago.com.ar/",	
	Authorization:'PRISMA f3d8b72c94ab4a06be2ef7c95490f7d3'
};

exampleSendAuthorizeRequest();
exampleGetAuthorizeAnswer();
exampleGetStatus();
exampleGetPaymentMethods();

function exampleGetStatus(){
	options.endpoint= "https://developers.todopago.com.ar/";
	sdk.getStatus(options, '2153', '02', function(result, err){
		console.log("-------------------***-------------------");
		console.log("getStatus");
		console.log(result);
		console.log(err);
		console.log("-------------------***-------------------");
	});
}

function exampleGetPaymentMethods(){
	options.endpoint= "https://developers.todopago.com.ar/";
	sdk.getPaymentMethods(options, '2153', function(result, err){
		console.log("-------------------***-------------------");
		console.log("getAllPaymentMethods");
		console.log(result);
		console.log(err);
		console.log("-------------------***-------------------");
	});
}

function exampleGetAuthorizeAnswer(){
	var parameters = {
		'Security'   : '1234567890ABCDEF1234567890ABCDEF', 
		'Merchant' 	 : '2153',
		'RequestKey' : '710268a7-7688-c8bf-68c9-430107e6b9da',
		'AnswerKey'  : '693ca9cc-c940-06a4-8d96-1ab0d66f3ee6'
	};
	sdk.getAutorizeAnswer(options, parameters, function(result, err){
		console.log("getAutorizeAnswer");
		console.log(result);
		console.log(err);
		console.log("-------------------");
	});
} 
function exampleSendAuthorizeRequest(){
	var parameters = {
		'Session': 'ABCDEF-1234-12221-FDE1-00000200',
		'Security':'1234567890ABCDEF1234567890ABCDEF',
		'EncodingMethod':'XML',
		'Merchant':2153,
		'URL_OK':'http,//someurl.com/ok/',
		'URL_ERROR':'http,//someurl.com/fail/',
		'MERCHANT': "2153",
		'OPERATIONID':"60",
		'CURRENCYCODE': 032,
		'AMOUNT':"54"
	};
	//Control de Fraude
	var fraudControl = {
		'CSBTCITY': 'Villa General Belgrano', 
		'CSSTCITY': 'Villa General Belgrano', 

		'CSBTCOUNTRY': 'AR', 
		'CSSTCOUNTRY': 'AR',

		'CSBTEMAIL': 'todopago@hotmail.com', 
		'CSSTEMAIL': 'todopago@hotmail.com', 

		'CSBTFIRSTNAME': 'Juan',      
		'CSSTFIRSTNAME': 'Juan',      

		'CSBTLASTNAME': 'Perez',
		'CSSTLASTNAME': 'Perez',

		'CSBTPHONENUMBER': '541160913988',     
		'CSSTPHONENUMBER': '541160913988',     

		'CSBTPOSTALCODE': ' 1010',
		'CSSTPOSTALCODE': ' 1010',

		'CSBTSTATE': 'B',
		'CSSTSTATE': 'B',

		'CSBTSTREET1': 'Cerrito 740',
		'CSSTSTREET1': 'Cerrito 740',

		'CSBTCUSTOMERID': '453458', 
		'CSBTIPADDRESS': '192.0.0.4',        
		'CSPTCURRENCY': 'ARS',      
		'CSPTGRANDTOTALAMOUNT': '125.38',
		'CSMDD7': '',        
		'CSMDD8': 'Y',        
		'CSMDD9': '',       
		'CSMDD10': '',      
		'CSMDD11': '',
		'CSMDD12': '',     
		'CSMDD13': '',     
		'CSMDD14': '',      
		'CSMDD15': '',        
		'CSMDD16': '',
		'CSITPRODUCTCODE': 'electronic_good#chocho',
		'CSITPRODUCTDESCRIPTION': 'NOTEBOOK L845 SP4304LA DF TOSHIBA#chocho',     
		'CSITPRODUCTNAME': 'NOTEBOOK L845 SP4304LA DF TOSHIBA#chocho',  
		'CSITPRODUCTSKU': 'LEVJNSL36GN#chocho',      
		'CSITTOTALAMOUNT': '1254.40#10.00',      
		'CSITQUANTITY': '1#1',       
		'CSITUNITPRICE': '1254.40#15.00'
	};
	
	sdk.sendAutorizeRequest(options, parameters, fraudControl, function(result, err){
		console.log("sendAutorizeRequest");
		console.log(result);
		console.log(err);
		console.log("-------------------");
	});
}
