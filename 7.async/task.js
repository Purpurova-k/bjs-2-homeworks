class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id) {
        if (!id) {
            throw new Error("Невозмоджно идентифицировать будильник. Параметр id не передан.")
        }

        if (this.alarmCollection.some(clock => clock.id === id)) {
            console.error(`Будильник с id ${id} существует`);
            return;
        }

        this.alarmCollection.push(
            {
                id,
                time,
                func,
            }
        );
    }

    removeClock(id) {
        if(this.alarmCollection.findIndex(clock => clock.id === id) > -1) {
            this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime(addMinutes = 0) {
        return new Date(new Date().getTime() + addMinutes * 60000).toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit" });
    }

    start() {
        const checkClock = (clock) => {
            if(this.getCurrentFormattedTime() === clock.time) {
                clock.func();
            }
        }

            if(!this.timerId) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(checkClock);
                }, 1000);
            }
        }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(clock => console.log(`Id = ${clock.id}, time = ${clock.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


function testCase() {
    let alarm = new AlarmClock();
    alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);

    let currentDatePlusOneMinute = alarm.getCurrentFormattedTime(1);

    alarm.addClock(currentDatePlusOneMinute, () => {
        console.log("Давай, вставай уже!");
        alarm.removeClock(2);
    }, 2);

    let currentDatePlusTwoMinutes = alarm.getCurrentFormattedTime(2);

    alarm.addClock(currentDatePlusTwoMinutes, () => {
        console.log("Вставай, а то проспишь!");
        alarm.stop();
        alarm.clearAlarms();        
    }, 3);

    alarm.printAlarms();
    alarm.start();
}

testCase();