import type { PostProps } from '../../types'
import type { PageLoad } from './$types'

let posts: PostProps[] = [
    {
        username: "Chris",
        content: "wordssssss this is a post yeyeyeyeyeye"
    },
    {
        username: "Axel",
        content: "Anotha Post"
    },
    {
        username: "Chris",
        content: "I can't stop postingggg"
    },
    {
        username: "Rithvik",
        content: "Yeyeyeyeye"
    }
]

export const load = (() => {
    return {
        posts
    }
}) satisfies PageLoad;