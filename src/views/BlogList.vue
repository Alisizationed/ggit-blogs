<template>
    <div>
        <h1>Blogul GGIT FD</h1>

<div class="create-post-container">
    <input v-model="user"/>
    <textarea v-model="post"/>
    <select v-model="tag">
        <option value="general">General</option>
        <option value="flame">Flame</option>
        <option value="reccomendation">Reccomendation</option>
    </select>
    <button @click="submitFormHandler">Save</button>
</div>

        <div class="post-container" v-if="blogList.length > 0">
            <BlogItem 
                v-for="blog in blogList"
                :id="blog.id"
                :user="blog.user"
                :post="blog.post"
                :likes="blog.likes"
                :tag="blog.tag"
                @like="likeHandler($event)"
                @dislike="dislikeHandler($event)"
                @delete="deleteHandler($event)"
                :key="blog.id"
            />
        </div>
        <div v-else>
            <p>Nici un post nu a fost creat</p>
        </div>

    </div>
</template>

<script>
    import BlogItem from '../components/BlogItem.vue';
    import { myaxios } from '../axios';
    export default {
        components: {
            BlogItem,
        },
        data() {
            return {
                user: '',
                post: '',
                tag: '',
                blogList: [],
            }
        },
        methods: {
            submitFormHandler() {
                console.log("Buttonul s-a apasat");

                if(this.user == '' || this.post == '' || this.tag == ''){
                    alert('Nu au fost introduse datele obligatorii!');
                    return;
                }

                const newBlog={
                    user: this.user,
                    post: this.post,
                    tag: this.tag,
                    likes: 0,
                };

                console.log(newBlog);

                this.user='';
                this.post='';
                this.tag='';

                myaxios.post('/blog',newBlog).then(
                    (data) => {
                        this.blogList = data.data.blogs;
                    }
                )

                this.blogList.push(newBlog);
                console.log(this.blogList);
            },
            fetchBlogPosts() {
                myaxios.get('/blog').then(
                    (data) => {
                        //console.log(data.data.blogs);
                        this.blogList = data.data.blogs;
                    },
                );
            },
            likeHandler(event) {
                console.log(event.itemId);
                myaxios.post(`/blog/${event.itemId}/like`).then(
                    (data) => {
                        console.log(data.data.blogs);
                        this.blogList = data.data.blogs;
                    },
                );
            },
            dislikeHandler(event) {
                console.log(event.itemId);
                myaxios.post(`/blog/${event.itemId}/dislike`).then(
                    (data) => {
                        console.log(data.data.blogs);
                        this.blogList = data.data.blogs;
                    },
                );
            },
            deleteHandler(event) {
                console.log(event.itemId);
                myaxios.delete(`/blog/${event.itemId}`).then(
                    (data) => {
                        console.log(data.data.blogs);
                        this.blogList = data.data.blogs;
                    },
                );
            },
        },
        mounted() {
            this.fetchBlogPosts();
            /*for(let i=0;i<100;i++)
                myaxios.post(`/blog/723317993/like`).then(
                    (data) => {
                        console.log(data.data.blogs);
                        this.blogList = data.data.blogs;
                    },
                );*/
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    input,textarea,select,button {
        margin: 10px 0;
        font-size: 1rem;
        padding: 5px;
        border-radius: 5px !important;
    }
    input, textarea {
        width: 100%;
        display: block;
    }
    select,button {
        width: 195px;
    }
    select {
        margin-right: 10px;
    }
    button {
        background-color: pink;
        border: 2px solid palevioletred;
        color:darkred;
    }
    .create-post-container {
        width: 400px;
    }
</style>