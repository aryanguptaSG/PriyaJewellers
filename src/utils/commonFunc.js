// import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
// import { auth } from '../firebase/firebaseConfig';
// import { realDb  } from "../firebase/firebaseConfig";
// import { set, ref ,push ,onValue ,update} from "firebase/database";


export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }; 

export const sendVerificationLink = () => {
    if(!auth) return ;
    sendEmailVerification(auth.currentUser).then(() => {
        alert("Email verification link has been sent . Please check your email !")
    })
}

export const sendPasswordResetLink = (email)=>{
  if(email.length === 0){
    alert("Please Fill Email Field");
    return;
  }
  sendPasswordResetEmail(auth,email).then(()=>{
    alert("Password reset link has been sent in email. Please check your email !")
  })
}


export const saveInRealDB = (endpoint , value)=>{
  if(!auth) return ;
  const dbref = ref(realDb, endpoint);
  const p = push(dbref);
  set(p, value);
  alert("Added 🥳")
}

export const updateInRealDB = (endpoint , value)=>{
  if(!auth) return ;
  const dbref = ref(realDb, endpoint);
  update(dbref, value);
  alert("Updated 🥳")
}

export const getUserProfile = (db , username = null)=>{
  let name = username
  console.log(name);
  if(!name){
    if(!auth || !auth.currentUser) return ;
    name = auth.currentUser.email.split('@')[0];
  }
  console.log(name);
  const profile = ref(realDb , `users/${name}`);
    onValue(profile, (snapshot)=>{
        db(snapshot.val());
    })
}


export const getAllCategory = (cb)=>{
  return ["All","Rings","Earrings","Necklaces","Bracelets","Anklets","Body Jewelry"];
}


export const getAllMetal = (cb)=>{
  return ["All","Gold","Silver"];
}

export const getAllTopicTags = (cb)=>{
  const topicPath = ref(realDb , "Tags/Topics");
      onValue(topicPath, (snapshot)=>{
        var temp = [];
        for(let x in snapshot.val()){
          temp.push(snapshot.val()[x])
        }
        cb(temp);
  })
}






export const onSelectImageFile = (e , cb)=>{
  if (!e.target.files || e.target.files.length === 0) {
      cb(undefined);
      return
  }
  cb(e.target.files[0])
}


export function debounce(func, delay) {
  var inDebounce = void 0;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function() {
      return func.apply(context, args);
    }, delay);
  };
}

export const reverseArr = (input) => {
    var ret = [];
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
  }

export function isValidURL(str) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
         return true;
     } else {
         return false;
     }
 }