<template >
  <div class="template">
    <div style="background-color: black;color: white; width: 100%;height: 75px;padding-left: 80px;">
        
            <div class="flex">
                <div>
                    <router-link class="logo" to="/">Spotify</router-link>
                </div>
            </div>
       
    </div>


    <div class="content">
        <div class="flex2">
        
           <div> <h1 class="text-center titre" >J'ai un compte Spotify</h1></div>
           <div class="text-center" style="margin-top: 50px;"><a id="btn5" href="">Continuer Avec Google</a></div>
           <div class="text-center" style="margin-top: 10px;"><a id="btn5" href="">Continuer Avec Facebook</a></div>
           <div class="text-center" style="margin-top: 10px;"><a id="btn5" href="">Continuer Avec Apple</a></div>
           <div class="text-center" style="margin-top: 10px;"><a id="btn5" href="">Continuer Avec un némero de télephone</a></div>
           
        </div>

        <div class="text-center" style="margin-top:50px ; display: flex;align-items: center;justify-content: center;">
            <div style="width: 80%; height: 0.5px;border: 0.5px solid rgb(187, 186, 186);"></div>
        </div>
        <div class="formulaire">
            <div>
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <label for="email" style="color: white;">Adresse e-mail ou nom d'utilisateur</label>
                    <input type="email" class="form-control" style="outline: none;" id="email" placeholder="Adresse e-mail ou nom d'utilisateur" name="email">
                </div>
                
            </div>
            <div style="margin-top: 15px;">
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <label for="email" style="color: white;">Mots de Passe</label>
                    <input type="email" class="form-control" style="outline: none;" id="email" placeholder="Mots de Passe" name="email">
                </div>
                
            </div>

            <div style="margin-top: 30px;"><a id="btn6" href="">Se Connecter</a></div>
            <div style="margin-top: 15px;"><a style="color: white; font-family: 'Geologica', sans-serif;" class="ob" href="">Mot de passe oublié ?</a></div>

            
        </div>

        <div class="text-center" style="margin-top:35px ; display: flex;align-items: center;justify-content: center;">
            <div style="width: 80%; height: 0.5px;border: 0.5px solid rgb(187, 186, 186);"></div>
        </div>

        <div  style="margin-top: 50px;font-family: 'Geologica', sans-serif;" class="text-center"><span class="Mahdi"></span>Vous n'avez pas de compte ? <span><a style="color: white; font-family: 'Geologica', sans-serif;" class="ob" href=""> Je n'ai pas Spotify ?</a></span></div>
    </div>

  </div>
  </template>

<script>
export default {
  name: 'ConnecterSection'
  
};
</script>

<style scoped>
  *
{
    margin: 0px;
    padding: 0px;
}
.template{
    background-color: #242424;
    padding-bottom:10px
}
.flex
{
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 100%;
 
}
.logo
{
    font-weight: 700;
    font-family: 'Geologica', sans-serif;
    font-size: 24px;
    color: white;

}
.content
{
    max-width: 650px;
    height: auto;
    margin: 20px auto;
    background-color: black;
    border-radius: 10px;
    padding-bottom: 40px;
}
.titre
{
    font-weight: bold;
    margin-top: 15px; 
    color: white;
    font-family: 'Geologica', sans-serif;
    padding-top: 35px;
}
#btn5 {
    background-color: black;
    color: white;
    width: 350px; /* Set a fixed width */
    height: 60px; /* Set a fixed height */
    font-weight: bold;
    border-radius: 25px;
    font-family: 'Noto Sans', sans-serif;
    margin: 10px;
    letter-spacing: 1px;
    border: 1px solid white;
    display: flex; /* Use flexbox */
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    margin: 0px auto;
}
a:hover{
text-decoration: none;
}

.formulaire
{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    
}
.formulaire input
    {
        background-color: black;
        border: 1px black solid;
        height: 40px;
        background-color: rgb(20, 20, 20);
        width: 300px;
        height: 40px;
        border-color: white;
        margin-bottom: 10px;
    }

    #btn6 {
        background-color: #0fb348;
        color: black;
        width: 350px; /* Set a fixed width */
        height: 50px; /* Set a fixed height */
        font-weight: bold;
        border-radius: 25px;
        font-family: 'Noto Sans', sans-serif;
        margin: 10px;
        letter-spacing: 1px;
        display: flex; /* Use flexbox */
        align-items: center; /* Center vertically */
        justify-content: center; /* Center horizontally */
        margin: 0px auto;
    }

    .ob:hover
    {
        text-decoration: underline;
    }
    .Mahdi
    {
        color: #242424 ; 
        font-family: 'Geologica', sans-serif;
    }
    input::placeholder {
    
        padding-left: 12px;
      }
  </style>
  