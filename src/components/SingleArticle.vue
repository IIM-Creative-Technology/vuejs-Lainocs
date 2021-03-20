<template>
    <div class="singleArticle">
        <div>
            <label>Title :</label>
            <p>{{article.title}}</p>
        </div>
        <div>
            <label>Image URL :</label>
            <p>{{article.imgurl}}</p>
        </div>
        <div>
            <label>Text :</label>
            <p>{{article.text}}</p>
        </div>
    </div>
        <router-link to="/blog"><button>Retour</button></router-link>
</template>

<script>
export default {
    name: "SingleArticle",
    props: [
        "article"
    ]
}
</script>

<style>

.singleArticle div {
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

</style>