// export function randomDate(start, end) {
//     const newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

//     let month = '' + (newDate.getMonth() + 1),
//           day = '' + (newDate.getDate()),
//           year = newDate.getFullYear();

//     if (month.length < 2) {
//           month = '0' + month;
//       }
//     if (day.length < 2) {
//           day = '0' + day;
//       }

//     const formattedDate = [year, month, day].join('-');

//     return formattedDate;

//   }
//   randomDate(new Date(2012, 0, 1), new Date())
