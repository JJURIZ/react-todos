// import React, { Component } from 'react';

// class ListItem extends Component {
//     render() {
//         return (
//             <li>{this.props.doThis}</li>
//         )
//     }
// }

// export default ListItem;

import React from 'react'

const ListItems = (props) => {
    return (
        <li>{props.doThis}</li>
    )
}
export default ListItems;