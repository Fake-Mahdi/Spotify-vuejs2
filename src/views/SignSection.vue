<template >
  <div class="template">
    
    <div style="background-color: #181818;color: white;width: 100%;height: 90px;padding-left: 60px;">
        <div class="flex">
            <div>
                 <router-link class="logo" to="/">Spotify</router-link>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="text-left" style="width: 85%; height: auto;padding-left: 15px;color: white;font-family: 'Geologica', sans-serif;"><p style="font-weight: bold;font-size: 35px;">Inscrivez-vous pour commencer à écouter</p></div>
        <div class="formulaire">
            <div>
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <label for="email" style="color: white;">Adresse e-mail</label>
                    <input type="email" class="form-control" style="outline: none;" id="email" placeholder="Adresse e-mail ou nom d'utilisateur" name="email">
                    <div><a style="color: #0fb348; font-family: 'Geologica', sans-serif;text-decoration: underline;" class="ob" href="">Utilisez plutôt un numéro de téléphone.</a></div>
                </div>
            </div>
            <div style="margin-top: 30px;"><a id="btn6" href="">Suivant</a></div>

            <div class="text-center" style="color: white; margin-top: 5px;margin-bottom: 5px;"><p style="font-family: 'Geologica', sans-serif">ou</p></div>
            <div style="width: 100%; height: 0.5px;border: 0.5px solid rgb(187, 186, 186);"></div>

            <div class="flex2">
                <div class="text-center" style="margin-top: 20px;"><a id="btn5" href="">Continuer Avec Google</a></div>
                <div class="text-center" style="margin-top: 10px;"><a id="btn5" href="">Continuer Avec Facebook</a></div>
             </div>

             <div style="width: 100%; height: 0.5px;border: 0.5px solid rgb(187, 186, 186);"></div>
        </div>
        <div class="text-center" style="margin-top: 5px;"><p style="font-family: 'Geologica', sans-serif;color: white;"><span style="font-family: 'Geologica', sans-serif">Vous avez déjà un compte ?</span><span style="text-decoration: underline;"> Connectez-vous ici.</span></p></div>
    </div>

  </div>
  </template>

  <script>
export default {
  name: 'SignSection'
  
};
</script>
<style scoped>
*
{
    margin: 0px;
    padding: 0px;
}
.template{
    background-color: #181818;
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
    max-width: 350px;
    height: auto;
    margin: 20px auto;
    background-color: #181818;
    border-radius: 10px;
    padding-bottom: 40px;
    padding: 10px;
}
.formulaire
{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;
    
}
.formulaire input {
    background-color: #181818;
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
    width: 300px; /* Set a fixed width */
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
#btn5 {
    background-color: #181818;
    color: white;
    width: 300px;
    height: 49px;
    font-weight: bold;
    border-radius: 25px;
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 1px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
}
.flex2
{
    margin-bottom: 15px;
}
input::placeholder {
    
        padding-left: 12px;
      }
</style>