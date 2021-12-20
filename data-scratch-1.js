classes = [
  "graph-gallery-spaces word-cloud",
  "graph-keywords word-cloud",
  "graph-exhibition-contact word-cloud",
  "final-thoughts word-cloud",
  "negative-shoutout word-cloud",
  "positive-shoutout word-cloud",
  "extra-duties word-cloud",
  "schools-taught-at word-cloud",
  "city-benefits word-cloud",
  "previous-city word-cloud",
  "cities-neighborhoods-cloud word-cloud",
  "past-degrees word-cloud",
  "current-school word-cloud",
  "job-types word-cloud",
  "art-resources word-cloud",
  "social-media-negatives word-cloud",
  "social-media-positives word-cloud",
  "sale-types-cloud word-cloud",
  "studio-visit-sources-cloud word-cloud",
  "studio-visitors-cloud word-cloud",
  "sales-mediums-cloud word-cloud",
  "graph-buyers word-cloud",
  "education-level",
  "education-level-mobile",
  "tax-expenses",
  "current-student",
  "job-app-count",
  "unemployment",
  "studio-hours",
  "studio-days",
  "job-income",
  "studio-price",
  "studio-size",
  "studio-space-type",
  "studio-space-type-mobile",
  "extra-duty-pay",
  "survey-time",
  "campuses-taught-count",
  "classes-taught-count",
  "reception-count",
  "gallery-priority",
  "education-experience-rating",
  "any-online-sales",
  "personal-website-2016",
  "union-member",
  "union-benefits",
  "discrimination",
  "art-world-welcome",
  "teaching-environment-rating",
  "closed-galleries",
  "opened-galleries",
  "fair-count",
  "student-loan-payment",
  "student-loans",
  "personal-website",
  "social-media-service-rating",
  "graph-paid-social-media",
  "instagram-more-less",
  "graph-instagram-frequency",
  "graph-facebook-more-less",
  "graph-facebook-frequency",
  "graph-social-media-priority",
  "graph-collector-treatment",
  "graph-sales-sum",
  "graph-sale-platforms",
  "graph-sale-platforms-mobile",
  "graph-visit-count",
  "graph-visit-priority",
  "graph-selling-priority",
  "graph-grant-sum",
  "graph-grant-count",
  "graph-grant-app-count",
  "graph-residency-count",
  "graph-residency-app-count",
  "graph-residency-priority",
  "graph-legal-paperwork",
  "graph-gallery-representation",
  "graph-event-organization",
  "graph-group-show-count",
  "graph-gender",
  "graph-socialmedia-features",
  "graph-publication-count",
  "graph-application-fees",
  "graph-show-applications",
  "graph-solo-show-count",
  "graph-exhibitions-priority",
  "graph-age",
  "graph-race",
  "graph-orientation",
  "graph-found-survey",
]




