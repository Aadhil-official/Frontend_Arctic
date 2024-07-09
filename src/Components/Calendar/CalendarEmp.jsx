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

export default function Calendar({ selectedDate }) {
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);

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
    }, []);

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
                title: externalEvent.companyName,
                start: externalEvent.date,
                allDay: false,
                description: `Company: ${externalEvent.companyName} <br> Issue: ${externalEvent.issue}`,
                source: 'external',
            }));
        } catch (error) {
            console.error('Error fetching external events:', error);
            return [];
        }
    };

    const fetchAgreementEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getAgreementEvent');
            return response.data.map(agreementEvent => ({
                id: `agreement-${agreementEvent.id}`,
                title: agreementEvent.companyName,
                start: agreementEvent.date,
                allDay: true,
                description: agreementEvent.companyName,
                source: 'agreement',
            }));
        } catch (error) {
            console.error('Error fetching agreement events:', error);
            return [];
        }
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
                />
            )}
        </div>
    );
}
