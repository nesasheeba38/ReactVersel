import { useAtom } from "jotai";
import {ThemeAtom} from "./ThemeAtom";
export const ThemeApp=()=>{
     const[appTheme,setAppTheme]=useAtom(ThemeAtom);
     const darkTheme=()=>{
     setAppTheme(true)
 };
 const  lightTheme=()=>{
    setAppTheme(false)
 };
    const style={
     background:appTheme? '#000000':'#ffffff',
     height:'100vh'
    }
    return(
        <div style={style}>
         <button onClick={darkTheme}>DarkTheme</button>
         <button onClick={lightTheme}>LightTheme</button>
        </div>
    )
}