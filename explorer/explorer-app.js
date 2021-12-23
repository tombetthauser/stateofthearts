class Table {
  constructor(inputd3Data) {
    this.inputd3Data = inputd3Data;
    this.apiRoute = 'https://www.sotasurvey.org/2019.csv';
    this.tableHTML = null;
    this.csvData = null;
    this.allQuestions = [];
    this.splitChars = [',', ';']

    this.xQuestion = "What is your ethnicity / race?";
    this.xOptions = [];
    this.xResponses = [];

    this.yQuestion = "Do you feel that you or your career may have been significantly negatively effected by any type of discrimination or bias this past year?";
    this.yOptions = [];
    this.yResponses = [];

    this.tableValueMax = 0;
    this.tableValues = [];
  }

  createBlankTable() {
    this.tableValues = [];
    for (let i = 0; i < this.yOptions.length; i++) {
      const row = [];
      for (let j = 0; j < this.xOptions.length; j++) {
        row.push(null);
      }
      this.tableValues.push(row);
    }
  }

  getYResponses() {
    this.yResponses = [];
    d3.select('*')
      .data(this.inputd3Data)
      .enter()
      .text(data => {
        this.yResponses.push(data[this.yQuestion])
      })
  }

  getXResponses() {
    this.xResponses = [];
    d3.select('*')
      .data(this.inputd3Data)
      .enter()
      .text(data => {
        this.xResponses.push(data[this.xQuestion])
      })
  }

  populateValuesTable() {
    this.tableValueMax = 0;
    this.createBlankTable()
    for (let i = 0; i < this.yOptions.length; i++) {
      for (let j = 0; j < this.xOptions.length; j++) {
        const currentValue = this.getTableValue(this.yOptions[i], this.xOptions[j]);
        this.tableValues[i][j] = currentValue;
        if (currentValue > this.tableValueMax) this.tableValueMax = currentValue;
      }
    }
  }

  getTableValue(yOption, xOption) {
    let count = 0;

    for (let i = 0; i < this.xResponses.length; i++) {
      const xResponse = this.xResponses[i];
      const yResponse = this.yResponses[i];

      if (document.querySelector('#split-checkbox').checked) {
        if (yResponse.toLowerCase().includes(yOption.toLowerCase()) && xResponse.toLowerCase().includes(xOption.toLowerCase())) count ++;
      } else {
        if (yResponse.toLowerCase() === yOption.toLowerCase() && xResponse.toLowerCase() === xOption.toLowerCase()) count ++;
      }
    }

    return count;
  }

  sortOptions() {
    this.xOptions = this.xOptions.sort();
    this.yOptions = this.yOptions.sort();
  }

  splitQuestion(inputStr, splitChars = [',', ';', ' ']) {
    let option = inputStr.slice()

    for (let i = 0; i < option.length; i++) {
      if (splitChars.includes(option[i])) {
        option = option.slice(0, i) + '⚠︎' + option.slice(i + 1);
      }
    }

    let arr = option.split('⚠︎')
    arr = arr.map(ele => ele.toLowerCase().trim());

    return arr;
  }
  
  fetchYOptions() {
    this.yOptions = [];
    const responseArr = [];
    d3.select('*')
      .data(this.inputd3Data)
      .enter()
      .text(data => {
        const question = data[this.yQuestion].toLowerCase().trim();
        if (
            document.querySelector('#split-checkbox').checked && 
            (question.includes(",") || question.includes(';') || question.includes(' '))
          ) {
          const splitQuestion = this.splitQuestion(question);
          splitQuestion.forEach(question => {
            if (responseArr.includes(question) === false) {
              responseArr.push(question);
              this.yOptions.push(question);
            };
          })
        } else {
          if (responseArr.includes(question) === false) {
            responseArr.push(question);
            this.yOptions.push(question);
          };
        }
      })
  }
  
  fetchXOptions() {
    this.xOptions = [];
    const responseArr = [];
    d3.select('*')
      .data(this.inputd3Data)
      .enter()
      .text(data => {
        const question = data[this.xQuestion].toLowerCase().trim();
        if (
            document.querySelector('#split-checkbox').checked &&
            (question.includes(",") || question.includes(';') || question.includes(' '))
          ) {
          const splitQuestion = this.splitQuestion(question);
          splitQuestion.forEach(question => {
            if (responseArr.includes(question) === false) {
              responseArr.push(question);
              this.xOptions.push(question);
            };
          })
        } else {
          if (responseArr.includes(question) === false) {
            responseArr.push(question);
            this.xOptions.push(question);
          };
        }
      })
  }

  createTableHTML() {
    let html = [];
    html.push(`<table class="my-table"><tr id="top-row"><th></th>`);
    this.xOptions.forEach(text => { 
      const xText = text.length > 0 ? text.toLowerCase() : "(empty input)";
      html.push(`<th>${xText}</th>`)
    })
    html.push(`</tr>`);
    for (let i = 0; i < this.yOptions.length; i++) {
      let yText = this.yOptions[i].toLowerCase();
      yText = yText.length > 0 ? yText : "(empty input)";
      if (i === this.yOptions.length - 1) {
        html.push(`<tr><th class="left-bottom-th">${yText}</th>`);
      } else {
        html.push(`<tr><th class="left-column-th">${yText}</th>`);
      }
      for (let j = 0; j < this.tableValues[i].length; j++) {
        const fontSize = ((this.tableValues[i][j] / this.tableValueMax) * 65) + 15;
        const opacity = (this.tableValues[i][j] / this.tableValueMax) + 0.2;
        const value = this.tableValues[i][j];
        html.push(`<th class="table-numbers" style="font-size: ${fontSize}px; opacity: ${opacity}";>${value}</th>`);
      }
      html.push(`</tr>`);
    }
    this.tableHTML = html.join('');
  }

  updateDOM(selector = 'body') {
    document.querySelector(selector).innerHTML = this.tableHTML;
  }

  populateDropDowns() {
    const html = ["<option selected disabled>Select Question...</option>"];
    // start i at 1 temporarily to skip timestamp
    for (let i = 1; i < this.allQuestions.length; i++) {
      const question = this.allQuestions[i];
      html.push(`<option value="${question}">${question}</option>`);
    }
    document.querySelector("#y-dropdown").innerHTML = html.join('');
    document.querySelector("#x-dropdown").innerHTML = html.join('');
  }

  getAllQuestions() {
    this.allQuestions = Object.keys(this.inputd3Data[0])
  }

  setDropdownSubmitListener() {
    document.querySelector("#submit-button").addEventListener("click", () => {
      // e.preventDefault();

      var yDropdown = document.querySelector("#y-dropdown");
      var xDropdown = document.querySelector("#x-dropdown");

      var yValue = yDropdown.options[yDropdown.selectedIndex].value;
      var xValue = xDropdown.options[xDropdown.selectedIndex].value;

      this.yQuestion = yValue;
      this.xQuestion = xValue;

      this.fetchYOptions();
      this.fetchXOptions();
      if (document.querySelector("#sorted-checkbox").checked === true) this.sortOptions();
      this.createBlankTable();
      this.getYResponses();
      this.getXResponses();
      this.populateValuesTable()
      this.createTableHTML();
      this.updateDOM("#table-div");
    })
  }

  addResetListener() {
    document.querySelector("#reset-button").addEventListener("click", () => {
      document.querySelector("#table-div").innerHTML = "";
    })
  }
}

const init = () => {
  d3.csv('https://www.sotasurvey.org/2019.csv', data => {
    const newTable = new Table(data);
    newTable.getAllQuestions()
    newTable.populateDropDowns();
    newTable.setDropdownSubmitListener();
    newTable.addNightModeListener();
    newTable.addResetListener();
  })
}

// document.querySelector("#init-button").addEventListener("click", () => {
document.querySelector("#init-button").style.display = "none";
document.querySelector("#dropdown-form").style.display = "block";
  init();
// })