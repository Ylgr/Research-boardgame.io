import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <i className="fa fa-question  fa-question"></i>&nbsp;Tu is developer of this product ?
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">Yep!</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Nope!</a></li>
                </ul>
            </div>
        );
    };
}

export default Question;