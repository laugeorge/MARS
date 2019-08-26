SELECT 
    task AS 'TODO',
     CASE
        WHEN assigned = 0 THEN 'NOT ASSIGNED'
         ELSE 'ASSIGNED'
         -- ELSE CONCAT(first_name, ' ', last_name)
     END AS 'ASSIGNMENT',
     CASE
        WHEN completed = 0 THEN 'NOT COMPLETED'
        ELSE 'COMPLETED'
     END AS 'STATUS',
     type
FROM todo
    LEFT JOIN jobs
        ON todo.role_id = jobs.role_id
    LEFT JOIN roles
        ON roles.id = todo.role_id
    GROUP BY task
    ORDER BY created_at;
Collapse



