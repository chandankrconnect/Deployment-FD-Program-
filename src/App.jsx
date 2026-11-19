import {useState,useEffect} from "react";
function App(){
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        fetch("https://typicode.com")
        .then(res=>res.json())
        .then(data=>setStudents(data))
        .catch(()=>setStudents([]));
    },[]);
    const cards=[
        ["Students",students.length],
        ["Courses",5],
        ["Assignments",10]
    ];

    return(
        <div style={{fontFamily:"Arial",background:"#f5f3ff",minHeight:"100vh"}}>
            {/* Top Navbar */}
            <nav style={{
                background:"#6d5dfc",
                color:"white",
                padding:18,
                width:"100%",
                boxSizing:"border-box"
            }}>
                <h2> Student Dashboard</h2>
            </nav>
            <div style={{display:"flex"}}>
                {/* Left Sidebar */}
                <aside style={{
                    background:"#ede9fe",
                    padding:25,
                    width:160,
                    minHeight:"calc(100vh - 68px)",
                    boxSizing:"border-box",
                    color:"#4c1d95",
                    lineHeight:3
                }}>
                      Home<br/>
                      Courses<br/>
                      Students
                </aside>
                {/* Main Content */}
                <main style={{padding:30,flex:1}}>
                    <h2 style={{color:"#312e81"}}>Welcome, Student! 👋</h2>
                    <p style={{color:"#777"}}>Your Academic Overview</p>
                    <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                        {cards.map((c,i)=>(
                            <div key={i} style={{
                                background:"white",
                                padding:25,
                                borderRadius:12,
                                flex:1,
                                minWidth:130,
                                boxShadow:"0 3px 10px #ddd"
                            }}>
                                <h3 style={{color:"#6d5dfc"}}>{c[0]} {c[1]}</h3>
                                <h1 style={{color:"#312e81"}}>{c[2]}</h1>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
export default App;
