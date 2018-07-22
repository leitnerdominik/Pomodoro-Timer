export const shortBreak = 5 * 60;
export const longBreak = 10 * 60;
export const pomodoroBreak = 25 * 60;

export const formatTime = (sec) => {
    let minutes = parseInt(sec / 60, 10);
    let seconds = parseInt(sec % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return {
        sec: seconds,
        min: minutes,
    }
}