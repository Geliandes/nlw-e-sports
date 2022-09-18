"use strict";
// 18:00 -> 1080
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
function convertHourStringToMinutes(hourString) {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmout = hours * 60 + minutes;
    return minutesAmout;
}
exports.convertHourStringToMinutes = convertHourStringToMinutes;
