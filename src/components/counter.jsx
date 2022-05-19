import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
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
                        onClick={() => this.handleIncrement()}
                        className="btn btn-secondary btn-sm"
                    >
                        Increment
                    </button>
                    <button
                        onClick={this.handleDelete}
                        className="btn btn-danger btn-sm m-2"
                    >
                        Delete
                    </button>
                </div>
                <div>
                    {this.state.tags.length === 0 && 'Please create a new tag!'}
                    {this.renderTags()}
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;