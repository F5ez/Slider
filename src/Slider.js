import React from "react";
import "./slider_style.css"
let arrow=require("./img/free-icon-down-arrow-7344425.png")
let img_1="https://images.unsplash.com/photo-1541961817716-44060761e345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDA1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
let img_2="https://images.unsplash.com/photo-1497106636505-e4fd6e16d74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDA1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
let img_3="https://images.unsplash.com/photo-1563722680966-fd2b17fc0ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDA1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"

export default class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            left:{background:"rgba(0,0,0,0.7)"},
            right:{background:"rgba(0,0,0,0.7)"},
            mid:{background:"rgba(0,0,0,0)"},
            arr_photo:[img_1,img_2,img_3],

        }
        this.onMouseEnterLeft=this.onMouseEnterLeft.bind(this)
        this.onMouseLeftLeft=this.onMouseLeftLeft.bind(this)
        this.onMouseEnterRight=this.onMouseEnterRight.bind(this)
        this.onMouseLeftRight=this.onMouseLeftRight.bind(this)
        this.onClick=this.onClick.bind(this)
        this.onRightClick=this.onRightClick.bind(this)

    }
    onRightClick(e){

    }
    onClick(e){

        document.getElementsByClassName("center_no_anim_div")[0].style.display="flex"
        let disabled_arrow=document.getElementsByClassName("img_fon")
        for (let j=0;j<disabled_arrow.length;j++){
            disabled_arrow[j].style.display="flex"
        }
        let elems=document.getElementsByClassName("slider_photo_d")
        this.setState({mid:{background:"rgba(0,0,0,0.7)"}})
        let left=elems[0]
        let mid=elems[1]
        let right=elems[2]
        if(e.target.id==="prev"){
            document.getElementById("sl3").children[1].style.height=document.getElementById("sl2").clientHeight+"px"
            document.getElementById("sl3").children[2].style.height=document.getElementById("sl2").clientHeight+"px"
            left.id="sl3"
            mid.id="sl1"
            right.id="sl2"
        }
        if(e.target.id==="next"){
            document.getElementById("sl1").children[1].style.height=document.getElementById("sl2").clientHeight+"px"
            document.getElementById("sl1").children[2].style.height=document.getElementById("sl2").clientHeight+"px"
            left.id="sl2"
            mid.id="sl3"
            right.id="sl1"
        }




        document.getElementsByClassName("wrap_background")[0].style.opacity="0.1"
        setTimeout(()=>{

            let arr_photo_c=this.state.arr_photo
            if(e.target.id==="prev") {
                this.setState({
                    arr_photo:[arr_photo_c[1],arr_photo_c[2],arr_photo_c[0]]
                })
            }
            if(e.target.id==="next") {
                this.setState({
                    arr_photo:[arr_photo_c[2],arr_photo_c[0],arr_photo_c[1]]
                })
            }

            document.getElementsByClassName("wrap_background")[0].style.opacity="1"
            this.setState({mid:{background:"rgba(0,0,0,0.0)"}})
            let elems=document.getElementsByClassName("slider_photo_d")
            for(let i of elems){
                i.style.transition="0s"
            }
            let left=elems[0]
            let mid=elems[1]
            let right=elems[2]
            left.style.transition="0"
            mid.style.transition="0"
            right.style.transition="0"
            left.id="sl1"
            right.id="sl3"
            mid.id="sl2"

            document.getElementsByClassName("center_no_anim_div")[0].style.display="none"
            for (let j=0;j<disabled_arrow.length;j++){
                disabled_arrow[j].style.display="none"
            }



        },500)
        for(let i of elems){
            i.style.transition="0.5s all"
        }



        // alert(left.id)







    }
    onMouseEnterRight(e){
        let par=e.target.parentNode
        par.style.transition="1s all"
        par.id="sl_right"

    }
    onMouseLeftRight(e){
        let par=e.target.parentNode

        par.id="sl2"


    }
    onMouseEnterLeft(e){
        let par=e.target.parentNode
        par.style.transition="1s all"

        par.id="sl_left"
    }
    onMouseLeftLeft(e){
        let par=e.target.parentNode

        par.id="sl2"


    }
    render() {


        return(
            <>
                <div className="wrap_background" >
                    <img src={this.state.arr_photo[1]} alt=""/>
                </div>
                <div className="wrap_background_opasity"></div>

                <div className="slider_photo">

                    <div className="slider_photo_d" id="sl1">

                        <img src={this.state.arr_photo[0]} alt=""/>
                        <div className="left_bg_op" style={{background:this.state.left.background}}></div>
                        <div className="right_bg_op" style={{background:this.state.left.background}}></div>
                    </div>
                    <div className="slider_photo_d" id="sl2">

                        <img src={this.state.arr_photo[1]} alt=""/>
                        <div className="center_no_anim_div"></div>
                        <div className="left_bg_op" style={{background:this.state.mid.background}} onMouseEnter={this.onMouseEnterLeft} onMouseLeave={this.onMouseLeftLeft}></div>
                        <div className="right_bg_op" style={{background:this.state.mid.background}} onMouseEnter={this.onMouseEnterRight} onMouseLeave={this.onMouseLeftRight}></div>
                    </div>
                    <div className="slider_photo_d" id="sl3">

                        <img src={this.state.arr_photo[2]} alt=""/>
                        <div className="left_bg_op" style={{background:this.state.right.background}}></div>
                        <div className="right_bg_op" style={{background:this.state.right.background}}></div>
                    </div>
                    <div className="buttons_n_p">
                        <div className="prev">
                            <div className="img_fon"></div>
                            <img src={arrow} alt=""  id="prev" onClick={this.onClick} />
                        </div>
                        <div className="next">
                            <div className="img_fon"  ></div>

                            <img src={arrow} alt="" id="next" onClick={this.onClick}/>
                        </div>
                    </div>

                </div>
            </>
        )
    }

}