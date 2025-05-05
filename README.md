# School Management System
<h2 align="left">Introduction:</h2>

The **School Management System (SMS)** is a Complete program designed to efficiently regulate several aspects of a university or other learning environment. By means of a single platform, this system maximizes operations and increases communication, so permitting perfect interactions between several user roles: **teachers, students, administrators, and non-teaching staff**. SMS lets simple handling of attendance, salary processing, and fee administration guarantees a controlled and user-friendly experience.

<h2 align="left"> Features:</h2>

### 1. **User Roles**

- Controls broad system capabilities, user rights, and  administr reports.
- Class scheduling, student attendance, and grade entries are within Teacher control.
- As Student see fee status, personal attendance records, and grades.
- Among the non-teaching staff members are office workers and support staff handling non-academic events and services.

### 2. **Modules**

- **Student Attendance**: allows teachers to record and track attendance for every class utilizing administrative data in addition to their own.
- **Teacher Attendance**: Salary processing and scheduling benefit from daily attendance records of teachers.
- **Non-Teaching Staff Attendance**: Tracking non-teaching staff members helps to ensure accountability.
- Using **Teacher Salary Management** computes teacher pay based on attendance, payroll policies, and other adjustable criteria.
- Payroll for non-teaching staff considering attendance and needs particular to their roles is handled by **Non-Teaching Workers Salary Management**.
- By way of access to prior payment records, **Student Fees Management** presents an interface enabling users to examine and control fee payments with efficiency..

### 3. **Benefits**

- Automating some administrative tasks helps one to save the necessary documentation and physical work..
- Transparency assures honest communication among government officials, teachers, and students themselves.
- Scalability guarantees efficient and safe data processing since it allows the system to expand with the need of the business.

<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)


<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- jsonwebtoken
- moment
- mongoose
- nodemon
- validator

<h2 align="left"> 1. Database Structure</h2>

The platform will require a relational database to manage Admin, Non-Teaching Staff Attendance, Non Teaching Staff, non Teaching Staff Salary, student Attendance, student Fees, student, teacher Attendance,teacher,teachersalary. Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) Admin

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| email | String |
| image | String |
| password | String |
| isAdmin | Boolean |

### b) Non Teaching Staff Attendance

| **Field Name** | **Type** |
| --- | --- |
| admin | String |
| attendance_date | Date |
| staff_name | String |
| staffId | Number |
| present | Boolean |

### c) Non Teaching Staff

| **Field Name** | **Type** |
| --- | --- |
| registered_by | Ref. Object → Admin |
| staff_name | String |
| staffId | Number |
| qualification | String |
| address | String |
|  contact_no | String |
| gender | String |
| previous_school | String |
| age | Number |
|  email | String |
| estimated_salary | Number |
| image | String |
| work | String |

### d) non Teaching Staff Salary

| **Field Name** | **Type** |
| --- | --- |
| admin | String |
| staff_name | String |
| staffId | String |
| salaryForTheYear | String |
| salaryForTheMonth | String |
| salaryAmount | Number |

### e) student Attendance

| **Field Name** | **Type** |
| --- | --- |
| class_teacher | String |
| attendance_date | Date |
| classname | String |
| student_name | String |
| classname | String |
| roll_no | Number |
| present | Boolean |

### f) student Fees

| **Field Name** | **Type** |
| --- | --- |
| accountant | String |
| student_name | Date |
| classname | String |
| roll_no | String |
| month_name | String |
| year | String |
| monthly_fees | Number |
| hostel_fees | Number |
| laboratory_fees | Number |
| computer_fees | Number |
| exam_fees | Number |
| miscellaneous | Number |

### g) student

| **Field Name** | **Type** |
| --- | --- |
| registered_by | Ref. Object → Admin |
| student_name | String |
| classname | String |
| roll_no | Number |
| address | String |
| parents_name | String |
| contact_no | String |
| gender | String |
| previous_dues | Number |
| age | String |
| email | String |
| registration_fees | Number |
| image | String |

### h) teacher Attendance

| **Field Name** | **Type** |
| --- | --- |
| admin | String |
| attendance_date | Date |
| teacher_name | String |
| teacherId | Number |
| present | Boolean |

### i) teacher

| **Field Name** | **Type** |
| --- | --- |
| registered_by | Ref. Object → Admin |
| teacher_name | String |
| teacherId | String |
| qualification | Number |
| address | String |
| contact_no | String |
| gender | String |
| previous_schools | String |
| age | String |
| email | String |
| estimated_salary | Number |
| image | String |
| subjectToTeach | String |

### j)teachersalary

| **Field Name** | **Type** |
| --- | --- |
| admin | String |
| teacher_name | String |
| teacherId | String |
| salaryForTheYear | String |
| salaryForTheMonth | String |
| salaryAmount | Number |

<h2 align="left"> Use Cases</h2>

1. **User Registration and Management**
    - **Add/Update/Delete Users**: User registration and administration allows you to register, change, or delete fresh system users.
    - **User Roles**: Assign roles normal or administrative user then exercise user rights.
2. **Book Management**
    - **Add/Update/Delete Books**: add new books, change existing entries, or delete old ones.
    - **Search Books**: Search author; book names, genre; availability; classification;
3. **Category Management**
    - See here a list of every book falling within a particular category: ** Sort books** according to **category**.
4. **Borrowing and Returning Books**
    - **Initiate Borrowing**: Note a fresh borrowing transaction and adjust the book's availability state.
    - **Return Book**: Record the return, note the transaction as whole, then change availability.
5. **Transaction Management**
    - **View Transaction History**: Track borrowing and return history in Transaction Management using either user or book.
    - **Overdue Alerts**: Examine past-due records and, if needed, notify customers or apply penalties.

<h2 align="left">Development with ZenDevx:</h2> 
<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>
<h2 align="left">🐦 Connect With Me:</h2>
           
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
