import React from 'react';
import {connect} from 'react-redux';

const ChatContainer = (props) => {
    return (
        <div>
            {props.messages.map((message) => {
                return <p key={message.id}>{message.message}</p>;
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(ChatContainer);