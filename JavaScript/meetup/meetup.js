export const meetup = (year, month, dateKeyword, weekday) => {
  let theExactDate;
  const allWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  month = month - 1;

  let keywordIndexes = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
  };

  function findDate(year, month, dateKeyword, weekday) {
    if (dateKeyword === "teenth") {
      for (let i = 13; i <= 19; i++) {
        let date = new Date(year, month, i);
        if (allWeekdays[date.getDay()] === weekday) {
          theExactDate = date;
          break;
        }
      }
    } else {
      const datesOfMatchingWeekdays = [];
      const numOfDaysInMonth = new Date(year, month + 1, 0).getDate();
      for (let i = 1; i <= numOfDaysInMonth; i++) {
        let date = new Date(year, month, i);
        if (allWeekdays[date.getDay()] === weekday) {
          datesOfMatchingWeekdays.push(date);
        }
      }
      if (dateKeyword === "last") {
        console.log(datesOfMatchingWeekdays);
        console.log(numOfDaysInMonth);
        theExactDate = datesOfMatchingWeekdays[datesOfMatchingWeekdays.length - 1];
      } else {
        const index = keywordIndexes[dateKeyword];
        theExactDate = datesOfMatchingWeekdays[index];
      }
    }
  }

  findDate(year, month, dateKeyword, weekday);

  return theExactDate;
};
