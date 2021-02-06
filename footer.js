import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
            <footer className="bg-black">
                <section className="mt-5 bg-black">
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 mt-5 center text-white"><h2 className="roboto-light">Оставьте заявку
                                и мы с вами
                                свяжемся</h2></div>
                            <div className="offset-2"></div>
                            <div className="col-4">
                                <form action="register">
                                    <h5 className="text-white roboto-light mt-5">Имя</h5>
                                    <input type="text" name="Name"
                                           className="bg-black border-top-0  border-right-0 border-left-0 border-bottom border-white input-group text-white"/>
                                    <h5 className="text-white roboto-light mt-5">Номер телефона</h5>
                                    <input type="text" name="phone-number" value="+998"
                                           className="bg-black border-top-0  border-right-0 border-left-0 border-bottom border-white input-group text-white"/>
                                </form>
                            </div>
                            <div className="col-4">
                                <form action="register">
                                    <h5 className="text-white roboto-light mt-5">Фамилия</h5>
                                    <input type="text" name="Surname"
                                           className="bg-black border-top-0  border-right-0 border-left-0 border-bottom border-white input-group text-white"/>
                                    <h5 className="text-white roboto-light mt-5">Эл. почта</h5>
                                    <input type="text" name="Number"
                                           className="bg-black border-top-0  border-right-0 border-left-0 border-bottom border-white input-group text-white"/>
                                </form>
                            </div>
                            <div className="offset-2"></div>
                            <div className="col-12 center mt-5">
                                <button className="btn bg-red text-white center roboto-medium">
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-black">
                    <hr className="bg-white"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <a className="navbar-brand" href="#">
                                    <svg width="145" height="34" viewBox="0 0 145 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 0H18.287V11.8429H4.21827V16.0241V16.7249H0V0ZM14.0687 7.66167V4.18122H4.21827V7.66167H14.0687Z"
                                            fill="white"/>
                                        <path
                                            d="M38.2236 0V16.7249H19.9366V0H38.2236ZM34.0054 12.5437V4.18122H24.1549V12.5437H34.0054Z"
                                            fill="white"/>
                                        <path d="M58.1602 12.5437V16.7249H39.8732V0H44.0915V12.5437H58.1602Z"
                                              fill="white"/>
                                        <path
                                            d="M80.9719 0H85.1901V12.5437H78.1558V16.7249H73.9375V12.5437H66.9031V0H71.1214V8.36244H80.9719V0Z"
                                            fill="white"/>
                                        <path
                                            d="M91.058 11.8429V16.7249H86.8398V0H105.127V16.7249H100.909V11.8429H91.058ZM100.909 4.18122H91.058V7.66167H100.909V4.18122Z"
                                            fill="white"/>
                                        <path
                                            d="M125.063 0V8.52595L123.826 9.75228L125.063 10.9786V16.7249H120.845V12.7072L119.973 11.8429H110.995V16.7249H106.776V0H125.063ZM120.845 6.7974V4.18122H110.995V7.66167H119.973L120.845 6.7974Z"
                                            fill="white"/>
                                        <path
                                            d="M130.931 6.43534V16.7249H126.713V0H130.401L140.782 10.2779V0H145V16.7249H141.312L130.931 6.43534Z"
                                            fill="white"/>
                                        <path
                                            d="M24.3203 25.6282H21.1832V34H20.0571V25.6282H16.92V24.5917H24.3203V25.6282Z"
                                            fill="white"/>
                                        <path
                                            d="M35.9062 24.5917H41.872V25.6282H37.0323V28.5782H41.5503V29.6147H37.0323V32.9635H42.1133V34H35.9062V24.5917Z"
                                            fill="white"/>
                                        <path
                                            d="M56.3478 29.0433L53.1571 24.5917H54.6049L57.1656 28.2726L59.6993 24.5917H61.107L57.9163 29.0433L61.4153 34H59.9272L57.1119 29.8274L54.2832 34H52.8889L56.3478 29.0433Z"
                                            fill="white"/>
                                        <path
                                            d="M79.1771 25.6282H76.04V34H74.9139V25.6282H71.7768V24.5917H79.1771V25.6282Z"
                                            fill="white"/>
                                        <path d="M90.7631 24.5917H91.8892V34H90.7631V24.5917Z" fill="white"/>
                                        <path d="M104.501 24.5917H105.628V32.9635H109.971V34H104.501V24.5917Z"
                                              fill="white"/>
                                        <path
                                            d="M121.46 24.5917H127.426V25.6282H122.586V28.5782H127.104V29.6147H122.586V32.9635H127.667V34H121.46V24.5917Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="offset-3"></div>
                            <div className="col-6">
                                <div className="row">
                                    <p className="fs-24px text-white mr-4 mt-1">+998 91 611 11 24</p>

                                    <button className="btn btn-danger i-color icon  mr-4">
                                        <i className="fas fa-facebook-f"></i>
                                    </button>
                                    <button className="btn btn-danger i-color-1 icon  mr-4">
                                        <i className="fas fa-facebook-f"></i>
                                    </button>
                                    <button className="btn btn-danger i-color icon  mr-4">
                                        <i className="fas fa-facebook-f"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
export default Footer