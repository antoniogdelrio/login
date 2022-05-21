import { useContext, useState } from "react"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import Icon from "../components/Icon"
import Link from "../components/Link"
import TextField from "../components/TextField"
import Typography from "../components/Typography"
import { LoginContext } from "../contexts/LoginContext"

function Login () {
    const { user, setUser, doLogin } = useContext(LoginContext)
    const [rememberMe, setRememberMe] = useState(false)

    return <main>
        <div className="flex justify-center mt-10">
            <div className="flex flex-col items-center bg-white p-9 rounded shadow-md w-3/4 md:w-1/3 sm:w-3/4">
                <Icon />
                <Typography
                    type="h1"
                    value="Sign in"
                    customClasses="font-semibold mb-2 mt-1"
                />
                <Typography
                    type="p"
                    value="Lorem ipsum dolor sit amet"
                    customClasses="mb-4"
                />
                <TextField
                    onChange={e => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    placeholder="Username or email"
                />
                <TextField
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    type="password"
                    placeholder="Password"
                    customClasses="mb-6"
                />
                <Button
                    onClick={doLogin}
                    label="Login"
                    customClasses="w-full mb-2 font-semibold"
                />
                <div className="flex justify-between w-full">
                    <Checkbox
                        checked={rememberMe}
                        id="rememberMe"
                        onChange={e => setRememberMe(e.target.checked)}
                        placeholder="Remember me"
                        customClasses={{
                            label: 'text-sm'
                        }}
                    />
                    <Link
                        label="Forgot your password?"
                        to="/"
                        customClasses="text-sm"
                    />
                </div>
            </div>
        </div>
    </main>
}

export default Login