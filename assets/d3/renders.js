// import WordCloudMobile from "./WordCloudMobile";
// import WordCloud from "./WordCloud";
// import BarGraph from "./BarGraph";
// import PieChart from "./PieChart";
// import * as DATA from "./data";

const randColor = () => DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)];

const RENDER_CALLBACKS = [
  // document.querySelector("#loading").style.display = 'none';

  // ------------------------------- WORD CLOUDS

() => {
  new WordCloud({
    title: "Where did you show work in the past year?",
    tag: ".graph-gallery-spaces",
    data: DATA.EXHIBITION_SPACES,
    type: "word-cloud",
    multiplier: 0.8,
    minSize: 10,
    width: 400,
    height: 350,
    margin: {
      top: 0,
      bottom: 0,
      left: 200,
      right: 0
    }
  }).render()
},


() => {
  new WordCloud({
    title: "What words would describe the work you made in the past year?",
    tag: ".graph-keywords",
    data: DATA.KEYWORDS,
    type: "word-cloud",
    multiplier: 3.25,
    minSize: 6,
    width: 400,
    height: 900,
  }).render()
},


() => {
  new WordCloud({
    title: "How did you find shows for your work in the past year?",
    tag: ".graph-exhibition-contact",
    data: DATA.EXHIBITION_CONTACT,
    type: "word-cloud",
    multiplier: 150,
    minSize: 10,
    width: 400,
    height: 400,
  }).render()
},

() => {
  new WordCloud({
    title: "What are your general thoughts (if any) regarding this survey?",
    tag: ".final-thoughts",
    data: DATA.FINAL_THOUGHTS,
    type: "word-cloud",
    multiplier: 10,
    minSize: 6,
    width: 400,
    height: 800,
  }).render()
},

() => {
  new WordCloud({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for negative conduct towards artists or arts communities in the past year?",
    tag: ".negative-shoutout",
    data: DATA.NEGATIVE_SHOUTOUT,
    type: "word-cloud",
    multiplier: 11,
    minSize: 8,
    width: 400,
    height: 300,
  }).render()
},

() => {
  new WordCloud({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for outstanding service to artists or communities in the past year?",
    tag: ".positive-shoutout",
    data: DATA.POSITIVE_SHOUTOUT,
    type: "word-cloud",
    multiplier: 11,
    minSize: 8,
    width: 400,
    height: 500,
  }).render()
},

() => {
  new WordCloud({
    title: "What additional duties aside from teaching did you perform for your school(s) in the past year? (for arts instructors)",
    tag: ".extra-duties",
    data: DATA.EXTRA_DUTIES,
    type: "word-cloud",
    multiplier: 5,
    minSize: 8,
    width: 400,
    height: 350,
  }).render()
},

() => {
  new WordCloud({
    title: "What schools did you teach for in the past year? (for arts instructors)",
    tag: ".schools-taught-at",
    data: DATA.SHOOLS_TAUGHT_AT,
    type: "word-cloud",
    multiplier: 1,
    minSize: 12,
    width: 400,
    height: 300,
  }).render()
},

() => {
  new WordCloud({
    title: "What were the most important benefits of your city / neighborhood in the past year?",
    tag: ".city-benefits",
    data: DATA.CITY_BENEFITS,
    type: "word-cloud",
    multiplier: 1.5,
    minSize: 7,
    width: 400,
    height: 550,
  }).render()
},

() => {
  new WordCloud({
    title: "What neighborhood / city did you live in three years prior to taking this survey?",
    tag: ".previous-city",
    data: DATA.PREVIOUS_CITY,
    type: "word-cloud",
    multiplier: 7,
    minSize: 8,
    width: 400,
    height: 750,
  }).render()
},

() => {
  new WordCloud({
    title: "What city / neighborhood do you live in?",
    tag: ".cities-neighborhoods-cloud",
    data: DATA.CITIES_NEIGHBORHOODS,
    type: "word-cloud",
    multiplier: 7,
    minSize: 8,
    width: 400,
    height: 750,
  }).render()
},

() => {
  new WordCloud({
    title: "What degrees have you completed?",
    tag: ".past-degrees",
    data: DATA.PAST_DEGREES,
    type: "word-cloud",
    multiplier: 3,
    minSize: 10,
    width: 400,
    height: 800,
  }).render()
},

() => {
  new WordCloud({
    title: "If you are currently a student what school do you attend?",
    tag: ".current-school",
    data: DATA.CURRENT_SCHOOL,
    type: "word-cloud",
    multiplier: 1,
    minSize: 8,
    width: 400,
    height: 350,
  }).render()
},

() => {
  new WordCloud({
    title: "What job(s) did you work in the past year?",
    tag: ".job-types",
    data: DATA.JOB_TYPES,
    type: "word-cloud",
    multiplier: 4,
    minSize: 8,
    width: 400,
    height: 600,
  }).render()
},

() => {
  new WordCloud({
    title: "How did you find new art during the past year?",
    tag: ".art-resources",
    data: DATA.ART_RESOURCES,
    type: "word-cloud",
    multiplier: .7,
    minSize: 10,
    width: 400,
    height: 500,
  }).render()
},

() => {
  new WordCloud({
    title: "What aspects of social media did you feel were negative for your studio practice in the past year?",
    tag: ".social-media-negatives",
    data: DATA.SOCIAL_MEDIA_NEGATIVES,
    type: "word-cloud",
    multiplier: 10,
    minSize: 8,
    width: 400,
    height: 500
  }).render()
},

() => {
  new WordCloud({
    title: "What aspects of social media did you feel were positive for your studio practice in the past year?",
    tag: ".social-media-positives",
    data: DATA.SOCIAL_MEDIA_POSITIVES,
    type: "word-cloud",
    multiplier: 6,
    minSize: 8,
    width: 400,
    height: 500
  }).render()
},

() => {
  new WordCloud({
    title: "What helped you facilitate sales in the past year?",
    tag: ".sale-types-cloud",
    data: DATA.SALE_TYPES,
    type: "word-cloud",
    multiplier: 1.7,
    minSize: 8,
    width: 400,
    height: 400
  }).render()
},

() => {
  new WordCloud({
    title: "What helped you find studio visits in the past year?",
    tag: ".studio-visit-sources-cloud",
    data: DATA.STUDIO_VISIT_SOURCES,
    type: "word-cloud",
    multiplier: 1,
    minSize: 8,
    width: 400,
    height: 400
  }).render()
},

() => {
  new WordCloud({
    title: "Who did you have studio visits with in the past year?",
    tag: ".studio-visitors-cloud",
    data: DATA.STUDIO_VISITORS,
    type: "word-cloud",
    multiplier: .8,
    minSize: 8,
    width: 400,
    height: 300
  }).render()
},

() => {
  new WordCloud({
    title: "What kinds of work did you sell in the past year?",
    tag: ".sales-mediums-cloud",
    data: DATA.SALES_MEDIUMS,
    type: "word-cloud",
    multiplier: 1.75,
    minSize: 10,
    width: 400,
    height: 350
  }).render()
},

() => {
  new WordCloud({
    title: "Who did you sell work to in the past year?",
    tag: ".graph-buyers",
    data: DATA.BUYERS_CLOUD,
    type: "word-cloud",
    multiplier: 0.75,
    minSize: 8,
    width: 400,
    height: 400,
  }).render()
},


  // ------------------------------- BAR GRAPHS

() => {
  new BarGraph({
    title: "What is your highest level of education?",
    tag: ".education-level",
    data: DATA.EDUCATION_LEVEL,
    type: "bar-graph",
    angle: true,
    width: 600,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you claim any studio-related expenses on your most recent taxes?",
    tag: ".tax-expenses",
    data: DATA.TAX_EXPENSES,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "Are you currently a student?",
    tag: ".current-student",
    type: "pie-chart",
    data: DATA.CURRENT_STUDENT,
    angle: true,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "How many jobs did you apply for in the past year?",
    tag: ".job-app-count",
    type: "pie-chart",
    data: DATA.JOB_APP_COUNT,
    angle: true,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "Did you apply for unemployment or food stamps in the past year?",
    tag: ".unemployment",
    type: "pie-chart",
    data: DATA.UNEMPLOYMENT,
    angle: true,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "Approximately how many hours per day did you work on days that you worked in your studio during the past year?",
    tag: ".studio-hours",
    type: "pie-chart",
    data: DATA.STUDIO_HOURS,
    angle: true,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "Approximately how many days per week did you work in your studio during the past year?",
    tag: ".studio-days",
    type: "pie-chart",
    data: DATA.STUDIO_DAYS,
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how much did you make in job-related income in the past year?",
    tag: ".job-income",
    data: DATA.JOB_INCOME,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "What did your studio space cost per month during the past year?",
    tag: ".studio-price",
    data: DATA.STUDIO_PRICE,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How large is your current studio / work space?",
    tag: ".studio-size",
    data: DATA.STUDIO_SIZE,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "What type of studio / work space did you use during the past year?",
    tag: ".studio-space-type",
    data: DATA.STUDIO_SPACE_TYPE,
    type: "bar-graph",
    multiplier: .8,
    minSize: 14,
    angle: true,
    width: 400,
  }).render()
},

// () => {
//   new BarGraph({
//     title: "What type of work space did you use this past year?",
//     tag: ".studio-space-type-mobile",
//     data: DATA.STUDIO_SPACE_TYPE,
//     type: "bar-graph",
//     multiplier: .8,
//     minSize: 14,
//     angle: true,
//     width: 400,
//   }).render()
// },

() => {
  new BarGraph({
    title: "Were you paid for any extra duties that you performed for your school during the past year? (for arts instructors)",
    tag: ".extra-duty-pay",
    data: DATA.EXTRA_DUTY_PAY,
    type: "bar-graph",
    multiplier: .8,
    minSize: 14,
    angle: true,
    width: 400,
  }).render()
},


  // ------------------------------- PIE CHARTS

() => {
  new PieChart({
    title: "Approximately how many minutes did this survey take you?",
    data: DATA.SURVEY_TIME,
    type: "pie-chart",
    tag: ".survey-time",
  }).render()
},

() => {
  new PieChart({
    title: "How many campuses did you teach at during the past year? (for arts instructors)",
    data: DATA.CAMPUSES_TAUGHT_COUNT,
    type: "pie-chart",
    tag: ".campuses-taught-count",
  }).render()
},

() => {
  new PieChart({
    title: "On average how many classes did you teach per semester in the past year? (for arts instructors)",
    data: DATA.CLASSES_TAUGHT_COUNT,
    type: "pie-chart",
    tag: ".classes-taught-count",
  }).render()
},

() => {
  new PieChart({
    title: "Approximately how many openings / receptions did you attend in the past year?",
    data: DATA.RECEPTION_COUNT,
    type: "pie-chart",
    tag: ".reception-count",
  }).render()
},

() => {
  new PieChart({
    title: "How important was visiting galleries / museums for you during the past year?",
    data: DATA.GALLERY_PRIORITY,
    type: "pie-chart",
    tag: ".gallery-priority",
  }).render()
},

() => {
  new PieChart({
    title: "How would you rate your overall educational experience?",
    data: DATA.EDUCATION_EXPERIENCE_RATING,
    type: "pie-chart",
    tag: ".education-experience-rating",
  }).render()
},

() => {
  new PieChart({
    title: "Did you sell any work online in the past year?",
    data: DATA.ANY_ONLINE_SALES,
    type: "pie-chart",
    tag: ".any-online-sales",
  }).render()
},

() => {
  new PieChart({
    title: "Did you maintain a studio website three years ago?",
    tag: ".personal-website-2016",
    type: "pie-chart",
    data: DATA.PERSONAL_WEBSITE_2016,
    angle: true,
    width: 400,
  }).render()
},


() => {
  new PieChart({
    title: "Were you part of a union during the past year? (for arts instructors)",
    data: DATA.UNION_MEMBER,
    type: "pie-chart",
    tag: ".union-member",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new PieChart({
    title: "If you were part of a union during the past year were the advantages / benefits of your union clear to you? (for arts instructors)",
    data: DATA.UNION_BENEFITS,
    type: "pie-chart",
    tag: ".union-benefits",
    width: 400,
    angle: true,
  }).render()
},

  // ------------------------------- BAR GRAPHS

() => {
  new BarGraph({
    title: "Do you feel that your career suffer from discrimination during the past year?",
    data: DATA.DISCRIMITATION,
    tag: ".discrimination",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you feel welcomed / embraced by the art world during the past year?",
    data: DATA.ART_WORLD_WELCOME,
    tag: ".art-world-welcome",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "How were you treated by the schools you taught for during the past year? (for arts instructors)",
    data: DATA.TEACHING_ENVIRONMENT_RATING,
    tag: ".teaching-environment-rating",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how many galleries closed in your general area during the past year? (that you were aware of)",
    data: DATA.CLOSED_GALLERIES,
    tag: ".closed-galleries",
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how many galleries opened in your general area during the past year? (that you were aware of)",
    data: DATA.OPENED_GALLERIES,
    tag: ".opened-galleries",
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How many art fairs / biennials did you attend in the past year?",
    data: DATA.ART_FAIR_COUNT,
    tag: ".fair-count",
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "If you had a student loan payment during the past year how much was an average monthly payment?",
    tag: ".student-loan-payment",
    data: DATA.STUDENT_LOAN_PAYMENT,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How much do you currently owe in student loans?",
    tag: ".student-loans",
    data: DATA.STUDENT_LOANS,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you maintain a personal studio website (aside from instagram, facebook etc) during the past year?",
    tag: ".personal-website",
    data: DATA.PERSONAL_WEBSITE,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How well do you feel your primary online / social media platform served you this past year?",
    tag: ".social-media-service-rating",
    data: DATA.SOCIAL_MEDIA_SERVICE_RATING,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you pay for any social media promotion in the past year? If so did it have a concrete positive effect?",
    tag: ".graph-paid-social-media",
    data: DATA.PAID_SOCIAL_MEDIA,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you use Instagram more or less this past year than the year before?",
    tag: ".instagram-more-less",
    data: DATA.INSTAGRAM_MORE_LESS,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how often did you make studio-related Instagram posts during the past year?",
    tag: ".graph-instagram-frequency",
    data: DATA.INSTAGRAM_FREQUENCY,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Did you use Facebook more or less this past year than the year before?",
    tag: ".graph-facebook-more-less",
    data: DATA.FACEBOOK_MORE_LESS,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how often did you make studio-related Facebook posts during the past year?",
    tag: ".graph-facebook-frequency",
    data: DATA.FACEBOOK_POST_FREQUENCY,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How much of a priority was studio-related social media use for you during the past year?",
    tag: ".graph-social-media-priority",
    data: DATA.SOC_MEDIA_PRIORITY,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How would you rate your treatment from collectors / buyers during the past year?",
    tag: ".graph-collector-treatment",
    data: DATA.COLLECTOR_TREATMENT,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "How much work did you sell in total during the past year?",
    tag: ".graph-sales-sum",
    data: DATA.SALES_SUM,
    type: "bar-graph",
    angle: true,
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "What platforms did you sell work on during the past year?",
    tag: ".graph-sale-platforms",
    data: DATA.SALE_PLATFORMS,
    type: "bar-graph",
    textSize: 7,
    angle: true,
    width: 800,
    height: 500,
  }).render()
},

// () => {
//   new BarGraph({
//     title: "What platforms did you sell work on?",
//     tag: ".graph-sale-platforms-mobile",
//     data: DATA.SALE_PLATFORMS,
//     type: "bar-graph",
//     angle: true,
//     width: 800,
//     height: 350,
//   }).render()
// },

() => {
  new BarGraph({
    title: "Approximately how many studio visits did you have in the past year?",
    data: DATA.VISIT_COUNT,
    tag: ".graph-visit-count",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "How much of a priority were studio visits for you during the past year?",
    data: DATA.VISIT_PRIORITY,
    tag: ".graph-visit-priority",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "How much of a priority was selling work for you during the past year?",
    data: DATA.SELLLING_PRIORITY,
    tag: ".graph-selling-priority",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "How much did you receive in grants during the past year?",
    data: DATA.GRANT_SUM,
    tag: ".graph-grant-sum",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new PieChart({
    title: "How many grants did you receive in the past year?",
    data: DATA.GRANT_COUNT,
    type: "pie-chart",
    tag: ".graph-grant-count",
  }).render()
},

() => {
  new PieChart({
    title: "How many grants did you apply for in the past year?",
    data: DATA.GRANT_APP_COUNT,
    type: "pie-chart",
    tag: ".graph-grant-app-count",
  }).render()
},

() => {
  new PieChart({
    title: "How many residencies did you attend in the past year?",
    data: DATA.RESIDENCY_COUNT,
    type: "pie-chart",
    tag: ".graph-residency-count",
  }).render()
},

() => {
  new BarGraph({
    data: DATA.RESIDENCY_APP_COUNT,
    title: "How many residencies did you apply for in the past year?",
    tag: ".graph-residency-app-count",
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    data: DATA.RESIDENCY_PRIORITY,
    title: "How much of a priority were residencies / grants for you during the past year?",
    tag: ".graph-residency-priority",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    data: DATA.LEGAL_PAPERWORK,
    title: "Were you given any legal paperwork by gallerists or collectors that you worked with during the past year?",
    tag: ".graph-legal-paperwork",
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new PieChart({
    title: "Did you have official gallery representation in the past year?",
    data: DATA.GALLERY_REPRESENTATION,
    type: "pie-chart",
    tag: ".graph-gallery-representation",
  }).render()
},

() => {
  new PieChart({
    title: "How many art events did you help organize in the past year?",
    data: DATA.EVENT_ORGANIZATION,
    type: "pie-chart",
    tag: ".graph-event-organization",
  }).render()
},

() => {
  new BarGraph({
    title: "How many group exhibitions were you in during the past year?",
    tag: ".graph-group-show-count",
    data: DATA.GROUP_EXHIBITIONS_COUNT,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "What is your current chosen gender identity?",
    tag: ".graph-gender",
    data: DATA.GENDER,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how many times was your work featured in social media re-posts / features in the past year?",
    tag: ".graph-socialmedia-features",
    data: DATA.SOCMEDIA_FEATURES,
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "How many times was your work written about in the past year?",
    tag: ".graph-publication-count",
    data: DATA.PUBLICATION_COUNT,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how much did you pay in total application fees in the past year?",
    tag: ".graph-application-fees",
    data: DATA.APPLICATION_FEES,
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new BarGraph({
    title: "Approximately how many shows did you apply for in the past year?",
    tag: ".graph-show-applications",
    data: DATA.SHOW_APPLICATIONS,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "How many solo exhibitions did you have in the past year?",
    tag: ".graph-solo-show-count",
    type: "pie-chart",
    data: DATA.SOLO_EXHIBITIONS_COUNT,
    width: 400,
  }).render()
},


() => {
  new BarGraph({
    title: "How much of a priority was exhibiting your work during the past year?",
    tag: ".graph-exhibitions-priority",
    data: DATA.EXHIBITIONS_PRIORITY,
    type: "bar-graph",
    width: 400,
    angle: true
  }).render()
},

() => {
  new BarGraph({
    title: "What is your current age?",
    tag: ".graph-age",
    data: DATA.AGE,
    type: "bar-graph",
    width: 400,
  }).render()
},

() => {
  new BarGraph({
    title: "What race / ethnicity do you currently identify with?",
    tag: ".graph-race",
    data: DATA.RACE,
    type: "bar-graph",
    width: 400,
    angle: true,
  }).render()
},

() => {
  new PieChart({
    title: "Do you currently identify as LGBTQ+?",
    tag: ".graph-orientation",
    type: "pie-chart",
    data: DATA.ORIENTATION,
    width: 400,
  }).render()
},

() => {
  new PieChart({
    title: "How did you hear about this survey?",
    tag: ".graph-found-survey",
    type: "pie-chart",
    data: DATA.FOUND_SURVEY,
    width: 400,
  }).render()
},

]


svgClasses = [
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
  "graph-found-survey"
]


const RENDER_GRAPHS = () => {
  const classes = svgClasses.slice();
  let innerHtml = "";
  const dataDomContainer = document.querySelector("#the-data");
  
  while (classes.length > 0) {
    const randomIdx = Math.floor(Math.random() * classes.length);
  
    // const newSvgEle = document.createElement("svg");
    // newSvgEle.classList.add(...classes[randomIdx]);
    // dataDomContainer.appendChild(newSvgEle);

    innerHtml += `<svg class="${classes[randomIdx]}"></svg>`;
  
    classes.splice(randomIdx, 1);
  }

  dataDomContainer.innerHTML = innerHtml;

  RENDER_CALLBACKS.forEach(cb => cb())
}