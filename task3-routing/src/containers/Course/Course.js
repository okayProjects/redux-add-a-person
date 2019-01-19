import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.courseTitle}</h1>
                {/* drugi sposób jest z query params - zobacz 20minuta wyklad przykład instruktora */}
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;