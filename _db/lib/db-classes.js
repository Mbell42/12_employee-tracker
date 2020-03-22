// DATABASE CLASSES

import { dbConnect } from "./db-connect";

// Connect to database
dbConnect();

// Create Employee class
class Employee {
    constructor(firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }
    viewEmployee(data) {
    
    };
    addEmployee(data) {
        dbConnect.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
        VALUES (${JSON.stringify(this.firstName)}, ${JSON.stringify(this.lastName)}, ${this.roleID}, ${this.managerID})`,
        (err) => {
            if(err) throw(err);
        })
        console.log(`${this.firstName} ${this.lastName} has been added successfully!`);

    };
    deleteEmployee(data) {

    };
    updateEmployeeRole(data) {

    };
};

class EmployeeRole {
    constructor(id, title, salary, departmentId) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId
    }
    viewRole() {

    };
    addRole() {

    };
    deleteRole() {

    };
};

class Department {
    constructor(id, departmentName) {
        this.id = id;
        this.department_name = department_name;
    }
    viewDepartment() {

    };
    addDepartment() {

    };
    deleteDepartment() {

    };
};


module.exports = Employee, EmployeeRole, Department;