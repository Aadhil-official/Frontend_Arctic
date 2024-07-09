import React, { useRef, useState, useEffect, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import rrulePlugin from '@fullcalendar/rrule';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import tippy from 'tippy.js';
import { RRule } from 'rrule';
import 'tippy.js/dist/tippy.css';
import '../../Style/Calendar/Calendar.css';

export default function Calendar({ selectedDate }) {
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [eventDetails, setEventDetails] = useState('');
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [isAllDay, setIsAllDay] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [mode, setMode] = useState('create');
    const [recurrenceFrequency, setRecurrenceFrequency] = useState('none');

    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(selectedDate);
        }
    }, [selectedDate]);

    const fetchExternalEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/jobEvents');
            return response.data.map(externalEvent => ({
                id: `external-${externalEvent.id}`,
                title: `${externalEvent.companyName}`,
                start: externalEvent.date,
                allDay: false,
                description: `<br>Company: ${externalEvent.companyName} <br> Issue: ${externalEvent.issue}`,
                source: 'external',
            }));
        } catch (error) {
            console.error('Error fetching external events:', error);
            return [];
        }
    };

    const fetchAgreementEvents = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getAgreementEvent');
            return response.data.map(agreementEvent => {
                const rrule = generateAgreementRrule(agreementEvent.type, agreementEvent.date);
                return {
                    id: `agreement-${agreementEvent.id}`,
                    title: agreementEvent.companyName,
                    start: agreementEvent.date,
                    allDay: true,
                    description: agreementEvent.companyName,
                    rrule: rrule,
                    source: 'agreement',
                };
            });
        } catch (error) {
            console.error('Error fetching agreement events:', error);
            return [];
        }
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const internalEvents = await axios.get('http://localhost:8080/api/auth/events');
                const externalEvents = await fetchExternalEvents();
                const agreementEvents = await fetchAgreementEvents();
                setEvents([...internalEvents.data, ...externalEvents, ...agreementEvents]);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, [fetchAgreementEvents]);



    const generateAgreementRrule = (type, date) => {
        if (!date) {
            console.error("Start date is undefined");
            return null;
        }

        const frequencyMap = {
            'monthly': RRule.MONTHLY,
            'yearly': RRule.YEARLY,
            'two_years': RRule.YEARLY,
        };

        const intervalMap = {
            'monthly': 1,
            'yearly': 1,
            'two_years': 2,
        };

        return {
            freq: frequencyMap[type],
            interval: intervalMap[type],
            dtstart: new Date(date),
        };
    };

    const handleDateClick = (info) => {
        setStartTime(new Date(info.date));
        setEndTime(new Date(info.date));
        setEventDetails('');
        setIsAllDay(false);
        setRecurrenceFrequency('none');
        setMode('create');
        setShowEventModal(true);

    };

    const handleEventClick = (info) => {
        const event = info.event;
        setCurrentEvent(event);
        setEventDetails(event.extendedProps.description);
        setStartTime(new Date(event.start));
        setEndTime(event.end ? new Date(event.end) : new Date(event.start));
        setIsAllDay(event.allDay);
        setRecurrenceFrequency(event.extendedProps.rrule?.freq || 'none');
        setMode('update');
        setShowEventModal(true);

    };

    const handleButtonClick = () => {
        setStartTime(new Date());
        setEndTime(new Date());
        setEventDetails('');
        setIsAllDay(false);
        setCurrentEvent(null);
        setMode('create');
        setShowEventModal(true);

    };

    const handleSaveOrUpdateEvent = async (e) => {
        e.preventDefault();
        if (!eventDetails.trim()) {
            alert('Empty events cannot be saved');
            return;
        }

        if (startTime >= endTime) {
            alert('End time must be later than start time.');
            return;
        }

        if (mode === 'create') {
            await handleAddEvent();
        } else {
            await handleUpdateEvent();
        }
        setShowEventModal(false);
    };

    const handleAddEvent = async () => {
        try {
            let newEvent = {
                title: eventDetails,
                start: startTime.toISOString(),
                end: endTime.toISOString(),
                allDay: isAllDay,
                description: eventDetails,
                recurrenceFrequency: recurrenceFrequency,
                rrule: recurrenceFrequency !== 'none' ? generateInternalEventRrule(recurrenceFrequency, startTime) : null,
            };

            const response = await axios.post('http://localhost:8080/api/auth/addEvent', newEvent);
            setEvents(prevEvents => [...prevEvents, response.data]); // Update events state correctly
            setShowEventModal(false);
            setEventDetails('');
            window.location.reload();
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };




    const handleUpdateEvent = async () => {
        if (currentEvent.extendedProps.source === 'external' || currentEvent.extendedProps.source === 'agreement') {
            alert('External events cannot be updated.');
            return;
        }

        try {
            let updatedEvent = {
                ...currentEvent.extendedProps,
                id: currentEvent.id,
                title: eventDetails,
                start: startTime.toISOString(),
                end: endTime.toISOString(),
                allDay: isAllDay,
                description: eventDetails,
                recurrenceFrequency: recurrenceFrequency,
                rrule: recurrenceFrequency !== 'none' ? generateInternalEventRrule(recurrenceFrequency, startTime) : null,

            };

            await axios.put(`http://localhost:8080/api/auth/updateEvent/${currentEvent.id}`, updatedEvent);
            setEvents(events.map(event => (event.id === currentEvent.id ? updatedEvent : event)));
            setShowEventModal(false);
            setCurrentEvent(null);
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const handleDeleteEvent = async () => {
        if (currentEvent.extendedProps.source === 'external') {
            alert('External events cannot be deleted.');
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/api/auth/deleteEvent/${currentEvent.id}`);
            setEvents(events.filter(event => event.id !== currentEvent.id));
            setShowEventModal(false);
            setCurrentEvent(null);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleAllDayChange = (event) => {
        setIsAllDay(event.target.checked);
    };

    const handleMouseEnter = (info) => {
        const start = new Date(info.event.start).toLocaleString();
        const end = info.event.end ? new Date(info.event.end).toLocaleString() : 'No end time';
        const description = info.event.extendedProps.description || 'No details provided';

        tippy(info.el, {
            content: `
                <strong>${info.event.title}</strong><br>
                <strong>Start:</strong> ${start}<br>
                <strong>End:</strong> ${end}<br>
                <strong>Details:</strong> ${description}
            `,
            arrow: true,
            placement: 'top',
            allowHTML: true,
        });
    };

    const generateInternalEventRrule = (frequency, startDate) => {
        return `FREQ=${frequency.toUpperCase()};DTSTART=${new Date(startDate).toISOString().replace(/-|:|\.\d+/g, '')}`;
    };

    return (
        <div className="allcal">
            {calendarRef && (
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, rrulePlugin]}
                    initialView={'dayGridMonth'}
                    selectable={true}
                    editable={true}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    events={events}
                    eventMouseEnter={handleMouseEnter}
                    displayEventTime={true}
                    displayEventEnd={true}
                    dayMaxEvents={true}
                    eventOrder="start"
                    headerToolbar={{
                        start: 'today prev,next',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    height={'90vh'}
                />
            )}

            <div className="button1" onClick={handleButtonClick}>
                Create New Event
            </div>

            {showEventModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className='topic'>{mode === 'create' ? 'Create Event' : 'Update Event'}</h2>
                        <div className="button2-container">
                            <label>Start Time: </label>
                            <DatePicker
                                selected={startTime}
                                onChange={(date) => {
                                    setStartTime(date);
                                    if (endTime < date) {
                                        setEndTime(date);
                                    }
                                }}
                                showTimeSelect
                                timeIntervals={15}
                                dateFormat="Pp"
                            />
                        </div>
                        <br />
                        <div className="button2-container">
                            <label>End Time: </label>
                            <DatePicker
                                selected={endTime}
                                onChange={(date) => setEndTime(date)}
                                showTimeSelect
                                timeIntervals={15}
                                dateFormat="Pp"
                            />
                        </div>
                        <div className="button2-container">
                            <div className="eventdetails">
                                <label>Event Details: </label>
                                <input
                                    type="text"
                                    placeholder="Event details"
                                    value={eventDetails}
                                    onChange={(e) => setEventDetails(e.target.value)}
                                    style={{ width: '300px', height: '50px', borderRadius: '10px' }}
                                />
                            </div>
                            <br></br>

                            <input
                                type="checkbox"
                                id="allDayCheckbox"
                                checked={isAllDay}
                                onChange={handleAllDayChange}
                            />
                            <label htmlFor="allDayCheckbox">All Day</label>
                            <br></br>
                            <br></br>

                            <div>
                                <label>Repeat: </label>
                                <select value={recurrenceFrequency} onChange={(e) => setRecurrenceFrequency(e.target.value)}>
                                    <option value="none">None</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>


                        </div>
                        <div className="button2-container">
                        <div className={`button2 ${mode === 'create' ? 'save-button' : ''}`} onClick={handleSaveOrUpdateEvent}>
                        {mode === 'create' ? 'Save' : 'Update'}
                            </div>
                            {mode === 'update' && (
                                <div style={{ margin: '20px 175px' }} className="button4" onClick={handleDeleteEvent}>
                                    Delete
                                </div>
                            )}
                        </div>
                        <div className="button2-container">
                            <button className="button3" onClick={() => setShowEventModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
