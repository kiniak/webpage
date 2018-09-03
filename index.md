<!doctype html>
<html lang="pl">
  <head>
    <link rel="stylesheet" type="text/css" href="reset.css">
     <meta charset="UTF-8">
    <meta name="description" content="strona www pilar">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WebKin</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="shortcut icon" href="favicon.ico" type="image/png">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300 400,500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Raleway:400,600,700" rel="stylesheet">
    <script src="https://use.fontawesome.com/24003c6049.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">

  </head>
  <body>

    <div class="start" id="start">
      <header>

        <img src="jpg/logo.jpg" alt="logo"/>
        <div class="menuHamburger">
          <i class="fas fa-bars"></i>
        </div>
        <nav>
          <ul id="nav">
            <li><a href="#start">strona główna</a></li>
            <li><a href="#aboutMe">o mnie</a></li>
            <li><a href="#skills">umiejętności</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">kontakt</a></li>
          </ul>
        </nav>

      </header>
      <div>
        <div class="navSmallScreen">
          <ul>
            <li><a href="#start">strona główna</a></li>
            <li><a href="#aboutMe">o mnie</a></li>
            <li><a href="#skills">umiejętności</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">kontakt</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="job">
          <h1>Kinga Głowacka</h1>
          <h2 id="target"></h2>
          <button type="button" class="contactMe" data-link='#contact'>kontakt</button>
        </div>
      </div>
      <div class="ButtonDown">
        <div class="scrollDownButton">
            <a href="#aboutMe"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>

    <div class="containerFullScreen" style="position:relative;margin-top: -5rem;">
      <div class="container">
        <section id="aboutMe">
          <div class="information">
            <h2>kinga głowacka <span>front end Developer</span></h2>
            <p>Nazywam się Kinga Głowacka mieszkam w Szczecinie. Dziewięć miesięcy temu zaczęłam niesamowitą przygodę z programowaniem. Od tego czasu moja praca przerodziła się w pasję. Interesują mnie najnowsze technologie oraz trendy w programowaniu. Dążę do tego, żeby mój kod był czysty, przejrzysty oraz zgodny ze wzorcami projektowymi. Dla mnie programowanie ma coś z magii, tylko zamiast różdżki mam klawiaturę.</p>
            <p>Jestem osobą rzetelną, pracowitą lubiącą nowe wyzwania. Postępuje zgodnie z zasadą "codziennie naucz się coś nowego", co pozwala mi z dnia na dzień być coraz lepszą w tym co robie. Koncentruję się na rozwijaniu umiejętności, które pozwalają na wykonywanie projektów szybko i efektywnie. </p>
            <p>Prywatnie lubię poznawać nowych ludzi, żartować, oraz od czasu do czasu poeksperymentować w kuchni.</p>
            <p>Obecnie szukam zatrudnienia na stałe lub zdalnie w zależności od potrzeb klienta. Więcej infornacji o mnie:</p>
            <div class="codepenLink">
              <a href="https://codepen.io/kiniak1/">
                <img class="codepen links" src="jpg/codepen.png" alt="logo codepen">
                <img class="codepenWhite linksMouse" src="jpg/codepenWhite.png" alt="logo codepen">
              </a>
            </div>
            <div class="linkedinLink">
            <a href="https://www.linkedin.com/in/kinga-g%C5%82owacka-547343151/">
              <img class="linkedin links" src="jpg/linkedin.png" alt="logo linkedin">
              <img class="linkedinWhite linksMouse" src="jpg/linkedinWhite.png" alt="logo linkedin">
            </a>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </section>
      </div>
    </div>

<!--skills-->

  <section class="skills" id="skills">
    <h2>Umiejętności</h2>
    <div class="container">
      <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/html.png" alt="html icon">
              <h3>HTML5</h3>
            </div>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/css.png" alt="css icon">
              <h3>CSS3</h3>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/js.png" alt="js icon">
              <h3>Java Script</h3>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/jq.png" alt="jq icons">
              <h3>jQuery</h3>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
            <img src="PNG/bootstrap.png" alt="bootstrap icon">
            <h3>Bootstrap</h3>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/sass.png" alt="sass icon">
              <h3>Sass</h3>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/rwd.png" alt="rwd icon">
              <h3>RWD</h3>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div class="mySkills">
              <img src="PNG/Vue.js_Logo.svg.png" alt="vue.js icon">
              <h3>Vue.js</h3>
            </div>
          </div>

      </div>
    </div>
  </section>



<!--portfolio-->
  <div class="containerFullScreen">
      <section id="portfolio">
        <div class="container">
              <h2>Portfolio</h2>
          <div class="row">
              <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div class="acordion hvr-sweep-to-top">
                  <div class="acordionText">
                    <a href="https://codepen.io/kiniak1/pen/vagzqJ/">acordion</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                  <div class="clock hvr-sweep-to-top">
                    <div class="clockText"><a href="https://codepen.io/kiniak1/full/WzVLgQ/">clock</a></div>
                  </div>
              </div>
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                  <div class="scrollNumbers hvr-sweep-to-top">
                    <div class="scrollNumbersText"><a href="https://codepen.io/kiniak1/full/WzVLgQ/">scroll counter project</a></div>
                  </div>
                </div>
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div class="rating hvr-sweep-to-top">
                      <div class="ratingText"><a href="https://codepen.io/kiniak1/pen/gGVmbL">acordion</a></div>
                    </div>
                </div>
          </div>
        </div>
      </section>
    </div>
  <!--contact-->
    <section id="contact" >
      <h2>Kontakt</h2>
      <div class="container">
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div class="myForm">
                <form action="#" id="myForm">
                  <input class="textforclient" type="text" name="name" placeholder="Imię" required>
                  <input class="textforclient" type="text" name="subject" placeholder="Temat" required>
                  <input class="textforclient" type="email" name="email" placeholder="Adres email" required>
                  <textarea class="textforclient" type="text" name="yoyr-message" placeholder="treść wiadomości" required></textarea>
                  <input class="send" type="submit" value="wyślij">
                </form>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
              <div class="myContact ">
                <p>zawsze jestem zainteresowana ciekawymi projektami oraz propozycją współpracy.
                  Zapraszam do przesłania wiadomości poprzez formularz kontaktowy bądź skorzystania z bezpośredniego adresu mailowego lub telefonu
                </p>
                <h3>Kinga Głowacka</h3>
                <h4>Front End Developer</h4>
                <a href="tel:500-840-133"><i class="fas fa-phone-square"></i> 500-840-133</a>
              </div>
            </div>
        </div>
      </div>
  </section>
    <footer>
      <p>by Kinga Głowacka © 2017 / All Rights Reserved</p>
    </footer>

    <script src="scripts.js"></script>
    <script src="jquery-nav.js"></script>


  </body>
</html>