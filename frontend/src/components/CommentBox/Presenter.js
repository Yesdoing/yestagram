import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <textarea className={styles.input} placeholder={context.t("Add a comment...")}></textarea>
    </form>
);

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;