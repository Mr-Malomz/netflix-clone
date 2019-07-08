const headers = [{
    id: 1,
    data: ['', 'Basic', 'Standard', 'Premium']
}];

const rows_price = [
    {
        id: 1,
        title: 'Monthly price after free month ends on 7/6/19',
        price: ['US$7.99', 'US$9.99', 'US$11.99']
    }
]

const rows_check1 = [
    {
        id: 1,
        title: 'HD available',
        check: ['fa-times', 'fa-check', 'fa-check']
    },
    {
        id: 2,
        title: 'Ultra HD available',
        check: ['fa-times', 'fa-times', 'fa-check']
    }
]

const rows_details = [
    {
        id: 1,
        title: 'Screens you can watch on at the same time',
        screen: [1, 2, 4]
    }
]

const rows_check2 = [
    {
        id: 1,
        title: 'Watch on your laptop, TV, phone and tablet',
        check: ['fa-check', 'fa-check', 'fa-check']
    },
    {
        id: 2,
        title: 'Unlimited movies and TV shows',
        check: ['fa-check', 'fa-check', 'fa-check']
    },
    {
        id: 3,
        title: 'Cancel anytime',
        check: ['fa-check', 'fa-check', 'fa-check']
    },
    {
        id: 4,
        title: 'First month free',
        check: ['fa-check', 'fa-check', 'fa-check']
    },
]

//footer data
const footers = [
    {
        data: ['FAQ', 'Investor Relation', 'Privacy', 'Speed Test']
    },
    {
        data: ['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices']
    },
    {
        data: ['Account', 'Ways to Watch', 'Corporate Information', 'Netflix Original']
    },
    {
        data: ['Media Center', 'Term of Use', 'Contack Us']
    }
]

export { headers, rows_price, rows_check1, rows_details, rows_check2, footers};