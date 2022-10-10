
export default {
  contacts: [],
  form: {
    saving: false,
    contactId: null,
    loading: false,
    contact: {
      firstName: null,
      phoneNumber: null
    },
    errors: {
      agent: {},
    },
  },
  pagination: {
    pagination: {
      page: 1,
      perPage: 10,
      lastPage: 1,
      total: 0
    },
  },
  table: {
    loading: false,
    headers: [
      {
        text: 'Name',
        value: 'firstName',
        width: '20%'
      },
      {
        text: 'Phone Number',
        value: 'phoneNumber',
        width: '10%'
      },
      {
        text: 'Email',
        value: 'email',
        width: '20%'
      },
      {
        text: 'Created At',
        value: 'createdAt',
        width: '20%'
      },
      {
        text: 'Updated At',
        value: 'updatedAt',
        width: '20%'
      },
      {
        text: 'Actions',
        value: 'actions',
        width: '20%'
      },
    ]
  }
};
