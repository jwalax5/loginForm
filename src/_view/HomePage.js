import React, { Component } from 'react';

class HomePage extends Component {

    state = { name: '' };

    componentDidMount() {
        const name = localStorage.getItem('user');
        this.setState({ name });
    }

    logout = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }
    
    render() {
        return (
            <div>
                <h1>Hi {this.state.name}</h1>
                <button type="button" className="btn btn-primary" onClick={this.logout.bind(this)}>Log out</button>
            </div>
        );
    }
}

export { HomePage };