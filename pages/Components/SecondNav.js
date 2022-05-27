import classes from '../../styles/Navbar.module.css'

function SecondNav(props) {



    return (
        <nav className="navbar main_container navbar-expand-lg navbar-light p-0 bordr">
            <div className="container-fluid p-0">
                <form className=" d-inline-flex">
                    <button className={`fs-2 p-3 m-3 ${classes.button}`} type='button' onClick={props.handlePhotos}>Photos</button>
                    <button className={`fs-2 p-3 active m-3 ${classes.button}`} onClick={props.handleAbout} type='button'>About</button>
                </form>
            </div>
        </nav>
    )
}

export default SecondNav