import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../../Style/Calendar/Calendar.css';

export default function CalenderEmp({ selectedDate = new Date() }) {
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const internalEvents = await axios.get('http://localhost:8080/events');
                const externalEvents = await fetchExternalEvents();
                const agreementEvents = await fetchAgreementEvents();
                setEvents([...internalEvents.data, ...externalEvents, ...agreementEvents]);
                console.log('Fetched events:', [...internalEvents.data, ...externalEvents, ...agreementEvents]);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            const date = new Date(selectedDate);
            if (!isNaN(date.getTime())) { // Ensure selectedDate is valid
                calendarApi.gotoDate(date);
            }
            console.log('Selected date:', date);
        }
    }, [selectedDate]);

    const fetchExternalEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/job');
            return response.data
                .map(externalEvent => {
                    const startDate = new Date(externalEvent.date);
                    if (!isNaN(startDate.getTime())) {
                        return {
                            id: `external-${externalEvent.id}`,
                            title: `${externalEvent.companyName}`,
                            start: startDate,
                            allDay: false,
                            description: ` <br>Company: ${externalEvent.companyName} <br> Issue: ${externalEvent.issue}`,
                            source: 'external',
                        };
                    }
                    return null; // Filter out invalid dates
                })
                .filter(event => event !== null); // Filter out null values
        } catch (error) {
            console.error('Error fetching external events:', error);
            return [];
        }
    };

    const fetchAgreementEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/aggrements');
            return response.data
                .map(agreementEvent => {
                    const startDate = new Date(agreementEvent.date);
                    if (!isNaN(startDate.getTime())) {
                        return {
                            id: `agreement-${agreementEvent.id}`,
                            title: agreementEvent.companyName,
                            start: startDate,
                            allDay: true,
                            description: agreementEvent.companyName,
                            source: 'agreement',
                        };
                    }
                    return null; // Filter out invalid dates
                })
                .filter(event => event !== null); // Filter out null values
        } catch (error) {
            console.error('Error fetching agreement events:', error);
            return [];
        }
    };

    const handleMouseEnter = (info) => {
        const start = info.event.start ? new Date(info.event.start).toLocaleString() : 'No start time';
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

    return (
        <div className="allcal">
            {calendarRef && (
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    initialView={'dayGridMonth'}
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
                    // Add additional configuration as needed
                />
            )}
        </div>
    );
}