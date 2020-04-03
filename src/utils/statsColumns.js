export const columns = [
    {
        name: 'Name',
        selector: 'ENGLISH',
        sortable: true,
    },
    {
        name: 'Today Confirmed',
        selector: 'confirmedCount',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.confirmedCount <= 10,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.confirmedCount > 10 && row.confirmedCount < 100,
                style: {
                    backgroundColor: 'rgba(248, 148, 6, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
            {
                when: row => row.confirmedCount > 100,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
    {
        name: 'Total Confirmed',
        selector: 'confirmedCountTotal',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.confirmedCountTotal <= 10,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.confirmedCountTotal > 10 && row.confirmedCountTotal < 100,
                style: {
                    backgroundColor: 'rgba(248, 148, 6, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
            {
                when: row => row.confirmedCountTotal > 100,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
    {
        name: 'Today Cured',
        selector: 'curedCount',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.curedCount <= 1,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.curedCount > 1,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
    {
        name: 'Total Cured',
        selector: 'curedCountTotal',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.curedCountTotal <= 1,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.curedCountTotal > 1,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
    {
        name: 'Today Dead',
        selector: 'deadCount',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.deadCount < 1,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.deadCount >= 1,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
    {
        name: 'Total Dead',
        selector: 'deadCountTotal',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.deadCountTotal < 1,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
            {
                when: row => row.deadCountTotal >= 1,
                style: {
                    backgroundColor: 'rgba(242, 38, 19, 0.9)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                },
            },
        ],
    },
];