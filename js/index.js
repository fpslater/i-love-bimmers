$(function() {
 
  // event sums up and displays count for each key 
  $('.key-counter button').click(function(e) {
    var textarea = $(this).parent().find('textarea');
    var keyHash = getKeyHash(textarea);
    displayKeyHash(keyHash);
  });
  
  // event checks if input is palindrome and displays true or false 
  $('.palindrome-detector form').submit(function (e) {
      e.preventDefault();
      var input = $(this).find('input:first').val();
      $('.palindrome-detector .output').html(checkPalindrom(input));
  });
});

// returns hash of unique keys and their count summations 
function getKeyHash(textarea) {
  var lines = textarea.val().split('\n');
  var keyHash = {};
  for(var i = 0; i<lines.length; i++) {
    var line = lines[i].split(',');
    if (line.length > 1 
        && line.length < 3 
        && !isNaN(line[1])) {     
      if (keyHash.hasOwnProperty(line[0])) {          
        keyHash[line[0]] = (parseInt(keyHash[line[0]]) + parseInt(line[1])).toString();
      } else {
        keyHash[line[0]] = line[1];
      }
    }
  }
  return keyHash;
}

// displays formatted output of keyhash 
function displayKeyHash(keyHash) {
  var output = "";
  for (var k in keyHash) {
    if (keyHash.hasOwnProperty(k)) {
      var s = 'The total for ' + k + ' is ' + keyHash[k] + '. ';
      output = output.concat(s);    
    }
  }
  $('.key-counter .output').html(output);
}

// returns "TRUE" or "FALSE" indicating if string is palindrome (empty string is not a palindrome) 
function checkPalindrom(str) {
    var str = str.toLowerCase();
    str = str.replace(/ /g,"");
    str = str.replace(/[^a-zA-Z0-9\.]+/g,"");
    if (str.length > 0 && str == str.split('').reverse().join('')) {
      return "TRUE"
    } 
    return "FALSE"
}