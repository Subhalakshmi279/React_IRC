const Login = () => {
    return (
        <>

            <div className="auth-contianer">

                <form class="operation">
                    <h1 class="co">FooDle</h1>


                    <input type="text" class="format" placeholder="USERNAME" />
                    <input type="password" class="format" placeholder="PASSWORD" />


                    <input type="button" class="opt" value="Login" />

                </form>
            </div>
        </>
    )
}
export default Login;