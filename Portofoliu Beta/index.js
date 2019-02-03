// Variabile
	var tabContent = document.getElementsByClassName('tabContent');
	var tabButton = document.getElementsByClassName('tabButton');
	var btnHome = document.getElementById('btnHome');
	var btnProjects = document.getElementById('btnProjects');
	var btnContact = document.getElementById('btnContact');
	var home = document.getElementById('home');
	var projects = document.getElementById('projects');
	var contact = document.getElementById('contact');
	var logo = document.getElementById('btnLogo');
	var certificate = document.getElementById('certificate');
	var htmlBox = document.getElementById('htmlBox');
	var cssBox = document.getElementById('cssBox');
	var JavascriptBox = document.getElementById('JavascriptBox');
	var jqueryBox = document.getElementById('jqueryBox');
	var btnHtml = document.getElementById('btnHtml');
	var btnCss = document.getElementById('btnCss');
	var btnJavaScript = document.getElementById('btnJavaScript');
	var btnJquerry = document.getElementById('btnJquerry');
	var hoverImageHtml = document.getElementsByClassName('hover_image_html')[0];
	var hoverImageCss = document.getElementsByClassName('hover_image_css')[0];
	var hoverImageJavaScript = document.getElementsByClassName('hover_image_javascript')[0];
	var hoverImageJquery = document.getElementsByClassName('hover_image_jquery')[0];
	var imgBox = document.getElementsByClassName('imgBox');
	var imgHtml = document.getElementById('imgHtml');
	var imgCss = document.getElementById('imgCss');
	var imgJavaScript = document.getElementById('imgJavaScript');
	var imgJquery = document.getElementById('imgJquery');
	var imagesHtml = document.getElementById('htmlImage');
	var imagesCss = document.getElementById('cssImage');
	var imagesJavaScript = document.getElementById('javaScriptImage');
	var imagesJquery = document.getElementById('jqueryImage');
	var menuButton = document.getElementsByClassName('mobButton')[0];
	var btnMenuOpen = document.getElementById('menuButtonOpen'); 
	var screenMedia = parseInt(window.innerWidth);
	var menu = document.getElementsByClassName('tabButton');
	var dropContact = document.getElementById('btnContactDrop');
	var dropHome = document.getElementById('btnHomeDrop');
	var dropProjects = document.getElementById('btnProjectsDrop');
	var dropdown = document.getElementById('dropdown');
	var body = document.body;

