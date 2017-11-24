<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bookt</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        
        <link href="/css/app.css">
    </head>
    <body>
        <div id='app'>
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#/">
                        <transition name="fade" appear>
                            <img alt="Brand" src="/img/jp_logo2_white.png" id="brand-logo">
                        </transition>
                    </a>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="hvr-underline-from-center hvr-grow" href="#/">HOME</a></li>
                        <li><a class="hvr-underline-from-center hvr-grow" href="#/resume">RESUME</a></li>
                        <li><a class="hvr-underline-from-center hvr-grow" href="#/portfolio">PORTFOLIO</a></li>
                        <!-- <li><a href="#/contact">CONTACT</a></li> -->
                    </ul>
                    
                </div>
            </nav>
        </div>
        
        <script src="/js/app.js"></script>
    </body>
</html>
