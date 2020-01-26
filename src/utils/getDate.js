export const getDate = () => {
    const date = new Date()

    const full = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return full
}
