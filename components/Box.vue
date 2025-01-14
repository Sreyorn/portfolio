<template>
    <div class="subBox w-max rounded-md hover:border-2 hover:shadow-md hover:scale-110 hover:bg-black">
            {{ subContent }}
    </div>
</template>
<script>
export default{
    props:{
        subContent:String
    }
}
</script>

<style lang="postcss">
.subBox{
    @apply border-2 p-2 ml-2 mt-2 bg-transparent transition duration-100 transform;
}
</style>