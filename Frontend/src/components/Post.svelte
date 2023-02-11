<script lang="ts">
    import type { PostProps } from "../types";
    import UserProfileIcon from "./UserProfileIcon.svelte";

    export let post: PostProps;
    let {user} = post;
    
</script>

<div class='
    w-full h-20
    '>
    <UserProfileIcon {user}/>
    <h3>
    {user.username}
    </h3>
    {post.content}
</div>

