SELECT name, COUNT(assistance_requests.id) AS total_assistances
FROM teachers JOIN assistance_requests
ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.id;