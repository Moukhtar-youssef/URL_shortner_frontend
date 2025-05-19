import React, { useState } from "react";
import axios from "axios";

const URLSubmitter = () => {
    const [inputValue, setInputValue] = useState('')
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, Setloading] = useState(false)
    const handlesumbit = async (e) => {
        e.preventDefault()
        Setloading(true)
        setError(null)
        setResponse(null)
        try {
            const res = await axios.post("http://localhost:8080/create", {

            }, { params: { long_url: inputValue } })
            setResponse(res.data)
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {

                setError(err.response?.data?.message || err.message)
            } else if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('unkown error occured')
            }
        } finally {
            Setloading(false)
        }
    }
    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handlesumbit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Enter URL to shorten"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border rounded p-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {response && (
                <div className="mt-4 p-3 border rounded bg-green-100">
                    <strong>Shortened URL:</strong> {response.response || JSON.stringify(response)}
                </div>
            )}

            {error && (
                <div className="mt-4 p-3 border rounded bg-red-100 text-red-700">
                    Error: {error}
                </div>
            )}
        </div>
    )
}
export default URLSubmitter
