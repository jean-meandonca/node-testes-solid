import { Appointment } from "../entities/appointment";

export interface AppointmentsRepository {
    create(appointment: Appointment): Promise<void>
    findOverlappiAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null>
}