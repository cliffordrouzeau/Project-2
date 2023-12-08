const Btn = $('.btn-sm')
let uData = []
const sBtn = $('.start')
const eBtn = $('.end')



$(document).ready(() => {

    $('button').addClass('disabled')
    $('.start').removeClass('disabled')
    $('.end').removeClass('disabled')
	$('#logout').removeClass('disabled')
	$('.login').removeClass('disabled')
	$('.signup').removeClass('disabled')
	
    $(sBtn).click(function() {
        $("#question1>button.disabled").removeClass("disabled");
    })

$(Btn).click(function () {

var nQuestion = ((`#question${parseInt($(this).parent().attr("data-id"))+1}`))
$(nQuestion).children().removeClass("disabled");
 uData.push($(this).attr('id') )
 $(this).parent().parent().remove()
})

    $(eBtn).click(function() {
       const settings = {
	async: true,
	crossDomain: true,
	url: 'https://big-five-personality-test.p.rapidapi.com/submit',
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'bba587b913msh8270a82b87c5413p1bd8a3jsn32bf2609adc6',
		'X-RapidAPI-Host': 'big-five-personality-test.p.rapidapi.com'
	},
	processData: false,
	data: `{\r\n    "answers": {\r\n        "1": ${uData[0]},\r\n        "2": ${uData[1]},\r\n        "3": ${uData[2]},\r\n        "4": ${uData[3]},\r\n        "5": ${uData[4]},\r\n        "6": ${uData[5]},\r\n        "7": ${uData[6]},\r\n        "8": ${uData[7]},\r\n        "9": ${uData[8]},\r\n        "10": ${uData[9]},\r\n        "11": ${uData[10]},\r\n        "12": ${uData[11]},\r\n        "13": ${uData[12]},\r\n        "14": ${uData[13]},\r\n        "15": ${uData[14]},\r\n        "16": ${uData[15]},\r\n        "17": ${uData[16]},\r\n        "18": ${uData[17]},\r\n        "19": ${uData[18]},\r\n        "20": ${uData[19]},\r\n        "21": ${uData[20]},\r\n        "22": ${uData[21]},\r\n        "23": ${uData[22]},\r\n        "24": ${uData[23]},\r\n        "25": ${uData[24]},\r\n        "26": ${uData[25]},\r\n        "27": ${uData[26]},\r\n        "28": ${uData[27]},\r\n        "29": ${uData[28]},\r\n        "30": ${uData[29]},\r\n        "31": ${uData[30]},\r\n        "32": ${uData[31]},\r\n        "33": ${uData[32]},\r\n        "34": ${uData[33]},\r\n        "35": ${uData[34]},\r\n        "36": ${uData[35]},\r\n        "37": ${uData[36]},\r\n        "38": ${uData[37]},\r\n        "39": ${uData[38]},\r\n        "40": ${uData[39]},\r\n        "41": ${uData[40]},\r\n        "42": ${uData[41]},\r\n        "43": ${uData[42]},\r\n        "44": ${uData[43]},\r\n        "45": ${uData[44]},\r\n        "46": ${uData[45]},\r\n        "47": ${uData[46]},\r\n        "48": ${uData[47]},\r\n        "49": ${uData[48]},\r\n        "50": ${uData[49]}\r\n    }\r\n}`
};

if(uData.length == 50){
	$.ajax(settings).done(function (response) {
		let rData = [response.Openness.percentage,response.Conscientiousness.percentage,response.Extroversion.percentage,response.Agreeableness.percentage,response.Neuroticism.percentage];
		let Group = (Math.max(response.Openness.percentage,response.Conscientiousness.percentage,response.Extroversion.percentage,response.Agreeableness.percentage,response.Neuroticism.percentage))
		const index = rData.indexOf(Group);
		if(index == 0){
			position = "Openness"
			$('#open').text(response.Openness.description)
		} else if (index == 1){
			position = "Conscientiousness"
			$('#con').text(response.Conscientiousness.description)
		} else if(index == 2){
			position = "Extroversion"
			$('#ext').text(response.Extroversion.description)
		} else if(index == 3) {
			position = "Agreeableness"
			$('#agree').text(response.Agreeableness.description)
		} else if(index == 4){
			position = "Neuroticism"
			$('#neuro').text(response.Neuroticism.description)
		}
		fetch(`/${position}`).then(()=>{
			console.log('route hit')
			window.location.href = `/${position}`
		})
	});
	}
    })
})