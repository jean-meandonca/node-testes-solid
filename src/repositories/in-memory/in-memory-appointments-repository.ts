import { areIntervalsOverlapping } from 'date-fns'

import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository.ts"

export class InMemoryAppointmentsRepository implements AppointmentsRepository{
    public items: Appointment[] = []

    async create(appointment: Appointment): Promise<void>{
        this.items.push(appointment)
    }

    async findOverlappiAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overlappingAppointment = this.items.find(appointment => {
            return areIntervalsOverlapping(
                {start: startsAt, end: endsAt}
            )
        })
    }
}