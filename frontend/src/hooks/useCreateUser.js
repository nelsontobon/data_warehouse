import {useCallback, useState} from 'react'
import {CreateUserService} from '../services/user'

export default function useCreateUser () {
    const [state, setState] = useState({ loading: false, error: false })

    const createUser = useCallback((data) => {
        setState({loading: true, error: false })
        CreateUserService(data)
        .then(data => {
            setState({loading: false, error: false })
        })
        .catch(err => {
            setState({loading: false, error: true })
            console.error(err)
        })
    }, [])


    return {
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        createUser
    }
} 