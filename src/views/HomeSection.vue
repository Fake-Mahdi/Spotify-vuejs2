<template>
  <div class="template">
 <div class="container-fluid">
        <div class="row">
            <div style="padding: 0px;" class="col-lg-3 col-md-4 col-xs-12 col-sm-12">
                <div style="background-color: #121212;padding: 4px 12px;margin-top: 10px;border-radius: 15px;margin-bottom: 10px;" >
                    <ul style="margin: 15px;">
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Recherche</a></li>
                    </ul>
                </div>
                <div style="background-color: #121212;padding: 10px;margin-top: 10px;border-radius: 15px;margin-bottom: 10px; ">
                    <div class="flex">
                        <div><h4 style="font-family: 'Noto Sans', sans-serif;">Bibliothéque</h4></div>
                        <div id="plus">+</div>
                    </div>
                    <div class="content" style="height: 200px; overflow: hidden; overflow-y: scroll;">
                        <div style="background-color: #242424;padding: 10px; border-radius: 10px;">
                            <div class="text-left" style="color: white;font-weight: 700; font-size: 15px;margin-bottom: 10px;font-family: 'Noto Sans', sans-serif;">Créez Votre prémiere Playlist</div>
                            <div class="text-left" style="color: white;font-size: 14px;font-family: 'Noto Sans', sans-serif;margin-bottom: 12px;">C'est simple, nous allons vous aidez</div>
                            <div class="text-left" style="margin-bottom: 15px;margin-top: 25px;" ><a id="btn" href="">Créer une playlist</a></div>
                        </div>
    
                        <div style="background-color: #242424;padding: 10px; border-radius: 10px;margin-top: 12px;">
                            <div class="text-left" style="color: white;font-weight: 700; font-size: 15px;margin-bottom: 10px;font-family: 'Noto Sans', sans-serif;">Cherchons quelques podcast aux quels vous abonner</div>
                            <div class="text-left" style="color: white;font-size: 14px;font-family: 'Noto Sans', sans-serif;margin-bottom: 12px;">Nous Vous transmettrons des information sur les episodes</div>
                            <div class="text-left" style="margin-bottom: 15px;margin-top: 25px;" ><a id="btn" href="">Parcourir les Prodcast</a></div>
                        </div>
                    </div>

                    <div style="margin-top: 45px; font-family: 'Noto Sans', sans-serif;font-size: 14px;padding: 10px;"><a style="font-family: 'Noto Sans', sans-serif;font-size: 10px;color:#b3b3b3" href="cookies">Cookies</a></div>
                    <div style="margin-top: 25px; margin-bottom: 20px;"><a id="btn5" href="">francais</a></div>
                </div>

            </div>

            <div style="padding: 10px;" class="col-lg-9 col-md-8 col-xs-12 col-sm-12">
                <div  class="flex2">
                    <div class="flexy">
                        <div class="change">&lt;</div>
                        <div class="change">&gt;</div>
                    </div>
                    <div class="flexe">
                        <div><router-link id="btn2" to="/SignSection">S'inscrire</router-link></div>
                        <div><router-link id="btn" to="/ConnecterSection">Se Connecter</router-link></div>
                    </div>
                </div>
                <div style="background-color: #121212;padding: 12px;border-radius: 15px;">
                    <div class="flex4">
                        <div class="text-left">
                            <h3 style="color: white;font-weight: bold;">Playlists Soptify</h3>
                        </div>
                        <div>
                            <a style="color: #b3b3b3;font-family: 'Noto Sans', sans-serif;font-size: 15px;" href="">Tout afficher</a>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px;">
                        <div class="row" style="margin: 10px;">
                          <!-- First card -->
                          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" style="background-color: rgb(10 9 9);padding: 15px;border-radius: 15px;">
                              <div class="image-container">
                                <img src="ALBUMS/wallpaperflare.com_wallpaper (9).jpg" alt="Image" class="centered-image img-rounded">
                              </div>
                              <p class="text-left text">Travis Scott is on top</p>
                              <p class="text2">Travis is one of the top hottest 50 celbreties</p>
                            </div>
                          </div>
                      
                          <!-- Second card -->
                          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" style="background-color: rgb(10 9 9);padding: 15px;border-radius: 15px;">
                              <div class="image-container">
                                <img src="ALBUMS/wallpaperflare.com_wallpaper (10).jpg" alt="Image" class="centered-image img-rounded">
                              </div>
                              <p class="text-left text">RapCaviar</p>
                              <p class="text2">Music from arianna grande, Selena Gomez And Nikki</p>
                            </div>
                          </div>
                      
                          <!-- Third card -->
                          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" style="background-color: rgb(10 9 9);padding: 15px;border-radius: 15px;">
                              <div class="image-container">
                                <img src="ALBUMS/wallpaperflare.com_wallpaper (11).jpg" alt="Image" class="centered-image img-rounded">
                              </div>
                              <p class="text-left text">Travis Scott is on top</p>
                              <p class="text2">Rock Rap And Many More Legendary Music Are </p>
                            </div>
                          </div>
                      
                          <!-- Fourth card -->
                          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" style="background-color: rgb(10 9 9);padding: 15px;border-radius: 15px;">
                              <div class="image-container">
                                <img src="ALBUMS/wallpaperflare.com_wallpaper (12).jpg" alt="Image" class="centered-image img-rounded">
                              </div>
                              <p class="text-left text">All out 2010S</p>
                              <p class="text2">Rhis Biggest Songs Of 2010s</p><br>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                </div>
            </div>
            
        </div>

    </div>
    <footer>
        <div class="flexeble">
            <div>

                <div style="color: white;font-size: 13px;font-family: 'Noto Sans', sans-serif;letter-spacing: 1px;">Extrait Sur Spotify</div>
                <div style="color: white;font-size: 13px;font-family: 'Noto Sans', sans-serif;letter-spacing: 1px;">Inscrivez-vous pour écouter titres et podcasts en illimité, avec quelques coupures pubs. Pas besoin de carte de crédit.</div>
            
            </div>
            <div>
                <div><a id="btn3" href="">S'inscrire</a></div>
            </div>
        </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeSection'
  
};
</script>

