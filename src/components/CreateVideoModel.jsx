import React, { useCallback, useEffect, useState } from "react";
import {
  CoreButtonPrimary,
  CoreIconButton,
  CoreText,
  Layout,
  Title,
} from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/createVideoModelSlice";
import { close as closeAlert } from "../features/alertModelSlice";
import MuiInput from "./MuiInput";
import { open } from "../features/alertModelSlice";
import Portal from "./Portal";
import AlertModel from "./AlertModel";
import InputFile from "./InputFile";
import Times from "./icons/Times";

export default function CreateVideoModel() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.createVideoModelReducer);

  const [values, setValues] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleSubmitForm = () => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("url", values.file);

    fetch("http://localhost:3050/api/videos/create", {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRjYWE4NDE2M2I1YTRmNmU2ZjU0OWVhIiwiaWF0IjoxNjkxMTU2ODY2LCJleHAiOjE2OTExNjA0NjZ9.t9nimWbwx34k-H0-_Re8a9aRJDdH_FC33jU_NLD_fSs`,
      },
    })
      .then((res) => res.json().then((data) => {
        alert(JSON.stringify(data));
        setValues({
          title: "",
          description: "",
          file: "",
        });
        dispatch(close());
      }))
      .catch((e) => alert(e));
  };

  const deleteVideo = () => {
    setValues((prev) => ({
      ...prev,
      file: "",
      title: "",
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setValues((prev) => ({
      ...prev,
      file,
      title: file.name.substring(0, file.name.lastIndexOf(".")),
    }));
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    setValues((prev) => ({
      ...prev,
      file,
      title: file.name.substring(0, file.name.lastIndexOf(".")),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value.length <= 100) {
      setValues((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } else if (name === "description" && value.length <= 5000) {
      setValues((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = useCallback(() => {
    setValues({
      title: "",
      description: "",
      file: null,
    });
    dispatch(closeAlert());
    dispatch(close());
  }, [dispatch]);

  const handleClose = useCallback(
    (e) => {
      e.stopPropagation();
      if (
        values.title.length > 0 ||
        values.description.length > 0 ||
        values.file
      ) {
        dispatch(open());
      } else {
        dispatch(close());
      }
    },
    [values, dispatch]
  );

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (values.title.length > 0 || values.description.length > 0) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [values]);

  if (!isOpen) return null;

  return (
    <Layout
      position="fixed"
      top="0"
      left="0"
      width="full"
      height="100vh"
      zIndex="20"
    >
      <Layout
        height="100%"
        width="full"
        backgroundColor="rgba(244,244,244,0.8)"
        zIndex="1"
      />
      <Layout
        height="100%"
        width="full"
        padding={{ x: 24, y: 24 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="2"
        position="absolute"
        top="0"
        left="0"
      >
        <Layout
          backgroundColor="#fff"
          borderRadius="16px"
          boxShadow="0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)"
        >
          <Layout
            width="582px"
            maxHeight="80vh"
            display="flex"
            flexDirection="column"
          >
            <Layout
              style={{ borderBottom: "1px solid #ccc" }}
              width="full"
              height="60px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={{ x: 24 }}
              flexShrink="0"
            >
              <Layout padding={{ right: "16px" }} overflow="hidden">
                <CoreText
                  type={"h3"}
                  ellipsis={true}
                  fontSize="font-size-3"
                  fontWeight="semibold"
                  title={values.title}
                >
                  {values.title.length > 0 ? values.title : "Upload video"}
                </CoreText>
              </Layout>
              <CoreIconButton onClick={handleClose}>
                <Times fill={"#0f1419"} />
              </CoreIconButton>
              <Portal>
                <AlertModel
                  title={"Are you sure"}
                  description={"Changes you made may not be saved."}
                  primaryText={"Leave"}
                  secondaryText={"Cancel"}
                  handleSubmit={handleSubmit}
                />
              </Portal>
            </Layout>

            <Layout
              display="flex"
              flexDirection="column"
              flexGrow="1"
              flexShrink="1"
              overflowY="auto"
              maxHeight="100%"
            >
              <Layout padding={{ top: "16px", left: "24px", right: "24px" }}>
                <InputFile
                  name={"video"}
                  handleDrop={handleDrop}
                  onChange={onChange}
                  file={values.file}
                  deleteVideo={deleteVideo}
                />
                <MuiInput
                  label={"Title (required)"}
                  value={values.title}
                  handleChange={handleChange}
                  placeholder="Add a title that describes your video"
                  currLength={values.title.length}
                  maxLength={100}
                  name="title"
                />
                <MuiInput
                  label={"Description"}
                  minRows={4}
                  placeholder="Tell viewers about your video"
                  currLength={values.description.length}
                  maxLength={5000}
                  value={values.description}
                  handleChange={handleChange}
                  name="description"
                />
              </Layout>
            </Layout>

            <Layout
              width="full"
              display="flex"
              style={{ padding: 24 }}
              flexShrink="0"
            >
              <CoreButtonPrimary
                disabled={values.title.length < 1}
                width="full"
                onClick={handleSubmitForm}
              >
                Post
              </CoreButtonPrimary>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
