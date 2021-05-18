const signupForm = document.querySelector("#signup-form")
const errorInfo = document.querySelector("#signupError")

signupForm.addEventListener("submit", e=>{
    e.preventDefault();
    const username = signupForm['signup-username'].value
    const signupEmail = signupForm['signup-email'].value;
    const signupPassword = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then((cred)=>{
        db.collection("users")
        .doc(cred.user.uid)
        .set({
            name: username,
            data:[]
        })
        .then(()=>{
            cred.user.updateProfile({
                displayName: username,
            })
        })
        .then(()=>{
            console.log("database created")
            location="index.html"
        })
        
    })
    .catch((err)=>{
        errorInfo.textContent= err.message
    })
})
