const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2]
pool.query(`SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests.id) AS total_assistances
FROM cohorts JOIN students 
ON cohorts.id = students.cohort_id
JOIN assistance_requests ON assistance_requests.student_id = students.id
JOIN teachers ON teachers.id = assistance_requests.teacher_id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;`, [cohortName]).then((res) => {
  console.log(res.rows)
}).catch(err => console.error('query error', err.stack))