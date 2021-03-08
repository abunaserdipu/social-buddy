import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const history = useHistory();
    const showDetail = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    const {title, body, id} = props.post
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={() => showDetail(id)}>Post Detail</button>
        </div>
    );
};

export default Post;