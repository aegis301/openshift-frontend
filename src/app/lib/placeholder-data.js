
const employees = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        percentage: 100
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        percentage: 100
    },
    {
        id: 3,
        first_name: 'John',
        last_name: 'Smith',
        percentage: 50
    },
    {
        id: 4,
        first_name: 'Jane',
        last_name: 'Smith',
        percentage: 50
    },
    {
        id: 5,
        first_name: 'John',
        last_name: 'Johnson',
        percentage: 100
    },
    {
        id: 6,
        first_name: 'Jane',
        last_name: 'Johnson',
        percentage: 100
    },
    {
        id: 7,
        first_name: 'John',
        last_name: 'Williams',
        percentage: 100
    },
    {
        id: 8,
        first_name: 'Jane',
        last_name: 'Williams',
        percentage: 100
    },
    {
        id: 9,
        first_name: 'John',
        last_name: 'Jones',
        percentage: 100
    },
    {
        id: 10,
        first_name: 'Jane',
        last_name: 'Jones',
        percentage: 100
    }

]

const teams = [
    {
        id: 1,
        name: 'Team 1',
        employees: [1, 2, 3, 4]
    },
    {
        id: 2,
        name: 'Team 2',
        employees: [5, 6, 7, 8]
    },
    {
        id: 3,
        name: 'Team 3',
        employees: [9, 10]
    }
]

const shift_templates = [
    {
        id: 1,
        name: 'Early Shift',
        start_time: '07:00',
        end_time: '16:00',
        possible_teams: [1, 2],
    },
    {
        id: 2,
        name: 'Late Shift',
        start_time: '10:00',
        end_time: '19:00',
        possible_teams: [1, 2],
    },
    {
        id: 3,
        name: 'Night Shift',
        start_time: '15:00',
        end_time: '00:00',
        possible_teams: [2, 3],
    }
]

