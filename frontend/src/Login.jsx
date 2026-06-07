import React, { useState } from "react";
import Dashboard from "./Dashboard";
export default function Login() {
  const [e, sE] = useState("");
  const [p, sP] = useState("");
  const [err, sErr] = useState("");
  const [ok, sOk] = useState(false);
  if (ok) return <Dashboard email={e} onLogout={()=>{sOk(false);sE("");sP("");}}/>;
  return (
    <div style={{minHeight:"100vh",background:"#1a0000",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#0d0000",border:"2px solid #cc0000",borderRadius:"16px",padding:"40px",width:"300px",textAlign:"center",boxShadow:"0 0 30px #cc000044"}}>
        <div style={{fontSize:"50px"}}>🏛️</div>
        <h2 style={{color:"#FFD700",margin:"8px 0"}}>PPP Pulse Ultra</h2>
        <p style={{color:"#aaa",fontSize:"12px",marginBottom:"20px"}}>Pakistan Peoples Party</p>
        <input value={e} onChange={x=>sE(x.target.value)} type="email" placeholder="Email" style={{width:"100%",padding:"11px",margin:"5px 0",borderRadius:"8px",border:"1px solid #cc0000",background:"#1a0000",color:"#fff",boxSizing:"border-box",fontSize:"14px"}} />
        <input value={p} onChange={x=>sP(x.target.value)} type="password" placeholder="Password" style={{width:"100%",padding:"11px",margin:"5px 0",borderRadius:"8px",border:"1px solid #cc0000",background:"#1a0000",color:"#fff",boxSizing:"border-box",fontSize:"14px"}} />
        <button onClick={()=>{if(!e||!p){sErr("تمام خانے بھریں");}else if(p==="ppp786"){sOk(true);sErr("");}else{sErr("پاسورڈ غلط ہے");}}} style={{width:"100%",padding:"13px",marginTop:"10px",borderRadius:"8px",border:"none",background:"linear-gradient(135deg,#8B0000,#cc0000)",color:"#FFD700",fontSize:"16px",fontWeight:"bold",cursor:"pointer"}}>Login</button>
        {err&&<p style={{color:"#ff6666",marginTop:"8px",fontSize:"13px"}}>{err}</p>}
        <p style={{color:"#555",fontSize:"11px",marginTop:"15px"}}>Password: ppp786</p>
      </div>
    </div>
  );
}
