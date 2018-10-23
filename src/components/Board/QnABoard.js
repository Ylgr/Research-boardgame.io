import React from 'react';

class QnABoard extends React.Component {
    // onClick(id) {
    //     if (this.isActive(id)) {
    //         this.props.moves.clickCell(id);
    //         this.props.events.endTurn();
    //     }
    // }
    //
    onClick(bool) {
        if (bool) {
            console.log("True");
        } else {
            console.log("False");
        }
        this.props.events.endTurn();
    }
    //
    // // isActive(id) {
    // //     if (!this.props.isActive) return false;
    // //     if (this.props.G.cells[id] !== null) return false;
    // //     return true;
    // // }

    render() {
        // let winner = '';
        // if (this.props.ctx.gameover) {
        //     winner =
        //         this.props.ctx.gameover.winner !== undefined ? (
        //             <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        //         ) : (
        //             <div id="winner">Draw!</div>
        //         );
        // }
        //
        // const cellStyle = {
        //     border: '1px solid #555',
        //     width: '50px',
        //     height: '50px',
        //     lineHeight: '50px',
        //     textAlign: 'center',
        // };
        //
        // let tbody = [];
        // for (let i = 0; i < 3; i++) {
        //     let cells = [];
        //     for (let j = 0; j < 3; j++) {
        //         const id = 3 * i + j;
        //         cells.push(
        //             <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
        //                 {this.props.G.answers[id]}
        //             </td>
        //         );
        //     }
        //     tbody.push(<tr key={i}>{cells}</tr>);
        // }
        //
        // // return (
        // //     <div>
        // //         <table id="board">
        // //             <tbody>{tbody}</tbody>
        // //         </table>
        // //         {winner}
        // //     </div>
        // // );

        return(
            <div>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <i className="fa fa-question fa-question"></i>&nbsp;Tu is developer of this product ?
                    </li>
                    <li className="nav-item"><a className="nav-link" onClick={() => this.onClick(true)}>Yep!</a></li>
                    <li className="nav-item"><a onClick={() => this.onClick(false)} className="nav-link">Nope!</a></li>
                </ul>
            </div>
        );
    }
}

export default QnABoard;