const DATA_TOP_VALUES = {
  FINAL_THOUGHTS: [
    { name: 'you', value: 9 },
    { name: 'thank', value: 9 },
    { name: 'art', value: 7 },
    { name: 'results', value: 6 },
    { name: 'artists', value: 5 }
  ],
  NEGATIVE_SHOUTOUT: [
    { name: 'Alaska Government', value: 1 },
    { name: 'All of Them', value: 1 },
    { name: 'Museums accepting funding from the Sacklers', value: 1 },
    { name: 'Money Laundering Galleries / Dealers', value: 1 },
    { name: 'Blue Sky Gallery', value: 1 }
  ],
  POSITIVE_SHOUTOUT: [
    { name: 'Verge Center for the Arts', value: 3 },
    { name: 'Aggregate Space Gallery', value: 1 },
    { name: 'Anchorage Museum', value: 1 },
    { name: 'Art Resources', value: 1 },
    { name: 'Burchfield Art Center', value: 1 }
  ],
  DISCRIMITATION: [
    { name: 'Not sure / hard to say', value: '.36' },
    { name: 'I don’t believe so', value: '.27' },
    { name: 'No, absolutely not', value: '.15' },
    { name: 'Yes, I believe so', value: '.14' },
    { name: 'Yes, absolutely', value: '.08' }
  ],
  ART_WORLD_WELCOME: [
    { name: 'Yes, Somewhat', value: '.337' },
    { name: 'No, not particularly', value: '.248' },
    { name: 'Not sure / hard to say', value: '.198' },
    { name: 'Yes, absolutely', value: '.149' },
    { name: 'No, absolutely not', value: '.069' }
  ],
  SURVEY_TIME: [
    { name: '10-20', value: '.439' },
    { name: '1-10', value: '.347' },
    { name: '20-30', value: '.194' },
    { name: '30-60', value: '.02' }
  ],
  EXTRA_DUTY_PAY: [
    { name: 'No, definitely not', value: '.3' },
    { name: 'Yes, definitely', value: '.25' },
    { name: "I don't believe so", value: '.2' },
    { name: 'Unsure', value: '.15' },
    { name: 'I believe so', value: '.1' }
  ],
  EXTRA_DUTIES: [
    { name: 'volunteer / community events', value: 5 },
    { name: 'NA / none', value: 4 },
    { name: 'buying / managing supplies', value: 3 },
    { name: 'academic advisor', value: 2 },
    { name: 'mural painting', value: 2 }
  ],
  UNION_BENEFITS: [ { name: 'yes', value: '.609' }, { name: 'no', value: '.399' } ],
  UNION_MEMBER: [
    { name: 'no', value: '.771' },
    { name: 'yes', value: '.208' },
    { name: 'not sure', value: '.021' }
  ],
  TEACHING_ENVIRONMENT_RATING: [
    { name: 'generally positive', value: '0.484' },
    { name: 'neutral / mixed', value: '0.323' },
    { name: 'extremely positive', value: '0.129' },
    { name: 'extremely poor', value: '0.032' },
    { name: 'not sure / hard to say', value: '0.032' }
  ],
  CAMPUSES_TAUGHT_COUNT: [
    { name: '1', value: '.667' },
    { name: '2', value: '.222' },
    { name: '3', value: '.074' },
    { name: '4', value: '.037' }
  ],
  CLASSES_TAUGHT_COUNT: [
    { name: '1', value: '.481' },
    { name: '4', value: '.185' },
    { name: '3', value: '.148' },
    { name: '2', value: '.111' },
    { name: '5', value: '.074' }
  ],
  SHOOLS_TAUGHT_AT: [
    { name: 'A Phillip Randolph Highschool', value: 2 },
    { name: 'Innovations Diploma Prep', value: 2 },
    { name: 'Middle School', value: 2 },
    { name: 'Molloy College', value: 2 },
    { name: 'Art Supply Demonstrator', value: 1 }
  ],
  CLOSED_GALLERIES: [
    { name: '0', value: '.317' },
    { name: 'not sure', value: '.297' },
    { name: '1-2', value: '.238' },
    { name: '3-5', value: '.129' },
    { name: '6-10', value: '.01' }
  ],
  OPENED_GALLERIES: [
    { name: '0', value: '.317' },
    { name: '1-2', value: '.277' },
    { name: 'not sure', value: '.208' },
    { name: '3-5', value: '.178' },
    { name: '6-10', value: '.01' }
  ],
  ART_FAIR_COUNT: [
    { name: '0', value: '.505' },
    { name: '1-2', value: '.356' },
    { name: '3-5', value: '.109' },
    { name: '6-10', value: '.02' },
    { name: '10+', value: '.01' }
  ],
  RECEPTION_COUNT: [
    { name: '3-5', value: '.198' },
    { name: '11-25', value: '.198' },
    { name: '6-10', value: '.188' },
    { name: '1-2', value: '.168' },
    { name: '0', value: '.139' }
  ],
  GALLERY_PRIORITY: [
    { name: 'somewhat important', value: 0.48 },
    { name: 'extremely important', value: 0.31 },
    { name: 'not important', value: 0.2 },
    { name: 'not sure', value: 0.01 }
  ],
  CITY_BENEFITS: [
    { name: 'Affordability', value: 35 },
    { name: 'Diverse Population', value: 24 },
    { name: 'Good Weather', value: 10 },
    { name: 'Safety', value: 10 },
    { name: 'Quiet', value: 6 }
  ],
  PREVIOUS_CITY: [
    { name: 'New York', value: 9 },
    { name: 'Same as 2019', value: 8 },
    { name: 'CA', value: 6 },
    { name: 'Los Angeles', value: 6 },
    { name: 'Sacramento', value: 4 }
  ],
  STUDENT_LOAN_PAYMENT: [
    { name: '$0', value: '.663' },
    { name: '$100 - $200', value: '.079' },
    { name: '$300 - $400', value: '.067' },
    { name: '$200 - $300', value: '.056' },
    { name: '$50 - $100', value: '.045' }
  ],
  STUDENT_LOANS: [
    { name: '$0', value: '.62' },
    { name: '$20,000 - $50,000', value: '.14' },
    { name: '$50,000 - $100,000', value: '.08' },
    { name: '$100,000 - $200,000', value: '.06' },
    { name: '$1 - $5,000', value: '.04' }
  ],
  EDUCATION_EXPERIENCE_RATING: [
    { name: '8', value: '.204' },
    { name: '7', value: '.194' },
    { name: '10', value: '.163' },
    { name: '9', value: '.143' },
    { name: '6', value: '.112' }
  ],
  PAST_DEGREES: [
    { name: 'BFA', value: 33 },
    { name: 'MFA', value: 21 },
    { name: 'BA', value: 14 },
    { name: 'Painting', value: 14 },
    { name: 'San Francisco Art Institute', value: 11 }
  ],
  CURRENT_SCHOOL: [
    { name: 'An Independent Study Workshop', value: 1 },
    { name: 'App Academy', value: 1 },
    { name: 'Broward College', value: 1 },
    { name: 'Canada College and College of San Mateo', value: 1 },
    { name: 'Cecil College', value: 1 }
  ],
  CURRENT_STUDENT: [
    { name: 'No', value: '.75' },
    { name: 'Yes, full time', value: '.21' },
    { name: 'Yes, part time', value: '.04' }
  ],
  EDUCATION_LEVEL: [
    { name: 'MFA', value: '.26' },
    { name: 'Some College', value: '.22' },
    { name: 'BFA', value: '.17' },
    { name: 'Bachelors Degree', value: '.12' },
    { name: 'Not yet completed High School', value: '.06' }
  ],
  TAX_EXPENSES: [
    { name: 'No', value: '.554' },
    { name: 'Yes', value: '.307' },
    { name: "didn't file 2019 taxes", value: '.099' },
    { name: 'Not sure / hard to say', value: '.04' }
  ],
  JOB_INCOME: [
    { name: '$5,000 - $15,000', value: '.19' },
    { name: '$0', value: '.18' },
    { name: '$1 - $5,000', value: '.18' },
    { name: '$15,000 - $25,000', value: '.18' },
    { name: '$25,000 - $50,000', value: '.13' }
  ],
  JOB_APP_COUNT: [
    { name: '0', value: '.47' },
    { name: '1-2', value: '.17' },
    { name: '2-5', value: '.14' },
    { name: '20+', value: '.09' },
    { name: '5-10', value: '.07' }
  ],
  UNEMPLOYMENT: [ { name: 'no', value: '.911' }, { name: 'yes', value: '.089' } ],
  JOB_TYPES: [
    { name: 'None / full time student', value: 10 },
    { name: 'Retail', value: 8 },
    { name: 'Restaurant work / server', value: 6 },
    { name: 'Teaching', value: 5 },
    { name: 'Artist assistant', value: 4 }
  ],
  STUDIO_HOURS: [
    { name: '2-5', value: '.455' },
    { name: '5-7', value: '.198' },
    { name: '7-10', value: '.109' },
    { name: '10+', value: '.089' },
    { name: 'N/A', value: '.079' }
  ],
  STUDIO_DAYS: [
    { name: '3', value: '.18' },
    { name: '5', value: '.17' },
    { name: '4', value: '.15' },
    { name: '7', value: '.13' },
    { name: '2', value: '.11' }
  ],
  STUDIO_PRICE: [
    { name: 'studio mixed with living space', value: '.429' },
    { name: '$0', value: '.235' },
    { name: '$250 - $500', value: '.102' },
    { name: '$101 - $250', value: '.071' },
    { name: '$501 - $750', value: '.071' }
  ],
  STUDIO_SIZE: [
    { name: 'A desk / table etc. (< 80 ft^2)', value: '.303' },
    { name: 'About 10 by 15 feet (150 ft^2)', value: '.202' },
    { name: 'About 8 by 10 feet (80 ft^2)', value: '.141' },
    { name: 'About 15 by 20 feet (300 ft^2)', value: '.141' },
    { name: 'More than 20 by 30 feet (600+ ft^2)', value: '.081' }
  ],
  STUDIO_SPACE_TYPE: [
    {
      name: 'Dedicated room / desk / area in living space',
      value: 0.294478527607362
    },
    {
      name: 'Completely mixed up with living space',
      value: 0.27607361963190186
    },
    { name: 'Private studio space', value: 0.1165644171779141 },
    {
      name: 'Space provided by a school / residency etc.',
      value: 0.09815950920245399
    },
    {
      name: 'Shared studio split with another artist / artists',
      value: 0.07975460122699386
    }
  ],
  ART_RESOURCES: [
    { name: 'Instagram', value: 90 },
    { name: 'Google Images', value: 43 },
    { name: 'Facebook', value: 35 },
    { name: 'Hyperallergic', value: 33 },
    { name: 'ARTnews', value: 28 }
  ],
  PERSONAL_WEBSITE_2016: [
    { name: 'yes', value: '.515' },
    { name: 'no', value: '.434' },
    { name: "can't recall", value: '.051' }
  ],
  PERSONAL_WEBSITE: [
    { name: 'Yes and I plan to continue', value: '.7' },
    { name: 'No but I plan to make one', value: '.2' },
    { name: 'No and I have no plans to doso', value: '.09' },
    { name: 'Yes but I plan to stop', value: '.01' }
  ],
  SOCIAL_MEDIA_NEGATIVES: [
    { name: 'Algorithms', value: 3 },
    { name: 'Likes', value: 2 },
    { name: 'order of posts', value: 2 },
    {
      name: 'algorithm works against artists who don’t post as often',
      value: 1
    },
    { name: 'All', value: 1 }
  ],
  SOCIAL_MEDIA_POSITIVES: [
    { name: 'Public Likes', value: 7 },
    { name: 'likes', value: 5 },
    { name: 'Follower counts', value: 3 },
    { name: 'Followers', value: 3 },
    { name: 'Building followers', value: 1 }
  ],
  SALE_TYPES: [
    { name: 'Instagram', value: 35 },
    { name: 'galleries', value: 29 },
    { name: 'studio visits', value: 22 },
    { name: 'events', value: 18 },
    { name: 'Facebook', value: 14 }
  ],
  SOCIAL_MEDIA_SERVICE_RATING: [
    { name: '7', value: '.217' },
    { name: '2', value: '.117' },
    { name: '5', value: '.117' },
    { name: '6', value: '.117' },
    { name: '3', value: '.083' }
  ],
  PAID_SOCIAL_MEDIA: [
    { name: "didn't pay for any promo", value: '0.792' },
    { name: 'paid for promo but no impact', value: '0.099' },
    { name: 'paid for promo with some impact', value: '0.069' },
    { name: 'not sure / don’t recall', value: '0.03' },
    { name: 'paid for promo with large impact', value: '0.01' }
  ],
  INSTAGRAM_MORE_LESS: [
    { name: 'Somewhat more', value: '0.33' },
    { name: 'A lot more', value: '0.3' },
    { name: 'About the same', value: '0.2' },
    { name: 'Somewhat less', value: '0.11' },
    { name: 'Not sure / hard to say', value: '0.04' }
  ],
  FACEBOOK_MORE_LESS: [
    { name: 'A lot less', value: '0.333' },
    { name: 'About the same', value: '0.271' },
    { name: 'Somewhat more', value: '0.125' },
    { name: 'Somewhat less', value: '0.125' },
    { name: 'Not sure / hard to say', value: '0.104' }
  ],
  INSTAGRAM_FREQUENCY: [
    { name: '1-3 times per month', value: '0.416' },
    { name: '1-3 times per week', value: '0.287' },
    { name: '1-3 times per year', value: '0.129' },
    { name: '1-3 times per day', value: '0.099' },
    { name: 'Never', value: '0.03' }
  ],
  FACEBOOK_POST_FREQUENCY: [
    { name: 'Never', value: '0.384' },
    { name: '1-3 times per week', value: '0.172' },
    { name: '1-3 times per year', value: '0.162' },
    { name: '1-3 times per month', value: '0.141' },
    { name: 'Almost never', value: '0.091' }
  ],
  SOC_MEDIA_PRIORITY: [
    { name: 'somewhat important', value: '0.416' },
    { name: 'extremely important', value: '0.396' },
    { name: 'not important', value: '0.129' },
    { name: 'not sure / hard to say', value: '0.059' }
  ],
  STUDIO_VISIT_SOURCES: [
    { name: 'Other artist peers', value: 30 },
    { name: 'opening / reception conversations', value: 29 },
    { name: 'Teachers / faculty', value: 15 },
    { name: 'Direct messages on Instagram', value: 12 },
    { name: 'BFA / MFA peers', value: 10 }
  ],
  STUDIO_VISITORS: [
    { name: 'Other artists', value: 46 },
    { name: 'Family / non-artist friends', value: 30 },
    { name: 'Gallerists / curators', value: 21 },
    { name: 'Amateur / new collectors', value: 19 },
    { name: 'BFA / MFA peers', value: 13 }
  ],
  SIDE_NOTES: {
    'word-cloud': '* relative size of words based on how many times they appeared in survey responses',
    'gallery-spaces': '* relative size of words based on how many times they appeared in survey responses',
    'finding-shows': '* relative size of words based on how many times they appeared in survey responses'
  },
  CITIES_NEIGHBORHOODS: [
    { name: 'New York', value: 8 },
    { name: 'Los Angeles', value: 6 },
    { name: 'Sacramento', value: 6 },
    { name: 'Brooklyn', value: 3 },
    { name: 'Columbus', value: 3 }
  ],
  _justCitiesSanitized: [ 'Albany', 'Albuquerque', 'Altadena', 'Anchorage', 'Atlanta' ],
  VISIT_COUNT: [
    { name: '0', value: '0.396' },
    { name: '1-2', value: '0.188' },
    { name: '3-5', value: '0.178' },
    { name: '5-10', value: '0.069' },
    { name: '10-25', value: '0.069' }
  ],
  VISIT_PRIORITY: [
    { name: 'not important', value: '0.525' },
    { name: 'somewhat important', value: '0.257' },
    { name: 'extremely important', value: '0.149' },
    { name: 'not sure / hard to say', value: '0.059' }
  ],
  COLLECTOR_TREATMENT: [
    { name: 'generally positive', value: '0.378' },
    { name: 'extremely positive', value: '0.344' },
    { name: 'did not sell work', value: '0.143' },
    { name: 'not sure / hard to say', value: '0.061' },
    { name: 'neutral / mixed', value: '0.051' }
  ],
  SALES_MEDIUMS: [
    { name: 'Paintings', value: 42 },
    { name: 'T-Shirts', value: 14 },
    { name: 'Prints', value: 13 },
    { name: 'Drawings', value: 11 },
    { name: 'Stickers', value: 7 }
  ],
  SALES_SUM: [
    { name: '$500-$1,000', value: '0.16' },
    { name: '$0', value: '0.14' },
    { name: '$250-$500', value: '0.14' },
    { name: '$1-$50', value: '0.13' },
    { name: '$50-$250', value: '0.13' }
  ],
  ANY_ONLINE_SALES: [ { name: 'no', value: '0.633' }, { name: 'yes', value: '0.367' } ],
  SALE_PLATFORMS: [
    { name: 'No Online Sales', value: 0.6237623762376238 },
    { name: 'Etsy', value: 0.10891089108910891 },
    { name: 'Saatchi Art', value: 0.0297029702970297 },
    { name: 'Art Finder', value: 0.019801980198019802 },
    { name: 'BigCartel', value: 0.019801980198019802 }
  ],
  BUYERS_CLOUD: [
    { name: 'Family / Friends', value: 62 },
    { name: 'Amateur / New Collectors', value: 35 },
    { name: 'Other Artists', value: 34 },
    { name: 'Event Attendees', value: 31 },
    { name: 'Online Fans', value: 31 }
  ],
  SELLLING_PRIORITY: [
    { name: 'Somewhat Important', value: '0.434' },
    { name: 'Extremely Important', value: '0.323' },
    { name: 'Not Important', value: '0.202' },
    { name: 'Not Sure / Hard to Say', value: '0.03' }
  ],
  GRANT_SUM: [
    { name: 'no applications', value: '0.51' },
    { name: '$0', value: '0.39' },
    { name: '$500-$5,000', value: '0.07' },
    { name: '$1-$500', value: '0.02' },
    { name: '$5,000-$15,000', value: '0.01' }
  ],
  GRANT_COUNT: [
    { name: 'no applications', value: '0.55' },
    { name: '0', value: '0.34' },
    { name: '1-2', value: '0.11' }
  ],
  GRANT_APP_COUNT: [
    { name: '0', value: '0.713' },
    { name: '1-2', value: '0.218' },
    { name: '3-5', value: '0.059' },
    { name: '', value: '0.01' }
  ],
  RESIDENCY_COUNT: [
    { name: 'no applications', value: '0.475' },
    { name: '0', value: '0.434' },
    { name: '1-2', value: '0.091' }
  ],
  RESIDENCY_APP_COUNT: [
    { name: '0', value: '0.723' },
    { name: '1-2', value: '0.218' },
    { name: '3-5', value: '0.05' },
    { name: '6-10', value: '0.01' }
  ],
  RESIDENCY_PRIORITY: [
    { name: 'Not Important', value: '0.49' },
    { name: 'Somewhat Important', value: '0.286' },
    { name: 'Not Sure / Hard to Say', value: '0.112' },
    { name: 'Extremely Important', value: '0.112' }
  ],
  LEGAL_PAPERWORK: [
    { name: 'no', value: '0.624' },
    { name: 'yes (with explaination)', value: '0.287' },
    { name: 'yes (not fully explained)', value: '0.059' },
    { name: "not sure / don't recall", value: '0.03' }
  ],
  GALLERY_REPRESENTATION: [ { name: 'no', value: '0.83' }, { name: 'yes', value: '0.17' } ],
  EVENT_ORGANIZATION: [
    { name: '0', value: '0.554' },
    { name: '1', value: '0.178' },
    { name: '2', value: '0.129' },
    { name: '3', value: '0.079' },
    { name: '5+', value: '0.04' }
  ],
  COLORS: [
    'rgb(216, 159, 202)',
    'rgb(247, 193, 209)',
    '#FFB7B2',
    'rgb(252, 210, 183)',
    'rgb(188, 223, 132)'
  ],
  EXHIBITION_CONTACT: [
    { name: 'Other Artists', value: 0.24875621890547264 },
    { name: 'Structured Applications', value: 0.18407960199004975 },
    { name: 'Open Calls', value: 0.18407960199004975 },
    { name: 'Contacts from Instagram', value: 0.13432835820895522 },
    {
      name: 'Direct Emails from Gallerists / Curators',
      value: 0.11442786069651742
    }
  ],
  SOCMEDIA_FEATURES: [
    { name: '3-5', value: '0.265' },
    { name: '1-2', value: '0.214' },
    { name: '0', value: '0.163' },
    { name: '11-25', value: '0.112' },
    { name: '25+', value: '0.102' }
  ],
  PUBLICATION_COUNT: [
    { name: '0', value: '0.584' },
    { name: '1-2', value: '0.287' },
    { name: '3-5', value: '0.099' },
    { name: '6-10', value: '0.02' },
    { name: '25+', value: '0.01' }
  ],
  APPLICATION_FEES: [
    { name: '$0', value: '0.44' },
    { name: '$100-$250', value: '0.15' },
    { name: '$25-$50', value: '0.13' },
    { name: '$50-$100', value: '0.13' },
    { name: '$0-$25', value: '0.08' }
  ],
  SHOW_APPLICATIONS: [
    { name: '0', value: '0.416' },
    { name: '3-5', value: '0.218' },
    { name: '1-2', value: '0.178' },
    { name: '6-10', value: '0.139' },
    { name: '11-25', value: '0.03' }
  ],
  SOLO_EXHIBITIONS_COUNT: [
    { name: '0', value: '0.673' },
    { name: '3-5', value: '0.3' },
    { name: '1-2', value: '0.297' }
  ],
  GROUP_EXHIBITIONS_COUNT: [
    { name: '1-2', value: '0.475' },
    { name: '0', value: '0.228' },
    { name: '3-5', value: '0.218' },
    { name: '6-10', value: '0.079' }
  ],
  EXHIBITIONS_PRIORITY: [
    { name: 'Somewhat Important', value: '0.465' },
    { name: 'Not Important', value: '0.228' },
    { name: 'Extremely Important', value: '0.218' },
    { name: 'Not Sure / Hard to Say', value: '0.079' }
  ],
  RACE: [
    { name: 'White / Caucasian', value: '0.73' },
    { name: 'Biracial / Multi Racial', value: '0.07' },
    { name: 'Decline to Answer', value: '0.04' },
    { name: 'Asian / Asian American', value: '0.04' },
    { name: 'Black / African American', value: '0.04' }
  ],
  GENDER: [
    { name: 'Female', value: '0.58' },
    { name: 'Male', value: '0.32' },
    { name: 'Non-Binary', value: '0.08' },
    { name: 'Other', value: '0.005' }
  ],
  AGE: [
    { name: '18-29', value: '0.32' },
    { name: '30-39', value: '0.26' },
    { name: '60-69', value: '0.14' },
    { name: '50-59', value: '0.09' },
    { name: '40-49', value: '0.07' }
  ],
  ORIENTATION: [
    { name: 'Yes', value: '0.564' },
    { name: 'No', value: '0.356' },
    { name: 'Decline to Say', value: '0.079' }
  ],
  FOUND_SURVEY: [
    { name: 'instagram', value: '0.733' },
    { name: 'artist / peer', value: '0.198' },
    { name: 'other', value: '0.069' }
  ],
  KEYWORDS: [
    { name: 'Abstract', value: 23 },
    { name: 'Figurative', value: 21 },
    { name: 'Painting', value: 19 },
    { name: 'Mixed-Media', value: 16 },
    { name: 'Oil', value: 15 }
  ],
  EXHIBITION_SPACES: [
    { name: 'Gallery Spaces', value: 52 },
    { name: 'Artist Run Spaces', value: 44 },
    { name: 'Public Spaces', value: 25 },
    { name: 'Museum Spaces', value: 19 },
    { name: 'Coffee Shops', value: 16 }
  ]
}