(function() {
	
	

// Buton Menu

	
	if (screenMedia < 990) 	{
				btnContact.classList.add('hide')
				btnProjects.classList.add('hide');
				btnHome.classList.add('hide');
				menuButton.classList.add('unhide')
				menuButton.classList.remove('hide');
			} else {
				btnContact.classList.remove('hide')
				btnProjects.classList.remove('hide');
				btnHome.classList.remove('hide');
				menuButton.classList.remove('unhide')
				menuButton.classList.add('hide');
			};

	// body.removeEventListener('click' , function(){
	// 	if (dropdown.classList.contains('hide')) {
	// 		dropdown.classList.remove('hide');
	// 		dropdown.classList.add('unhide');
	// 	} else if(dropdown.classList.contains('unhide')) {
	// 		dropdown.classList.remove('unhide');
	// 		dropdown.classList.add('hide');			
	// 	};


	// });

	btnMenuOpen.addEventListener('click' , function(){
		if (dropdown.classList.contains('hide')) {
			dropdown.classList.remove('hide');
			dropdown.classList.add('unhide');
		} else if(dropdown.classList.contains('unhide')) {
			dropdown.classList.remove('unhide');
			dropdown.classList.add('hide');			
		};

	// 	body.addEventListener('click' , function(){ console.log(body)	
	// 	if(dropdown.classList.contains('unhide')) {	
	// 		dropdown.classList.remove('unhide');
	// 		dropdown.classList.add('hide');				
	// 	};		
	// });

	});


	
	

	



// Butoane PC

	btnLogo.addEventListener('click' , function(){
		certificate.classList.remove('hide');
		certificate.classList.add('unhide');
		home.classList.add('hide');
		contact.classList.add('hide');
		projects.classList.add('hide');
	});

	btnHome.addEventListener('click' , function(){
		home.classList.remove('hide');
		home.classList.add('unhide');
		contact.classList.add('hide');
		projects.classList.add('hide');
		certificate.classList.add('hide');

	});

	btnProjects.addEventListener('click' , function(){
		projects.classList.remove('hide');
		projects.classList.add('unhide');
		home.classList.add('hide');
		contact.classList.add('hide');
		certificate.classList.add('hide');		
	});

	btnContact.addEventListener('click' , function(){
		contact.classList.remove('hide');
		contact.classList.add('unhide');
		home.classList.add('hide');
		projects.classList.add('hide');	
		certificate.classList.add('hide');		
	});

	// Butoane Mobil

	
	dropHome.addEventListener('click' , function(){
		home.classList.remove('hide');
		home.classList.add('unhide');
		contact.classList.add('hide');
		projects.classList.add('hide');
		certificate.classList.add('hide');
		dropdown.classList.add('hide');		
	});

	dropProjects.addEventListener('click' , function(){
		projects.classList.remove('hide');
		projects.classList.add('unhide');
		home.classList.add('hide');
		contact.classList.add('hide');
		certificate.classList.add('hide');
		dropdown.classList.add('hide');		
	});

	dropContact.addEventListener('click' , function(){
		contact.classList.remove('hide');
		contact.classList.add('unhide');
		home.classList.add('hide');
		projects.classList.add('hide');	
		certificate.classList.add('hide');
		dropdown.classList.add('hide');		
	});


	btnHtml.addEventListener('click' , function(){
		window.location.assign = window.open('https://www.sololearn.com/Certificate/1014-4926738/pdf/' , '_newtab');		
	});
	btnCss.addEventListener('click' , function(){
		window.location.assign = window.open('https://www.sololearn.com/Certificate/1023-4926738/pdf/' , '_newtab');		
	});
	btnJavaScript.addEventListener('click' , function(){
		window.location.assign = window.open('https://www.sololearn.com/Certificate/1024-4926738/pdf/' , '_newtab');		
	});
	btnJquerry.addEventListener('click' , function(){
		window.location.assign = window.open('https://www.sololearn.com/Certificate/1082-4926738/pdf/' , '_newtab');		
	});



// // HTML
// 	imagesHtml.addEventListener('mouseenter' , function(){
// 		hoverImageHtml.classList.remove('hide');
// 		imgHtml.classList.add('hide');
// 	});	
// 	imagesHtml.addEventListener('mouseleave' , function(){
// 		hoverImageHtml.classList.add('hide');
// 		imgHtml.classList.remove('hide');
// 	});

// // CSS
// 	imagesCss.addEventListener('mouseenter' , function(){
// 		hoverImageCss.classList.remove('hide');
// 		imgCss.classList.add('hide');
// 	});	
// 	imagesCss.addEventListener('mouseleave' , function(){
// 		hoverImageCss.classList.add('hide');
// 		imgCss.classList.remove('hide');
// 	});

// // JavaScript
// 	imagesJavaScript.addEventListener('mouseenter' , function(){
// 		hoverImageJavaScript.classList.remove('hide');
// 		imgJavaScript.classList.add('hide');
// 	});	
// 	imagesJavaScript.addEventListener('mouseleave' , function(){
// 		hoverImageJavaScript.classList.add('hide');
// 		imgJavaScript.classList.remove('hide');
// 	});

// // JQUERY
// 	imagesJquery.addEventListener('mouseenter' , function(){
// 		hoverImageJquery.classList.remove('hide');
// 		imgJquery.classList.add('hide');
// 	});	
// 	imagesJquery.addEventListener('mouseleave' , function(){
// 		hoverImageJquery.classList.add('hide');
// 		imgJquery.classList.remove('hide');
// 	});



}

)();



window.onresize = function() {
	var screenMedia = parseInt(window.innerWidth);
    if (screenMedia < 900) 	{
				btnContact.classList.add('hide')
				btnProjects.classList.add('hide');
				btnHome.classList.add('hide');
				menuButton.classList.add('unhide')
				menuButton.classList.remove('hide');
			} else {
				btnContact.classList.remove('hide')
				btnProjects.classList.remove('hide');
				btnHome.classList.remove('hide');
				menuButton.classList.remove('unhide')
				menuButton.classList.add('hide');
			};
	};

