import React from 'react';

class Question{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item"><a href="#" className="active nav-link"><i
                                className="fa fa-question  fa-question"></i>&nbsp;Tu is developer of this product ?</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Yep!</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Nope!</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default Question;