<style scoped>

*
{
    margin: 0px;
    padding: 0px;
}


.template {
    background-color: black;
}
ul{
    list-style: none;
    
}
ul li
{
    padding-bottom: 10px;

}
ul li a
{
    font-size: 17px;
    font-weight: 700;
    -webkit-tap-highlight-color: transparent;
    color: #b3b3b3;
    font-family: 'Noto Sans', sans-serif;
}
ul li a:hover{
color: #b3b3b3;
text-decoration: none;
}
.flex
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.flex h4{
    color: #b3b3b3;
    font-weight: 700;
    -webkit-tap-highlight-color: transparent;
}
#plus
{
    font-size: 25px;
    color: #b3b3b3;
    -webkit-tap-highlight-color: transparent;
}
#btn
{
    background-color: white;
    color: black;
    padding: 12px;
    font-weight: bold;
    border-radius: 20px;
    font-family: 'Noto Sans', sans-serif;
    margin: 10px;
    letter-spacing: 1px;
}
a:hover{
    text-decoration: none;
}
.content {
    /* Set the desired height to enable scrolling */
    height: 300px;
    /* Add some content and overflow-y to enable scrolling */
    overflow-y: scroll;
    /* Apply custom scrollbar styling */
    scrollbar-width: thin; /* "thin" for a thinner scrollbar or "auto" to keep the default width */
    scrollbar-color: transparent transparent; /* Change the thumb and track colors to transparent */
  }
  
  /* Custom scrollbar style */
  .content::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
  }
  
  .content::-webkit-scrollbar-thumb {
    background-color: transparent; /* Make the thumb transparent */
  }
  
  .content::-webkit-scrollbar-track {
    background-color: transparent; /* Make the track transparent */
  }

  .flex2
  {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    background-color: #080808;
    width: 100%;
    height: 60px;
    margin-top: 15px;
    border-radius: 10px;
  }
  #btn2
{
    background-color: #242424;
    color: #b3b3b3;
    padding: 12px;
    font-weight: bold;
    border-radius: 15px;
    font-family: 'Noto Sans', sans-serif;
    margin: 10px;
    letter-spacing: 1px;
}
.flexe
{
    display: flex;
    justify-content: center;
    
}

.flexy
{
    display: flex;
    justify-content: center;
    margin-left: 15px;
    
}
.change {
    color: white;
    width: 30px;
    height: 30px;
    border: 1px solid none;
    background-color: black;
    margin: 3px;
    font-size: 20px;
    border-radius: 50%; /* This makes the border circular */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Noto Sans', sans-serif;
    /* Add other styling for the .change elements if needed */
  }
  .flex4
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image-container {
    position: relative;
    width: 100%;
    padding-top: 105%; /* This is the aspect ratio, height (250px) / width (100%). Adjust as needed. */
    overflow: hidden;
  }
  
  .centered-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9
  {
    padding: 5px;
  }
  .text
  {
    margin-top: 15px ;
    font-size: 18px;
    color: white;
    font-weight: bold;
    font-family: 'Noto Sans', sans-serif;
    
  }
  .text2
  {
    color: #b3b3b3;
    font-family: 'Noto Sans', sans-serif;
  }
  footer{
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    
    width: 100%;
    padding: 10px;
    margin-top:10px
  }
  .flexeble
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #btn3
{
    background-color: white;
    color: black;
    padding: 12px;
    font-weight: bold;
    border-radius: 20px;
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 0px;
    font-size: 13px;
    font-weight: bolder;
}
@media screen and (max-width : 768px) {
    footer{
        height: auto;
        padding-bottom: 5px;
    }
}
#btn5
{
    background-color: #121212;
    color: white;
    padding: 10px 15px 10px 15px;
    font-weight: bold;
    border-radius: 25px;
    font-family: 'Noto Sans', sans-serif;
    margin: 10px;
    letter-spacing: 1px;
    border: 1px solid white;
   
}
</style>