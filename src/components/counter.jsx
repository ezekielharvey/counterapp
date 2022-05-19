import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
    };

    // constructor() {
    //     super();
    //     this. handleIncrement = this.handleIncrement.bind(this);
    // }

    styles = {
        fontSize: 10,
        fontWeight: 'normal',
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        let classes = this.getBadgeClasses();
        return (
            <React.Fragment>
                <div>
                    <span
                        style={this.styles}
                        className={classes}
                    >
                        {this.formatCount()}

                    </span>
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="position-relative btn btn-secondary btn-sm m-2"
                    >
                        +
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="position-relative btn btn-secondary btn-sm m-2"
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="position-relative btn btn-danger btn-sm m-2"
                    >
                        x
                    </button>
                </div>
                <div>
                    {this.state.tags.length === 0 && 'Please create a new tag!'}
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;