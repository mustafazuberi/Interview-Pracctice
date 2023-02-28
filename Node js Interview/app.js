// Synchronous or blocking 
// line by line exucution



// Asynchrounous or non blocking programming 
// no line by line execution
// callbacks will fire 
// it expect callback functoin in third para 














// node --version
// npm --version
// >>>>>>>>>>>>>>>>>to get version


// version Number
// e.g : slugify 1.3.5
        // major   minor patch
// major : major function
// minor : updation on functions
// patch :after bug fixing     





// how to install package as a devDependencies
// npm install nodemon --save-dev
// --dev sa during deelopment bs nodemon install hoga or app ka part nh banega 


// how to install package as a gloabal
// npm install nodemon --global


// ^2.0.20
// ^ is sign ka matlab exact same version install kro

// ~2.0.20
// or ~ is sign ka matlab agar koi new patch agaya ha ab tw  usay bh accept krky install krdo


// >2.0.20
// or > is sign ka matlab agar koi new version agaya ha tw ya latest version install krdega 


// package.json sa version change krky node modules delete krky  npm install krdenge tw
//  version update hojaiga 






















// CLOUD
// matlab aesa koi compuyter jo humsy dour ho kahi lekin hum usay internet ka zarya 
// apny computer sa access kr sakty ho 

// SERVER
// ya ek software hota ha jo responsible hota ha kisi bh request ko 
// respond krny ka 

// hum computer pr request direct nh bhj skty qk waha server nh h tw waha sa 
// respond nhi milyga 



// package.lock json 
// yay hamaray web banaty waqt jo dependencies use krta ha usa lock krleta ha 
// phir next time jab bh hum library install kreinga same tw woh same library 
// ka version install krega jo pehla hwa hoga 






























///////////////////////////// SIR ISHAQ BHOJANI



// Nodejs class 1)

// http node ka built-in module hai ya ek module ha 
// http.create server ek server bna kr return krta ha 
// server ek asi chez ha jis ka pas req jaye or woh response de hamain

// req.on ek handler ha me hum deta ha data or chunk ka callback 
// matlab jab bh data ayy tw ya callback cchalao
// chunk matlab small part of data or is chunk ko hum append kara dete hn kisi bh varialble me 
// jaha data save krana ho 
// ya pata lagana ka lya ka sara data chunks me agaya ha ek or hadler lgaty ha 

//  req.on("end",() =>{
//             console.log(data)
//         })




// node js class 2)
// development ki had tak jo packages use krny hota ha woh aesa install krty h 
// npm i nodemon --save-dev
// nodemon qk hum na locally install kya ha globally nh tw terminal par directly noemon nh chalay ga
// agar chalana ha tw npm ka ek script likhna prega or npm ka scripts ko locally 
// commandas ka e.g:nodemon ka access hota ha 


// middle wares 
// matlab server par request any sa pehly kch check karna hoga agar middle wares ka zarya 

// app/use ka andar function jo hoga woh har request pr 
// commonly chalay hoga
// middle wares
// app.use((req,res,next) =>{
//     console.log(req.url)
//     next()
// })

// app.use((req,res,next) =>{
//     res.send(req.url)
//     next()
// })




// jb method post hoga tw app.post wala chalega
// dubara hum express ko app ka var me call nahi kareinga qk server ek he chlta ha 
// ab hum routes banainga express ki help sa 


// BODY PARSER
// body ko parse krney ka bh ek middle ware ha jo har request pr chalay ga 
// or check krega data raha ha req me ka nhi or use convert krky usi object ki form me lekr ajaiga



// MVC
// Model Views Controller


// ejs ki file res.render me bhjingy server ko
// or direct file ka name daleingy andar
// app.use("/", (req, res) => {
//     res.render("home.ejs")
// })

// iska faida ya ha ke hum is ko dynamic data bh desakty hain
// issay hum html me he javacript likh sakty ha jese react me {} curly brackets me likhty thy is ma <% %> me likhty hain.	

// class ka andar wala methods humain new ka keyword ka sath call krny prty han tw aggar static ka keyword ka sath banainga funciton tw direct kr skty ha 
// lkn us ka andar this ka keyword kam nh krta 


