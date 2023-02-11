<script lang="ts">
    import type { PostProps } from "../types";
    import UserProfileIcon from "./UserProfileIcon.svelte";

    export let post: PostProps;
</script>

<div class='
    w-full h-20
    '>
    <UserProfileIcon/>
    <h3>
    {post.username}
    </h3>
    {post.content}
</div>

