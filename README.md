**Amrutam Appointment Management System**

A Node.js-based backend project for managing doctor-patient appointments. This system offers first-time consultation discounts, wallet deductions, and financial reporting for better healthcare service management.

**Key Features**

-Discount Tracking: First-time consultation discounts for doctor-patient pairs.
-Wallet Integration: Deducts discounts from the patient's wallet.
-Usage Monitoring: Ensures discounts are applied only once per doctor-patient pair.
-Financial Reporting: Tracks discount usage and generates detailed transaction reports.

**File Structure**

**Models**

**Doctor.js**: Defines the schema for doctors, including their name, specialization, and consultation fee.

**Patient.js**: Defines the schema for patients, including their name and wallet balance.

**Appointment.js**: Defines the schema for appointments, linking doctors and patients and tracking discount usage.

**Controllers**

**doctorController.js**: Handles CRUD operations for doctors.

**patientController.js**: Handles CRUD operations for patients.

**appointmentController.js**: Manages appointment creation, ensures discount application logic, and retrieves appointment data.

**Routes**

**doctorRoutes.js**: Routes for doctor-related operations (POST /, GET /).

**patientRoutes.js**: Routes for patient-related operations (POST /, GET /).

**appointmentRoutes.js**: Routes for appointment-related operations (POST /, GET /).

**Server**

**server.js**: The entry point of the application. Connects to MongoDB, sets up middleware, and starts the Express server.

**Database**

**db.js**: Contains the MongoDB connection logic with error handling and state checks.

After Installation,Start the server: node server.js. Use Postman or similar tools to interact with APIs.

**API Endpoints**

**Doctors**:

POST /api/doctors: Create a new doctor.

GET /api/doctors: Retrieve all doctors.

**Patients**:

POST /api/patients: Create a new patient.

GET /api/patients: Retrieve all patients.

**Appointments**:

POST /api/appointments: Create a new appointment.

GET /api/appointments: Retrieve all appointments.
