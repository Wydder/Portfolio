<!DOCTYPE html>
<html>
<head>
	<title>Wydder Portofolio</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Orbitron:400,500,700,900" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="index.css">
	<link rel="icon" href="logo/logo_black.png">
</head>
<body>
	<div class="topBar">
		<a href="#certificate" id="btnLogo" class="logo logoButton">
			Bogdan Mosica
			</br>
			Web Developer

		</a>
		<div id="menuButtons" class="menuButton">
			<a href="#contact" id="btnContact" class="tabButton">CONTACT</a>
			<a href="#projects" id="btnProjects" class="tabButton">PROJECTS</a>
			<a href="#home" id="btnHome" class="tabButton">HOME</a>
			<button id="menuButtonOpen" class="mobButton hide"><span class="glyphicon glyphicon-align-right"></span></button>
			<div class="dropdown-content hide" id="dropdown">
				<a href="#home" id="btnHomeDrop" class="dropButton"><i class="fa fa-home" aria-hidden="true"></i> HOME</a>
				<a href="#projects" id="btnProjectsDrop" class="dropButton"><i class="fa fa-graduation-cap" aria-hidden="true"></i> PROJECTS</a>
				<a href="#contact" id="btnContactDrop" class="dropButton"><i class="fa fa-phone" aria-hidden="true"></i> CONTACT</a>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="container">
			<div id="certificate" class="tabContent hide">
				<h1 class="certificateHead">CERTIFICATE</h1>
				<div class="soloLearn">
					<div id="htmlBox" class="imgBox col-lg-3 col-md-3 cold-sm-12 col-xs-12 ">
						<div id="htmlImage" class="imagesBox">

						</div>
						<button id="btnHtml">Certificat Solo Learn HTML</button>
					</div>
					<div id="cssBox" class="imgBox col-lg-3 col-md-3 cold-sm-12 col-xs-12 ">
						<div id="cssImage" class="imagesBox">

						</div>
						<button id="btnCss">Certificat Solo Learn CSS</button>
					</div>
					<div id="JavascriptBox" class="imgBox col-lg-3 col-md-3 cold-sm-12 col-xs-12 ">
						<div id="javaScriptImage" class="imagesBox">

						</div>
						<button id="btnJavaScript">Certificat Solo Learn JavaScript</button>
					</div>
					<div id="jqueryBox" class="imgBox col-lg-3 col-md-3 cold-sm-12 col-xs-12 ">
						<div id="jqueryImage" class="imagesBox">

						</div>
						<button id="btnJquerry">Certificat Solo Learn JQUERY</button>
					</div>
				</div>
				<h1 class="progressHead">PROGRESS</h1>
				<div class="progress">
					<p>HTML - 50%</p>
				  	<div class="progress-bar barHtml">

				  	</div>
				  	<p>CSS - 40%</p>
				  	<div class="progress-bar barCss">

				  	</div>
				  	<p>JavaScript - 30%</p>
				  	<div class="progress-bar barJavaScript">

				  	</div>
				  	<p>Jquery - 10%</p>
				  	<div class="progress-bar barJquery">

				  	</div>
				</div>
			</div>
			<div id="home" class="tabContent">
				<h1 class="titleHome">Website cu personalitate</h1>
				<img class="profilePic img-responsive" src="https://scontent.fotp3-2.fna.fbcdn.net/v/t1.0-9/16142347_1660558760624763_304386066460980959_n.jpg?oh=aea5bcba3c610804cf98ac7905c78673&oe=5A37FEDB">
				<div class="infoBox">
					<p class="infoText">Ma numesc Bogdan, sunt din Romania, orasul Bacau, dar locuiesc in Iasi. Imi place sa creez orice fel de site incepand cu cele de prezentare pana la aplicatii online interactive. Daca sunteti o firma care doriti prezenta online sau cautati un programator pentru a-l angaja, nu ezitati sa ma contactati.</p>
					<a class="site" href="#">Doresc site<span class="glyphicon glyphicon-triangle-right"></span></a>
					<a class="angajare" href="#">Caut sa angajez<span class="glyphicon glyphicon-triangle-right"></span></a>
				</div>
			</div>
			<div id="projects" class="tabContent hide">
				<h1>PROJECTS</h1>
				<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  					<!-- Indicators -->
					<ol class="carousel-indicators">
					 	<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					 	<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
					</ol>

					<!-- Wrapper for slides -->
					<div class="carousel-inner" role="listbox">
					 	<div class="item active">
					  	<a href="Tribute Page/tributepage.html" target="_blank"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
					  	<img src="Tribute Page/homepage.jpg" alt="Tribute Page">
					   	<div class="carousel-caption">
					        Pagina tribut in amintirea primului programator
					   	</div>
					 	</div>
					 	<div class="item">
					 	<a href="Tribute Page/tributepage.html" target="_blank"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
					   	<img src="Tribute Page/homepage.jpg" alt="Tribute Page">
					   	<div class="carousel-caption">
					        Pagina tribut in amintirea primului programator
					   	</div>
					 	</div>
					 	<div class="item">
					 	<a href="Tribute Page/tributepage.html" target="_blank"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
					   	<img src="Tribute Page/homepage.jpg" alt="Tribute Page">
					   	<div class="carousel-caption">
					        Pagina tribut in amintirea primului programator
					   	</div>
					 	</div>
					</div>
					  <!-- Controls -->
					<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					 	<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					 	<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					 	<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					 	<span class="sr-only">Next</span>
					</a>
			</div>
			</div>
			<div id="contact" class="tabContent hide">
				<section id="contactForm" class="content-section text-center">
			        <div class="contact-section">
			            <div class="container">
			              <h2>Contact</h2>
			              <p>Ti-a placut site-ul vizitat? Da-mi un mesaj si spune-mi ce ti-a placut cel mai mult!</p>
			              <p>Daca nu ti-a placut ti-a placut site-ul vizitat, da-mi un mesaj si spune-mi ce nu ti-a placut!</p>
			              <div class="row">
			                <div class="col-md-8 col-md-offset-2">
			                  <form method="post" action="contact.php" class="form-horizontal">
			                    <div class="form-group">
			                      <label for="exampleInputName2">Name</label>
			                      <input type="text" class="form-control" id="exampleInputName2" name="name" placeholder="Jane Doe" required>
			                    </div>
			                    <div class="form-group">
			                      <label for="exampleInputEmail2">Email</label>
			                      <input type="email" class="form-control" id="exampleInputEmail2" name="email" placeholder="jane.doe@example.com" required>
			                    </div>
			                    <div class="form-group ">
			                      <label for="exampleInputText">Your Message</label>
			                     <textarea  class="form-control" placeholder="Description" name="message" required></textarea>
			                    </div>
			                    <button type="submit" name="submit" class="btn btn-default">Send Message</button>
			                  </form>

			                  <hr>
			                    <h3>Social Media</h3>
			                  <ul class="list-inline banner-social-buttons">
			                    <li><a href="https://github.com/Wydder" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
			                    <li><a href="https://codepen.io/Wydder/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i></a></li>
			                    <li><a href="https://www.linkedin.com/in/mosica-bogdan-06098619/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
			                    <li><a href="https://www.facebook.com/bogdan.mosica" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
			                    <li><a href="https://plus.google.com/+BogdanMosica" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
			                    <li><a href="https://twitter.com/Bmosica?lang=en" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
			                    <li><a href="http://steamcommunity.com/profiles/76561198017080184" target="_blank"><i class="fa fa-steam-square" aria-hidden="true"></i></a></li>
			                    <li><a href="https://www.youtube.com/channel/UCwryht7P1F6n0xZY_AazUmA" target="_blank"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			        </div>
			    </section>
			</div>
		</div>
	</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="index.js"></script>
</body>
</html>
