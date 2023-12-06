const { db } = require('@vercel/postgres');
const { v4: uuidv4 } = require('uuid');
const {
  employees,
  teams,
  shift_templates,
} = require('../app/lib/placeholder-data.js');

async function seedEmployees(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "employees" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS employees (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        percentage INT NOT NULL
      );
    `;

    console.log(`Created "employees" table`);

    // Insert data into the "employees" table
    const insertedEmployees = await Promise.all(
      employees.map(async (employee) => {
        return client.sql`
        INSERT INTO employees (id, first_name, last_name, percentage)
        VALUES (${employee.id}, ${employee.first_name}, ${employee.last_name}, ${employee.percentage});
      `;
      }),
    );

    console.log(`Seeded ${insertedEmployees.length} employees`);

    return {
      createTable,
      employees: insertedEmployees,
    };
  } catch (error) {
    console.error('Error seeding employees:', error);
    throw error;
  }
}

async function seedTeams(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "teams" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS teams (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    employees UUID[] NOT NULL,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "teams" table`);

    // Insert data into the "teams" table
    const insertedTeams = await Promise.all(
      teams.map(
        async (team, employees) => {
        return client.sql`
        INSERT INTO teams (id, employees, name)
        VALUES (${team.id}, ${team.employees}, ${team.name})
        ON CONFLICT (id) DO NOTHING;
      `},
      ),
    );

    console.log(`Seeded ${insertedTeams.length} teams`);

    return {
      createTable,
      teams: insertedTeams,
    };
  } catch (error) {
    console.error('Error seeding teams:', error);
    throw error;
  }
}

async function seedShiftTeamplates(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "shift_templates" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS shift_templates (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL,
        possible_teams UUID[] NOT NULL
      );
    `;

    console.log(`Created "shift_templates" table`);

    // Insert data into the "shift_templates" table
    const insertedShitTemplates = await Promise.all(
      shift_templates.map(
        (shift_template) => client.sql`
        INSERT INTO shift_templates (id, name, start_time, end_time, possible_teams)
        VALUES (${shift_template.id}, ${shift_template.name}, ${shift_template.start_time}, ${shift_template.end_time}, ${shift_template.possible_teams});
      `,
      ),
    );

    console.log(`Seeded ${insertedShitTemplates.length} shift templates`);

    return {
      createTable,
      shift_templates: insertedShitTemplates,
    };
  } catch (error) {
    console.error('Error seeding shift_templates:', error);
    throw error;
  }
}

function remap_ids(data) {
  data.map((item) => {
    item.id = uuidv4();
    return item;
  });
}

async function main() {
  const client = await db.connect();
  console.log('Connected to Postgres');
  // map new ids for employees
  remap_ids(employees);
  remap_ids(teams);
  remap_ids(shift_templates);
    // map four random employees to each team
  teams.map((team) => {
      team.employees = employees
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((employee) => employee.id);
      return team;
    }
  );
    // map two random teams to each shift_template
  shift_templates.map((shift_template) => {
      shift_template.possible_teams = teams
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map((team) => team.id);
      return shift_template;
    });
  await seedEmployees(client);
  await seedTeams(client);
  await seedShiftTeamplates(client);


  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});