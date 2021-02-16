<template>
    <div class="my-8 flex flex-col md:justify-center">
        <div>
            <h3 class="text-secondary-main text-lg  ">➔ Hey ,Tous le monde !</h3>
            <h1 class="text-primary-main  sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</h1>
            <div class="bg-primary-main text-background shadow-lg text-center rounded-sm ">
                <h1 class="font-bold md:text-3xl s:text-l  text-l ">Il y'a 2 facon de voir la vie Selon <b>albert einstein </b><br>"Toutes est un miracle ou rien n'est un miracle"</h1>
            </div>
        </div>
        <scene></scene>
        <div class="w-full my-2">
            <div class="text-label-info text-xl">
                Hello ! C'est Saoussene et J&rsquo;ai {{age}} ans et je suis une web développeuse basé à Boumerdes, Algéria, </br> spécialisé en Web développement curieuse et pleine d'énergie en train de fouiller dans le domaine de l'indiligence artificielle! </br> Et je suis ouverte à toute proposition .
            </div>
            <button class="text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" 
                onclick="location.href='mailto:toubalsaoussene@gmail.com'">
                Touche ici !
            </button>
            <a href="resume.pdf" download>
                <button class="ml-5 text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" >
                    Mon Cv
                </button>
            </a>
        </div>
    </div>
</template>

<script>
import scene from "@/components/scene.vue";
import { mapGetters } from "vuex";
export default {
    components: { scene },
    computed: { ...mapGetters(["profile", "projects", "age"]) }  
};
</script>
<style></style>
