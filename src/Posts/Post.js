import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, deletePost, editPost } from "../Store/action";
import styles from "./Post.module.css";
import EditPost from "../EditPost/EditPost";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 250,
    minHeight: 250,
    maxHeight: 250,
    margin: 10,
  },
  date: {
    fontSize: 14,
  },
  postNumber: {
    margin: "5px",
    color: "blue",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Post() {
  const classes = useStyles();

  const userId = Number(localStorage.getItem("id"));

  const { posts } = useSelector((state) => state.users);

  const [allPosts, setAllPosts] = useState([]);
  const [toggleEditPost, setToggleEditPost] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    setAllPosts(posts);
  }, []);

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

  const handleDelete = (id) => {
    const post = posts.find((el) => el.id === id);
    if (post.postCreatorId === userId) {
      dispatch(deletePost(id));
      dispatch(getPosts());
    } else {
      alert("you cant delete this post");
    }
  };
  const handleEdit = (id) => {
    const post = posts.find((el) => el.id === id);
    if (post.postCreatorId === userId) {
      setEditPost(post);
      setToggleEditPost(true);
    } else {
      alert("you cant edit this post");
    }
  };
  const offEdit = () => {
    setToggleEditPost(null);
    dispatch(getPosts());
  };
  return (
    <>
      <div className={styles.post}>Post Page</div>
      <div className={styles.cards}>
        {allPosts.map((post, index) => {
          return (
            <Card className={classes.root} variant="outlined" key={post.id}>
              <Typography
                variant="body2"
                component="p"
                className={classes.postNumber}
              >
                Post: {index + 1}
              </Typography>
              <CardContent>
                <Typography
                  className={classes.date}
                  color="textSecondary"
                  gutterBottom
                >
                  {post.date}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {post.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {post.email}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <div className={styles.btn}>
                   <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleEdit(post.id)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </Button>
                </div>
               
              </CardActions>
            </Card>
          );
        })}
        {toggleEditPost && <EditPost post={editPost} handleClose={offEdit} />}
      </div>
    </>
  );
}
