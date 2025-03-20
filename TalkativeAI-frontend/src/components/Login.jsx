export default function Login() {

    return (
        <>
            <div className="login-page">
                <div className="grid-item-left">
                    {/* <AppLogo /> */}
                    <img src="./src/assets/TALKATIVE.AI_LIGHT.png" width="350px" height="200px"></img>
                    <p>Your own AI virtual assistant for your messaging needs.</p>
                </div>

                <div className="grid-item-right">
                    <form>
                        <label for="email-address">Email Address</label>
                        <input className="text-field" type="text" name="email-address" placeholder="Enter your email address" />

                        <label for="password">Password</label>
                        <input className="text-field" type="text" name="password" placeholder="Enter your password" />

                        <input className="submit-btn" type="submit" value="Log in" />
                    </form>

                    <a href="#">Forgot password?</a>
                    <p>Don't have an account? <a href="#">Sign up.</a></p>
                </div>
            </div>
        </>
    )
}