// model view controller
// views wali screeen views me banaty hain
// data ko write get krna hoto model kome likhty hain 
// koi logics lagani hoo agar tw woh controller me krty hain



// jo cheez hamain bad me bh use krni ha jese lofin ki info tw woh hum cookies me store 
// kradetety hain res.setHeader("Set-Cookie","desired info") is tarah sae


// Expiry session matlab jab bh chrome band kreingy tw data chala jaiga cookies ka pas aa

// cookies ka data extension wala nikal sakty hn qk usky pas hamaray puray tab ka access hota ha tw
// cookies ka bh hota ha tw cookies me jo hamara data save hota ha security code woh
// extension wala server ko deker account ko access kersekty hain 
// tw is ka solution http only ha iska matlab koi bh bahir ki script hamari cookie ko manipulate na karsaky
//             res.setHeader("Set-Cookie", "isAuthenticated=true; HttpOnly")
// http only ha 




// Session 
// isAuthenticated true tw lkoi manually bh lga sakta ha cookies me tw koi bh hamary server ki security ko bypass krsakta hayy
// user loggined ha ya nhi ha iska pata bs server ko hona chahiya lekin connection break
// honay ka bad kese pta chaly ga hamara client loggined ha ya nh 
// tw is ka solution session ha tw hum session ko me save krdeingy user ko har user ki koi unique id hogi


// session summary >>>>> jab isAuthenticated true karky hum kara rahy thay tw aesasa tw koi manueally bh apni cookies me 
// isAuthenticated true set krky hamari security ko bypass krssakta ha  tw hum user ko loggin karatay hwaq uska ek sessio ({email,password}) apny pass ek uniquee id me store karaleinga or ek unique 
// id user ko deingy or ek userki cookies me daldeingy or har request me woh unique-id  server ka pas jaiga or har session ki key sa unique-id ko check krwa kar 
// pata lagalay gi ka user ha ka nahi 
// ya ek common isAuthenticated : true nhi balkay har specifid ki key ka andar data ah 


// Sesssion application 
// ya middle ware pehly main app.js mn daleingy
// ya hum sirf sigin wala dfunction walay page par jabhi nh use kar raha wk aagy jakr hamain har page par request verify krna hoga

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// })) 
// npm i express-session(is module ki help sa hu ya sab use karaingy)


// // express-session
// // secret is ka behalf par id generate hoti ha taky koi or bh hamari jese id generate na krly
// // is ka andar ek key ha woh key hb encrypted ha
// // ya dono false rakhna chahyay
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
// })) ya best ha ssab sa behtar ha  cookie: { secure: true } ya na bh dein tw is ki bydefault values sahi achi chalti hain











// Node js 5)
// html as a text mangwalain gai tw restric hojaingy same view par show karny ka lya
// agar as a text mangawaingy tw managable nh hoga
// agar as a XML mangwaingy tw parser ki need hogi

// last option as json data save karana ka ha API mein or sab sa achi bat ha ka javascript me json aram sa chlti ha
// JSON.stringify() or JSON.parse bh aram se kr sakty hain 

// get ki request data get krny ka lya hoti ha 
// post asa data server par add hota ha 
// put sa data server me overwrite matlb update hota ha 
// patch ki request me data ki kuch fields update hoti hain


// res.send and res.json ma ya farq ha ke res.send me woh har cheez lejaiga lekin res.json  sa confirm hojata ha server ko ka data json hee ha 
// tw woh pehly sa Content-Type me json set krdega

// res.status(200).send() is sa pata chall jaiga express ko ka 200 matlb success waha check kar raha hota ha hum rest apis
// status set krny sa pata chl jaiga ka successfully data jaraha ha ke error araha h 
// jab hum 201 status krty hain tw iska matlab hum usko btade hain ke ap ki jo cheez ha woh successfully accepted ha or response bh success ha 





// QUESTIONS
// router.get or app.get me difference ?
// same he hotay hain lekin bs jab koi bari web par kam karna hota ha to router.get krky use lkrty hain is sa asani
// hoti ha manage krny main




/////////////////////////////////////////////////////////////INSIDE
// express-session
// secret is ka behalf par id generate hoti ha taky koi or bh hamari jese id generate na krly
// is ka andar ek key ha woh key hb encrypted ha
// ya dono false rakhna chahyay

