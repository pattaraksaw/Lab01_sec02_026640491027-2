import { useState} from "react";
import { databook } from "./data";
import { list } from "postcss";

export default function Booksell() {
    const [index, setIndex] = useState(0);

    let datatest = databook[index];
    
    return (
        <div className="p-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzRwNWM5Z3RzOWZjbno3M3Jrb2p6eDJkam45bDJ6cHpjeXhrbGh2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRGoqbUQvk8nwTC/giphy.webp')`}}>
            <h2 className="text-3xl font-bold text-slate-50">
                ชื่อ <i>{datatest.Title}</i> โดย : {datatest.Author}
            </h2>
            <p className="text-3xl font-bold text-slate-50">
            รหัส : {datatest.Code}
            </p>
            <img src={datatest.Cover} 
            title={datatest.Title}
            />
            <p className="text-3xl font-bold text-slate-50">
               หมวดหมู่ : {datatest.Category}
            </p>
            <p className="text-3xl font-bold text-slate-50">
              สำนักพิมพ์ : {datatest.Publishing}
            </p>
            <p className="text-3xl font-bold text-slate-50">
              คำอธิบาย : {datatest.Description}
            </p>
            <p className="text-3xl font-bold text-slate-50">
               ราคา : {datatest.Price}
            </p>
        </div>
        
    );
}