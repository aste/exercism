// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgeCount = 0;
  let limeCount = 0;
  for (let i = 0; i < limes.length; i++) {
    if (wedgeCount >= wedgesNeeded) {
      break;
    }
    switch (limes[i]) {
      case "small":
        wedgeCount += 6;
        limeCount += 1;
        break;
      case "medium":
        wedgeCount += 8;
        limeCount += 1;
        break;
      case "large":
        wedgeCount += 10;
        limeCount += 1;
        break;
    }
  }
  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let liMeiTimeLeft = timeLeft;
  let liMeiOrders = [];

  for (let i = 0; i < orders.length; i++) {
    if (orders.length == 0) {
      break;
    }
    if (liMeiTimeLeft <= 0) {
      orders.splice(0, i);
      liMeiOrders = orders;
      break;
    }
    switch (orders[i]) {
      case "Pure Strawberry Joy":
        liMeiTimeLeft -= 0.5;
        break;
      case "Energizer":
      case "Green Garden":
        liMeiTimeLeft -= 1.5;
        break;
      case "Tropical Island":
        liMeiTimeLeft -= 3;
        break;
      case "All or Nothing":
        liMeiTimeLeft -= 5;
        break;
      default:
        liMeiTimeLeft -= 2.5;
        break;
    }
  }
  return liMeiOrders;
}
