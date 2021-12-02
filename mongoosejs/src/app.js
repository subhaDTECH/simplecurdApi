const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testsuva', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("successfully connected"))
.catch((err)=>console.log(err));

// create mongooseschma

const playlistSchama=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

// create model  
const Playlist=new mongoose.model('playlist',playlistSchama);

// data inserted 

const createdDocument=async()=>{

    try{
        const nodejs=new Playlist({
            name:"nodejs",
            ctype:"back end",
            videos:160,
            author:"subha"
        })

        const expressjs=new Playlist({
            name:"expressjs",
            ctype:"back end",
            videos:160,
            author:"subha"
        })
        const js=new Playlist({
            name:"javascript",
            ctype:"fornt end",
            videos:90,
            author:"subha"
        })
        const mongoose=new Playlist({
            name:"mongoose",
            ctype:"database",
            videos:110,
            author:"subha"
        })
        const mongodb=new Playlist({
            name:"mongodb",
            ctype:"database",
            videos:40,
            author:"subha"
        })
         const result=await Playlist.insertMany([nodejs,expressjs,js,mongoose,mongodb])
        //  console.log(result)
    }catch(err){
        console.log(err)
    }
   
}

createdDocument();

const getData=async()=>{
    try{
        const getresult=await Playlist.find({ctype:'database'}).select({name:1}).sort({videos:1})
        console.log(getresult)
    }catch(err){
        console.log(err)
    }
   

}
getData();

//update data
const updateData=async(_id)=>{


    try{
        const result=  await Playlist.findByIdAndUpdate(_id,
            {
                $set:{
                      name:"mongoosesubha"
                         }
            },{
                    new:true,
                    useFindAndModify:false
                }
            );
            console.log(result)
    }
    catch(err){
        console.log(err)
    }
 
}
updateData("5fa196587a88c148fcbf847d")

//delete data
const deleteData=async(_id)=>{


    try{
        // result store the delete one valuue and console display it  
        const result=  await Playlist.deleteOne({_id})
            console.log(result)
    }
    catch(err){
        console.log(err)
    }
 
}
deleteData("5fa196cec82ecf285cddc494")


