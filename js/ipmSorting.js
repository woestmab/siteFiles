
          /**
          * Checks each array element for a date in the first 11 characters
          * and splits and stores the fields in fields[]
          * @param {Array} lines
          * @return {Array} fields
          */

          function validateLine(lines) {
              var fields = [];

              for (var i = lines.length - 1; i >= 0; i--) {
                  if (validateDate(lines[i].substring(1,11))) {
                      fields = lines[i].split(" ");
                  }
              }
              return fields;
          }

          /**
          * Loops through a[] and determines if the elements hold valid data
          * if the data is valid it's stored in t[] and returned
          * @param {Array} a
          * @return {Array} t
          */

          function validateFields(a) {
            var t = [];

            //loop through a with all fields
            for (var i = 0; i < a.length; i ++) {

              //only push elements with length greater than 0
              if (a[i].length > 0) {

                //add good values to t[]
                t.push(a[i]);
              }
            }
            return t;
          }

          /**
           * Create object for each row of clean data that holds properties
           * for each field in the table
           * @param {Array} a
           * @return {Array} r
           * */


          function separateFields(a) {

              var r = [];

              //loop through the parameter array
              for (var i = 0; i < a.length; i++) {
                  //counter for each row

                  r[i] = new Object;

                  var ac = 0;

                  if (ac === 0) {
                  } else if (ac === 1) {
                      startTimes.push(a[i]);
                  } else if (ac === 2) {
                      endDates.push(a[i]);
                  } else if (ac === 3) {
                      endTimes.push(a[i]);
                  } else if (ac === 4) {
                      pages.push(a[i]);
                  } else if (ac === 5) {
                      sheets.push(a[i]);
                  } else if (ac === 6) {
                      printers.push(a[i]);
                  } else if (ac === 7) {
                      jobNames.push(a[i]);
                  } else if (ac === 8) {
                      jobIDs.push(a[i]);
                  } else if (ac === 9) {
                      forms.push(a[i]);
                  } else if (ac === 10) {
                  }
              }
              return r;
          }

          /**
           * Checks parameter for valid date format
           * @param {String} testDate*/

      function validateDate(testDate) {
          var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
          return date_regex.test(testDate);
      }

          /**
           * Creates table rows and data elements and appends them to #t
           * @param {Array} a
           * @param {Array} b
           * @param {Array} c
           * @param {Array} d
           * @param {Array} e
           * @param {Array} f
           * @param {Array} g
           * @param {Array} h
           * @param {Array} j
           * @param {Array} k
           * @param {Array} l
           */

          function addLine(a, b, c, d, e, f, g, h, j, k, l) {
              var output = '<tr>';
              for (var i = 0; a.length > i; i++) {
                  output += '<td>' + a[i] + '</td>';
                  output += '<td>' + b[i] + '</td>';
                  output += '<td>' + c[i] + '</td>';
                  output += '<td>' + d[i] + '</td>';
                  output += '<td>' + e[i] + '</td>';
                  output += '<td>' + f[i] + '</td>';
                  output += '<td>' + g[i] + '</td>';
                  output += '<td>' + h[i] + '</td>';
                  //there is no i Array
                  output += '<td>' + j[i] + '</td>';
                  output += '<td>' + k[i] + '</td>';
                  output += '<td>' + l[i] + '</td></tr>';
              }
              $('#t').append(output);
          }

      //comment section

          //append 50 lines
          // for (var i = 0; i < 50; i++) {
          //   $('#t').append('<tr><td>' + lines[i] + '</td></tr>');
          // };

          // $.each(lines, function(n, elem) {
          //     $('#t').append('<tr><td>' + elem + '</td></tr>');
          // });


          //check to see if each line contains a date as the first 11 characters
          // for (var i = 0; i < lines.length; i++) {
          //     if (validateDate(lines[i].substring(1,11))) {
          //         fields = lines[i].split(" ");
          //         addLine(fields);
          //     };
          // };
