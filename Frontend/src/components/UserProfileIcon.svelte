<script lang='ts'>
	import type { UserProps } from "../types";

    export let user: UserProps;
</script>

<div class={
    `w-8 h-8
    flex justify-center items-center
    rounded-full
    bg-${user.color}-500
    text-white 
    text-xl font-bold
    `
}
>
    {user.firstname.charAt(0)}
</div>