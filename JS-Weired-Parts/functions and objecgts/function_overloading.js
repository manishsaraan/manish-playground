function greet(fname, lname, lang){
  lang = lang || 'en';
  
  if(lang === 'en'){
      console.log('hello ' + fname + ' ' + lname);
  }

  if(lang === 'es'){
    console.log('hola! ' + fname + ' ' + lname);         
  }
}

//function overloading
function greetEng(fname, lname){
    greet(fname, lname, 'en');
}

function greetEs(fname, lname){
    greet(fname, lname, 'es');
}

greetEng('tony', 'shark');
greetEs('tony', 'shark');