import React from "react";
import PropTypes from "prop-types";
import MdImage from "react-ionicons/lib/MdImage";
import styles from "./styles.module.scss";

const PhotoCreate = (props, context) => (
  <div className={styles.photoCreate}>
    <div className={styles.inner}>
      <aside className={styles.previewImage}>
        {props.preview ? (
          <div className={styles.imgColumn}>
            <label htmlFor="preview">
              <img src={props.preview} alt="preview" />
            </label>
            <input
              id="preview"
              type="file"
              className={styles.previewInput}
              onChange={props.handleChangeFile}
            />
          </div>
        ) : (
          <div className={styles.nonImage}>
            <label htmlFor="preview">
              <MdImage fontSize="48px" color="black" />
            </label>
            <input
              id="preview"
              type="file"
              className={styles.previewInput}
              onChange={props.handleChangeFile}
            />
          </div>
        )}
      </aside>
      <form className={styles.form}>
        <div className={styles.column}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="Where is here?"
            className={styles.inputText}
            onChange={props.handleChangeValue}
            name="location"
          />
        </div>
        <div className={styles.column}>
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            placeholder="What is this photo?"
            className={styles.inputText}
            onChange={props.handleChangeValue}
            name="caption"
          />
        </div>
        <div className={styles.column}>
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            placeholder="please, use separate ,"
            className={styles.inputText}
            onChange={props.handleChangeValue}
            name="tags"
          />
        </div>
        <div className={styles.column}>
          <button
            type="submit"
            className={styles.button}
            onClick={props.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

PhotoCreate.propTypes = {
  handleChangeFile: PropTypes.func.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  preview: PropTypes.string
};

export default PhotoCreate;
