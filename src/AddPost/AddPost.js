import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";

import { useFormik } from "formik";
import * as Yup from "yup";

import { getUsers, addPost } from "../Store/action";

import { Button, Container, TextField, makeStyles } from "@material-ui/core";
import styles from "./AddPost.module.css";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles({
  buttons: {
    margin: "5px"
  },
});

export default function AddPost() {
  const userId = localStorage.getItem("id");
  const classes = useStyles()
  const dispatch = useDispatch();
  const history = useHistory();

  const { allUsers } = useSelector((state) => state.users);
  const [startDate, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleClick = () => {
    history.push("/posts");
  };
  const option = allUsers.map((user) => {
    return {
      value: user.first_name,
      label: user.first_name,
    };
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      email: "",
      post: "",
      private: "",
      date: startDate,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "Must be 5 characters or more")
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      description: Yup.string()
        .min(2, "Must be 10 characters or more")
        .max(20, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      post: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more")
        .max(150, "Must be 150 characters or less"),
    }),
    onSubmit: (values,{resetForm}) => {
      const postInfo = { ...values, date: startDate.toLocaleDateString(), postCreatorId: Number(userId) };
      dispatch(addPost(postInfo));
      resetForm()
    },
  });

  return (
    <div>
      <h1> Add Post</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Container className={styles.inputs} maxWidth="lg">
          <TextField
            label="Title"
            color="secondary"
            id="title"
            type="text"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className={styles.errors}>{formik.errors.title}</div>
          ) : null}
        </Container>

        <Container className={styles.inputs}>
          <TextField
            label="Description"
            color="secondary"
            id="description"
            type="text"
            {...formik.getFieldProps("description")}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className={styles.errors}>{formik.errors.description}</div>
          ) : null}
        </Container>

        <Container className={styles.inputs}>
          <TextField
            label="Email Address"
            type="email"
            color="secondary"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errors}>{formik.errors.email}</div>
          ) : null}
        </Container>

        <Container className={styles.inputs}>
          <TextField
            label="Add Post"
            variant="outlined"
            color="secondary"
            type="text"
            multiline={true}
            rows={3}
            {...formik.getFieldProps("post")}
          />
          {formik.touched.post && formik.errors.post ? (
            <div className={styles.errors}>{formik.errors.post}</div>
          ) : null}
        </Container>

        <Container className={styles.inputs}>
          <label htmlFor="checkbox">Private</label>
          <input
            id="checkbox"
            type="checkbox"
            {...formik.getFieldProps("checkbox")}
          />
        </Container>
        <Container className={styles.inputs}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
          />
        </Container>
        <Button variant="contained" color="secondary" type="submit">
          Add Post
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e)}
          className={classes.buttons}
        >
          See Posts
        </Button>
      </form>
      <Select options={option} isMulti className={styles.select} />
    </div>
  );
}
