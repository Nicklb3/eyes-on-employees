SELECT * FROM department;

USE employees_db

SELECT role.title, role.id, role.salary, department.name AS department_name FROM role
LEFT JOIN department
ON role.department_id = department.id;

SELECT

SELECT employee.id, employee.first_name, employee.last_name, manager.first_name AS manager, role.title, role.salary FROM employee
LEFT JOIN employee manager ON manager.id = employee.manager_id
LEFT JOIN role
ON employee.role_id = role.id;

INSERT INTO department (name) VALUES (?);

INSERT INTO role 

INSERT INTO employee (first_name) VALUES (?);

UPDATE employee SET "column name" = "value..."

SELECT * 
FROM role
JOIN department ON role.department_id = department.id