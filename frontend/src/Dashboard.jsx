import React, { useState } from "react";
export default function Dashboard({ email, onLogout }) {
  const [page, sPage] = useState("home");
  const stats = [["👥","1,247","اراکین"],["🗺️","33","اضلاع"],["📋","89","شکایات"],["📅","12","تقریبات"]];
  const districts = ["کراچی وسطی","کراچی مشرقی","کراچی مغربی","کراچی جنوبی","کراچی کورنگی","ملیر","حیدرآباد","دادو","ٹھٹھہ","بدین","میرپورخاص","عمرکوٹ","تھرپارکر","سانگھڑ","نواب شاہ","خیرپور","سکھر","گھوٹکی","شکارپور","جیکب آباد","کشمور","لاڑکانہ","قمبر","دادو","جامشورو","مٹیاری","حیدرآباد","ٹنڈو الٰہ یار","ٹنڈو محمد خان","بدین","ٹھٹھہ","کیٹی بندر","سجاول"];
  return (
    <div style={{minHeight:"100vh",background:"#1a0000",color:"#fff",fontFamily:"Arial"}}>
      <div style={{background:"linear-gradient(135deg,#8B0000,#cc0000)",padding:"12px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"3px solid #FFD700",position:"sticky",top:0,zIndex:100}}>
        <div>
          <div style={{color:"#FFD700",fontSize:"16px",fontWeight:"bold"}}>🏛️ PPP Pulse Ultra</div>
          <div style={{color:"#fff",fontSize:"10px"}}>{email}</div>
        </div>
        <button onClick={onLogout} style={{padding:"6px 12px",borderRadius:"6px",border:"1px solid #FFD700",background:"transparent",color:"#FFD700",cursor:"pointer",fontSize:"12px"}}>Logout</button>
      </div>
      <div style={{display:"flex",borderBottom:"1px solid #8B0000",background:"#0d0000"}}>
        {[["🏠","Home"],["🗺️","Districts"],["👥","Members"],["📋","Complaints"]].map((t,i)=>(
          <button key={i} onClick={()=>sPage(t[0])} style={{flex:1,padding:"10px",border:"none",background:page===t[0]?"#cc0000":"transparent",color:page===t[0]?"#FFD700":"#aaa",cursor:"pointer",fontSize:"11px"}}>{t[0]}<br/>{t[1]}</button>
        ))}
      </div>
      <div style={{padding:"15px"}}>
        {page==="🏠"&&<div>
          <h3 style={{color:"#FFD700",marginBottom:"12px"}}>📊 خلاصہ</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
            {stats.map((s,i)=>(
              <div key={i} style={{background:"#2a0000",border:"1px solid #8B0000",borderLeft:"4px solid #FFD700",borderRadius:"10px",padding:"15px",textAlign:"center"}}>
                <div style={{fontSize:"30px"}}>{s[0]}</div>
                <div style={{color:"#FFD700",fontSize:"22px",fontWeight:"bold"}}>{s[1]}</div>
                <div style={{color:"#aaa",fontSize:"12px"}}>{s[2]}</div>
              </div>
            ))}
          </div>
        </div>}
        {page==="🗺️"&&<div>
          <h3 style={{color:"#FFD700",marginBottom:"12px"}}>📍 سندھ کے 33 اضلاع</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
            {districts.map((d,i)=>(
              <div key={i} style={{background:"#2a0000",border:"1px solid #8B0000",borderRadius:"8px",padding:"10px",textAlign:"center",fontSize:"13px",color:"#fff"}}>{d}</div>
            ))}
          </div>
        </div>}
        {page==="👥"&&<div>
          <h3 style={{color:"#FFD700",marginBottom:"12px"}}>👥 اراکین</h3>
          <div style={{background:"#2a0000",borderRadius:"10px",padding:"20px",textAlign:"center"}}>
            <p style={{color:"#aaa"}}>جلد آ رہا ہے...</p>
            <p style={{color:"#FFD700",fontSize:"12px"}}>Members system coming soon</p>
          </div>
        </div>}
        {page==="📋"&&<div>
          <h3 style={{color:"#FFD700",marginBottom:"12px"}}>📋 شکایات</h3>
          <div style={{background:"#2a0000",borderRadius:"10px",padding:"20px",textAlign:"center"}}>
            <p style={{color:"#aaa"}}>جلد آ رہا ہے...</p>
            <p style={{color:"#FFD700",fontSize:"12px"}}>Complaints system coming soon</p>
          </div>
        </div>}
      </div>
    </div>
  );
}
