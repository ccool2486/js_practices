/**
 * Remove a character at the specified position of a given string and return the new string
 * 
 * 需求： 把字串的某位置的字母抽出
 */

// 利用substring方式寫
function remove_character(str, char_pos) 
{
 part1 = str.substring(0, char_pos);
 part2 = str.substring(char_pos + 1, str.length);
 return (part1 + part2);
}

console.log(remove_character("Python",0));
console.log(remove_character("Python",3));
console.log(remove_character("Python",5));


// 改用陣列方式寫...
function remove_character_2(str, char_pos){
    var charArray1 = str.split("") //?
    var charArray2 = str.split("") //?
    var part1 = charArray1.splice(0, char_pos) //?
    var part2 = charArray2.splice(char_pos+1) //?
    var returndChar = part1.concat(part2).join('')
    return returndChar
}
console.log(remove_character_2("Python", 5))