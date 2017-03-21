"use strict";
// func host start -p 3035
function main(context, req) {
    let response = {
        status: 200,
        body: "Azure function running locally!"
    };
    return context.done(null, response);
    // let start = new Date();
    // let end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
    // return fetchEvents(start, end);
}
exports.main = main;
;
// interface CalendarStats {
//     numEvents: number
//     events: Event[]
// }
// async function fetchEvents(startDate:Date, endDate:Date):Promise<CalendarStats> {
//     const client = await GraphClient();
//     return client
//         .api('/me/calendar/calendarView')
//         .query({
//             "startDateTime": startDate.toISOString(),
//             "endDateTime": endDate.toISOString()
//         })
//         .count(true)
//         .get()
//         .then((res) => {
//             return {
//                 numEvents: res['@odata.count'],
//                 events: (res.value as Event[]).map((e) => e.subject)
//             }
//         })
// } 
