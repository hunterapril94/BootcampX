const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2]
const limit = process.argv[3]
pool.query(`
SELECT students.id AS student_id, students.name AS student_name, cohorts.name AS cohort_name
FROM students JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE '${cohortName}%'
LIMIT $1;
`, [limit])
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));