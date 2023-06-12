// String Window
// Given two strings, one big string and one small string, find
// the 'smallest window' in the big string that contains all
// characters of the small string.
// - Window can have additional characters than required.
// - If small string has duplicates, then those duplicates must
// be present with same or higher count in window.
// Input:
// s1 = hello_world
// s2 = lol
// Output: llo

function stringWindow(str1, str2) {
  let j = 0;
  let minLen = Number.MAX_VALUE;
  let map2 = {};
  for (let i = 0; i < str2.length; i++) {
    if (map2[str2[i]]) {
      map2[str2[i]]++;
    } else {
      map2[str2[i]] = 1;
    }
  }
  let map = { ...map2 };
  index = [-1, -1];
  let wStart = 0;
  let wEnd = 0;
  let count = 0;
  while (j < str1.length) {
    if (map2[str1[j]]) {
      if (count == 0) wStart = j;

      map2[str1[j]]--;
      count++;

      if (count == str2.length) {
        wEnd = j + 1;

        if (wEnd - wStart < minLen) {
          minLen = wEnd - wStart;
          index = [wStart, wEnd];
        }
        count = 0;
        map2 = map;
        i = j;
      }
    }
    j++;
  }
  return str1.substring(index[0], index[1]);
  //   return index;
}

// console.log(stringWindow("fifuzzbuzz", "fu"));

function stringWindow2(s, p) {
  let fp = {};
  let fs = {};
  for (let i = 0; i < p.length; i++) {
    if (fp[p[i]]) fp[p[i]]++;
    else fp[p[i]] = 1;
  }
  let count = 0;
  let start = 0;
  let start_idx = -1;
  let min_so_far = Number.MAX_VALUE;
  let window_size;
  //sliding Window Algorithm
  for (let i = 0; i < s.length; i++) {
    //expand the window by including current character
    let ch = s[i];

    if (fs[ch]) fs[ch]++;
    else fs[ch] = 1;

    //count how many character have been matched till now (string a pattern)
    if (fp[ch] != 0 && fs[ch] <= fp[ch]) {
      count++;
    }
    // another thin
    // / if all characters of the patter are found in the   current window then you can start contracting
    if (count == p.length) {
      // start contracting from left to remove unwanted character

      while (fp[s[start]] == 0 || fs[s[start]] > fp[s[start]]) {
        fs[s[start]]--;
        start++;
      }
      window_size = i - start + 1;
      if (window_size < min_so_far) {
        min_so_far = window_size;
        start_idx = start;
      }
    }
  }
  if (start_idx == -1) {
    return "no window found";
  }
  return s.substring(start_idx+1, min_so_far+1);
}

console.log(stringWindow2("fifazzubuzz", "fu"));
