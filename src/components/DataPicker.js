import React from 'react';

import Calendar from 'react-calendar';

import './DatePicker.css';

class DatePicker extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => {
        this.setState({ date });
        const ulElement = document.getElementById('ulElement')
        var liElement = document.createElement('li')
        var Space = document.createElement('br')

        liElement.innerHTML = `Voce tem um evento: ${date}`
        alert(date)

        ulElement.appendChild(liElement)
    }

    render() {
        return (
            <div className="DatePickerContainer">
                <p className="text">Make with React JS</p>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    className="Calendar"
                    onClick={this.onChange}
                />
                <ul id="ulElement">
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default DatePicker
