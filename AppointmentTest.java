class Appointment {
    private String patientName;
    private String doctorName;
    private String appointmentDate;
    private String appointmentTime;
    private double consultationFee;

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public double getConsultationFee() {
        return consultationFee;
    }

    // Validation: fee cannot be negative
    public void setConsultationFee(double consultationFee) {
        if (consultationFee < 0) {
            System.out.println("Error: Consultation fee cannot be negative.");
        } else {
            this.consultationFee = consultationFee;
        }
    }

    // Display method
    public void displayAppointmentInfo() {
        System.out.println("----- Appointment Details -----");
        System.out.println("Patient Name     : " + patientName);
        System.out.println("Doctor Name      : " + doctorName);
        System.out.println("Appointment Date : " + appointmentDate);
        System.out.println("Appointment Time : " + appointmentTime);
        System.out.println("Consultation Fee :  " + consultationFee);
        System.out.println();
    }
}

public class AppointmentTest {
    public static void main(String[] args) {

        // First appointment
        Appointment a1 = new Appointment();
        a1.setPatientName("Rahul");
        a1.setDoctorName("Dr. Sharma");
        a1.setAppointmentDate("27-01-2026");
        a1.setAppointmentTime("10:00 AM");
        a1.setConsultationFee(500);

        // Second appointment
        Appointment a2 = new Appointment();
        a2.setPatientName("Anjali");
        a2.setDoctorName("Dr. Mehta");
        a2.setAppointmentDate("28-01-2026");
        a2.setAppointmentTime("12:30 PM");
        a2.setConsultationFee(700);

        // Third appointment
        Appointment a3 = new Appointment();
        a3.setPatientName("Kiran");
        a3.setDoctorName("Dr. Reddy");
        a3.setAppointmentDate("29-01-2026");
        a3.setAppointmentTime("4:00 PM");
        a3.setConsultationFee(600);

        // Display all appointments
        a1.displayAppointmentInfo();
        a2.displayAppointmentInfo();
        a3.displayAppointmentInfo();
    }
}
