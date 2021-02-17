import {useRouter} from 'next/router'
import Navigation from '../../../components/Navigation';

const Post = ()=>{
    const router = useRouter();
    const {pid, comment} = router.query
    return (
    <>
        <Navigation/>
        <p>Post: {pid}</p>
        <p>Commnent: {comment}</p>
    </>
    )
}
export default Post;