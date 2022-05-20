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
        fontWeight: 'bold',
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
        if (this.state.value < 0) return <button disabled>-</button>
    }

    render() {
        let classes = this.getBadgeClasses();
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-1">
                        <span style={this.styles} className={classes}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() => this.props.onIncrement(this.props.counter)}
                            className="btn btn-secondary btn-sm m-1"
                        >
                            +
                        </button>
                        <button
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            className="btn btn-secondary btn-sm m-1"
                            disabled={this.props.counter.value === 0 ? 'disabled' : ""}
                        >
                            -
                        </button>
                        <button
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm m-1"
                        >
                            x
                        </button>
                    </div>
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