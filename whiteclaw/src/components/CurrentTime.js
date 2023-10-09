import React from "react";

class CurrentTime extends React.Component {
    render() {
        let newDate = new Date();
        let year = newDate.getFullYear();
        return (
            <span>
                {year}
            </span>
        )
    }
}

export default CurrentTime