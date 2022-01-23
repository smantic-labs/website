import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

function LoginButton () {
    return (
        <button>
            <FontAwesomeIcon icon={faUser} size="lg" />
        </button>
    );
}

export default LoginButton;