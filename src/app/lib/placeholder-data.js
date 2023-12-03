const employess = [
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

const shift_templates = [
    {
        id: 1,
        name: 'Early Shift',
        start_time: '07:00',
        end_time: '16:00',
        employees: [1, 2]
    },
    {
        id: 2,
        name: 'Late Shift',
        start_time: '10:00',
        end_time: '19:00',
    },
    {
        id: 3,
        name: 'Night Shift',
        start_time: '15:00',
        end_time: '00:00',
    }
]

const shifts = [
    {
        id: 1,
        shift_template: 1,
        employess: [1, 2]
    },
    {
        id: 2,
        shift_template: 2,
        employess: [3, 4]
    },
    {
        id: 3,
        shift_template: 3,
        employess: [5, 6]
    },
    {
        id: 4,
        shift_template: 1,
        employess: [7, 8]
    },
    {
        id: 5,
        shift_template: 2,
        employess: [9, 10]
    }
]