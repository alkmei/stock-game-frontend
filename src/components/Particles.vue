<template>
    <Particles id='tsparticles' :options="options" :particlesInit="particlesInit"/>
</template>


<script lang="ts">
import type { Engine } from 'tsparticles-engine';
import {loadFull} from 'tsparticles'
export default{
    data() {
        return {
            options: {
                fullScreen:{
                    enable: true,
                    zIndex: 0,
                },
                interactivity:{
                    events:{
                        onClick:{
                            enable:false, 
                            mode:"push",
                        },
                        onHover:{
                            enable:false,
                            mode:'repulse',
                        },
                    },
                    modes:{
                        push:{
                            quantity:10,
                        },
                        repulse:{
                            distance:100,
                        },
                    },
                },
                particles:{
                    number:{
                        value:160,
                    },
                    color:{
                        value: "#fff"
                    },
                    links:{
                        distance:50,
                        enable:true,
                        color:{ 
                            value: "#fff"
                        },
                    },
                    move:{
                        enable:true,
                        speed:{ min:1, max:5},
                    },
                    opacity:{
                        value:{min:0.3, max:0.8},
                    },
                    size:{
                        value:{min:1, max:3},
                    },
                },
            },
        };
    },
    
    methods:{
        async particlesInit(engine: Engine){
            await loadFull(engine)
        }
    }
}
</script>