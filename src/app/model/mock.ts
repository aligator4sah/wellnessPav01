export const GENDER = [
    {label: 'Gender', value: null},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ];

  export const RACE = [
    {label:'Race', value: null},
    {label:'Caucasian', value: 'Caucasian'},
    {label:'African American',value:'African American'},
    {label:'Hispanic',value:'Hispanic'},
    {label:'Bi-Racial',value:'Bi-Racial'},
    {label:'Asian',value:'Asian'},
    {label:'White',value:'White'},
    {label:'Other',value:'Other'}
  ];



  export const LIVING = [
    {label: 'Alone', value: 'Alone'},
    {label: 'With Spouse or unrelated partner', value: "With Spouse or unrelated partner"},
    {label: 'With children', value: 'With children'},
    {label: 'With parents or guardian', value: 'With parents or guardian'},
    {label: 'With relatives other than spouse, children or parents', value: 'With relatives other than spouse, children or parents'},
    {label: 'With nonrelatives', value: 'With nonrelatives'},
  ];

  export const RESIDENT = [
    {label: 'One story(no stairs)', value: 'One story(no stairs)'},
    {label: 'Stairs to home entrance with ramp', value: 'Stairs to home entrance with ramp'},
    {label: 'Stairs to home entrance without ramp', value: 'Stairs to home entrance without ramp'},
    {label: 'Staris in home with stair lift', value: 'Staris in home with stair lift'},
    {label: 'Stairs in home without stair lift', value: 'Stairs in home without stair lift'},
    {label: 'Apartment with elevator', value: 'Apartment with elevator'},
    {label: 'Apartment without elevator', value: 'Apartment without elevator'},
  ];


  export const MARRYSTATUS = [
    {label: 'Martial Status', value: null},
    {label: 'Married', value: 'Married'},
    {label: 'Single', value: 'Single'},
    {label: 'With partner', value: 'With partner'},
    {label: 'Widowed', value: 'Widowed'},
    {label: 'Divorced', value: 'Divorced'},
    {label: 'Separated', value: 'Separated'},
  ];


  export const EMPLOYMENTS = [
    {label: 'Employement Status', value: null},
    {label: 'Employed', value: 'Employed'},
    {label: 'Unemployed', value: 'Unemployed'},
    {label: 'Volunteer', value: 'Volunteer'},
    {label: 'Retired', value: 'Retired'},
    {label: 'Unable to work', value: 'Unable to work'},
  ];


  export const EMPLOYSTATUS = [
    {label: 'Employment Type', value: null},
    {label: 'Full time', value: 'Full time'},
    {label: 'Part time', value: 'Part time'},
    {label: 'Seasonal', value: 'Seasonal'},
    {label: 'looking for job', value: 'looking for job'},
    {label: 'Not looking for job', value: 'Not looking for job'},
  ];

  export const STATES = [
    {label: 'States', value: null},
    {label: 'Alabama', value: 'Alabama'},
    {label: 'Alaska', value: 'Alaska'},
    {label: 'Arizona', value: 'Arizona'},
    {label: 'Arkansas', value: 'Arkansas'},
    {label: 'California', value: 'California'},
    {label: 'Colorado', value: 'Colorado'},
    {label: 'Connecticut', value: 'Connecticut'},
    {label: 'Delaware', value: 'Delaware'},
    {label: 'Florida', value: 'Florida'},
    {label: 'Georgia', value: 'Georgia'},
    {label: 'Hawaii', value: 'Hawaii'},
    {label: 'Idaho', value: 'Idaho'},
    {label: 'Illinios', value: 'Illinios'},
    {label: 'Indiana', value: 'Indiana'},
    {label: 'Iowa', value: 'Iowa'},
    {label: 'Kansas', value: 'Kansas'},
    {label: 'Kentucky', value: 'Kentucky'},
    {label: 'Louisiana', value: 'Louisiana'},
    {label: 'Maine', value: 'Maine'},
    {label: 'Maryland', value: 'Maryland'},
    {label: 'Massachusetts', value: 'Massachusetts'},
    {label: 'Michigan', value: 'Michigan'},
    {label: 'Minnesota', value: 'Minnesota'},
    {label: 'Mississippi', value: 'Mississippi'},
    {label: 'Missouri', value: 'Missouri'},
    {label: 'Montana', value: 'Montana'},
    {label: 'Nebraska', value: 'Nebraska'},
    {label: 'Nevada', value: 'Nevada'},
    {label: 'New Hampshire', value: 'New Hampshire'},
    {label: 'New Jersey', value: 'New Jersey'},
    {label: 'New Mexico', value: 'New Mexico'},
    {label: 'New York', value: 'New York'},
    {label: 'North Carolina', value: 'North Carolina'},
    {label: 'North Dakota', value: 'North Dakota'},
    {label: 'Ohio', value: 'Ohio'},
    {label: 'Oklahoma', value: 'Oklahoma'},
    {label: 'Oregon', value: 'Oregon'},
    {label: 'Pennsylvania', value: 'Pennsylvania'},
    {label: 'Rhode Island', value: 'Rhode Island'},
    {label: 'South Carolina', value: 'South Carolina'},
    {label: 'South Dakota', value: 'South Dakota'},
    {label: 'Tennessee', value: 'Tennessee'},
    {label: 'Texas', value: 'Texas'},
    {label: 'Utah', value: 'Utah'},
    {label: 'Vermont', value: 'Vermont'},
    {label: 'Virginia', value: 'Virginia'},
    {label: 'Washington', value: 'Washington'},
    {label: 'West Virgini', value: 'West Virgini'},
    {label: 'Wisconsin', value: 'Wisconsin'},
    {label: 'Wyoming', value: 'Wyoming'},
  ];

  export const CATEGORY = [
    {label: 'Initial visit', value: 'Initial visit'},
    {label: 'Follow up visit', value: 'Follow up visit'},
    {label: 'Preventive checkup', value: 'Preventive checkup'},
    {label: 'In office consultation', value: 'In office consultation'},
    {label: 'Review outcomes', value: 'Review outcomes'},
    {label: 'Telephone calls', value: 'Telephone calls'}
  ];

  export const VALIDATION_MESSAGE = {
    'firstname': [
      { type: 'required', message: 'Firstname is required' },
    ],
    'lastname': [
      { type: 'required', message: 'Lastname is required' },
    ],
    'birthday': [
      { type: 'required', message: 'Birthday is required' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'gender': [
      { type: 'required', message: 'Gender is required' },
    ],
    'race': [
      { type: 'required', message: 'Race is required' },
    ],
    'address1': [
      { type: 'required', message: 'Detail adress is required' },
    ],
    'city': [
      { type: 'required', message: 'City is required' },
    ],
    'state': [
      { type: 'required', message: 'State is required' },
    ],
    'zipcode': [
      { type: 'required', message: 'Zipcode is required' },
      { type: 'pattern', message: 'Enter a valid zipcode' }
    ],
    'livingArranges': [
      { type: 'required', message: 'livingArranges is required' },
    ],
    'residentCondition': [
      { type: 'required', message: 'residentCondition is required' },
    ],
    'married': [
      { type: 'required', message: 'marry status is required' },
    ],
    'employment': [
      { type: 'required', message: 'employment status is required' },
    ],
    'phone': [
      { type: 'required', message: 'phone number is required' },
      { type: 'pattern', message: 'You must enter 10 digits numbers' },
    ]

    };

  export const DISPOSITION = [
    {label: 'A. No follow up planned', value: 'No follow up planned'},
    {label: 'B. Follow up planned or scheduled', value: 'Follow up planned or scheduled'},
    {label: 'C. Referred elsewhere', value: 'Referred elsewhere'}
  ];


  export const USER1 = {
    id: 1,
    username: 'cejf342',
    firstname: 'Sally',
    midname: '',
    lastname: 'Hunter',
    dob: '10/23/1973',
    gender: 'Female'
  };

  export const DEPARTMENT = [
    {label: 'Athletic Training & Sports Medicine', value: 'Athletic Training & Sports Medicine'},
    {label: 'Audiology & Speech-Language Pathology', value: 'Audiology & Speech-Language Pathology'},
    {label: 'Counseling', value: 'Counseling'},
    {label: 'Emergency Medicine', value: 'Emergency Medicine'},
    {label: 'Nutrition & Wellness', value: 'Nutrition & Wellness'},
    {label: 'Occupational Therapy', value: 'Occupational Therapy'},
    {label: 'Physical Therapy', value: 'Physical Therapy'},
    {label: 'Physician Assistant Studies', value: 'Physician Assistant Studies'},
    {label: 'Prosthetics & Orthotics', value: 'Prosthetics & Orthotics'}
  ];

  export const ROLES = [
    {label: 'Teacher', value: 'Teacher'},
    {label: 'Student', value: 'Student'}
  ];



