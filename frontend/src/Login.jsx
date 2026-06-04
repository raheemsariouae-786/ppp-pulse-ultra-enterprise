import React, { useState } from "react";
import Dashboard from "./Dashboard";
export default function Login() {
  const [loggedIn, setL] = useState(false);
    if (loggedIn) return <Dashboard onLogout={()=>setL(false)} />;
      return (
          <div style={{minHeight:"100vh",background:"#1a0000",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{background:"#0d0000",border:"2px solid #cc0000",borderRadius:"16px",padding:"40px",width:"300px",textAlign:"center"}}>
                        <h2 style={{color:"#FFD700"}}>PPP Pulse Ultra</h2>
                                <button onClick={()=>setL(true)} style={{width:"100%",padding:"12px",marginTop:"20px",borderRadius:"8px",border:"none",background:"#cc0000",color:"#FFD700",fontSize:"15px",cursor:"pointer"}}>Enter Dashboard</button>
                                      </div>
                                          </div>
                                            );
                                            }