// cookie: { secure: true } ya na bh dein tw is ki bydefault values sahi achi chalti hain































// SIR INZAMAM Malik
// inzamam malik 26 27 35 36 37

// 5 principles of rest APi
// 1)stateless 
// 2)Uniform interface


// inzamam malik 36))))
// mongoose ki library hamain schema banan ki facility deta ha easily warna hamain if laga ka validations karni hoti







// JWT authentication (JSON Web Token)

// authenticate hoky ek token mil jata ha jo har req me web ko dena hota ha usko save kaha karain?
// 1) localstorage lekin agar andr vulnerability agai tw kya hoa? lkn koi library jese bootstrap ya 
// axios type ki library ka cdn me ek chochta sa script ajai or hamary localstorage ka data uthai or server ko dede
// or cdn server agar hack hwa tw hamara token vulnerable hojaiga or koi bh us token sa hamara acc access krskta ha 
// 2) session storage or cookies bh javasvcript ka zarya check kraskty ha 
// 3) aesi jaga rakhna jaha javascript se get na hosaky 
// 4) tw sara browsers na ek aesa version nikala jo javascript sa get nh hosakta called https only cookies
// lekin ya cookie hum wihtout javascript apne browser ki setting me jakr le sakty hain  

// token
// 1st part(header). 2nd part(payload). ,3rd part(signature ) - (hash).
// 1) header me batata ha ka ya token kis cheez sa generate hoa ha (e.g: jwt,mda etc)
// 2) paylaod ma name ccreated at wagera likha hota ha issa hum check krty ha ke kab expire krna ha or admin true likha hota ha payload ka change krnay sa signature bh 
// change hojata ha 
// 3) signature payload ka hash ha (encryption ki ek technique hoti hai hash)
// HASH:~
// leonardo da-vinci cryptex device bnai thi wha
// isko parser ki madad sa convert krlete hain 

// hash wali encryption one way hoti ha it cannot be decrypt

// payload public hota ha we can parse it 

// jabb browser ko data bhjeingy tw cookies kese jaigi req kes sath qk data to https only cookies m save ha access nh hosakta
// tw iska solution ya ha ka jab hum req bhjein ke post ya get ki tw us me ek parameter(credential true krky bhjeingy phir req m miljaigi hamain cookies)

// payload wala data agar dubara kisi na dala tw same hash genrate hojaiga tw ek secret key hum runtime pr dete hain server ko woh bh add hota ha taky
// koi same hash generate na karsaky

// app.cors(crendential = true ())
// jab hum apni frontend ki domain par kharey hotay hain or dusri backend ki domain par request bhj rahy hota ha tw use ko app.cors(crendential true) required 
// hota ha is sa woh permission letaa ha us backend wali domain sa	




















































// 1) npm i esm
// is se hum apny node ke application me es6 ka syntax use kr sakta hn like import instead of require

// 2) npm i env 
// taka hum environment variables rakh sakhain secret cheezain 
// qk hum JWT Tokens bnany wala hain


// 3)export as jab likhty hain tw import krty waqt {thing to import } brackets lagany hoty hain




// 4) joi (validation library)


// 5) app.use(express.json())
// agar ya nh use kreingy tw json undefined aingi




// class CustomErrorHandler extends Error {
// is sy ay JS ki builin class Error ka features bh use kr sakta hai















































// 1) har resource ke lya alga url hoga 
// jese ka 
// product ko add krny ke lya /product
// user ko add krny ky lya /user

// 2) sab me response same ana chahiyay
// for example kisi request pr {result : result,messagee : message}
// tw sab me sari requests me response same ana chahiyyyyee



// 3) ek dfa website load hogi tw browser ke chrome me save hojata hai data 
//    tw 2nd time thora website jldi load hojati hai images bydefault cache me jata hai or cache me save hojata ha 


// 200s mtlb ok
// 500s 
// 400 bad req
// 401 unauthenticated
// 403 forbidden
// 404 not found (url hee glat ha )



// direct mapp chalaigaye objects screen pr print nh hoskty

// bcrypt hamesha new hash generate krta qk ya encrypt krty waqt time ko involve krta hai