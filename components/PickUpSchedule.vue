<template>
<div class="container" data-aos="fade">
    <div class="box">
        <h1 align="center">PICK-UP SCHEDULE</h1>
        <b-table striped hover :items="time" :fields="table_fields">
        </b-table>
    </div>
</div>

    
</template>
<script>
export default {
    data(){
        return{
                table_fields:[
                    {
                        label: 'AREA',
                        key: 'area'
                    },
                    {
                        label: 'MORNING',
                        key: 'morning',

                    },
                    {
                        label: 'AFTERNOON',
                        key: 'afternoon',

                    }
                ],
                time:[
                    {area:'Nusa Dua',morning:'8.30 – 9.00',afternoon:'11.00-11.30'},
                    {area:'Jimbaran',morning:'8.30 – 9.00',afternoon:'11.00-11.30'},
                    {area:'Kuta',morning:'8.30 – 9.00',afternoon:'11.30 – 12.00'},
                    {area:'Sanur',morning:'9.00-9.30',afternoon:'11.30 – 12.00'},        
                    {area:'Ubud',morning:'9.30 – 10.00',afternoon:'12.00 – 12.30'},
                ]
        }

    }

    
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;

    font-style: italic;
}
.box{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media screen and (max-width: 768px){
    .box{
        width: 100%;

    }

    b-table{
        width:100%;
        font-size: 1rem;
        word-break: break-all;
    }
}
@media screen and (max-width: 480px){
    .box{
        width: 100%;

    }
    b-table{
        width: 100%;
        font-size: 1rem;
        word-break: break-all;
        word-wrap: none;
    }
    h1{
        font-size: 2.5em;
    }
}
</style>
