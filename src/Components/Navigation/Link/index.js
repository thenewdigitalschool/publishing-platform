import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

<<<<<<< HEAD

// export default class Link extends Component {
//   render() {
//     return (
//       <div>
//         <a className="Link" href={this.props.linkurl}>{this.props.linklabel} </a>
//       </div>
//   }
// }

=======
>>>>>>> 3e9d892... created the blog branch
export default class Link extends Component {
  render() {
    return (
      <a className="Link" href={this.props.linkurl}>
        {this.props.linklabel}{' '}
      </a>
<<<<<<< HEAD

    );
  }
}
=======
    );
  }
}

>>>>>>> 3e9d892... created the blog branch
Link.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linklabel: PropTypes.string.isRequired,
};
