import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        fontWeight: 'normal',
    }

    render() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';

        return (
            <React.Fragment>
                <span
                    style={this.styles}
                    className={classes}
                >
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;