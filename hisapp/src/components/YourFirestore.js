import React from "react"
import Config from "./Config"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc,query, onSnapshot, getDoc,doc, setDoc, updateDoc ,deleteDoc} from "firebase/firestore" 
import { useEffect,useState} from "react"


function YourFirestore(){

        // 初始化 Firebase
        const app = initializeApp(Config);
        // 初始化雲端資料庫firestore db
        const db = getFirestore(app);
        

        // const querySnapshot = getDocs(collection(db,"TextEmoji"))
        // console.log(querySnapshot)
        //-----------------------方法1--------------------------------
        async function getTextEmoji(db){
            const emojiColl = collection(db,"TextEmoji");
            const emojiDocs = await getDocs(emojiColl);
            const emojiList = emojiDocs.docs.map(doc=>doc.data());
            return emojiList;
            

        }
        // console.log( getTextEmoji(db) )

        const  [emoji, setEmoji]=useState([]);
        const  [id, setId ]=useState(0);
        const  [face, setFace]=useState("");
        const  [category, setCategory]=useState("");

        const  [id2, setId2 ]=useState(0);
        const  [face2, setFace2]=useState("");
        const  [category2, setCategory2]=useState("");

        const  [id3, setId3 ]=useState(0);
        const  [face3, setFace3]=useState("");
        const  [category3, setCategory3]=useState("");

        const  [result, setResult] = useState({})

        const  [flag, setFlag] = useState(false)

        //-----------------------方法2--------------------------------
        // const fetchEmoji =async()=>{
            
        //     await getDocs( collection(db,"TextEmoji"))
        //     .then((snap)=>{
        //         const data = snap.docs.map((doc)=>(
        //             {
        //                 id:doc.data().id,
        //                 face:doc.data().face,
        //                 category:doc.data().category
        //             }
        //         ));
        //             setEmoji(data);
        //             console.log(emoji);
                
        //     });

        // }
        const getDataListen=()=>{
            
                const q = query( collection(db,"TextEmoji"))
                // const docSnap=
                onSnapshot(q, (qsnap)=>{
                    const data = qsnap.docs.map((doc)=>(
                        {
                            id:doc.data().id,
                            face:doc.data().face,
                            category:doc.data().category
                        }
                    ));

                        setEmoji(data);
                     
                });
    
            }


        useEffect(()=>{
            // fetchEmoji()
            getDataListen()
            },[]
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
                        
                        id:id,
                        face:face,
                        category:category   
                    });
                    console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                    console.error("Error adding document: ", e);
                    } 
                    // 下面這一行一定會執行 
                    finally {

                        // const x=document.getElementsByTagName("input").value;
                        document.getElementById("id").value = "";
                        document.getElementById("face").value = "";
                        document.getElementById("category").value = "";
                        setId("")
                        setFace("")
                        setCategory("")
                        console.log("~~執行完畢")
                        
                    }
                }

                // Add a new document in collection "cities"
                const setData =async()=>{
                    try {
                        const docRef = await setDoc(doc(db, "TextEmoji", id2.toString()), {
                            id:id2,
                            face:face2,
                            category:category2  
                        } );
                     console.log("Document written with ID: ", id2);
                    } catch (e) {
                    console.error("Error adding document: ", e);
                    } finally {

                        // const x=document.getElementsByTagName("input").value;
                        document.getElementById("id2").value = "";
                        document.getElementById("face2").value = "";
                        document.getElementById("category2").value = "";
                        setId2("")
                        setFace2("")
                        setCategory2("")
                        console.log("~~執行完畢2")
                    }
                };

            async function searchData(){

                const docRef = doc(db, "TextEmoji", id3.toString());
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()){
                    var data = docSnap.data();
           
                    // setFace3(data["face"]);
                    // setCategory3(data["category"])
                    document.getElementById('face3').value = data["face"];
                    document.getElementById('category3').value = data["category"];
                    document.getElementById('face3').disabled = false;
                    document.getElementById('category3').disabled = false;
                    setResult(data)
                    setFlag(true)
                  
                }else{
                    window.alert(id3+"文件並不存在!")
                    console.log(typeof(id3))
                    document.getElementById('face3').disabled = true;
                    document.getElementById('category3').disabled = true;
                    document.getElementById('face3').value = "";
                    document.getElementById('category3').value = "";
                }
            }
        async function updateData(){
            const docRef = doc(db, "TextEmoji", id3.toString())
            await updateDoc(docRef, {
                face:face3,
                category:category3                 
            }).then(function(){
                window.alert(id3 + "文件更新成功!")
                //更新右側 

            })
        };
        async function deleteData(){ 
            await deleteDoc(doc(db, "TextEmoji", id3.toString() ) )
            .then( ()=>{
                alert(id3.toString() + "文件刪除成功");
                setResult({});
            });

        }
              

    return(
        <div  style={{float:"left", paddingLeft:'3vw'}}>
            
            <h3>Firestore page</h3>     
            
            {element}   

            <hr/>
            
            <div  style={{float:"left", paddingLeft:'3vw'}}>
            <input id="id" type="number" placeholder="Enter ID" onChange={(e)=>setId(e.target.value*1)}/><span>{id}</span><br/>
            <input id="face" type="text" placeholder="Enter Face" onChange={(e)=>setFace(e.target.value)}/><span>{face}</span><br/>
            <input id="category" type="text" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)}/><span>{category}</span><br/>
            <button onClick={addData}>add</button>
            </div>

           {/* ---------------------------------------------------------------------------------------------------------- */}
            
            <div  style={{float:"left", paddingLeft:'3vw'}}>
            
            <input id="id2" type="number" placeholder="Enter ID" onChange={(e)=>setId2(e.target.value*1)}/><span>{id2}</span><br/>
            <input id="face2" type="text" placeholder="Enter Face" onChange={(e)=>setFace2(e.target.value)}/><span>{face2}</span><br/>
            <input id="category2" type="text" placeholder="Enter Category" onChange={(e)=>setCategory2(e.target.value)}/><span>{category2}</span><br/>
            <button onClick={setData}>set</button>
            </div>
            {/* ---------------------------------------------------------------------------------------------------------- */}
            <div  style={{float:"left", paddingLeft:'3vw'}}>
            
            <input id="id3" type="number" placeholder="Enter ID" onChange={(e)=>setId3(e.target.value)} /><span>{id3}</span><br/>
            <input id="face3" type="text" placeholder="Enter Face" onChange={(e)=>setFace3(e.target.value)} disabled/><span>{face3}</span><br/>
            <input id="category3" type="text" placeholder="Enter Category" onChange={(e)=>setCategory3(e.target.value)} disabled/><span>{category3}</span><br/>
            <button onClick={searchData}>search</button>
            <br/>
            <button onClick={updateData} disabled={!flag}>update</button>
            <br/>
            <button onClick={deleteData}>delete</button>
            </div>
            
            <div  style={{float:"left", paddingLeft:'3vw'}}>
                <pre>{JSON.stringify(result, null, 8)}</pre>
            </div>

            {/* onChange={(e)=>setFace3(e.target.value)}
            onChange={(e)=>setCategory3(e.target.value)} */}
        </div>
    )

};
export default YourFirestore;



