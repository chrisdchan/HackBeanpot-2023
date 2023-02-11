<script lang='ts'>
	import type { UserProps } from '../types';
    import UserProfileIcon from './UserProfileIcon.svelte'
    import { currentUser } from '../stores/currentUser';

    let user = $currentUser;

</script>

<div>
    <UserProfileIcon {user}/>
    <input type='text' placeholder='Start a post'>
</div>