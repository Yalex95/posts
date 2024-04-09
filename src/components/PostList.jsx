import NewPost from "./NewPost"
import Post from "./Post"
import classes from './PostList.modules.css';

function PostList() {
    return(
        <>
        <NewPost/>
        <ul className={classes.posts}>
            <Post author="Maxi" body="Expedita maiores quas quasi suscipit"/>
            <Post author="Manuel" body=" consectetur adipisicing elit. "/>
        </ul>
        </>)
}
export default PostList