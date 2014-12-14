//var app = angular.module('myApp', []);

      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
	var selectedMonster = 'rept';
	$(".cock").hide();
	$(".hum").hide();
	
      //images
	var imageReptileBody = new Image();
	var reptBigEye = new Image();
	var reptEye = new Image();
	var reptLegFront = new Image();
	var reptLegBottom = new Image();
	var reptUpperLeg = new Image();

	var cockBody = new Image();	
	var cockScale = new Image();	
	var cockTale = new Image();	
	var cockTale2 = new Image();	
	var cockLegs = new Image();	
	var cockThroat = new Image();	

	var humBody = new Image();
	var humHead = new Image();	
	var humSpike = new Image();	
	var humFinger = new Image();	
	var humTale = new Image();	

	loadImages();
      var selectedHead = '';
      //getValues();

	//$('.selectpicker').selectpicker();

      reptUpperLeg.onload = function() {
	drawMonster();
      };
	
//----- add event listener to element 
	$('#generateMonster').click(drawMonster);
	function drawMonster() {
		switch(selectedMonster) {
    			case 'rept': drawReptile(getSelectValue('rept-legs'), getSelectValue('rept-eyes'));
        		break;
			case 'cock': 
				drawCock(
					getSelectValue('cock-body'),
					getSelectValue('cock-legs'),
					getSelectValue('cock-tail'),
					getSelectValue('cock-throat'));
			break;
			case 'hum': drawHumanoid(
					getSelectValue('hum-head'),
					getSelectValue('hum-striks'),
					getSelectValue('hum-fingers'),
					getSelectValue('hum-tail'));
		}
	}
	$('.changeMonster').click(function() {
		$(".reptile").hide();
		$(".cock").hide();
		$(".hum").hide();
		selectedMonster = $(this).val();
		switch(selectedMonster) {
    			case 'rept': $(".reptile").show();
        		break;
			case 'cock': $(".cock").show();
			break;
			case 'hum': $(".hum").show();
		}
	});

//----- add
	function drawReptile(legsN, eyesN) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.stroke();
		ctx.scale(1, 1);
		ctx.drawImage(imageReptileBody, 0, 0);

		//draw Eye
		switch(eyesN) {
			case '10': ctx.drawImage(reptBigEye, 35, 200);
			break;
			case '8': ctx.drawImage(reptEye, 60, 190);
			case '6': ctx.drawImage(reptEye, 42, 189);
			case '4': ctx.drawImage(reptEye, 50, 205);
			case '2': ctx.drawImage(reptEye, 35, 205);
			break;
		}

		//draw legs
		if(legsN == '8') {
			ctx.drawImage(reptLegFront, 200, 200);
			ctx.drawImage(reptLegBottom, 250, 210);
			ctx.drawImage(reptUpperLeg, 320, 130);
		}
	
		ctx.restore();
	}

	function drawCock(body, legs, tale, throat) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.stroke();
		ctx.scale(1, 1);
		
		if(body != 1) {
			ctx.drawImage(cockScale, 36, 192);
		} else {
			ctx.drawImage(cockBody, 0, 0);	
		}
		if(legs == 1) {
			ctx.drawImage(cockLegs, 145, 250);
		}
		var scale_add = body ? 0 : 15;
		switch(tale) {
			case '2': ctx.drawImage(cockTale2, 305+scale_add, 120);
			case '1': ctx.drawImage(cockTale, 323+scale_add, 165);
			break;		
		} 
		if(throat == 1) {
			ctx.drawImage(cockThroat, 105, 270);
		}
	}

	function drawHumanoid(head, strike, fingers, tail) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.stroke();
		ctx.scale(1, 1);
		ctx.drawImage(humBody, 0, 0);
		if(head == 1) {
			ctx.drawImage(humHead, 275, 95);	
		}
		if(strike == 1) {
			ctx.drawImage(humSpike, 65, 18);
		}
		if(fingers == 1) {
			ctx.drawImage(humFinger, 0, 285);
		}
		if(tail == 1) {
			ctx.drawImage(humTale, 97, 314);		
		}
			
	}

	function getMonsterType() {
//$('#datebox').val($(this).text());
		var e = document.getElementById("monsterType");
		return e.options[e.selectedIndex].value;
	}

	function loadImages() {
		imageReptileBody.src = './img/rept/rept_body.png';
		reptBigEye.src = './img/rept/rept_big_eye.png';
		reptEye.src = './img/rept/rept_eye.png';
		reptLegFront.src = './img/rept/rept_leg_front.png';
		reptLegBottom.src = './img/rept/rept_leg_bottom.png';
		reptUpperLeg.src = './img/rept/rept_leg_upper.png';

		cockBody.src = './img/cock/cock_body.png';
		cockScale.src = './img/cock/cock_scale.png';
		cockTale.src = './img/cock/cock_tale.png';
		cockTale2.src = './img/cock/cock_tale2.png';
		cockLegs.src = './img/cock/cock_legs.png';
		cockThroat.src = './img/cock/cock_throat.png';

		humBody.src = './img/human/hum_body.png';
		humHead.src = './img/human/hum_head.png';
		humSpike.src = './img/human/hum_spike.png';
		humFinger.src = './img/human/hum_finger.png';
		humTale.src = './img/human/hum_tale.png';
	}

	function getSelectValue(name) {
		var el = document.getElementById(name);
		return el.options[el.selectedIndex].value;
	}

