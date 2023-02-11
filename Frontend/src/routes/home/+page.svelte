<script lang="ts">
    import Post from "../../components/Post.svelte";
    import MakePost from "../../components/MakePost.svelte";
    import type {PageData} from './$types';

    export let data: PageData;
    let {posts} = data;
    
</script>


<MakePost></MakePost>
<div class='
    w-2/3
    mx-8
    border-2 rounded-md
    divide-y divide-slate-200
'>
    {#each posts as post}
        <Post {post}/>
    {/each}
</div>


