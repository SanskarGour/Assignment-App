export const dealsData = [
  {
    id: 1,
    client: {
      name: "Chandan Kalita",
      initials: "CK",
      avatar: "CK"
    },
    dealName: "Chandan Deal",
    dealBudget: 5000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
      avatar: "MS"
    },
    stage: "Negotiating",
    status: "active",
    createdDate: "2024-01-15"
  },
  {
    id: 2,
    client: {
      name: "michael speed ",
      initials: "MS",
      avatar: "MS"
    },
    dealName: "some deal 4",
    dealBudget: 7000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
      avatar: "MS"
    },
    stage: "Negotiating",
    status: "active",
    createdDate: "2024-02-10"
  },
  {
    id: 3,
    client: {
      name: "Alice Brown",
      initials: "AB",
      avatar: "AB"
    },
    dealName: "Enterprise Contract",
    dealBudget: 50000,
    assignee: {
      name: "John Smith",
      initials: "JS",
      avatar: "JS"
    },
    stage: "Kickedback",
    status: "active",
    createdDate: "2024-01-25"
  }
];

export const pipelineStages = [
  {
    name: "Negotiating",
    deals: [
      {
        id: 1,
        client: {
          name: "Chandan Kalita",
          initials: "CK",
          avatar: "CK"
        },
        dealName: "Chandan Deal",
        dealBudget: 5000,
        assignee: {
          name: "Michael Speed",
          initials: "MS",
          avatar: "MS"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-01-15"
      },
      {
        id: 2,
        client: {
          name: "Michael speed",
          initials: "MS",
          avatar: "MS"
        },
        dealName: "some deal 4",
        dealBudget: 7000,
        assignee: {
          name: "Michael Speed",
          initials: "MS",
          avatar: "MS"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-10"
      },
      {
        id: 3,
        client: {
          name: "Sarah Johnson",
          initials: "SJ",
          avatar: "SJ"
        },
        dealName: "Tech Solutions Deal",
        dealBudget: 15000,
        assignee: {
          name: "Emily Davis",
          initials: "ED",
          avatar: "ED"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-15"
      }
    ],
    totalValue: 27000,
    count: 3
  },
  {
    name: "Kickedback",
    deals: [
      {
        id: 4,
        client: {
          name: "Alice Brown",
          initials: "AB",
          avatar: "AB"
        },
        dealName: "Enterprise Contract",
        dealBudget: 50000,
        assignee: {
          name: "John Smith",
          initials: "JS",
          avatar: "JS"
        },
        stage: "Kickedback",
        status: "active",
        createdDate: "2024-01-25"
      },
      {
        id: 5,
        client: {
          name: "Robert Wilson",
          initials: "RW",
          avatar: "RW"
        },
        dealName: "Marketing Campaign",
        dealBudget: 25000,
        assignee: {
          name: "Lisa Chen",
          initials: "LC",
          avatar: "LC"
        },
        stage: "Kickedback",
        status: "active",
        createdDate: "2024-02-05"
      },
      {
        id: 6,
        client: {
          name: "David Miller",
          initials: "DM",
          avatar: "DM"
        },
        dealName: "Software License",
        dealBudget: 18000,
        assignee: {
          name: "Alex Thompson",
          initials: "AT",
          avatar: "AT"
        },
        stage: "Kickedback",
        status: "inactive",
        createdDate: "2024-02-12"
      }
    ],
    totalValue: 93000,
    count: 3
  },
  {
    name: "Negotiating",
    deals: [
      {
        id: 7,
        client: {
          name: "Jennifer Lee",
          initials: "JL",
          avatar: "JL"
        },
        dealName: "Consulting Services",
        dealBudget: 12000,
        assignee: {
          name: "Mark Anderson",
          initials: "MA",
          avatar: "MA"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-18"
      },
      {
        id: 8,
        client: {
          name: "Kevin Garcia",
          initials: "KG",
          avatar: "KG"
        },
        dealName: "Cloud Migration",
        dealBudget: 35000,
        assignee: {
          name: "Rachel Green",
          initials: "RG",
          avatar: "RG"
        },
        stage: "Negotiating",
        status: "inactive",
        createdDate: "2024-02-20"
      }
    ],
    totalValue: 47000,
    count: 2
  },
  {
    name: "Negotiating",
    deals: [
      {
        id: 9,
        client: {
          name: "Amanda Taylor",
          initials: "AT",
          avatar: "AT"
        },
        dealName: "Data Analytics",
        dealBudget: 22000,
        assignee: {
          name: "Tom Wilson",
          initials: "TW",
          avatar: "TW"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-22"
      },
      {
        id: 10,
        client: {
          name: "Chris Martinez",
          initials: "CM",
          avatar: "CM"
        },
        dealName: "Mobile App Development",
        dealBudget: 45000,
        assignee: {
          name: "Jessica Brown",
          initials: "JB",
          avatar: "JB"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-25"
      },
      {
        id: 11,
        client: {
          name: "Nicole White",
          initials: "NW",
          avatar: "NW"
        },
        dealName: "E-commerce Platform",
        dealBudget: 28000,
        assignee: {
          name: "Daniel Kim",
          initials: "DK",
          avatar: "DK"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2024-02-28"
      }
    ],
    totalValue: 95000,
    count: 3
  }
];

export const totalStats = {
  totalDeals: 11,
  totalRevenue: 262000
};
