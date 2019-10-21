<template>
    <div class="row">
        <div class="col-md-12 text-center">
            <app-title category="agence"></app-title>
        </div>
        <div class="col-md-12" v-if="device ==='mobile'">
            <image-bulb class="text-center"></image-bulb>
        </div>
        <div class="col-md-12">
            <image-bulb class="float-left" v-if="device ==='pc'"></image-bulb>
            <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dui non augue tempus interdum non quis felis. Ut facilisis tellus dui, in vulputate orci pulvinar vitae. Nam dictum, mi sed semper vulputate, risus ex egestas eros, dictum gravida nunc ipsum a orci. Nunc scelerisque velit ut odio pellentesque ornare. Quisque condimentum tincidunt condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit in augue nec malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae tortor nec eros vehicula tempor sed sit amet quam. Phasellus orci tellus, sollicitudin a varius at, tincidunt eget nisi.
            </p>
            <p class="text-justify">
                Pellentesque luctus metus viverra, maximus sapien nec, feugiat nisl. Mauris vel pharetra ipsum. Etiam vitae eleifend metus. In scelerisque nunc et libero imperdiet maximus. Maecenas ut malesuada nulla. Sed sed nulla est. Phasellus vel pharetra ante, ut sollicitudin tellus. Cras commodo ante vel dui tincidunt pretium. Aenean aliquet ligula nunc, quis cursus diam lobortis ac. Nullam quam dui, cursus id elit id, rutrum consequat odio. Ut porttitor neque nec leo rhoncus, in pulvinar turpis posuere.             
            </p>
            <p class="text-justify">
                Morbi sed metus in risus eleifend bibendum. Nunc ultricies purus quis facilisis vulputate. Aliquam eu est vitae mi cursus scelerisque vitae sed ligula. Vestibulum maximus semper lectus eget cursus. Vestibulum rhoncus euismod interdum. Duis nec turpis tellus. Donec commodo eros eu lectus malesuada eleifend. Proin quis volutpat erat. Donec dui sapien, imperdiet id tristique non, rhoncus vel metus. Vestibulum sodales maximus vestibulum.            
            </p>
            <p class="text-justify">
                Nunc hendrerit massa ac ligula ultricies, vel pretium sapien ultricies. Nulla placerat velit eget augue dignissim, eu sollicitudin tellus aliquet. Donec hendrerit, magna at imperdiet tincidunt, ipsum augue fringilla eros, eget condimentum nibh ipsum accumsan metus. Aliquam facilisis diam tincidunt, euismod lorem et, blandit erat. Maecenas nec nibh sodales, efficitur ante at, condimentum ipsum. Curabitur gravida ligula vitae tellus pretium consectetur. Pellentesque accumsan tortor vitae lectus feugiat faucibus. Nunc euismod mattis urna, ut dignissim mi tempor id. Quisque et purus a nulla gravida dictum.            
            </p>
            <p class="text-justify">
                Nunc ut convallis mauris. Nam semper augue in ante cursus rhoncus. Pellentesque ullamcorper consectetur enim, non tempus nisi vulputate eu. In iaculis a dui ac lobortis. Sed at porttitor magna. Nullam sit amet ex a tortor laoreet imperdiet. Nulla et nunc egestas, lacinia elit et, ornare nunc. Nullam eget tellus at orci fermentum tristique.
            </p>
        </div>
    </div>
</template>

<script>
import AppTitle from '../helpers/Title.vue';
import ImageBulb from '../images/Bulb.vue';
export default{
    components:{
        AppTitle,
        ImageBulb
    }
}
</script>

<style scoped>
</style>