<script lang='ts'>
	import type { UserProps } from '../types';
    import UserProfileIcon from './UserProfileIcon.svelte'
    export let user: UserProps;
</script>

<div>
    <UserProfileIcon {user}/>
    <input type='text' placeholder='Start a post'>
</div>