import React, { useState } from "react";

const BookingForm = (props) => {
    const[date, setDate] = useState("")
    const[times, setTimes] = useState("")
    const[guests, setGuests] = useState("")
    const[occasion , setOccasion] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        // we will solve it latter
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                        {/* for time selection */}
                        <div>
                        <label htmlFor="book-time">Choose Time : </label>
                        <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>
                        {/* for Number of Guests */}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <select id="book-guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>

                        {/* Occasion field */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option>Select Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        {/* submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;