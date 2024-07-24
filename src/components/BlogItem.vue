<template>
    <div class="blog-container">
        <h5>{{ user }}</h5>
        <p class="post">{{ post }}</p>
            <div class="likes-dislikes">
                <button @click="likeItem">Like</button>
                <p>{{ likes }}</p>
                <button @click="dislikeItem">Dislike</button>
                <button @click="deleteItem">Delete</button>
            </div>
    </div>
</template>

<script>
    export default {
        emits: ['like','dislike','delete'],
        props: {
            id: Number,
            user: String,
            post: String,
            likes: Number,
            tag: String,
        },
        methods: {
            likeItem() {
                this.$emit('like',{itemId: this.id});
            },
            dislikeItem() {
                this.$emit('dislike',{itemId: this.id});
            },
            deleteItem() {
                this.$emit('delete',{itemId: this.id});
            },
        },
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    h5, .post{
        margin: 0;
    }
    h5 {
        font-size: 20px;
        font-weight: 600;
        text-decoration: 1px wavy palevioletred;
    }
    .post {
        font-size: 15px;
        padding: 5px 0;
        width: 100%;
        word-break: break-all;
    }
    .blog-container .post::first-letter{
        padding-left: 10px;
    }
    .blog-container {
        display: block;
        background-color: rgb(255, 230, 234);
        border-radius: 5px;
        padding: 10px;
        width: 400px;
        margin: 15px 0;
    }
    .likes-dislikes p, button {
        display: inline-block;
        font-size: 15px;
        margin-right: 15px;
    }
    button {
        padding: 5px 20px;
        border-radius: 5px;
        background-color: pink;
        border: 2px solid palevioletred;
        color:darkred;
    }
    .s-flame {
        background-color: rgb(255,0,0);
        background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,145,0,1) 44%, rgba(252,255,74,1) 100%) !important;
    }
    .s-flame {
        background-color: pink;
    }
</style>