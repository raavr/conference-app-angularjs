export class AgendaData {

    constructor(room, type, timeStart, timeEnd, speakers, title) {
        this.type = type;
        this.room = room;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.speakers = speakers;
        this.title;
    }
}