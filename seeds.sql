INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Rafael', 'Vasquez', 1, NULL),
    ('Amanda', 'Nelson', 2, NULL),
    ('Luis', 'Hernandez', 3, 1),
    ('Jonathan', 'Smith', 4, NULL),
    ('Bethany', 'Green', 5, NULL),
    ('Alejandro', 'Castro', 6, NULL),
    ('Sofia', 'Mantas', 7, NULL),
    ('Remmington', 'Pascone', 8, NULL);