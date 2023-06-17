import { render } from "@testing-library/react";
import Header from "../Header";


test("logo should load on rendering header", ()=>{

    //load Header 

    const header = render( <Header />)

    console.log(header);
    // Check if logo is loader or not
})