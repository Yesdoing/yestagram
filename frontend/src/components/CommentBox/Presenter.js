import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import styles from './styles.module.scss';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea className={styles.input} placeholder={context.t("Add a comment...")}></Textarea>
    </form>
);

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;