function calculator(str) {
  str = str.toUpperCase();

  function operands(str) {
    if (str.split("+").length > 1 && str.split("+").length < 3) {
      return str.split("+")
    } else if (str.split("-").length > 1 && str.split("-").length < 3) {
      return str.split("-")
    } else if (str.split("*").length > 1 && str.split("*").length < 3) {
      return str.split("*")
    } else if (str.split("/").length > 1 && str.split("/").length < 3) {
      return str.split("/")
    } else {
      throw "Error"
    }
  }

  function is_roman(operand) {
    switch (operand.trim()) {
      case 'I':
        return 1;
      case 'II':
        return 2;
      case 'III':
        return 3;
      case 'IV':
        return 4;
      case 'V':
        return 5;
      case 'VI':
        return 6;
      case 'VII':
        return 7;
      case 'VIII':
        return 8;
      case 'IX':
        return 9;
      case 'X':
        return 10;
      default:
        return false;
    }
  }

  function is_arabic(operand) {
    try {
      var operand_int = parseInt(operand)
      if (1 <= operand_int && operand_int <= 10) {
        return operand_int
      } else {
        throw 'Error'
      }
    } catch (e) {
      throw 'Error'
    }
  }

  function to_roman(num) {
    if (isNaN(num))
      return NaN;
    var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
      ],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  function conversion(str) {
    if (operands(str)[0] && operands(str)[1]) {
      if (is_roman(operands(str)[0]) && is_roman(operands(str)[1])) {
        return [is_roman(operands(str)[0]), is_roman(operands(str)[1])]
      } else if (is_arabic(operands(str)[0]) && is_arabic(operands(str)[1])) {
        return [is_arabic(operands(str)[0]), is_arabic(operands(str)[1])]
      } else {
        throw 'Error'
      }
    } else {
      throw 'Error'
    }
  }

  function operation(str) {
    if (str.indexOf("+") !== -1) {
      return "+"
    } else if (str.indexOf("-") !== -1) {
      return "-"
    } else if (str.indexOf("*") !== -1) {
      return "*"
    } else if (str.indexOf("/") !== -1) {
      return "/"
    } else {
      throw 'Error'
    }
  }

  function calculating(first_operand, second_operand, operation) {
    switch (operation) {
      case '+':
        var result = first_operand + second_operand
        if (is_roman(operands(str)[0]) && result <= 0) {
          return ''
        } else if (is_roman(operands(str)[0])) {
          return to_roman(result)
        } else {
          return result.toString()
        }
        case '-':
          var result = first_operand - second_operand
          if (is_roman(operands(str)[0]) && result <= 0) {
            return ''
          } else if (is_roman(operands(str)[0])) {
            return to_roman(result)
          } else {
            return result.toString()
          }
          case '*':
            var result = first_operand * second_operand
            if (is_roman(operands(str)[0]) && result <= 0) {
              return ''
            } else if (is_roman(operands(str)[0])) {
              return to_roman(result)
            } else {
              return result.toString()
            }
            case '/':
              var result = Math.trunc((first_operand / second_operand))
              if (is_roman(operands(str)[0]) && result <= 0) {
                return ''
              } else if (is_roman(operands(str)[0])) {
                return to_roman(result)
              } else {
                return result.toString()
              }
    }
  }
  var first_operand = conversion(str)[0]
  var second_operand = conversion(str)[1]
  var operation = operation(str)
  return calculating(first_operand, second_operand, operation)
}
console.log(calculator("X + I"))
