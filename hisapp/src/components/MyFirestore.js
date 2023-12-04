import React from "react"
import Config from "./Config"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore" 
import { useEffect,useState} from "react"


function MyFirestore(){

        // 初始化 Firebase
        const app = initializeApp(Config);
        // 初始化雲端資料庫firestore db
        const db = getFirestore(app);


        // const querySnapshot = getDocs(collection(db,"TextEmoji"))
        // console.log(querySnapshot)
        //-------------------------------------------------------
        async function getTextEmoji(db){
            const emojiColl = collection(db,"TextEmoji");
            const emojiDocs = await getDocs(emojiColl);
            const emojiList = emojiDocs.docs.map(doc=>doc.data());
            return emojiList;
            

        }
        // console.log( getTextEmoji(db) )

        const  [emoji, setEmoji]=useState([]);

        const fetchEmoji =async()=>{
            
            await getDocs( collection(db,"TextEmoji"))
            .then((snap)=>{
                const data = snap.docs.map((doc)=>(
                    {
                        id:doc.data().id,
                        face:doc.data().face,
                        category:doc.data().category
                    }
                ));
                    setEmoji(data);
                    console.log(emoji);
                
            });

        }

        useEffect(()=>{
            fetchEmoji()},[]
            );

            const element=emoji.map((d,index)=>(
                <div key={index} className="about-div">
                    
                                <p style={{textAlign:'center'}}>{d.id}<br />
                    <span style={{color:'red'}}>{d.face}</span><br />
                    <span style={{color:'green'}}>{d.category}</span>
                    </p>  
                    
                </div>
             ));
             
                //try & catch
            const addData =async()=>{
                try {
                    const docRef = await addDoc(collection(db, "TextEmoji"), {
                    
                        id:4,
                        face:"QQ",
                        category:"ssssad"
                    });
                    console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                    console.error("Error adding document: ", e);
                    } 
                    // 下面這一行一定會執行 
                    finally {
                        console.log("~~執行完畢")
                    }
                }

    return(
        <div  style={{paddingLeft:'3vw'}}>
            
            <h3>Firestore page</h3>     
            <button onClick={addData}>add</button>
            {element}    
        </div>
    )

};
export default MyFirestore;



